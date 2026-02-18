export default function ServicesSection() {
  const services = [
    {
      title: "Bridal Glam",
      description: "Complete bridal makeup package for your special day",
      icon: "👰"
    },
    {
      title: "Traditional Glam",
      description: "Cultural and traditional makeup styling",
      icon: "🎭"
    },
    {
      title: "Birthday Glam",
      description: "Glamorous makeup for birthday celebrations",
      icon: "🎂"
    },
    {
      title: "Creative Glam",
      description: "Artistic and creative makeup expressions",
      icon: "🎨"
    },
    {
      title: "Training",
      description: "Professional makeup artistry training",
      icon: "📚"
    },
    {
      title: "Lash Extensions",
      description: "Professional eyelash extensions",
      icon: "👁️"
    },
    {
      title: "Cluster Lashes",
      description: "Beautiful cluster lash applications",
      icon: "✨"
    },
    {
      title: "Strip Lashes",
      description: "Premium strip lash applications",
      icon: "🦋"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium beauty services designed to enhance your natural beauty and boost your confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-pink-100"
            >
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-pink-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
