import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-accent-500/5" />
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-glow">
              <Mail size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Stay Updated on AI Tools
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Get weekly roundups of the best new AI tools, tutorials, and industry news. No spam, ever.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-2 text-emerald-500 font-semibold"
              >
                <CheckCircle size={20} />
                You're subscribed! Welcome aboard.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
                <button type="submit" className="btn-primary px-5 py-3 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-xs text-slate-400 mt-3">Join 12,000+ AI enthusiasts. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
