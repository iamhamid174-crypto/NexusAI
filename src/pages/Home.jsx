import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Search, Star, BarChart3, Shield } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import BlogCard from '../components/BlogCard';
import NewsletterSection from '../components/NewsletterSection';
import AnimatedNumber from '../components/AnimatedNumber';
import tools from '../data/tools.json';
import blogs from '../data/blogs.json';
import categories from '../data/categories.json';

const testimonials = [
  { name: 'Alex Thompson', role: 'Content Creator', text: 'NexusAI helped me find the perfect AI writing tools for my blog. Saved me hours of research!', avatar: 'AT', rating: 5 },
  { name: 'Priya Sharma', role: 'Software Developer', text: 'The coding AI section is incredible. Discovered Cursor here and my productivity doubled overnight.', avatar: 'PS', rating: 5 },
  { name: 'Marcus Lee', role: 'Marketing Manager', text: 'Best curated AI tools directory I have found. The filters and ratings are genuinely helpful.', avatar: 'ML', rating: 5 },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function Home() {
  const toolCount = tools.length;
  const categoryCount = categories.length;
  const articleCount = blogs.length;

  const stats = [
    { icon: <Zap size={20} />, number: toolCount, suffix: '+', label: 'AI tools explored' },
    { icon: <BarChart3 size={20} />, number: categoryCount, suffix: '+', label: 'Categories' },
    { icon: <Star size={20} />, number: articleCount, suffix: '+', label: 'Guides & comparisons' },
    { icon: <Shield size={20} />, number: 0, suffix: '$', label: 'Free to browse' },
  ];

  const trending = tools.filter(t => t.trending).slice(0, 6);
  const featured = tools.filter(t => t.featured).slice(0, 3);
  const featuredBlogs = blogs.filter(b => b.featured).slice(0, 3);

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 dot-pattern hero-mesh" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-6 py-1.5 px-4"
          >
            <TrendingUp size={14} /> Discover 200+ Curated AI Tools
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            Find AI tools that fit
            <br />
            your <span className="gradient-text">workflow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Search, compare, and discover the best AI tools for writing, coding, design, video, marketing, and more — with curated picks and practical guides.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/tools" className="btn-primary flex items-center gap-2 text-base px-8 py-4">
              Explore Tools <ArrowRight size={18} />
            </Link>
            <Link to="/categories" className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
              Browse Categories
            </Link>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.08, duration: 0.45 }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="glass-card p-4 text-center transition-transform"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center text-white mx-auto mb-2 shadow-glow">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none tabular-nums">
                  <AnimatedNumber
                    value={stat.number}
                    durationMs={900}
                    format={(n) => Math.round(n).toLocaleString()}
                  />
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick search suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <span className="text-sm text-slate-400">Try:</span>
            {['ChatGPT', 'Midjourney', 'Cursor', 'Runway ML'].map(tag => (
              <Link key={tag} to={`/tools?search=${tag}`}
                className="text-sm px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-400 hover:text-brand-500 transition-all"
              >
                {tag}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Tools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-10">
            <div>
              <span className="badge bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 mb-3">
                <TrendingUp size={12} /> Trending Now
              </span>
              <h2 className="section-title">Hot AI Tools This Week</h2>
              <p className="text-slate-500 mt-2">The most popular AI tools our visitors are exploring right now</p>
            </div>
            <Link to="/tools" className="hidden md:flex btn-secondary items-center gap-2 text-sm py-2">
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/tools" className="btn-secondary inline-flex items-center gap-2">
              View All Tools <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="section-title mb-3">Browse by Category</h2>
            <p className="text-slate-500">Find AI tools organized by use case</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link
                  to={`/categories/${cat.slug}`}
                  className="glass-card p-5 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 block group"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{cat.name}</div>
                  <div className="text-xs text-slate-400">{cat.count} tools</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="badge bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 mb-3">
              <Star size={12} /> Editor's Picks
            </span>
            <h2 className="section-title mb-3">Featured AI Tools</h2>
            <p className="text-slate-500">Hand-picked by our team for quality and innovation</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 to-accent-600 p-12 text-center text-white"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <Search size={40} className="mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't find what you need?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Search through our comprehensive database of 200+ AI tools to find exactly what you're looking for.</p>
              <Link to="/tools" className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                Search All Tools <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title mb-2">Latest from Our Blog</h2>
              <p className="text-slate-500">AI tutorials, comparisons, and industry insights</p>
            </div>
            <Link to="/blog" className="hidden md:flex btn-secondary items-center gap-2 text-sm py-2">
              All Articles <ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, i) => <BlogCard key={blog.id} blog={blog} index={i} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="section-title mb-3">Loved by AI Enthusiasts</h2>
            <p className="text-slate-500">See what our community says about NexusAI</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
