import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, MapPin, Users, ArrowRight } from 'lucide-react';

const EventManagement = ({ onContactClick }) => {
  const eventServices = [
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional events tailored for brand building and business networking.',
    },
    {
      icon: MapPin,
      title: 'Domestic Events',
      description: 'End-to-end event planning across India with complete logistical support.',
    },
    {
      icon: Globe,
      title: 'International Events',
      description: 'Global event management with premium planning and execution.',
    },
    {
      icon: Calendar,
      title: 'Exhibitions & Trade Shows',
      description: 'Strategic planning to maximize brand visibility and leads.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" data-testid="event-management-section">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12267669/pexels-photo-12267669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm uppercase tracking-wider font-bold text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full mb-6 border border-pink-500/20">
              Loyalty Service
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Event Management <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-white font-semibold mb-4">
              We Create Experiences. We Build Impact.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We design and execute events that strengthen relationships, elevate brand perception, 
              and create unforgettable impressions across customers, partners, and stakeholders.
            </p>
            <motion.button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 primary-btn px-6 py-3 rounded-full text-white font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="event-cta-btn"
            >
              Plan Your Event
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {eventServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-dark p-6 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`event-service-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
