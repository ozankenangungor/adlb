"use client"
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const testimonials = [
    {
      name: 'Emily Richardson',
      role: 'Marketing Executive',
      content: 'Dr. Askerova has helped me overcome my anxiety and develop better coping mechanisms. Her approach is both professional and compassionate.',
      rating: 5,
      image: 'https://public.readdy.ai/ai/img_res/402758e8a4e72b9e63c6e2043683efaf.jpg'
    },
    {
      name: 'Michael Thompson',
      role: 'Software Engineer',
      content: 'The virtual sessions with Dr. Askerova have been transformative. Her expertise in cognitive behavioral therapy has given me valuable tools for managing stress.',
      rating: 5,
      image: 'https://public.readdy.ai/ai/img_res/d713ac0752a8f3a42c219a769986976e.jpg'
    },
    {
      name: 'Sarah Anderson',
      role: 'Teacher',
      content: 'Dr. Askerova creates such a safe and understanding environment. Her guidance has been invaluable in my journey towards better mental health.',
      rating: 5,
      image: 'https://public.readdy.ai/ai/img_res/b4a8b846642246e294da4ae7352133a6.jpg'
    }
  ];

  const therapyServices = [
    {
      title: 'Individual Therapy',
      price: 150,
      duration: '50 minutes',
      features: ['Personalized treatment plan', 'Secure video sessions', 'Progress tracking', 'Between-session support'],
      recommended: true
    },
    {
      title: 'Couples Therapy',
      price: 180,
      duration: '60 minutes',
      features: ['Relationship assessment', 'Communication tools', 'Joint goal setting', 'Conflict resolution strategies'],
      recommended: false
    },
    {
      title: 'Group Therapy',
      price: 80,
      duration: '90 minutes',
      features: ['Supportive environment', 'Peer learning', 'Shared experiences', 'Weekly sessions'],
      recommended: false
    }
  ];

  useEffect(() => {
    const chartDom = document.getElementById('progressChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        color: ['#8B5CF6', '#C4B5FD', '#EDE9FE'],
        series: [
          {
            name: 'Client Progress',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            data: [
              { value: 75, name: 'Progress Made' },
              { value: 15, name: 'Current Focus' },
              { value: 10, name: 'Future Goals' }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen font-['Poppins']">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-purple-800">Dr. Askerova</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Testimonials</a>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="!rounded-button bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Session
              </button>
            </div>
            <button 
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="absolute inset-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/4b661d251edfafeb8f09d0554f7e5adc.jpg"
            className="w-full h-full object-cover"
            alt="Therapy office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Begin Your Journey to Mental Wellness
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience transformative online therapy with Dr. Dilber Askerova. Professional, confidential, and personalized support from the comfort of your home.
              </p>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="!rounded-button bg-purple-600 text-white px-8 py-3 text-lg hover:bg-purple-700 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
              >
                Start Your Journey
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://public.readdy.ai/ai/img_res/96f9312aa04f93e458f49e1e44306943.jpg"
                className="rounded-lg shadow-2xl"
                alt="Dr. Dilber Askerova"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Therapy Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {therapyServices.map((service, index) => (
              <div 
                key={index}
                className={`rounded-lg p-8 ${
                  service.recommended 
                    ? 'bg-purple-50 border-2 border-purple-200 transform hover:-translate-y-1'
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <div className="text-3xl font-bold mb-2">${service.price}</div>
                <p className="text-gray-600 mb-6">{service.duration}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="fas fa-check text-purple-600 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="!rounded-button mt-8 w-full bg-purple-600 text-white py-2 hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  onClick={() => setShowBookingModal(true)}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Client Testimonials</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="!rounded-button bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-phone mr-4 text-purple-600"></i>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope mr-4 text-purple-600"></i>
                      <span>contact@draskerova.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Dr. Askerova</h4>
              <p className="text-gray-400">
                Professional online therapy services for your mental well-being.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Dr. Dilber Askerova. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="bg-white h-full w-64 p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              <a href="#about" className="block text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">About</a>
              <a href="#services" className="block text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Services</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Testimonials</a>
              <button 
                onClick={() => {
                  setShowBookingModal(true);
                  setIsMenuOpen(false);
                }}
                className="!rounded-button w-full bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Book a Session</h3>
              <button onClick={() => setShowBookingModal(false)} className="cursor-pointer">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Service
                </label>
                <select className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500">
                  <option>Individual Therapy</option>
                  <option>Couples Therapy</option>
                  <option>Group Therapy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button 
                type="submit"
                className="!rounded-button w-full bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

