import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Cpu, Palette, Video, Wand2, BarChart3, Mail, Camera, 
  Layers, Zap, PenTool, Image, LineChart, MessageCircle, Users
} from 'lucide-react';

const AIEcosystem = () => {
  // Inner orbit tools
  const innerOrbitTools = [
    { icon: Layers, name: 'Adobe', color: '#FF0000' },
    { icon: PenTool, name: 'Figma', color: '#F24E1E' },
    { icon: Video, name: 'CapCut', color: '#00D4AA' },
    { icon: Camera, name: 'DaVinci', color: '#FF6B00' },
    { icon: Wand2, name: 'Runway ML', color: '#7C3AED' },
    { icon: Cpu, name: 'Claude', color: '#D97706' },
  ];

  // Outer orbit tools
  const outerOrbitTools = [
    { icon: Palette, name: 'Midjourney', color: '#10B981' },
    { icon: Sparkles, name: 'DALL·E', color: '#FF6B6B' },
    { icon: Image, name: 'Leonardo AI', color: '#3B82F6' },
    { icon: Video, name: 'HeyGen', color: '#EC4899' },
    { icon: Zap, name: 'Synthesia', color: '#8B5CF6' },
    { icon: Video, name: 'Pictory', color: '#F59E0B' },
    { icon: Sparkles, name: 'GenSpark', color: '#06B6D4' },
    { icon: Wand2, name: 'NanoBanana', color: '#EF4444' },
    { icon: BarChart3, name: 'Meta Ads', color: '#1877F2' },
    { icon: LineChart, name: 'Google Ads', color: '#4285F4' },
    { icon: LineChart, name: 'Analytics', color: '#F9AB00' },
    { icon: Mail, name: 'Mailchimp', color: '#FFD700' },
    { icon: Users, name: 'LinkedIn', color: '#0A66C2' },
  ];

  return (
    <section className="relative py-24 section-dark overflow-hidden" data-testid="ai-ecosystem-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" 
             style={{ background: 'radial-gradient(circle, rgba(224, 64, 251, 0.15) 0%, rgba(123, 31, 162, 0.08) 40%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm uppercase tracking-wider font-bold text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full mb-4 border border-pink-500/20">
            AI-Powered Marketing
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            AI-Powered <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Growth Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Do you have an AI-driven digital system working for your brand 24/7?
            Leverage cutting-edge AI tools across content, ads, and customer engagement.
          </p>
        </motion.div>

        {/* Orbiting Animation Container */}
        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
          {/* Center - Grawish AI Logo */}
          <motion.div
            className="absolute z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-28 h-28 -m-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-2xl opacity-40" 
                   style={{ animation: 'pulse-soft 3s ease-in-out infinite' }} />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                <img
                  src="/assets/logos/logo-ai.png"
                  alt="Grawish AI"
                  className="w-14 h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Inner Orbit Ring */}
          <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-white/10" />

          {/* Inner Orbit */}
          <motion.div
            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {innerOrbitTools.map((tool, index) => {
              const angle = (index / innerOrbitTools.length) * 360;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                    title={tool.name}
                  >
                    <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Outer Orbit Ring */}
          <div className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] rounded-full border border-white/5" />

          {/* Outer Orbit */}
          <motion.div
            className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px]"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          >
            {outerOrbitTools.map((tool, index) => {
              const angle = (index / outerOrbitTools.length) * 360;
              const radius = 210;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
                    title={tool.name}
                  >
                    <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Build a smart, integrated digital ecosystem that automates execution, 
          enhances creativity, and scales your business faster with precision.
        </motion.p>
      </div>
    </section>
  );
};

export default AIEcosystem;
