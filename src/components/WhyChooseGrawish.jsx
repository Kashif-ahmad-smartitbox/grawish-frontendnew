import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Heart, Lightbulb, Trophy, Target } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setDisplayValue(Math.floor(progress * numericValue));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const WhyChooseGrawish = () => {
  const features = [
    {
      icon: Heart,
      title: 'Customer Retention Focused',
      description: "We don't just bring leads — we help you build loyal, repeat customers that drive long-term revenue.",
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Fast turnaround, agile content production, and quick campaign launches to keep you ahead of competition.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Your goals drive everything we do — strategies tailored for your success, not cookie-cutter templates.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'High-Impact Creativity',
      description: 'Visually stunning, strategically built content that makes your brand unforgettable and drives results.',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section className="relative py-24 section-white" data-testid="why-choose-section">
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
            Why Choose <span className="gradient-text">Grawish?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Client-focused and performance-driven. We combine creativity, speed, and strategy 
            to deliver results that actually matter.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl px-8 py-4 border border-purple-100">
            <Trophy className="w-10 h-10 text-purple-600" />
            <div>
              <div className="text-3xl font-heading font-black gradient-text">
                <AnimatedCounter value="100" suffix="+" />
              </div>
              <div className="text-sm text-gray-600 font-medium">Brands Scaled</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl px-8 py-4 border border-purple-100">
            <Target className="w-10 h-10 text-purple-600" />
            <div>
              <div className="text-3xl font-heading font-black gradient-text">
                <AnimatedCounter value="1" suffix="M+" />
              </div>
              <div className="text-sm text-gray-600 font-medium">Impressions Generated</div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-elevated p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGrawish;
