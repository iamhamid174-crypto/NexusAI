import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 page-enter">
      <Seo title="404" description="Page not found." path="/404" noindex />
      <div className="text-center max-w-lg">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="text-8xl font-black gradient-text mb-4">404</div>
          <div className="text-5xl mb-6">🤖</div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Oops! Even our AI couldn't find this page. It may have been moved, deleted, or maybe it never existed in the first place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary flex items-center justify-center gap-2">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/tools" className="btn-secondary flex items-center justify-center gap-2">
              <Search size={18} /> Browse Tools
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
