import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Rocket, BarChart3, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Understand & Strategize',
      description: 'We analyze your brand, audience, and business goals to craft a clear growth strategy.',
      subtext: 'Building a strong foundation with content, ads, and positioning aligned to outcomes.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Create & Execute',
      description: 'We produce high-impact creatives, content, and campaigns across all channels.',
      subtext: 'From shoots to ads to design — everything executed with speed and precision.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch & Amplify',
      description: 'We run performance campaigns, outreach, and distribution to generate leads.',
      subtext: 'Maximizing reach through ads, social media, and targeted engagement strategies.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Track & Optimize',
      description: 'We continuously monitor performance, analyze data, and refine strategies.',
      subtext: 'Ensuring better ROI, improved conversions, and scalable business growth.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 section-white" data-testid="how-it-works-section">
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
            Our Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How <span className="gradient-text">Grawish</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            From Ideas to Impact — A seamless 4-step journey that transforms your brand
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              data-testid={`step-${index}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent z-0" />
              )}

              <div className="card-elevated p-8 relative z-10">
                {/* Number Badge */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-heading font-black text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-sm text-gray-500">{step.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
