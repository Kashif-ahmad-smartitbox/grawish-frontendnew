import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const services = [
  'Social Media Management',
  'Content Production',
  'Design & Branding',
  'Performance Marketing',
  'PR & Media Visibility',
  'SEO & Growth',
  'Website Development',
  'LinkedIn Management',
  'Event Management',
  'Gifting & Merchandise',
];

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError('Name and email are required.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      await axios.post(`${API_URL}/api/leads`, form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  const resetAndClose = () => {
    setStatus('idle');
    setError('');
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetAndClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            data-testid="contact-modal"
          >
            {/* Close button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              data-testid="contact-modal-close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Header gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-3xl" />

            <div className="p-8">
              {status === 'success' ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2" data-testid="contact-success-heading">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've received your details. Our team will reach out within 24 hours.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="primary-btn px-8 py-3 rounded-full text-white font-semibold"
                    data-testid="contact-success-close"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    Book Free Consultation
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Tell us about your brand and goals. We'll craft a growth plan for you.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50"
                          data-testid="contact-name-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50"
                          data-testid="contact-email-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50"
                          data-testid="contact-phone-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50"
                          data-testid="contact-company-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 text-gray-700"
                        data-testid="contact-service-select"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your goals..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 resize-none"
                        data-testid="contact-message-input"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm" data-testid="contact-error">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full primary-btn py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                      data-testid="contact-submit-btn"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
