import { Link } from 'react-router-dom';
import { Zap, Share2, Code, Globe, Mail } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { to: '/', label: 'Home' },
    { to: '/tools', label: 'All Tools' },
    { to: '/categories', label: 'Categories' },
    { to: '/blog', label: 'Blog' },
  ],
  'Categories': [
    { to: '/categories/writing-ai', label: 'Writing AI' },
    { to: '/categories/coding-ai', label: 'Coding AI' },
    { to: '/categories/image-ai', label: 'Image AI' },
    { to: '/categories/chatbots', label: 'Chatbots' },
  ],
  'Company': [
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms & Conditions' },
    { to: '/disclaimer', label: 'Disclaimer' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#040608] text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">NexusAI</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6 max-w-xs">
              Your ultimate directory for discovering the best AI tools. We curate, review, and compare 200+ AI tools to help you find the perfect solution.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Share2 size={16} />, label: 'Share' },
                { icon: <Code size={16} />, label: 'Dev' },
                { icon: <Globe size={16} />, label: 'Web' },
                { icon: <Mail size={16} />, href: '/contact', label: 'Email' },
              ].map(s => (
                <Link key={s.label} to={s.href || '#'}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-500 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© 2026 NexusAI. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors mr-4">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors mr-4">Terms</Link>
            <Link to="/disclaimer" className="hover:text-slate-400 transition-colors">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
