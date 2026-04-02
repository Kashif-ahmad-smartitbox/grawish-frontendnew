import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Palette, Users, Calendar, TrendingUp } from 'lucide-react';

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

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const ProvenResults = () => {
  const results = [
    {
      icon: Eye,
      stat: '3',
      suffix: 'X+',
      title: 'Brand Visibility',
      description: 'Increase in reach & brand recall through high-impact creative content',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Palette,
      stat: '2',
      suffix: 'X+',
      title: 'Creative Performance',
      description: 'Better engagement driven by strategic design, reels, and storytelling',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Users,
      stat: '150',
      suffix: '%+',
      title: 'Social Media Growth',
      description: 'Increase in followers, interactions, and audience retention',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Calendar,
      stat: '100',
      suffix: '%',
      title: 'Consistency & Presence',
      description: 'Structured content execution ensuring daily brand visibility',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section id="proven-results" className="relative py-24 section-white" data-testid="proven-results-section">
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
            Proven Results
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How We Turn Brands Into <span className="gradient-text">Market Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through powerful creativity and strategic social media management, we help brands 
            stay consistent, relevant, and impossible to ignore.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              className="card-elevated p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`result-card-${index}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${result.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <result.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stat */}
              <div className={`text-5xl font-heading font-black bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-2`}>
                <AnimatedCounter value={result.stat} suffix={result.suffix} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                {result.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
