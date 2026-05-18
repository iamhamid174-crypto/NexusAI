import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import Breadcrumbs from '../components/Breadcrumbs';
import categories from '../data/categories.json';
import tools from '../data/tools.json';

export default function CategoryDetail() {
  const { slug } = useParams();
  const cat = categories.find(c => c.slug === slug);
  const catTools = tools.filter(t => t.category_slug === slug);

  if (!cat) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Category not found</h2>
        <Link to="/categories" className="btn-primary mt-4 inline-flex">All Categories</Link>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ to: '/categories', label: 'Categories' }, { label: cat.name }]} />
          <div className="flex items-center gap-4 mt-5">
            <div className="text-5xl">{cat.icon}</div>
            <div>
              <h1 className="section-title">{cat.name} Tools</h1>
              <p className="text-slate-500 mt-1">{cat.description} — {catTools.length} tools available</p>
            </div>
          </div>
        </div>

        {catTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catTools.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Coming soon</h3>
            <p className="text-slate-500 mb-4">We're adding more {cat.name} tools soon.</p>
            <Link to="/tools" className="btn-primary text-sm">Browse All Tools</Link>
          </div>
        )}

        <div className="mt-10">
          <Link to="/categories" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-500 transition-colors">
            <ArrowLeft size={16} /> Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
