import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const comparisons = [
    {
      grawish: 'Works as a growth partner — strategy, creative, and execution handled in-house.',
      typical: 'Often fragmented teams leading to delays and inconsistent quality.',
    },
    {
      grawish: 'Delivers measurable ROI with performance-focused campaigns.',
      typical: 'Focus more on vanity metrics than real business outcomes.',
    },
    {
      grawish: 'Simple, fast, and execution-driven — no unnecessary complexity.',
      typical: 'Slow execution with multiple dependencies and approval layers.',
    },
    {
      grawish: 'Flexible and client-friendly — quick changes without extra costs.',
      typical: 'Charge extra for every small revision or change request.',
    },
    {
      grawish: 'AI-powered, modern, aligned with current digital trends.',
      typical: 'Outdated strategies with limited AI adoption.',
    },
  ];

  return (
    <section className="relative py-24 section-white" data-testid="comparison-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            <span className="gradient-text">Grawish</span> vs Typical Agency
          </h2>
          <p className="text-lg text-gray-600">
            See the clear differences — and why brands choose us
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Grawish Column */}
          <motion.div
            className="grawish-column p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_growth-scale-1/artifacts/zshf7dks_WhatsApp%20Image%202026-04-01%20at%2013.38.06.jpeg" 
                alt="Grawish" 
                className="h-10 w-auto"
              />
              <span className="font-heading text-xl font-bold gradient-text">Grawish</span>
            </div>

            <div className="space-y-5">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.grawish}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typical Agency Column */}
          <motion.div
            className="typical-column p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="font-heading text-xl font-bold text-gray-400">Typical Agency</span>
            </div>

            <div className="space-y-5">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-gray-500 leading-relaxed">{item.typical}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
