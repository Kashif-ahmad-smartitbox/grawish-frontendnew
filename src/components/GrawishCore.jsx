import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Rocket } from 'lucide-react';

const GrawishCore = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Mission',
      color: 'from-pink-500 to-rose-500',
      points: [
        'Empower brands with strategic creativity and performance-driven marketing solutions.',
        'Deliver measurable growth through content, ads, and digital innovation.',
        'Simplify marketing using smart tools, AI, and execution excellence.',
      ],
    },
    {
      icon: Eye,
      title: 'Vision',
      color: 'from-purple-500 to-violet-500',
      points: [
        'Become a leading creative and performance marketing partner for modern brands.',
        'Redefine growth through storytelling, technology, and AI-driven strategies.',
        'Build brands that are not just visible, but truly memorable and scalable.',
      ],
    },
    {
      icon: Heart,
      title: 'Values',
      color: 'from-blue-500 to-cyan-500',
      points: [
        'Prioritize client success and measurable business impact in everything we do.',
        'Believe in creativity with purpose, backed by speed, precision, and consistency.',
        'Embrace innovation and AI to deliver smarter, scalable, and future-ready solutions.',
      ],
    },
  ];

  return (
    <section className="relative py-24 section-light" data-testid="grawish-core-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            <span className="gradient-text">Grawish</span> Core
          </h2>
          <p className="text-lg text-gray-600">
            Driven by creativity, powered by performance, focused on real business growth
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="card-elevated p-8 h-full relative overflow-hidden" data-testid={`core-card-${value.title.toLowerCase()}`}>
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  {value.title}
                </h3>

                {/* Points */}
                <ul className="space-y-4">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color} mt-2 flex-shrink-0`} />
                      <span className="text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrawishCore;
