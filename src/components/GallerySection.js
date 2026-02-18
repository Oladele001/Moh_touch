'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [imageErrors, setImageErrors] = useState({});

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Glam makeup look 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bridal makeup"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582797583772-8345b04a3229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Creative makeup"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beauty makeup"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1597123554248-4fc257825d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional makeup"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Glamorous look"
    }
  ];

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our stunning makeup transformations and beauty creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                {!imageErrors[image.id] ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(image.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <span className="text-pink-400 text-4xl">💄</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-poppins text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
