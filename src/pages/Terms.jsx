import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Terms() {
  const sections = [
    { title: 'Acceptance of Terms', content: 'By accessing and using NexusAI, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the site after changes constitutes acceptance of the updated terms.' },
    { title: 'Use of the Website', content: 'You may use NexusAI for lawful purposes only. You agree not to use the site in any way that violates applicable laws or regulations, transmits harmful or offensive content, attempts to interfere with site functionality, or collects user data without permission. We reserve the right to terminate access for violations of these terms.' },
    { title: 'Intellectual Property', content: 'The content on NexusAI, including but not limited to text, graphics, logos, and software, is owned by NexusAI or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.' },
    { title: 'Third-Party Tools and Links', content: 'NexusAI provides information about and links to third-party AI tools and services. We do not endorse, warrant, or guarantee these tools. Your use of third-party services is governed by their respective terms and conditions. We are not responsible for the content, functionality, or practices of third-party sites.' },
    { title: 'Disclaimer of Warranties', content: 'NexusAI is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or completely secure. Tool information may become outdated, and we do not guarantee its accuracy at all times.' },
    { title: 'Limitation of Liability', content: 'To the fullest extent permitted by law, NexusAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or any tools listed on it. Our total liability shall not exceed the amount you paid us in the preceding twelve months.' },
    { title: 'User Content', content: 'If you submit any content to our website (e.g., through contact forms or newsletter sign-ups), you grant NexusAI a non-exclusive license to use that content in connection with operating our services. You represent that you have the right to submit such content and that it does not infringe third-party rights.' },
    { title: 'Governing Law', content: 'These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising under these terms shall be resolved through binding arbitration or in the appropriate courts of jurisdiction.' },
  ];

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="section-title mt-4 mb-2">Terms & Conditions</h1>
          <p className="text-slate-500">Last updated: May 17, 2026</p>
        </div>
        <div className="glass-card p-8 mb-6">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Please read these Terms and Conditions carefully before using NexusAI. By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>
        <div className="space-y-5">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{i + 1}. {s.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
