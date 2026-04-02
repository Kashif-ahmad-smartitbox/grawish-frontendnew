import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, Calendar, Package, ArrowRight } from 'lucide-react';

const GiftingMerchandise = ({ onContactClick }) => {
  const giftingServices = [
    {
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Premium and customized gifts for clients, partners, and stakeholders.',
    },
    {
      icon: Users,
      title: 'Employee Gifting',
      description: 'Thoughtful gifting solutions to boost morale and engagement.',
    },
    {
      icon: Calendar,
      title: 'Festive Gifting',
      description: 'Curated gift hampers for festivals and special occasions.',
    },
    {
      icon: Package,
      title: 'Promotional Merchandise',
      description: 'Branded merchandise that increases visibility and recall.',
    },
  ];

  return (
    <section className="relative py-24 section-purple-soft" data-testid="gifting-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {giftingServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="card-elevated p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`gifting-service-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm uppercase tracking-wider font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-full mb-6">
              Reward Management
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Gifting & Merchandise <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-800 font-semibold mb-4">
              We Create Impressions. We Build Recall.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gifting is more than a gesture — it's a powerful branding tool that strengthens 
              relationships and enhances brand recall. We design customized gifting solutions 
              that connect emotionally with your audience.
            </p>
            <motion.button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 primary-btn px-6 py-3 rounded-full text-white font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="gifting-cta-btn"
            >
              Explore Gifting Options
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftingMerchandise;
