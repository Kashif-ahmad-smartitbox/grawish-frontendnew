import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Rocket, Users, Cpu, Layers, BarChart3,
  ArrowRight
} from 'lucide-react';

const WhyGrawish = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Performance-Driven Creativity',
      description: 'Every design, reel, and campaign is built to engage, convert, and deliver real results.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'Lightning Fast Execution',
      description: 'Agile content production and campaign launches to keep you ahead of competition.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Strategies tailored to your goals — not templates. Your growth drives everything.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Marketing',
      description: 'Leveraging latest AI tools for smarter content, better targeting, and higher efficiency.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Layers,
      title: 'End-to-End Services',
      description: 'From branding to ads to PR — everything managed under one roof seamlessly.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Proven Results',
      description: '₹1M+ ad spend managed with 300%+ ROI and consistent lead generation success.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="why-grawish" className="relative py-24 section-light" data-testid="why-grawish-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm uppercase tracking-wider font-bold text-purple-600 bg-purple-50 px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Why <span className="gradient-text">Grawish</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical creativity that delivers — fast, result-driven, and market-proven.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="card-elevated p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`reason-card-${index}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Discuss Link */}
              <button className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGrawish;
