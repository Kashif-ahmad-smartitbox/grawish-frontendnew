import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = ({ onContactClick }) => {
  const footerLinks = {
    services: [
      'Social Media Management',
      'Performance Marketing',
      'Content Production',
      'Branding & Design',
      'PR & Media',
      'Website Development',
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact',
    ],
    resources: [
      'Free Consultation',
      'Marketing Guide',
      'ROI Calculator',
      'Brand Audit',
      'FAQs',
      'Support',
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/grawish', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/grawish', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/grawish', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@grawish', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gray-900 py-20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_growth-scale-1/artifacts/zshf7dks_WhatsApp%20Image%202026-04-01%20at%2013.38.06.jpeg" 
                alt="Grawish" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Where brands don't just grow, they dominate digitally with strategy, storytelling, and performance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@grawish.com" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  hello@grawish.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Ready to Scale Your Brand?
            </h3>
            <p className="text-gray-400">
              Book a free consultation and discover how we can drive your growth.
            </p>
          </div>
          <motion.button
            onClick={onContactClick}
            className="primary-btn px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="footer-cta"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Grawish. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
