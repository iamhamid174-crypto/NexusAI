import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Check, X, TrendingUp, ArrowRight, Tag } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import ToolCard from '../components/ToolCard';
import Seo from '../components/Seo';
import tools from '../data/tools.json';

const pricingColors = {
  Free: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Paid: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = tools.find(t => t.slug === slug);

  if (!tool) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Tool not found</h2>
        <Link to="/tools" className="btn-primary mt-4 inline-flex">Back to Tools</Link>
      </div>
    </div>
  );

  const similar = tools.filter(t => t.category === tool.category && t.slug !== slug).slice(0, 3);
  const faqs = [
    { q: `Is ${tool.name} free to use?`, a: `${tool.name} offers a ${tool.pricing} model. ${tool.pricingDetails}` },
    { q: `What are the main features of ${tool.name}?`, a: `${tool.name} includes: ${tool.features?.join(', ')}.` },
    { q: `What are the pros and cons of ${tool.name}?`, a: `Pros: ${tool.pros?.join(', ')}. Cons: ${tool.cons?.join(', ')}.` },
    { q: `Who is ${tool.name} best for?`, a: `${tool.name} is best for professionals and individuals in the ${tool.category} space who need ${tool.description.toLowerCase()}` },
  ];

  return (
    <div className="pt-24 pb-20 page-enter">
      <Seo
        title={`${tool.name} — ${tool.category}`}
        description={tool.longDescription || tool.description}
        path={`/tools/${tool.slug}`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumbs items={[
            { to: '/tools', label: 'Tools' },
            { to: `/categories/${tool.category_slug}`, label: tool.category },
            { label: tool.name }
          ]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6">
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: tool.color + '20' }}
                >
                  {tool.logo}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{tool.name}</h1>
                    {tool.trending && (
                      <span className="badge bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 py-0.5">
                        <TrendingUp size={10} /> Trending
                      </span>
                    )}
                    {tool.new && (
                      <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 py-0.5">NEW</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-500">{tool.category}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">{tool.rating}</span>
                      <span className="text-slate-400">({tool.reviews?.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tool.longDescription}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {tool.tags?.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features?.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-brand-500" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pros & Cons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    <Check size={16} /> Pros
                  </h3>
                  <ul className="space-y-2">
                    {tool.pros?.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2">
                    <X size={16} /> Cons
                  </h3>
                  <ul className="space-y-2">
                    {tool.cons?.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <X size={14} className="text-rose-500 mt-0.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Action Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 sticky top-24">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < Math.floor(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                ))}
                <span className="text-sm font-semibold text-slate-900 dark:text-white ml-1">{tool.rating}</span>
              </div>

              <div className="mb-5">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Pricing</p>
                <span className={`badge text-sm py-1.5 px-3 ${pricingColors[tool.pricing]}`}>{tool.pricing}</span>
                <p className="text-xs text-slate-500 mt-2">{tool.pricingDetails}</p>
              </div>

              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
              >
                Visit {tool.name} <ExternalLink size={16} />
              </a>

              <Link to="/tools" className="btn-secondary w-full flex items-center justify-center gap-2 text-sm py-2.5">
                Back to All Tools
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Similar Tools */}
        {similar.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Similar {tool.category} Tools</h2>
              <Link to={`/categories/${tool.category_slug}`} className="text-sm text-brand-500 flex items-center gap-1 font-semibold hover:gap-2 transition-all">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((t, i) => <ToolCard key={t.id} tool={t} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
