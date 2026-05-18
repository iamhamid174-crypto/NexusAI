import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, TrendingUp, Star } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import Breadcrumbs from '../components/Breadcrumbs';
import Seo from '../components/Seo';
import tools from '../data/tools.json';
import categories from '../data/categories.json';

const sortOptions = ['Most Popular', 'Highest Rated', 'Newest', 'A-Z', 'Free First'];
const pricingOptions = ['All', 'Free', 'Freemium', 'Paid'];

export default function Tools() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [pricing, setPricing] = useState('All');
  const [sort, setSort] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...tools];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }
    if (category !== 'All') result = result.filter(t => t.category === category);
    if (pricing !== 'All') result = result.filter(t => t.pricing === pricing);
    switch (sort) {
      case 'Highest Rated': result.sort((a, b) => b.rating - a.rating); break;
      case 'Newest': result.sort((a, b) => b.id - a.id); break;
      case 'A-Z': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'Free First': result.sort((a, b) => (a.pricing === 'Free' ? -1 : b.pricing === 'Free' ? 1 : 0)); break;
      default: result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [search, category, pricing, sort]);

  const catList = ['All', ...categories.map(c => c.name)];

  return (
    <div className="pt-24 pb-20 min-h-screen page-enter">
      <Seo
        title="All AI Tools"
        description={`Browse ${tools.length}+ AI tools across writing, coding, image, video, marketing, productivity, and more.`}
        path="/tools"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'AI Tools' }]} />
          <h1 className="section-title mt-4 mb-2">All AI Tools</h1>
          <p className="text-slate-500">Discover {tools.length} hand-curated AI tools for every use case</p>
        </div>

        {/* Search + Filters Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar value={search} onChange={setSearch} placeholder="Search AI tools by name, category..." className="flex-1" />
          <div className="flex gap-3">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {sortOptions.map(o => <option key={o}>{o}</option>)}
            </select>
            <button
              onClick={() => setShowFilters(v => !v)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${showFilters ? 'bg-brand-500 text-white border-brand-500' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="glass-card p-5 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {catList.map(c => (
                    <button key={c} onClick={() => setCategory(c)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${category === c ? 'bg-brand-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                    >{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Pricing</p>
                <div className="flex flex-wrap gap-2">
                  {pricingOptions.map(p => (
                    <button key={p} onClick={() => setPricing(p)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${pricing === p ? 'bg-brand-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                    >{p}</button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category quick pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {catList.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${category === c ? 'bg-brand-500 text-white shadow-glow' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-400'}`}
            >{c}</button>
          ))}
        </div>

        {/* Active filters */}
        {(search || category !== 'All' || pricing !== 'All') && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-sm text-slate-500">Active filters:</span>
            {search && (
              <span className="badge bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 gap-1">
                "{search}" <button onClick={() => setSearch('')}><X size={12} /></button>
              </span>
            )}
            {category !== 'All' && (
              <span className="badge bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 gap-1">
                {category} <button onClick={() => setCategory('All')}><X size={12} /></button>
              </span>
            )}
            {pricing !== 'All' && (
              <span className="badge bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 gap-1">
                {pricing} <button onClick={() => setPricing('All')}><X size={12} /></button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span> tools
          {category !== 'All' && ` in ${category}`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No tools found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
            <button onClick={() => { setSearch(''); setCategory('All'); setPricing('All'); }} className="btn-primary text-sm py-2">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
