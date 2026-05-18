import { Helmet } from 'react-helmet-async';

export default function Seo({
  title,
  description,
  path = '/',
  image,
  noindex = false,
}) {
  const origin = typeof window === 'undefined' ? undefined : window.location.origin;
  const canonical = origin ? `${origin}${path.startsWith('/') ? path : `/${path}`}` : undefined;
  const resolvedImage = image && origin
    ? (image.startsWith('http') ? image : `${origin}${image.startsWith('/') ? image : `/${image}`}`)
    : undefined;

  const fullTitle = title ? `${title} | NexusAI` : 'NexusAI | AI Tools Directory';
  const metaDescription = description || 'Discover and compare the best AI tools for writing, coding, image generation, video, marketing, and productivity.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {resolvedImage ? <meta property="og:image" content={resolvedImage} /> : null}

      <meta name="twitter:card" content={resolvedImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {resolvedImage ? <meta name="twitter:image" content={resolvedImage} /> : null}
    </Helmet>
  );
}
