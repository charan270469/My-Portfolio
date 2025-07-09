import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle, Instagram } from 'lucide-react';
import sphereImg from '../Assets/Sphere.png';
import stars1Img from '../Assets/Stars1.png';
import stars2Img from '../Assets/Stars2.png';
import butterflyImg from '../Assets/Butterfly.png';
import saturnImg from '../Assets/Saturn.png';
import astronautImg from '../Assets/Astronaut.png';
import rocketImg from '../Assets/Rocket.png';
import me1Img from '../Assets/me1.jpg';
import medmind from '../Assets/image copy.png';
import plantverse from '../Assets/image.png';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative mobile-section-padding mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />

      {/* Background Elements - Responsive */}
      <div className="absolute top-20 left-4 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-3">
        <img
          src={sphereImg}
          alt=""
          className="w-full h-full animate-sphere-pulse"
        />
      </div>

      <div className="absolute bottom-20 right-4 sm:right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 opacity-4">
        <img
          src={sphereImg}
          alt=""
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Stars - Responsive */}
      <div className="absolute top-32 right-8 sm:right-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img
          src={stars1Img}
          alt=""
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-40 left-10 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img
          src={stars2Img}
          alt=""
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-40 right-32 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>

      <div className="hidden sm:block absolute bottom-32 left-40 w-52 sm:w-60 h-52 sm:h-60">
        <img 
          src={saturnImg} 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="mobile-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading font-bold text-white mb-4">
          Message me. It might just make my day!!
          </h2>
          <p className="mobile-text text-white/70 font-primary">
            Got a project in mind? Let's chat about it over virtual chai ☕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info - Reorganized Layout */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                Let's Connect
              </h3>

              {/* Contact Items in Horizontal Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 group hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-space-500 to-space-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                      <Mail size={20} className="text-white" />
                    </div>
                    <p className="text-white/60 text-xs mb-1">Email</p>
                    <a
                      href="mailto:narahc2704@gmail.com"
                      className="text-white hover:text-space-300 transition-colors duration-300 text-sm font-medium"
                    >
                      narahc2704@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 group hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-stellar-500 to-stellar-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <p className="text-white/60 text-xs mb-1">Location</p>
                    <p className="text-white text-sm font-medium">Hyderabad, India</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 group hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-space-500 to-stellar-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                      <Phone size={20} className="text-white" />
                    </div>
                    <p className="text-white/60 text-xs mb-1">Phone</p>
                    <a
                      href="tel:8074057617"
                      className="text-white hover:text-space-300 transition-colors duration-300 text-sm font-medium"
                    >
                      8074057617
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">
                Find me online
              </h4>
              <div className="flex justify-center sm:justify-start gap-4">
                <a
                  href="https://github.com/charan270469?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-charan-77071b281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://instagram.com/charan.dzins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                >
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Send Message
            </h3>

            <form action="https://formspree.io/f/xanjgorj" method="POST" className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                    errors.name
                      ? 'border-red-700 focus:border-red-400 focus:ring-red-400/20'
                      : 'border-white/20 focus:border-space-400 focus:ring-space-400/20'
                  }`}
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                    errors.email
                      ? 'border-red-700 focus:border-red-400 focus:ring-red-400/20'
                      : 'border-white/20 focus:border-space-400 focus:ring-space-400/20'
                  }`}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                    errors.subject
                      ? 'border-red-700 focus:border-red-400 focus:ring-red-400/20'
                      : 'border-white/20 focus:border-space-400 focus:ring-space-400/20'
                  }`}
                  required
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, or just say hi!"
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm sm:text-base ${
                    errors.message
                      ? 'border-red-700 focus:border-red-400 focus:ring-red-400/20'
                      : 'border-white/20 focus:border-space-400 focus:ring-space-400/20'
                  }`}
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-space-500 to-space-600 hover:from-space-400 hover:to-space-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;