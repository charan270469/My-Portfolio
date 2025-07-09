import React from 'react';
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
import mouseImg from '../Assets/Mouse.png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
console.debug(astronautImg, rocketImg, medmind, plantverse, mouseImg);
const PersonalitySection: React.FC = () => {
  const traits = [
    { label: 'Creative', position: 'top-4 left-8', delay: '0s' },
    { label: 'Patient', position: 'top-15 right-14', delay: '1s' },
    { label: 'Iterative', position: 'bottom-20 left-16', delay: '2s' },
    { label: 'Smart Slacker', position: 'bottom-12 right-14', delay: '3s' },
  ];

  return (
    <section className="relative mobile-section-padding mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      
      {/* Large Background Sphere - Responsive */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 opacity-3">
        <img 
          src={sphereImg} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      {/* Additional Background Spheres - Responsive */}
      <div className="absolute top-20 right-4 sm:right-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 opacity-5">
        <img 
          src={sphereImg} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Small Repetitive Stars - Responsive */}
      <div className="absolute top-16 left-4 sm:left-16 w-2 sm:w-3 h-2 sm:h-3 opacity-60">
        <img 
          src={stars1Img} 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-20 right-4 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 opacity-70">
        <img 
          src={stars2Img} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '2s' }}
        />
      </div>
      <div className="absolute top-1/3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 opacity-50">
        <img 
          src={stars1Img} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '4s' }}
        />
      </div>
      
      {/* Floating Butterflies and Saturn - Hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-16 left-20 w-10 sm:w-12 h-10 sm:h-12">
        <img 
          src={saturnImg} 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      <div className="mobile-container relative z-10">
        {/* Main Content with Profile Photo - Mobile Responsive */}
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
          {/* Text Content */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-primary font-normal">
                Lazy but obsessed with perfect pixels. I might procrastinate for 2 hours, but design 10 screens in one. A B.Tech student by day, a graphic designer by instinct, and a chai addict by lifestyle. I'm on a UI/UX mission — dabbling in visuals, jamming with JavaScript, and venturing through full-stack adventures. When I lock onto something, it's like entering warp speed: consider it done.{' '}
                <span className="font-handwritten text-space-400">
                  A space enthusiast by heart and a poet when no one's watching — I build interfaces with stardust and verses.
                </span>
              </p>
            </div>

            {/* Orbiting Traits - Hidden on mobile for better performance */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className={`absolute ${trait.position} animate-float`}
                  style={{ animationDelay: trait.delay }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-space-400/20 rounded-full animate-pulse-glow" />
                    <div className="relative bg-gradient-to-r from-space-400/80 to-stellar-400/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-primary font-medium border border-white/20 whitespace-nowrap shadow-lg">
                      {trait.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Photo - Mobile Responsive */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-space-400/20 to-stellar-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Main photo container */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-3 sm:p-4 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src={me1Img}
                  alt="Charan - Designer & Developer"
                  className="w-64 sm:w-72 md:w-80 h-80 sm:h-90 md:h-96 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
              </div>

              {/* Floating decorative elements around photo - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-space-400 to-stellar-400 rounded-full animate-pulse opacity-60" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-stellar-400 to-space-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
              <div className="hidden sm:block absolute top-1/2 -left-6 w-3 sm:w-4 h-3 sm:h-4 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
              <div className="hidden sm:block absolute top-1/4 -right-6 w-2 sm:w-3 h-2 sm:h-3 bg-space-400/60 rounded-full animate-twinkle" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;
