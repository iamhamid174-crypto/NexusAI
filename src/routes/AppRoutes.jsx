import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Tools from '../pages/Tools';
import ToolDetail from '../pages/ToolDetail';
import Categories from '../pages/Categories';
import CategoryDetail from '../pages/CategoryDetail';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';
import Disclaimer from '../pages/Disclaimer';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
      <Route path="/tools/:slug" element={<MainLayout><ToolDetail /></MainLayout>} />
      <Route path="/categories" element={<MainLayout><Categories /></MainLayout>} />
      <Route path="/categories/:slug" element={<MainLayout><CategoryDetail /></MainLayout>} />
      <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
      <Route path="/blog/:slug" element={<MainLayout><BlogDetail /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
      <Route path="/disclaimer" element={<MainLayout><Disclaimer /></MainLayout>} />
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  );
}
