import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import categories from '../data/categories.json';
import tools from '../data/tools.json';

export default function Categories() {
  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Categories' }]} />
          <h1 className="section-title mt-4 mb-2">Browse AI Tool Categories</h1>
          <p className="text-slate-500">Explore AI tools organized by use case and industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const catTools = tools.filter(t => t.category_slug === cat.slug).slice(0, 4);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-3">{cat.icon}</div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{cat.name}</h2>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{cat.description}</p>
                  </div>
                  <span className="badge bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs flex-shrink-0 ml-3">
                    {cat.count} tools
                  </span>
                </div>

                {/* Preview tools */}
                <div className="space-y-2 mb-5">
                  {catTools.map(tool => (
                    <Link
                      key={tool.id}
                      to={`/tools/${tool.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                    >
                      <span className="text-lg">{tool.logo}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors flex-1">
                        {tool.name}
                      </span>
                      <span className="text-xs text-slate-400">{tool.pricing}</span>
                    </Link>
                  ))}
                </div>

                <Link
                  to={`/categories/${cat.slug}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-brand-400 hover:text-brand-500 transition-all"
                >
                  View All {cat.name} Tools <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
