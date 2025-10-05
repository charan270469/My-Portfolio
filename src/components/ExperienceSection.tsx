import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
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

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'VISWAM.AI',
      position: 'AI Developer Intern',
      duration: 'May – Aug 2025',
      skills: ['Python', 'ML', 'Data Preprocessing'],
      icon: 'fas fa-robot',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/20'
    },
    {
      company: 'Bombay Tribe + Social Toli',
      position: 'Graphic Design Intern',
      duration: 'Feb – Sept 2025',
      skills: ['Canva', 'Branding', 'Tshirt Design'],
      icon: 'fas fa-tshirt',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-500/20'
    },
    {
      company: 'Indux Solar',
      position: 'Graphic Design Intern',
      duration: 'Oct 2024 – Jan 2025',
      skills: ['Social Media', 'Ad Design'],
      icon: 'fas fa-solar-panel',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/20'
    },
    {
      company: 'Sepnoty',
      position: 'UI/UX Designer',
      duration: 'Feb – Apr 2024',
      skills: ['UI Design', 'UX Research'],
      icon: 'fas fa-mobile-alt',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/20'
    },
    {
      company: 'DigiLeap Marketing',
      position: 'Graphic Design Intern',
      duration: 'Sep 2023 – Feb 2024',
      skills: ['Social Media', 'Video Editing'],
      icon: 'fas fa-bullhorn',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/20'
    },
    {
      company: 'Website Vikreta',
      position: 'Graphic Design Intern',
      duration: 'Jul – Aug 2023',
      skills: ['Branding', 'Identity'],
      icon: 'fas fa-globe',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-500/20'
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
      <div className="absolute top-32 left-8 sm:left-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img 
          src="/src/Assets/Stars1.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-40 right-10 sm:right-40 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img 
          src="/src/Assets/Stars2.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-32 left-32 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-32 left-40 w-10 sm:w-12 h-10 sm:h-12">
        <img 
          src="/src/Assets/Saturn.png" 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
        />
      </div>
      
      <div className="mobile-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading font-bold text-white mb-4">
            Experience
          </h2>
          <p className="mobile-text text-white/70 font-primary">
            My journey through design and development
          </p>
        </div>

        {/* Experience Cards Grid - Mobile Responsive */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Experience Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className={`relative z-10 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl border-2 flex items-center justify-center ${
                    exp.current 
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 border-purple-400 shadow-lg shadow-purple-500/30' 
                      : `bg-gradient-to-r ${exp.color} border-slate-600/50 shadow-lg`
                  }`}>
                    <i className={`${exp.icon} text-sm sm:text-lg text-white`}></i>
                    {exp.current && (
                      <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full animate-pulse border-2 border-slate-800" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                      <div className="mb-2 md:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-purple-300 font-medium text-base sm:text-lg">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full">
                          <Calendar size={12} />
                          <span>{exp.duration}</span>
                        </div>
                        {exp.current && (
                          <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-slate-700/50 text-slate-300 text-xs sm:text-sm rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
