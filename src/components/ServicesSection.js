'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ServicesSection() {
  const services = [
    {
      title: "Bridal Glam",
      description: "Complete bridal makeup package for your special day",
      icon: "👰",
      bgGradient: "from-[#DcB798] to-[#EF7D02]",
      textColor: "text-[#010313]",
      hoverBorder: "hover:border-[#B662229]"
    },
    {
      title: "Traditional Glam",
      description: "Cultural and traditional makeup styling",
      icon: "🎭",
      bgGradient: "from-[#051F40] to-[#0A3064]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#326DA3]"
    },
    {
      title: "Birthday Glam",
      description: "Glamorous makeup for birthday celebrations",
      icon: "🎂",
      bgGradient: "from-[#EF7D02] to-[#B662229]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#DcB798]"
    },
    {
      title: "Creative Glam",
      description: "Artistic and creative makeup expressions",
      icon: "🎨",
      bgGradient: "from-[#0A3064] to-[#326DA3]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#051F40]"
    },
    {
      title: "Training",
      description: "Professional makeup artistry training",
      icon: "📚",
      bgGradient: "from-[#B662229] to-[#010313]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#EF7D02]"
    },
    {
      title: "Lash Extensions",
      description: "Professional eyelash extensions",
      icon: "👁️",
      bgGradient: "from-[#DcB798] to-[#051F40]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#0A3064]"
    },
    {
      title: "Cluster Lashes",
      description: "Beautiful cluster lash applications",
      icon: "✨",
      bgGradient: "from-[#326DA3] to-[#EF7D02]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#B662229]"
    },
    {
      title: "Strip Lashes",
      description: "Premium strip lash applications",
      icon: "🦋",
      bgGradient: "from-[#010313] to-[#DcB798]",
      textColor: "text-white",
      hoverBorder: "hover:border-[#326DA3]"
    }
  ];

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
            Our Services
          </h2>
          <p className="font-poppins text-lg text-[#DcB798] max-w-2xl mx-auto">
            Discover our premium beauty services designed to enhance your natural beauty and boost your confidence
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(239, 125, 2, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`group bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden border-2 border-transparent ${service.hoverBorder} backdrop-blur-sm`}
            >
              <div className="p-8 text-center relative">
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className={`font-poppins text-xl font-bold ${service.textColor} mb-3 drop-shadow-md`}>
                    {service.title}
                  </h3>
                  <p className={`font-poppins ${service.textColor} text-sm leading-relaxed opacity-90`}>
                    {service.description}
                  </p>
                </div>
              </div>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`h-2 bg-gradient-to-r ${service.hoverBorder.replace('hover:border-', '')} transform origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
