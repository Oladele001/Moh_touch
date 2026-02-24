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
                  className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center group-hover:bg-[#EF7D02] transition-colors duration-200"
                >
                 <img src="https://www.svgrepo.com/show/473806/tiktok.svg" alt="" />
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
                  className="w-5 h-5 bg-[#fff] rounded-full flex items-center justify-center group-hover:bg-[#EF7D02] transition-colors duration-200"
                >
                  <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="" className='w-5 h-5 text-white' />
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
