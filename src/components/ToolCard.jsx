import { Link } from 'react-router-dom';
import { Star, ExternalLink, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingColors = {
  Free: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Paid: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export default function ToolCard({ tool, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0"
              style={{ backgroundColor: tool.color + '20' }}
            >
              {tool.logo}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight flex items-center gap-1.5">
                {tool.name}
                {tool.new && (
                  <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] py-0.5">NEW</span>
                )}
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">{tool.category}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {tool.trending && (
              <span className="badge bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 py-0.5">
                <TrendingUp size={10} /> Hot
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tool.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto px-5 pb-4 pt-3 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{tool.rating}</span>
              <span className="text-xs text-slate-400">({(tool.reviews / 1000).toFixed(1)}k)</span>
            </div>
            <span className={`badge py-0.5 text-[10px] ${pricingColors[tool.pricing] || pricingColors['Paid']}`}>
              {tool.pricing}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={`/tools/${tool.slug}`}
              className="text-xs text-brand-500 hover:text-brand-600 font-semibold"
            >
              Details
            </Link>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs bg-gradient-to-r from-brand-500 to-accent-500 text-white px-3 py-1.5 rounded-lg hover:shadow-glow transition-all hover:scale-105"
            >
              Visit <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
