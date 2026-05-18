import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const imageGradients = {
  writing: 'from-purple-500 to-pink-500',
  coding: 'from-blue-500 to-cyan-500',
  image: 'from-amber-500 to-orange-500',
  video: 'from-rose-500 to-red-500',
  marketing: 'from-green-500 to-teal-500',
  productivity: 'from-indigo-500 to-violet-500',
  chatbot: 'from-sky-500 to-blue-600',
  business: 'from-emerald-500 to-teal-600',
  future: 'from-violet-500 to-purple-600',
  money: 'from-yellow-500 to-amber-600',
};

export default function BlogCard({ blog, index = 0 }) {
  const gradient = imageGradients[blog.image] || 'from-brand-500 to-accent-500';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="glass-card group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <Link to={`/blog/${blog.slug}`} className="block">
        <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20 select-none font-bold text-white">
              {blog.category.split(' ')[0]}
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="badge bg-white/20 text-white backdrop-blur-sm text-xs">
              {blog.category}
            </span>
          </div>
          {blog.featured && (
            <div className="absolute top-3 right-3">
              <span className="badge bg-white text-brand-600 text-[10px] font-bold">FEATURED</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link to={`/blog/${blog.slug}`} className="block">
          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {blog.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <User size={12} />
              {blog.author.split(' ')[0]}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {blog.readTime}
            </span>
          </div>
          <Link
            to={`/blog/${blog.slug}`}
            className="flex items-center gap-1 text-xs text-brand-500 font-semibold hover:gap-2 transition-all"
          >
            Read <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
