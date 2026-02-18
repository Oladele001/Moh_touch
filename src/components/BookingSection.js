'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Bridal Glam',
    'Traditional Glam',
    'Birthday Glam',
    'Creative Glam',
    'Training',
    'Lash Extensions',
    'Cluster Lashes',
    'Strip Lashes'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="font-poppins text-lg text-gray-600">
            Ready to transform your look? Book your appointment with us today
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p className="font-poppins">Thank you for booking! We'll contact you shortly.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins ${
                  errors.service ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your location"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600 font-poppins">{errors.location}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600 font-poppins">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 font-poppins resize-none"
              placeholder="Any special requests or details..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-poppins font-medium rounded-lg hover:from-pink-600 hover:to-pink-700 focus:ring-4 focus:ring-pink-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pink-500/25"
          >
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </section>
  );
}
