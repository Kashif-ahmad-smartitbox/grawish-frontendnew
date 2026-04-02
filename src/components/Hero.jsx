import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, CheckCircle } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 section-gradient-light"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(224, 64, 251, 0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123, 31, 162, 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#E040FB 1px, transparent 1px), linear-gradient(90deg, #E040FB 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                #1 Digital Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-gray-900 mb-6"
              data-testid="hero-heading"
            >
              Where Brands Don't Just Grow, They{' '}
              <span className="gradient-text">Dominate Digitally</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              From content that captures attention to campaigns that drive revenue. 
              We build brands, amplify voices, and create powerful digital identities 
              with strategy, storytelling, and performance at our core.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {['Performance-Driven', 'AI-Powered', 'Result-Focused'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.button
                onClick={onContactClick}
                className="primary-btn px-8 py-4 rounded-full text-white font-semibold text-base flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-cta-primary"
              >
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="#services"
                className="secondary-btn px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-cta-secondary"
              >
                <Play className="w-5 h-5" />
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100+', label: 'Brands Scaled', color: 'from-pink-500 to-purple-600' },
                { value: '1M+', label: 'Impressions Generated', color: 'from-purple-500 to-indigo-600' },
                { value: '300%+', label: 'Average ROI', color: 'from-fuchsia-500 to-pink-600' },
                { value: '₹1M+', label: 'Ad Spend Managed', color: 'from-violet-500 to-purple-600' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-4xl font-heading font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl shadow-purple-500/10 p-4 border border-purple-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Trusted by 100+ Brands</div>
                  <div className="text-xs text-gray-500">Join our success stories</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
