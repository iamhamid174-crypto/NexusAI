import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import Breadcrumbs from '../components/Breadcrumbs';
import blogs from '../data/blogs.json';

const allCategories = ['All', ...new Set(blogs.map(b => b.category))];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    let result = [...blogs];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    if (category !== 'All') result = result.filter(b => b.category === category);
    return result;
  }, [search, category]);

  const featured = blogs.filter(b => b.featured)[0];

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="section-title mt-4 mb-2">AI Tools Blog</h1>
          <p className="text-slate-500">Tutorials, comparisons, and insights on the latest AI tools</p>
        </div>

        {/* Featured Article */}
        {featured && !search && category === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden mb-10 group"
          >
            <div className="md:flex">
              <div className="md:w-2/5 h-56 md:h-auto bg-gradient-to-br from-brand-500 to-accent-600 relative flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl opacity-10 font-bold text-white select-none">{featured.category.split(' ')[0]}</span>
                </div>
                <span className="relative badge bg-white text-brand-600 font-bold text-sm py-1.5 px-4">FEATURED</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="badge bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 mb-3 self-start">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                      {featured.authorAvatar}
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{featured.author}</span>
                  </div>
                  <span className="text-sm text-slate-400">·</span>
                  <span className="text-sm text-slate-400">{featured.readTime} read</span>
                  <a href={`/blog/${featured.slug}`} className="ml-auto btn-primary text-sm py-2 px-5">
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar value={search} onChange={setSearch} placeholder="Search articles..." className="flex-1" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {allCategories.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${category === c ? 'bg-brand-500 text-white shadow-glow' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-400'}`}
            >{c}</button>
          ))}
        </div>

        <p className="text-sm text-slate-500 mb-6">
          {filtered.length} article{filtered.length !== 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => <BlogCard key={blog.id} blog={blog} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-500 mb-4">Try a different search term</p>
            <button onClick={() => { setSearch(''); setCategory('All'); }} className="btn-primary text-sm py-2">
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
