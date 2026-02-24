'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function GallerySection() {
  const [imageErrors, setImageErrors] = useState({});

  const galleryImages = [
    {
      id: 1,
      src: "./funke.jpeg",
      alt: "Glam makeup look 1"
    },
    {
      id: 2,
      src: "./img01.jpeg",
      alt: "Bridal makeup"
    },
    {
      id: 3,
      src: "./img02.jpeg",
      alt: "Creative makeup"
    },
    {
      id: 4,
      src: "./img03.jpeg",
      alt: "Beauty makeup"
    },
    {
      id: 5,
      src: "./img04.jpeg",
      alt: "Professional makeup"
    },
    {
      id: 6,
      src: "./img05.jpeg",
      alt: "Glamorous look"
    }
  ];

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#010313] via-[#051F40] to-[#0A3064]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Our Gallery
          </h2>
          <p className="font-poppins text-lg text-[#DcB798] max-w-2xl mx-auto">
            Explore our stunning makeup transformations and beauty creations
          </p>
        </motion.div>

        <motion.div 
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(220, 183, 152, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-[#DcB798]/30 hover:border-[#EF7D02] backdrop-blur-sm"
            >
              <div className="aspect-square overflow-hidden">
                {!imageErrors[image.id] ? (
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    onError={() => handleImageError(image.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#DcB798] to-[#EF7D02] flex items-center justify-center">
                    <span className="text-[#010313] text-4xl">💄</span>
                  </div>
                )}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[#010313]/80 via-[#051F40]/60 to-transparent"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <p className="font-poppins text-sm font-medium text-[#DcB798]">{image.alt}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
