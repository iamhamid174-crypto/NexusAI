import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, ArrowLeft, Share2, Copy, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogCard from '../components/BlogCard';
import { useReadingProgress } from '../hooks/useReadingProgress';
import blogs from '../data/blogs.json';

const imageGradients = {
  writing: 'from-purple-500 to-pink-600',
  coding: 'from-blue-500 to-cyan-600',
  image: 'from-amber-500 to-orange-600',
  video: 'from-rose-500 to-red-600',
  marketing: 'from-green-500 to-teal-600',
  productivity: 'from-indigo-500 to-violet-600',
  chatbot: 'from-sky-500 to-blue-700',
  business: 'from-emerald-500 to-teal-700',
  future: 'from-violet-500 to-purple-700',
  money: 'from-yellow-500 to-amber-700',
};

function generateContent(blog) {
  return `## Introduction

${blog.excerpt} In this comprehensive guide, we explore everything you need to know.

Whether you are a beginner just starting with AI tools or an experienced professional looking to optimize your workflow, this article covers the most important aspects you need to understand.

## Why This Matters in 2026

The AI landscape is changing faster than ever. New tools are launching every week, and the capabilities of existing platforms are growing exponentially. Understanding which tools to use and how to use them effectively can make the difference between staying competitive and falling behind.

Professionals who integrate AI tools into their workflows report saving an average of 5-10 hours per week. That is time you could spend on higher-value creative and strategic work.

## Key Takeaways

Here is what you will learn from this article:

- The fundamental concepts and capabilities you need to understand
- Which tools stand out from the crowd and why
- Practical tips for getting started quickly
- Common mistakes to avoid
- How to measure and improve your results over time

## Deep Dive: What Makes These Tools Stand Out

Not all AI tools are created equal. The best ones share several important characteristics: they are easy to get started with, they deliver consistent quality, they integrate well with existing workflows, and they offer good value for money.

When evaluating any AI tool, we recommend testing it against your specific use cases rather than relying solely on general reviews. What works brilliantly for one team might not be the right fit for another.

## Getting Started: A Practical Framework

Starting with AI tools does not have to be overwhelming. Follow this simple framework:

**Step 1: Define your goals clearly.** What specific problem are you trying to solve? The more specific you are, the better your results will be.

**Step 2: Start with free tiers.** Most top AI tools offer generous free plans. Use these to test the tool before committing to a paid subscription.

**Step 3: Build a systematic workflow.** Rather than using AI tools ad hoc, build them into your regular processes for maximum impact.

**Step 4: Measure your results.** Track time saved, quality improvements, or other relevant metrics to justify continued investment.

## Conclusion

AI tools represent one of the most significant productivity opportunities of our generation. By choosing the right tools and using them effectively, you can dramatically improve your output quality and efficiency.

The key is to start small, experiment frequently, and gradually build up your AI toolkit based on what actually works for your specific needs.`;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const progress = useReadingProgress();
  const [copied, setCopied] = useState(false);

  if (!blog) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Article not found</h2>
        <Link to="/blog" className="btn-primary mt-4 inline-flex">Back to Blog</Link>
      </div>
    </div>
  );

  const related = blogs.filter(b => b.slug !== slug && b.category === blog.category).slice(0, 3);
  const gradient = imageGradients[blog.image] || 'from-brand-500 to-accent-600';
  const content = (typeof blog.content === 'string' && blog.content.trim())
    ? blog.content
    : generateContent(blog);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toc = (() => {
    const headings = content
      .split('\n')
      .filter(l => l.startsWith('## '))
      .map(l => l.slice(3).trim())
      .filter(Boolean);
    if (headings.length) return headings.slice(0, 10);
    return [
      'Introduction', 'Why This Matters in 2026', 'Key Takeaways',
      'Deep Dive: What Makes These Tools Stand Out',
      'Getting Started: A Practical Framework', 'Conclusion',
    ];
  })();

  function renderContent(text) {
    const lines = text.trim().split('\n');
    const elements = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith('- ')) {
        const items = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(<li key={i} className="flex items-start gap-2"><span className="text-brand-500 mt-1">•</span><span>{lines[i].slice(2)}</span></li>);
          i++;
        }
        elements.push(<ul key={`ul-${i}`} className="space-y-2 mb-4 text-slate-600 dark:text-slate-400">{items}</ul>);
        continue;
      } else if (line.trim()) {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        const rendered = parts.map((p, pi) =>
          p.startsWith('**') && p.endsWith('**')
            ? <strong key={pi} className="font-semibold text-slate-900 dark:text-white">{p.slice(2, -2)}</strong>
            : p
        );
        elements.push(<p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{rendered}</p>);
      }
      i++;
    }
    return elements;
  }

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumbs items={[
            { to: '/blog', label: 'Blog' },
            { label: blog.category },
            { label: blog.title.substring(0, 35) + '...' }
          ]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden mb-8`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8rem] opacity-10 font-black text-white select-none">{blog.category.split(' ')[0]}</span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="badge bg-white/20 text-white backdrop-blur-sm text-sm py-1 px-3">{blog.category}</span>
              </div>
            </motion.div>

            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-5">{blog.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-5 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                    {blog.authorAvatar}
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{blog.author}</span>
                </div>
                <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime} read</span>
                <div className="flex items-center gap-2 ml-auto">
                  <button onClick={copyLink} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                    {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy Link</>}
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: blog.title, url: window.location.href });
                      }
                    }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-10">
              {renderContent(content)}
            </motion.article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-700 mb-10">
              <span className="text-sm text-slate-500">Tags:</span>
              {blog.tags?.map(tag => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related */}
            {related.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {related.map((b, i) => <BlogCard key={b.id} blog={b} index={i} />)}
                </div>
              </section>
            )}

            <div className="mt-8">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-500 transition-colors">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5 sticky top-24">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Table of Contents</h3>
              <ul className="space-y-2">
                {toc.map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-500 transition-colors leading-relaxed block py-0.5">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
