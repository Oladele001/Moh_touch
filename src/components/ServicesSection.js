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
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="font-poppins text-lg text-[#DcB798] max-w-2xl mx-auto">
            Discover our premium beauty services designed to enhance your natural beauty and boost your confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden border-2 border-transparent ${service.hoverBorder} backdrop-blur-sm`}
            >
              <div className="p-8 text-center relative">
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className={`font-poppins text-xl font-bold ${service.textColor} mb-3 drop-shadow-md`}>
                    {service.title}
                  </h3>
                  <p className={`font-poppins ${service.textColor} text-sm leading-relaxed opacity-90`}>
                    {service.description}
                  </p>
                </div>
              </div>
              <div className={`h-2 bg-gradient-to-r ${service.hoverBorder.replace('hover:border-', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
