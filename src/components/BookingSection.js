'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Bridal Glam',
    'Traditional Glam',
    'Birthday Glam',
    'Creative Glam',
    'Training',
    'Lash Extensions',
    'Cluster Lashes',
    'Strip Lashes'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Format the WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `🌟 *New Booking Request - Moh_touch Beauty Arena* 🌟\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `💄 *Service:* ${formData.service}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `📅 *Preferred Date:* ${formData.date}\n` +
      `💬 *Message:* ${formData.message || 'No additional message'}\n\n` +
      `🎨 *Please contact me to confirm my appointment!*`
    );
    
    // WhatsApp phone number (remove any non-digit characters for the API)
    const phoneNumber = '+2348108851145';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${+2348108851145}?text=${whatsappMessage}`;
    
    // Simulate loading and then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <motion.section 
      id="booking-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-gradient-to-br from-[#051F40] via-[#0A3064] to-[#010313]"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="font-poppins text-lg text-[#DcB798]">
            Ready to transform your look? Book your appointment with us today
          </p>
        </motion.div>

        {submitSuccess && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
          >
            <p className="font-poppins">🎉 Booking details sent to WhatsApp! Opening WhatsApp now...</p>
          </motion.div>
        )}

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 bg-gradient-to-br from-[#DcB798]/10 to-[#EF7D02]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#DcB798]/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins bg-white/90 backdrop-blur-sm ${
                  errors.name ? 'border-red-500' : 'border-[#DcB798]/50'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins bg-white/90 backdrop-blur-sm ${
                  errors.phone ? 'border-red-500' : 'border-[#DcB798]/50'
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
                Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins bg-white/90 backdrop-blur-sm ${
                  errors.service ? 'border-red-500' : 'border-[#DcB798]/50'
                }`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins bg-white/90 backdrop-blur-sm ${
                  errors.location ? 'border-red-500' : 'border-[#DcB798]/50'
                }`}
                placeholder="Your location"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.location}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins bg-white/90 backdrop-blur-sm ${
                errors.date ? 'border-red-500' : 'border-[#DcB798]/50'
              }`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600 font-poppins">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block font-poppins text-sm font-medium text-[#DcB798] mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-[#DcB798]/50 rounded-lg focus:ring-2 focus:ring-[#EF7D02] focus:border-transparent transition-all duration-200 font-poppins resize-none bg-white/90 backdrop-blur-sm"
              placeholder="Any special requests or details..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-poppins font-medium rounded-lg hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </motion.svg>
                <span>Sending to WhatsApp...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-1.007-.273-.14-.493-.21-.7-.21-.253 0-.504.14-.683.274-.173.133-.92.883-1.781 1.232-.267.09-.518.162-.747.162-.136 0-.276-.05-.428-.15-.372-.292-.894.729-1.201 1.125-.307-.395-.23-.607-.224-.806.008-.181.035-.363.147-.534.346-.336.48-.83 1.12-2.11 1.12-2.11.045-.1.172-.262.268-.401.096-.14.269-.226.533-.34.96-.48 1.782-1.303 1.782-1.303.14 0 .278.055.416.166.084.074.173.173.252.267.154.094.312.267.425.393.261.319.419.699.295.51-.024.283-.147.571-.371.848-.828 1.264-1.865 1.264-1.865.07-.398.019-.777.019-1.109 0-.278-.055-.548-.149-.817-.374-1.048-1.093-1.093-.267 0-.523-.045-.747.127-.224.082-.428.216-.6.398z"/>
                  <path d="M12.025 0C5.383 0 0 5.383 0 12.025c0 2.125.717 4.18 2.019 5.825.055.398.074.777.074 1.109 0 .278-.055.548-.149.817-.374 1.048-1.093 1.093-.267 0-.523-.045-.747.127-.224.082-.428.216-.6.398 0 0-.747-1.782-1.232-1.782-.267 0-.518.072-.747.162-.136 0-.276.05-.428.15-.372.292-.894.729-1.201 1.125-.307.395-.23-.607-.224-.806.008-.181.035-.363.147-.534.346-.336.48-.83 1.12-2.11 1.12-2.11.045-.1.172-.262.268-.401.096-.14.269-.226.533-.34.96-.48 1.782-1.303 1.782-1.303.14 0 .278.055.416.166.084.074.173.173.252.267.154.094.312.267.425.393.261.319.419.699.295.51-.024.283-.147.571-.371.848-.828 1.264-1.865 1.264-1.865.07-.398.019-.777.019-1.109 0-.278-.055-.548-.149-.817-.374-1.048-1.093-1.093-.267 0-.523-.045-.747.127-.224.082-.428.216-.6.398z"/>
                </svg>
                <span>Book via WhatsApp</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
