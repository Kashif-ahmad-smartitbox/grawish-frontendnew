import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const StartGrowing = ({ onContactClick }) => {
  return (
    <section id="contact" className="relative py-24 section-dark overflow-hidden" data-testid="start-growing-section">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(224, 64, 251, 0.12) 0%, transparent 60%)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-5 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-sm font-semibold text-pink-300">Start Your Growth Journey</span>
        </motion.div>

        <motion.h2
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Scale Your Brand?</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No complexity. No delays. Just results-driven execution that transforms your business.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            'AI-powered marketing',
            'Dedicated strategy team',
            'Measurable results from day one',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle className="w-5 h-5 text-pink-400" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <motion.button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 primary-btn px-10 py-5 rounded-full text-white font-bold text-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="book-consultation-btn"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: '₹1M+', label: 'Ad Spend Managed' },
            { value: '300%+', label: 'ROI Delivered' },
            { value: '100+', label: 'Brands Served' },
            { value: '1M+', label: 'Audience Reach' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StartGrowing;
