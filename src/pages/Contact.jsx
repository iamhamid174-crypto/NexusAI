import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openingEmail, setOpeningEmail] = useState(false);
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'iamhamid174@gmail.com';

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setOpeningEmail(true);
    const subject = form.subject ? `[${form.subject}] Message from ${form.name}` : `Message from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    const mailto = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => { setOpeningEmail(false); setSubmitted(true); }, 600);
  };

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-glow">
              <Mail size={24} className="text-white" />
            </div>
            <h1 className="section-title mb-3">Get in Touch</h1>
            <p className="text-slate-500 max-w-xl mx-auto">Have a question, suggestion, or want to partner with us? We'd love to hear from you.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-5">
            {[
              { icon: <Mail size={20} />, title: 'Email Us', desc: contactEmail, sub: 'We reply as soon as possible' },
              { icon: <MessageSquare size={20} />, title: 'Feedback', desc: 'Tool suggestions welcome', sub: 'We read every message' },
              { icon: <Clock size={20} />, title: 'Response Time', desc: 'Usually within 24–48 hours', sub: 'Monday to Friday' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500/20 to-accent-500/20 rounded-xl flex items-center justify-center text-brand-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  {item.title === 'Email Us' ? (
                    <a className="text-brand-500 text-sm font-medium hover:underline" href={`mailto:${contactEmail}`}>{item.desc}</a>
                  ) : (
                    <p className="text-brand-500 text-sm font-medium">{item.desc}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <CheckCircle size={56} className="text-emerald-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email Ready</h3>
                  <p className="text-slate-500">Your email app should open. If it doesn't, send your message to <a className="text-brand-500 hover:underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-all">
                      <option value="">Select a subject</option>
                      <option>Tool Suggestion</option>
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Bug Report</option>
                      <option>Advertising</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      rows={6} placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none transition-all" />
                  </div>
                  <button type="submit" disabled={openingEmail}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                    {openingEmail ? (
                      <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Opening email...</>
                    ) : (
                      <><Send size={18} /> Send Email</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
