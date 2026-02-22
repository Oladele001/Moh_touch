'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beauty background"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010313]/80 via-[#051F40]/70 to-[#0A3064]/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Moh_touch
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="block text-3xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-[#DcB798] to-[#EF7D02] bg-clip-text text-transparent"
          >
            Beauty Arena
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="font-poppins text-xl md:text-2xl lg:text-3xl mb-8 font-light text-[#DcB798]"
        >
          Discover Your True Beauty Potential
        </motion.p>
        
        <motion.button 
          onClick={scrollToBooking}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 125, 2, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-poppins font-medium text-white bg-gradient-to-r from-[#EF7D02] to-[#B662229] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#326DA3]/25 cursor-pointer"
        >
          <span className="relative z-10">Book Now</span>
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-[#B662229] to-[#010313]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#DcB798]"
          />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.svg 
          whileInView={{ y: [0, 10, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </motion.section>
  );
}
