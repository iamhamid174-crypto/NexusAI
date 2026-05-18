import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'iamhamid174@gmail.com';
  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us. This may include your name, email address, and the content of your messages. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and pages visited.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to operate and improve our website, respond to your comments and questions, send you newsletters and updates you have subscribed to, analyze how our website is used to improve user experience, and detect and prevent fraud or abuse of our services.' },
    { title: 'Information Sharing', content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential. We may also share information when required by law or to protect our rights.' },
    { title: 'Cookies and Tracking', content: 'We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, understand how you use our site, and improve our services. You can instruct your browser to refuse cookies, though some features of our site may not function properly as a result.' },
    { title: 'Advertising (Google AdSense)', content: 'We may display ads served by Google AdSense or other advertising partners. These third parties may use cookies or similar technologies to serve ads based on your visits to this and other websites. You can learn more about how Google uses information from sites that use its services and manage your ad personalization preferences in your Google account settings.' },
    { title: 'Third-Party Links', content: 'Our website contains links to third-party websites and AI tools. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies. The inclusion of links does not imply our endorsement of those sites.' },
    { title: 'Data Security', content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.' },
    { title: 'Your Rights', content: 'You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or contacting us directly.' },
    { title: 'Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website following changes constitutes your acceptance of the revised policy.' },
  ];

  return (
    <div className="pt-24 pb-20 page-enter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="section-title mt-4 mb-2">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: May 17, 2026</p>
        </div>

        <div className="glass-card p-8 mb-6">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            At NexusAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{i + 1}. {section.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 mt-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            If you have questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href={`mailto:${contactEmail}`} className="text-brand-500 hover:underline">{contactEmail}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
