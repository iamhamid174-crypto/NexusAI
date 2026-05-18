import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Target, Eye, Heart, Users, Star, BarChart3, Shield } from 'lucide-react';

const team = [
  { name: 'Sarah Chen', role: 'Co-Founder & Editor', avatar: 'SC', bio: 'AI researcher and content strategist with 8+ years in tech journalism.' },
  { name: 'Marcus Rodriguez', role: 'Co-Founder & Tech Lead', avatar: 'MR', bio: 'Software engineer and AI enthusiast who has built products used by millions.' },
  { name: 'Priya Nair', role: 'Head of Content', avatar: 'PN', bio: 'Digital marketer specializing in AI tools, productivity, and content strategy.' },
];

const values = [
  { icon: <Target size={20} />, title: 'Accuracy First', desc: 'Every tool listing is researched and verified by our team.' },
  { icon: <Eye size={20} />, title: 'Transparency', desc: 'We disclose affiliations and maintain editorial independence.' },
  { icon: <Heart size={20} />, title: 'Community Driven', desc: 'We listen to our users and shape content around their needs.' },
  { icon: <Shield size={20} />, title: 'Privacy Respected', desc: 'We never sell user data or track you unnecessarily.' },
];

export default function About() {
  return (
    <div className="pt-24 pb-20 page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 mb-16">
        <div className="absolute inset-0 hero-mesh dot-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Zap size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
              About <span className="gradient-text">NexusAI</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We're on a mission to make AI accessible to everyone by curating and reviewing the best AI tools, so you can find the right tool without wasting time.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Mission */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-5">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4">
              NexusAI started in 2024 with a simple observation: the AI tools landscape was exploding, but finding the right tool for your specific needs was incredibly difficult. Review sites were outdated, comparisons were superficial, and most recommendations were driven by affiliate commissions rather than genuine quality.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4">
              We set out to build the directory we wished existed — one that is honest, comprehensive, up-to-date, and genuinely helpful. Every tool we list is reviewed and curated to help you compare options quickly and make better decisions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Today, NexusAI helps a growing community discover AI tools that make their work and lives better. We're just getting started.
            </p>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <BarChart3 size={22} />, value: 'Curated', label: 'AI Tool Directory' },
              { icon: <Users size={22} />, value: 'Growing', label: 'Community' },
              { icon: <Star size={22} />, value: 'Updated', label: 'Guides & Comparisons' },
              { icon: <Shield size={22} />, value: '100%', label: 'Independent Reviews' },
            ].map((s, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-11 h-11 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  {s.icon}
                </div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i} className="glass-card p-6 flex gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-brand-500/20 to-accent-500/20 rounded-xl flex items-center justify-center text-brand-500 flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-glow">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-brand-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Want to get in touch?</h2>
            <p className="text-slate-500 mb-6">We'd love to hear from you — whether it's a tool suggestion, feedback, or partnership inquiry.</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Contact Us</Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
