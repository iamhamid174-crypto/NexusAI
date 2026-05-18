import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');

function getBaseUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, '');
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL.replace(/\/+$/, '');
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/+$/, '');
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, '');
  return 'http://localhost:5173';
}

function readJson(relPath) {
  const absPath = path.join(rootDir, relPath);
  return JSON.parse(fs.readFileSync(absPath, 'utf8'));
}

function xmlEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function makeUrl(baseUrl, pathname) {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${baseUrl}${normalizedPath}`;
}

function buildSitemap(urls, baseUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const urlset = urls
    .map((u) => {
      const loc = xmlEscape(makeUrl(baseUrl, u));
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset,
    '</urlset>',
    '',
  ].join('\n');
}

function buildRobots(baseUrl) {
  const sitemapUrl = makeUrl(baseUrl, '/sitemap.xml');
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
    '',
  ].join('\n');
}

function uniq(items) {
  return [...new Set(items)];
}

function main() {
  const baseUrl = getBaseUrl();

  const tools = readJson('src/data/tools.json');
  const categories = readJson('src/data/categories.json');
  const blogs = readJson('src/data/blogs.json');

  const urls = uniq([
    '/',
    '/tools',
    ...tools.map((t) => `/tools/${t.slug}`),
    '/categories',
    ...categories.map((c) => `/categories/${c.slug}`),
    '/blog',
    ...blogs.map((b) => `/blog/${b.slug}`),
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ]);

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildSitemap(urls, baseUrl), 'utf8');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), buildRobots(baseUrl), 'utf8');

  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote ${urls.length} urls (base: ${baseUrl})`);
}

main();
