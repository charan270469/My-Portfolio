import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver, animateSkillBars } from '../utils/intersectionObserver';
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

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = useIntersectionObserver(animateSkillBars);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Design Tools',
      icon: 'fas fa-palette',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      skills: [
        { name: 'Figma', level: 90, color: 'bg-gradient-to-r from-blue-400 to-blue-500' },
        { name: 'Canva', level: 100, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
        { name: 'AI Tools', level: 75, color: 'bg-gradient-to-r from-purple-400 to-purple-500', badge: 'Enthusiast' }
      ]
    },
    {
      title: 'Dev Stack',
      icon: 'fas fa-code',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      skills: [
        { name: 'HTML/CSS', level: 90, color: 'bg-gradient-to-r from-orange-400 to-orange-500' },
        { name: 'JavaScript', level: 80, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
        { name: 'C, Python, Java', level: 70, color: 'bg-gradient-to-r from-orange-600 to-red-500' },
        { name: 'DSA', level: 50, color: 'bg-gradient-to-r from-red-500 to-red-600' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'fas fa-users',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      skills: [
        { name: 'Teamwork', level: 95, color: 'bg-gradient-to-r from-purple-400 to-purple-500' },
        { name: 'Communication', level: 100, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
        { name: 'Problem Solving', level: 85, color: 'bg-gradient-to-r from-purple-600 to-pink-500' },
        { name: 'Chai Brewing', level: 100, color: 'bg-gradient-to-r from-amber-400 to-amber-500' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative mobile-section-padding mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      
      {/* Background Elements - Responsive */}
      <div className="absolute top-20 left-4 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-3">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      <div className="absolute bottom-20 right-4 sm:right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 opacity-4">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Stars - Responsive */}
      <div className="absolute top-32 right-8 sm:right-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img 
          src="/src/Assets/Stars1.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-40 left-10 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img 
          src="/src/Assets/Stars2.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-40 left-32 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-32 right-40 w-10 sm:w-12 h-10 sm:h-12">
        <img 
          src="/src/Assets/Saturn.png" 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="mobile-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading font-bold text-white mb-4">
            Skills Playground
          </h2>
          <p className="mobile-text text-white/70 font-primary">
            Tools I use to bring ideas to life (and some fun ones too)
          </p>
        </div>

        {/* Skills Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`relative bg-slate-800/40 backdrop-blur-md border ${category.borderColor} rounded-2xl p-6 sm:p-8 hover:bg-slate-800/60 transition-all duration-500 shadow-lg hover:shadow-2xl group`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-xl sm:text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills */}
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-bar group/skill">
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-white/90 font-medium text-sm">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-white font-bold text-sm bg-slate-700/50 px-2 py-1 rounded-md">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      {/* Background bar */}
                      <div className="w-full bg-slate-700/50 rounded-full h-2.5 sm:h-3 overflow-hidden border border-slate-600/30">
                        {/* Progress bar */}
                        <div
                          className={`skill-progress h-full ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                          data-percentage={skill.level}
                          style={{ 
                            width: '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000" />
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 left-0 h-2.5 sm:h-3 ${skill.color} rounded-full opacity-0 group-hover/skill:opacity-30 blur-sm transition-opacity duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;