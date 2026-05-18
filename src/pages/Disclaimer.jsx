import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Disclaimer() {
  const sections = [
    { title: 'General Disclaimer', content: 'The information on NexusAI is provided for general informational and educational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.' },
    { title: 'AI Tool Information', content: 'Pricing, features, and availability of AI tools change frequently. The information listed on our site may not reflect the current state of each tool. Always verify current pricing and features directly with the tool provider before making purchasing decisions.' },
    { title: 'Affiliate Disclosure', content: 'Some links on NexusAI may be affiliate links, meaning we may earn a commission if you click through and make a purchase. This does not affect our editorial independence — we only recommend tools we genuinely believe are valuable. Our reviews reflect honest assessments.' },
    { title: 'Not Professional Advice', content: 'Nothing on NexusAI constitutes professional business, financial, or legal advice. Information about AI tools is provided for informational purposes only. Always conduct your own research and consult qualified professionals before making significant business decisions.' },
    { title: 'No Endorsement', content: 'Listing an AI tool on NexusAI does not constitute an endorsement of that tool. We aim to provide comprehensive coverage of the AI tools landscape, including tools that may not be right for every use case. Exercise your own judgment when selecting tools.' },
    { title: 'Limitation of Liability', content: 'NexusAI shall not be held liable for any losses or damages arising from the use of information on this website or from the use of any AI tools discovered through our platform. You use such information and tools at your own risk.' },
  ];

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Disclaimer' }]} />
          <h1 className="section-title mt-4 mb-2">Disclaimer</h1>
          <p className="text-slate-500">Last updated: January 15, 2025</p>
        </div>
        <div className="space-y-5">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{s.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
