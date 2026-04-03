import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Zap, Target, Mail, MessageSquare, BarChart3, DollarSign, Star, ArrowUpRight } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }) => {
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
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const GrawishImpact = () => {
  const channels = [
    { icon: BarChart3, name: 'PPC & Performance Ads', color: 'bg-blue-500' },
    { icon: Target, name: 'Meta Ads & Google Ads', color: 'bg-indigo-500' },
    { icon: Users, name: 'LinkedIn Outreach', color: 'bg-sky-500' },
    { icon: Mail, name: 'Email Marketing', color: 'bg-violet-500' },
    { icon: MessageSquare, name: 'WhatsApp Lead Gen', color: 'bg-green-500' },
    { icon: TrendingUp, name: 'Sales Funnel Optimization', color: 'bg-purple-500' },
  ];

  return (
    <section className="relative py-24 section-purple-soft" data-testid="grawish-impact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <img 
                src="/assets/logos/logo-impact.png" 
                alt="Grawish Logo" 
                className="h-8 w-auto"
              />
              <span className="text-sm font-bold text-purple-700 bg-white px-3 py-1 rounded-full shadow-sm">Grawish Impact</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Where Lead Generation Becomes <span className="gradient-text">Growth</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A performance marketing service combining ads, outreach, and automation to generate high-quality leads.
              Built to maximize ROI, scale campaigns faster, and deliver consistent, measurable business growth.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '300', suffix: '%+', label: 'ROI', color: 'from-pink-500 to-rose-500' },
                { value: '150', suffix: '%+', label: 'Lead Growth', color: 'from-purple-500 to-violet-500' },
                { value: '70', suffix: '%+', label: 'Engagement', color: 'from-blue-500 to-cyan-500' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 text-center shadow-lg shadow-purple-500/5 border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`impact-stat-${index}`}
                >
                  <div className={`text-3xl font-heading font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-purple-50">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-xl font-heading font-black text-gray-900">40%+</span>
                </div>
                <div className="text-xs text-gray-500">Revenue Growth Potential</div>
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-purple-50">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span className="text-xl font-heading font-black text-gray-900">60+</span>
                </div>
                <div className="text-xs text-gray-500">Campaign Quality Score</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Channels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-wider font-bold text-purple-600 mb-6">
              Integrated Channels
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  className="card-elevated p-5 flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  data-testid={`channel-card-${index}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 flex-1">{channel.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrawishImpact;
