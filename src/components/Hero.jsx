import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, CheckCircle } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  const outerStats = [
    { value: '100+', label: 'Brands Scaled', color: 'from-pink-500 to-purple-600' },
    { value: '1M+', label: 'Impressions', color: 'from-purple-500 to-indigo-600' },
    { value: '300%+', label: 'Average ROI', color: 'from-fuchsia-500 to-pink-600' },
    { value: '₹1M+', label: 'Ad Spend', color: 'from-violet-500 to-purple-600' },
  ];

  const innerOrbitCards = ['Performance-Driven', 'AI-Powered', 'Result-Focused'];

  const getOrbitConfig = (width) => {
    if (width >= 1536) {
      return {
        stageHeight: 700,
        outerSize: 680,
        outerRadius: 275,
        innerSize: 320,
        innerRadius: 130,
      };
    }
    if (width >= 1280) {
      return {
        stageHeight: 640,
        outerSize: 600,
        outerRadius: 240,
        innerSize: 300,
        innerRadius: 115,
      };
    }
    if (width >= 1024) {
      return {
        stageHeight: 560,
        outerSize: 500,
        outerRadius: 200,
        innerSize: 260,
        innerRadius: 96,
      };
    }
    if (width >= 768) {
      return {
        stageHeight: 520,
        outerSize: 420,
        outerRadius: 160,
        innerSize: 230,
        innerRadius: 85,
      };
    }
    return {
      stageHeight: 430,
      outerSize: 300,
      outerRadius: 112,
      innerSize: 170,
      innerRadius: 58,
    };
  };

  const [orbitConfig, setOrbitConfig] = useState(() => getOrbitConfig(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setOrbitConfig(getOrbitConfig(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              className="flex flex-nowrap items-center gap-2 sm:gap-4"
            >
              <motion.button
                onClick={onContactClick}
                className="primary-btn px-4 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base flex items-center gap-2 group whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-cta-primary"
              >
                <span className="sm:hidden">Start Growth</span>
                <span className="hidden sm:inline">Start Your Growth Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="#services"
                className="secondary-btn px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-cta-secondary"
              >
                <Play className="w-5 h-5" />
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore Services</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ height: `${orbitConfig.stageHeight}px` }}
            >
              <div
                className="absolute rounded-full border border-purple-200/60"
                style={{ width: `${orbitConfig.outerSize}px`, height: `${orbitConfig.outerSize}px` }}
              />
              <div
                className="absolute rounded-full border border-purple-200/40"
                style={{ width: `${orbitConfig.innerSize}px`, height: `${orbitConfig.innerSize}px` }}
              />

              <motion.div
                className="absolute"
                style={{ width: `${orbitConfig.outerSize}px`, height: `${orbitConfig.outerSize}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              >
                {outerStats.map((stat, index, arr) => {
                  const angle = (index / arr.length) * 360;
                  const x = Math.cos((angle * Math.PI) / 180) * orbitConfig.outerRadius;
                  const y = Math.sin((angle * Math.PI) / 180) * orbitConfig.outerRadius;

                  return (
                    <motion.div
                      key={stat.label}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 70px)`,
                        top: `calc(50% + ${y}px - 46px)`,
                      }}
                      animate={{ rotate: -360, y: [0, -6, 0] }}
                      transition={{
                        rotate: { duration: 34, repeat: Infinity, ease: 'linear' },
                        y: { duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="stat-card w-[120px] sm:w-[132px] md:w-36 lg:w-40 p-3 md:p-4 text-center shadow-xl shadow-purple-300/20">
                        <div className={`text-2xl md:text-3xl font-heading font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium leading-tight">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="absolute"
                style={{ width: `${orbitConfig.innerSize}px`, height: `${orbitConfig.innerSize}px` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {innerOrbitCards.map((item, index, arr) => {
                  const angle = (index / arr.length) * 360;
                  const x = Math.cos((angle * Math.PI) / 180) * orbitConfig.innerRadius;
                  const y = Math.sin((angle * Math.PI) / 180) * orbitConfig.innerRadius;

                  return (
                    <motion.div
                      key={item}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 62px)`,
                        top: `calc(50% + ${y}px - 20px)`,
                      }}
                      animate={{ rotate: 360, y: [0, -3, 0] }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        y: { duration: 2.2 + index * 0.3, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      whileHover={{ scale: 1.04 }}
                    >
                      <div className="bg-white/95 rounded-xl shadow-lg shadow-purple-500/10 px-3 py-2 border border-purple-100 w-[124px] text-center backdrop-blur-sm">
                        <div className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-gray-700 leading-tight">
                          {item}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/30"
                animate={{ scale: [1, 1.06, 1], opacity: [0.95, 1, 0.95] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-9 h-9 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
