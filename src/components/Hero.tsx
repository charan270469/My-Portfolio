import React from 'react';
import { ExternalLink, Code, Users, Sparkles, ArrowRight } from 'lucide-react';
import StarField from './StarField';
import FloatingElement from './FloatingElement';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToUIUX = () => {
    // First set the filter to UI/UX, then scroll to the section
    const event = new CustomEvent('setFilter', { detail: 'UI/UX' });
    window.dispatchEvent(event);
    
    const element = document.getElementById('selected-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFrontend = () => {
    // First set the filter to Dev Projects, then scroll to the section
    const event = new CustomEvent('setFilter', { detail: 'Dev Projects' });
    window.dispatchEvent(event);
    
    const element = document.getElementById('selected-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic-gradient" />
      
      {/* Large Background Sphere Elements - Responsive */}
      <div className="absolute top-20 right-4 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-3">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      <div className="absolute bottom-32 left-4 sm:left-16 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 opacity-5">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>
      <div className="absolute top-1/2 right-2 sm:right-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 opacity-4">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>
      
      {/* Small Repetitive Stars - Responsive */}
      <div className="absolute top-16 left-8 sm:left-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute top-32 right-16 sm:right-64 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img 
          src={Stars2} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="absolute bottom-40 left-10 sm:left-40 w-3 sm:w-4 h-3 sm:h-4 opacity-50">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '3s' }}
        />
      </div>
      <div className="absolute bottom-20 right-8 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 opacity-80">
        <img 
          src={Stars2} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '2s' }}
        />
      </div>
      <div className="absolute top-1/3 left-4 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 opacity-60">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '4s' }}
        />
      </div>
      <div className="absolute top-2/3 right-4 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 opacity-70">
        <img 
          src={Stars2} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
      
      <StarField />
      
      {/* Appropriately Sized Animated Assets - Responsive */}
      <div className="absolute top-16 right-8 sm:right-32 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
        <img 
          src={Astronaut} 
          alt="Astronaut" 
          className="w-full h-full animate-astronaut-float"
        />
      </div>
      
      <div className="absolute top-40 left-4 sm:left-20 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12">
        <img 
          src={Butterfly} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter"
        />
      </div>
      
      <div className="absolute bottom-40 right-10 sm:right-40 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
        <img 
          src={Saturn} 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-60"
        />
      </div>
      
      <div className="absolute bottom-32 left-8 sm:left-32 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
        <img 
          src={Butterfly} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-70"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12">
        <img 
          src={Saturn} 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-40"
          style={{ animationDelay: '5s' }}
        />
      </div>
      
      {/* Rocket Animation - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/3 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 animate-rocket-fly opacity-70">
        <img 
          src={Rocket} 
          alt="Rocket" 
          className="w-full h-full"
        />
      </div>
      
      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <FloatingElement icon="palette" className="top-20 left-20 animate-float" />
        <FloatingElement icon="code" className="top-32 right-32 animate-float-delayed" />
        <FloatingElement icon="zap" className="bottom-40 left-32 animate-float-slow" />
        <FloatingElement icon="coffee" className="bottom-20 right-20 animate-float" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center mobile-padding max-w-6xl mx-auto">
        {/* Designer Badge */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/70 text-xs sm:text-sm font-primary font-medium shadow-lg">
            <Sparkles size={14} className="text-space-400" />
            <span className="hidden sm:inline">Available for new projects</span>
            <span className="sm:hidden">Available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Main Title with Enhanced Typography */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-3 sm:mb-4">
            <span className="text-sm sm:text-lg md:text-xl text-white/60 font-primary font-light tracking-wider uppercase">
              Portfolio 2025
            </span>
          </div>
          
          <h1 className="hero-title font-bold text-white mb-4 sm:mb-6 leading-[0.9] tracking-tight">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-space-400 via-stellar-400 to-space-300 bg-clip-text text-transparent">
                Charan
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-space-400/50 to-stellar-400/50 rounded-full" />
            </span>
          </h1>
          
          <div className="hero-subtitle text-white font-semibold mb-3 sm:mb-4 tracking-wide">
            <span className="text-white">Designer</span>
            <span className="mx-2 sm:mx-3 text-space-400">×</span>
            <span className="text-white">Developer</span>
            <span className="mx-2 sm:mx-3 text-stellar-400">×</span>
            <span className="text-white">Vibe Curator</span>
          </div>
        </div>

        {/* Enhanced Tagline */}
        <div className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-base sm:text-xl md:text-2xl text-white/80 leading-relaxed font-primary font-medium mb-3 sm:mb-4">
            I build with curiosity, design with intention, and leave space for a little chaos — like a black hole pulling in sparks of unexpected magic.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-space-300 font-primary font-normal">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-stellar-400" />
              Warning: may contain outbursts of pure creative joy.
            </span>
          </p>
        </div>

        {/* Enhanced Call to Actions - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <button 
            onClick={() => {
              const event = new CustomEvent('setFilter', { detail: 'All' });
              window.dispatchEvent(event);
              const element = document.getElementById('selected-work');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-stellar-500 to-stellar-600 text-white rounded-2xl font-primary font-semibold transition-all duration-500 hover:from-stellar-400 hover:to-stellar-500 hover:scale-105 hover:shadow-2xl hover:shadow-stellar-500/30 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Code size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>View Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white/20 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl font-primary font-semibold transition-all duration-500 hover:bg-white/30 hover:border-white/30 hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
          >
            <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Let's Connect</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Enhanced Design Stats/Metrics - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 text-white/60 font-primary">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white mb-2">50+</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white mb-2">3+</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white mb-2">10+</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">∞</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium">Chai Cups</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 sm:mt-12 flex justify-center space-x-3 sm:space-x-4">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-space-400 rounded-full animate-twinkle" />
          <div className="w-1 sm:w-1 h-1 sm:h-1 bg-stellar-400 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
          <div className="w-1 sm:w-1 h-1 sm:h-1 bg-space-400 rounded-full animate-twinkle" style={{ animationDelay: '3s' }} />
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-stellar-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Decorative Corner Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-8 left-8 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-white/10 rounded-tl-lg" />
      <div className="hidden sm:block absolute top-8 right-8 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-t-2 border-white/10 rounded-tr-lg" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-b-2 border-white/10 rounded-bl-lg" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-white/10 rounded-br-lg" />
    </section>
  );
};

export default Hero;