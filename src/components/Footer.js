'use client';

import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gradient-to-br from-[#010313] via-[#051F40] to-[#0A3064] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <motion.div 
            variants={socialVariants}
            className="space-y-4"
          >
            <h3 className="font-playfair text-2xl font-bold text-[#DcB798]">
              Moh_touch Beauty Arena
            </h3>
            <p className="font-poppins text-gray-300 text-sm leading-relaxed">
              Your premier destination for professional beauty services and makeup artistry in Ibadan.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            variants={socialVariants}
            className="space-y-4"
          >
            <h4 className="font-poppins text-lg font-semibold text-[#EF7D02]">
              Contact Us
            </h4>
            <div className="space-y-2">
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2"
              >
                <svg className="w-5 h-5 text-[#DcB798]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-poppins text-gray-300">+234 8108851145</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2"
              >
                <svg className="w-5 h-5 text-[#DcB798]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-poppins text-gray-300">Ibadan, Nigeria</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div 
            variants={socialVariants}
            className="space-y-4"
          >
            <h4 className="font-poppins text-lg font-semibold text-[#EF7D02]">
              Follow Us
            </h4>
            <div className="space-y-3">
              <motion.a
                href="https://tiktok.com/@moh_touch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-[#DcB798] transition-colors duration-200 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-[#051F40] rounded-full flex items-center justify-center group-hover:bg-[#EF7D02] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.02 4.03-.01 8.05.02 12.07z"/>
                  </svg>
                </motion.div>
                <span className="font-poppins">@moh_touch</span>
              </motion.a>
              
              <motion.a
                href="https://instagram.com/@moh_touch_artistry"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-[#DcB798] transition-colors duration-200 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-[#051F40] rounded-full flex items-center justify-center group-hover:bg-[#EF7D02] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.059-1.281-.073-1.689-.073-4.948 0-3.259.014-3.668.072-4.947.2-4.358 2.618-6.78 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259-.014 3.668-.072 4.948-.196 4.354-2.617 6.78-6.979 6.98-1.281.058-1.689.073-4.949.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </motion.div>
                <span className="font-poppins">@moh_touch_artistry</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#DcB798]/30"
        >
          <div className="text-center">
            <p className="font-poppins text-gray-400 text-sm">
              2026 Moh_touch Beauty Arena. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
