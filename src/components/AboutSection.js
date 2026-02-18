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

        {/* CEO Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our CEO
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* CEO Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-pink-200">
                    {!imageError ? (
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="CEO of Moh_touch Beauty Arena"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                        <span className="text-pink-500 text-6xl">👑</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✨
                  </div>
                </div>
              </div>

              {/* CEO Information */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Moh Badmus
                </h4>
                <p className="font-poppins text-lg text-pink-600 font-medium mb-4">
                  Founder & CEO
                </p>
                
                <blockquote className="relative">
                  <svg className="absolute -top-4 -left-2 w-8 h-8 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-poppins text-gray-600 italic text-lg leading-relaxed mb-4 pl-6">
                    "Beauty is not just about makeup, it's about confidence, self-expression, and celebrating your unique essence. At Moh_touch Beauty Arena, we don't just enhance features—we empower souls."
                  </p>
                </blockquote>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-poppins font-medium">
                    💄 Makeup Artist
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-poppins font-medium">
                    🎨 Beauty Expert
                  </span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-poppins font-medium">
                    👑 Industry Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
