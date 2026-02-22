'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const storyImageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut"
    }
  }
};

const ceoVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const ceoImageVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: 180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const [storyImageError, setStoryImageError] = useState(false);

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutVariants}
      className="py-20 px-4 bg-gradient-to-r from-[#051F40] via-[#0A3064] to-[#010313]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Image Section */}
          <motion.div 
            variants={storyImageVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!storyImageError ? (
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Story - Moh_touch Beauty Arena"
                  className="w-full h-96 lg:h-full object-cover"
                  onError={() => setStoryImageError(true)}
                />
              ) : (
                <div className="w-full h-96 lg:h-full bg-gradient-to-br from-[#DcB798] to-[#EF7D02] flex items-center justify-center">
                  <span className="text-[#010313] text-6xl">💄</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#EF7D02]/20 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-[#010313] font-poppins text-sm font-semibold">Our Journey</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={contentVariants}
            className="space-y-6"
          >
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#DcB798] to-[#EF7D02] mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="font-poppins text-lg text-[#DcB798] leading-relaxed">
                Welcome to <span className="font-semibold text-[#EF7D02]">Moh_touch Beauty Arena</span>, where beauty meets artistry and every client leaves feeling transformed and confident.
              </p>
              
              <p className="font-poppins text-gray-300 leading-relaxed">
                Founded with a passion for enhancing natural beauty, we specialize in premium makeup services that celebrate your unique features. From bridal glam to creative expressions, our expert team combines technical skill with artistic vision to deliver stunning results.
              </p>
              
              <p className="font-poppins text-gray-300 leading-relaxed">
                Located in the heart of Ibadan, our beauty arena is more than just a salon—it's a sanctuary where beauty dreams come to life. We believe in the power of makeup not just to transform appearances, but to boost confidence and celebrate individuality.
              </p>
            </div>

            <motion.div 
              variants={statsVariants}
              className="pt-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#EF7D02] font-playfair">500+</div>
                  <div className="font-poppins text-sm text-[#DcB798]">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#326DA3] font-playfair">5+</div>
                  <div className="font-poppins text-sm text-[#DcB798]">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CEO Section */}
        <motion.div 
          variants={ceoVariants}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our CEO
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#DcB798] to-[#EF7D02] mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-[#DcB798]/10 to-[#EF7D02]/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-[#DcB798]/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* CEO Image */}
              <motion.div 
                variants={ceoImageVariants}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#EF7D02]">
                    {!imageError ? (
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="CEO Moh Badmus - Moh_touch Beauty Arena"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#DcB798] to-[#EF7D02] flex items-center justify-center">
                        <span className="text-[#010313] text-6xl">👑</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-[#EF7D02] to-[#B662229] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    ✨
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute -top-2 -left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                  >
                    <span className="text-[#010313] font-poppins text-xs font-semibold">CEO</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* CEO Information */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 text-center md:text-left"
              >
                <h4 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                  Moh Badmus
                </h4>
                <p className="font-poppins text-lg text-[#DcB798] font-medium mb-4">
                  Founder & CEO
                </p>
                
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <svg className="absolute -top-4 -left-2 w-8 h-8 text-[#EF7D02]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-poppins text-gray-300 italic text-lg leading-relaxed mb-4 pl-6">
                    "Beauty is not just about makeup, it's about confidence, self-expression, and celebrating your unique essence. At Moh_touch Beauty Arena, we don't just enhance features—we empower souls."
                  </p>
                </motion.blockquote>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 justify-center md:justify-start mt-6"
                >
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#EF7D02] to-[#B662229] text-white rounded-full text-sm font-poppins font-medium shadow-lg"
                  >
                    💄 Makeup Artist
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#326DA3] to-[#0A3064] text-white rounded-full text-sm font-poppins font-medium shadow-lg"
                  >
                    🎨 Beauty Expert
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#DcB798] to-[#051F40] text-white rounded-full text-sm font-poppins font-medium shadow-lg"
                  >
                    👑 Industry Leader
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
