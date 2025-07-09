import React from 'react';
import { Palette, Layers, Code } from 'lucide-react';
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

const WhatIDoSection: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      projects: []
    },
    {
      icon: Layers,
      title: 'Graphic Design',
      description: 'From logos to t-shirts, bringing visual ideas to life with style.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      projects: []
    },
    {
      icon: Code,
      title: 'Frontend Dev',
      description: 'Building beautiful, responsive user interfaces with modern technologies.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      projects: []
    }
  ];

  return (
    <section className="relative mobile-section-padding mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      
      {/* Background Elements - Responsive */}
      <div className="absolute top-20 right-4 sm:right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 opacity-4">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      <div className="absolute bottom-20 left-4 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 opacity-5">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Stars - Responsive */}
      <div className="absolute top-16 left-8 sm:left-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img 
          src="/src/Assets/Stars1.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-32 right-8 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img 
          src="/src/Assets/Stars2.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-40 left-40 w-10 sm:w-12 h-10 sm:h-12">
        <img 
          src="/src/Assets/Saturn.png" 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
        />
      </div>
      
      <div className="mobile-container text-center relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="mobile-heading font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="mobile-text text-white/70 font-primary">
            Three things I'm genuinely good at (and enjoy doing)
          </p>
        </div>

        {/* Services Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white sm:w-8 sm:h-8" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-4 sm:mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;