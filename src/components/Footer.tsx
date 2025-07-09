import React from 'react';
import { Coffee, Heart } from 'lucide-react';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative mobile-section-padding mobile-padding border-t border-white/10">
      {/* Background Sphere Elements - Responsive */}
      <div className="absolute top-10 left-4 sm:left-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 opacity-4">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      <div className="absolute bottom-10 right-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 opacity-3">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Small Repetitive Stars - Responsive */}
      <div className="absolute top-16 right-4 sm:right-16 w-2 sm:w-3 h-2 sm:h-3 opacity-60">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-20 left-4 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 opacity-70">
        <img 
          src={Stars2} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="absolute top-1/2 right-4 sm:right-10 w-2 sm:w-3 h-2 sm:h-3 opacity-50">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Saturn and Butterfly Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-10 right-10 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 opacity-50">
        <img 
          src={Saturn} 
          alt="" 
          className="w-full h-full animate-saturn-rotate"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-10 left-1/3 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 opacity-60">
        <img 
          src={Butterfly} 
          alt="" 
          className="w-full h-full animate-butterfly-flutter"
        />
      </div>
      
      <div className="mobile-container text-center">
        {/* Main Quote */}
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-primary font-medium mb-2">
            Built during midnight snacks and design spirals.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-space-400 font-primary font-normal">
            "Perfect pixels, imperfect human."
          </p>
        </div>

        {/* Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/60 font-primary font-normal mb-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Coffee size={16} className="text-amber-400 animate-pulse" />
            <span>by</span>
            <span className="font-handwritten text-space-400 font-medium">
              Charan
            </span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>© 2024</span>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 sm:mt-12 flex justify-center space-x-3 sm:space-x-4">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-space-400 rounded-full animate-twinkle" />
          <div className="w-1 h-1 bg-stellar-400 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
          <div className="w-1 h-1 bg-space-400 rounded-full animate-twinkle" style={{ animationDelay: '3s' }} />
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-stellar-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;