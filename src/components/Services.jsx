import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, Video, Palette, BarChart3, Newspaper, TrendingUp, 
  Code, Linkedin, ChevronDown, ChevronRight, ArrowRight
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const serviceCategories = [
    {
      icon: Share2,
      title: 'Social Media Management',
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Social Media Management', desc: 'Complete handling of your platforms with content strategy and optimization.' },
        { name: 'Content Strategy & Planning', desc: 'Structured monthly content calendars aligned with your business goals.' },
        { name: 'Reels & Short Videos', desc: 'High-engagement short-form content designed to capture attention.' },
        { name: 'Creative Designing', desc: 'Visually appealing creatives tailored for each platform.' },
        { name: 'Growth & Optimization', desc: 'Continuous improvement to increase followers and conversions.' },
      ],
    },
    {
      icon: Video,
      title: 'Content Production',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Podcast Production', desc: 'End-to-end podcast creation to build authority and trust.' },
        { name: 'Photography', desc: 'Professional shoots that enhance brand perception.' },
        { name: 'Corporate Videos', desc: 'Premium videos to showcase your brand and vision.' },
        { name: 'Advertisement Shoots', desc: 'High-quality ad film production for impact.' },
        { name: 'Reels Shoots', desc: 'Professionally executed short-form video shoots.' },
      ],
    },
    {
      icon: Palette,
      title: 'Design & Branding',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Graphic Designing', desc: 'Creative visuals that communicate your brand identity.' },
        { name: 'Branding', desc: 'Strong, memorable brand identities that stand out.' },
        { name: 'Personal Branding', desc: 'Position yourself as an industry authority.' },
        { name: 'Event Designing', desc: 'Creative concepts for impactful events.' },
        { name: 'Stall Design', desc: 'Attractive designs for exhibitions.' },
      ],
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      color: 'from-amber-500 to-orange-500',
      services: [
        { name: 'Meta Ads', desc: 'Conversion-focused campaigns to scale reach and sales.' },
        { name: 'Google Ads', desc: 'High-intent search campaigns for ready-to-convert audiences.' },
        { name: 'LinkedIn Ads', desc: 'B2B focused campaigns for quality leads.' },
        { name: 'LinkedIn Outreach', desc: 'Personalized message campaigns for opportunities.' },
        { name: 'Email & WhatsApp Lead Gen', desc: 'Automated outreach to capture leads.' },
      ],
    },
    {
      icon: Newspaper,
      title: 'PR & Media Visibility',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Media Publications', desc: 'Get featured in leading publications.' },
        { name: 'Podcast Features', desc: 'Collaborations with popular podcasts.' },
        { name: 'Platform Features', desc: 'Opportunities on TEDx, Josh Talks.' },
        { name: 'Social PR', desc: 'Strategic PR on LinkedIn & Instagram.' },
        { name: 'Awards Management', desc: 'Support for award nominations.' },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'SEO', desc: 'Improve organic rankings and visibility.' },
        { name: 'Generative Engine Optimization', desc: 'Optimize for AI-driven search.' },
        { name: 'Affiliate Marketing', desc: 'Performance-based partnerships.' },
        { name: 'Influencer Marketing', desc: 'Collaborations to boost trust and reach.' },
      ],
    },
    {
      icon: Code,
      title: 'Technology & Experience',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Website Development', desc: 'High-performance websites for conversions.' },
        { name: 'Static Websites', desc: 'Lightweight, fast-loading websites.' },
        { name: 'Dynamic Websites', desc: 'Feature-rich, scalable websites.' },
        { name: 'UI/UX Designing', desc: 'User-centric design for seamless experiences.' },
      ],
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Management',
      color: 'from-sky-500 to-blue-500',
      services: [
        { name: 'Profile Optimization', desc: 'Complete profile revamp with SEO.' },
        { name: 'Content Creation', desc: 'Daily posts and thought leadership.' },
        { name: 'Network Growth', desc: 'Targeted connection building.' },
        { name: 'Lead Generation', desc: 'Strategic messaging and ads.' },
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 section-white" data-testid="services-section">
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
            Our Services
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Complete Digital Growth <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end services across social media, performance marketing, branding, and PR.
            Built to drive visibility, generate leads, and scale your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`service-card p-6 cursor-pointer ${activeCategory === index ? 'ring-2 ring-purple-500' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              data-testid={`service-category-${index}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 flex items-center justify-between">
                <span>{category.title}</span>
                <motion.span
                  animate={{ rotate: activeCategory === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.span>
              </h3>

              {/* Service Count */}
              {activeCategory !== index && (
                <p className="text-sm text-gray-500">{category.services.length} services</p>
              )}

              {/* Expanded Services */}
              <AnimatePresence>
                {activeCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 pt-4 border-t border-gray-100 mt-3">
                      {category.services.map((service, idx) => (
                        <motion.li
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <div className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-sm font-semibold text-gray-800">{service.name}</span>
                              <p className="text-xs text-gray-500 mt-0.5">{service.desc}</p>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
