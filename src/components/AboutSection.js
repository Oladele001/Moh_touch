'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!imageError ? (
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed724bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="About Moh_touch Beauty Arena"
                  className="w-full h-96 lg:h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-96 lg:h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                  <span className="text-pink-500 text-6xl">💄</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold text-pink-600">Moh_touch Beauty Arena</span>, where beauty meets artistry and every client leaves feeling transformed and confident.
              </p>
              
              <p className="font-poppins text-gray-600 leading-relaxed">
                Founded with a passion for enhancing natural beauty, we specialize in premium makeup services that celebrate your unique features. From bridal glam to creative expressions, our expert team combines technical skill with artistic vision to deliver stunning results.
              </p>
              
              <p className="font-poppins text-gray-600 leading-relaxed">
                Located in the heart of Ibadan, our beauty arena is more than just a salon—it's a sanctuary where beauty dreams come to life. We believe in the power of makeup not just to transform appearances, but to boost confidence and celebrate individuality.
              </p>
            </div>

            <div className="pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 font-playfair">500+</div>
                  <div className="font-poppins text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 font-playfair">5+</div>
                  <div className="font-poppins text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
