import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';
import MedMindImage from '../Assets/image copy.png';
import PlantVerseImage from '../Assets/image.png';

// T-shirt Design imports
import TShirt1 from '../T-shirt Designs/1.png';
import TShirt2 from '../T-shirt Designs/2.jpeg';
import TShirt3 from '../T-shirt Designs/3.png';
import TShirt4 from '../T-shirt Designs/4.png';
import TShirt5 from '../T-shirt Designs/5.png';
import TShirt6 from '../T-shirt Designs/6.jpg';
import TShirt7 from '../T-shirt Designs/7.jpeg';
import TShirt8 from '../T-shirt Designs/8.png';
import TShirt9 from '../T-shirt Designs/9.png';
import TShirt10 from '../T-shirt Designs/10.png';
import TShirt11 from '../T-shirt Designs/11.png';
import TShirt12 from '../T-shirt Designs/12.png';
import TShirt13 from '../T-shirt Designs/13.png';
import TShirt14 from '../T-shirt Designs/14.png';
import TShirt15 from '../T-shirt Designs/15.jpg';
import TShirt16 from '../T-shirt Designs/16.png';
import TShirt17 from '../T-shirt Designs/17.jpg';
import TShirt18 from '../T-shirt Designs/18.png';
import TShirt19 from '../T-shirt Designs/19.jpg';
import TShirt20 from '../T-shirt Designs/20.png';
import TShirt21 from '../T-shirt Designs/21.png';
import TShirt22 from '../T-shirt Designs/22.jpg';
import TShirt23 from '../T-shirt Designs/23.jpeg';

// UIUX imports
import Tep1 from '../UIUX/Tepnoty UI/tep1.png';
import Tep2 from '../UIUX/Tepnoty UI/tep2.png';
import Tep3 from '../UIUX/Tepnoty UI/tep3.png';
import Tep4 from '../UIUX/Tepnoty UI/tep4.png';
import Anibook1 from '../UIUX/Anibook/Screen1.png';
import Anibook2 from '../UIUX/Anibook/Screen2.png';
import Anibook3 from '../UIUX/Anibook/Screen3.png';
import AnibookMockup1 from '../UIUX/Anibook/Mockup1.png';
import AnibookMockup2 from '../UIUX/Anibook/Mockup2.jpg';
import AnibookMockup3 from '../UIUX/Anibook/Mockup3.png';

// Graphics imports
import Indux0 from '../Graphics/Indux Social Media/i0.png';
import Indux1 from '../Graphics/Indux Social Media/i1.png';
import Indux2 from '../Graphics/Indux Social Media/i2.png';
import Indux3 from '../Graphics/Indux Social Media/i3.png';
import Indux4 from '../Graphics/Indux Social Media/i4.png';
import Indux5 from '../Graphics/Indux Social Media/i5.png';
import Indux6 from '../Graphics/Indux Social Media/i6.png';
import Indux7 from '../Graphics/Indux Social Media/i7.png';
import Indux8 from '../Graphics/Indux Social Media/i8.png';

import Bombay1 from '../Graphics/Bombaytribe Social Media/b1.png';
import Bombay2 from '../Graphics/Bombaytribe Social Media/b2.png';
import Bombay3 from '../Graphics/Bombaytribe Social Media/b3.png';
import Bombay4 from '../Graphics/Bombaytribe Social Media/b4.png';
import Bombay5 from '../Graphics/Bombaytribe Social Media/b5.png';
import Bombay6 from '../Graphics/Bombaytribe Social Media/b6.png';
import Bombay7 from '../Graphics/Bombaytribe Social Media/b7.png';
import Bombay8 from '../Graphics/Bombaytribe Social Media/b8.png';
import Bombay9 from '../Graphics/Bombaytribe Social Media/b9.png';
import Bombay10 from '../Graphics/Bombaytribe Social Media/b10.png';
import Bombay11 from '../Graphics/Bombaytribe Social Media/b11.png';
import Bombay12 from '../Graphics/Bombaytribe Social Media/b12.png';
import Bombay13 from '../Graphics/Bombaytribe Social Media/b13.png';
import Bombay14 from '../Graphics/Bombaytribe Social Media/b14.png';
import Bombay15 from '../Graphics/Bombaytribe Social Media/b15.png';
import Bombay16 from '../Graphics/Bombaytribe Social Media/b16.png';
import Bombay17 from '../Graphics/Bombaytribe Social Media/b17.png';

import Agro1 from '../Graphics/Agroking Branding/A1.png';
import Agro2 from '../Graphics/Agroking Branding/A2.png';
import Agro3 from '../Graphics/Agroking Branding/A3.png';
import Agro4 from '../Graphics/Agroking Branding/A4.png';
import Agro5 from '../Graphics/Agroking Branding/A5.png';
import Agro6 from '../Graphics/Agroking Branding/A6.png';
import Agro7 from '../Graphics/Agroking Branding/A7.png';
import Agro8 from '../Graphics/Agroking Branding/A8.png';
import Agro9 from '../Graphics/Agroking Branding/A9.png';
import Agro10 from '../Graphics/Agroking Branding/A10.png';
import Agro11 from '../Graphics/Agroking Branding/A11.png';

// Logo imports
import TepLogo1 from '../Logos/Tepnoty/t1.png';
import TepLogo2 from '../Logos/Tepnoty/t2.png';
import TepLogo3 from '../Logos/Tepnoty/t3.png';
import TepLogo4 from '../Logos/Tepnoty/t4.png';
import TepLogo5 from '../Logos/Tepnoty/t5.png';
import TepLogo6 from '../Logos/Tepnoty/t6.png';
import TepLogo7 from '../Logos/Tepnoty/t7.png';
import TepLogo8 from '../Logos/Tepnoty/t8.png';

import Uniqon0 from '../Logos/Uniqon/u0.png';
import Uniqon1 from '../Logos/Uniqon/U1.png';
import Uniqon2 from '../Logos/Uniqon/U2.png';
import Uniqon3 from '../Logos/Uniqon/u3.png';

import Glos1 from '../Logos/Glos/g1.png';
import Glos2 from '../Logos/Glos/g2.png';
import Glos3 from '../Logos/Glos/g3.jpg';
import Glos4 from '../Logos/Glos/g4.jpeg';
import Glos5 from '../Logos/Glos/g5.jpeg';
import Glos6 from '../Logos/Glos/g6.jpeg';
import Glos7 from '../Logos/Glos/g7.jpeg';

import Xee1 from '../Logos/Xee Academy/x1.png';
import Xee2 from '../Logos/Xee Academy/x2.png';
import Xee3 from '../Logos/Xee Academy/x3.png';
import Xee4 from '../Logos/Xee Academy/x4.png';
import Xee5 from '../Logos/Xee Academy/x5.png';
import Xee6 from '../Logos/Xee Academy/x6.png';
import Xee7 from '../Logos/Xee Academy/x7.png';

import Lashes1 from '../Logos/Lashes/L1.png';
import Lashes2 from '../Logos/Lashes/L2.png';
import Lashes3 from '../Logos/Lashes/L3.jpeg';
import Lashes4 from '../Logos/Lashes/L4.jpg';
import Lashes5 from '../Logos/Lashes/L5.jpeg';
import Lashes6 from '../Logos/Lashes/L6.jpg';

import Zeste1 from '../Logos/Zeste/1.png';
import Zeste2 from '../Logos/Zeste/2.png';
import Zeste3 from '../Logos/Zeste/3.png';
import Zeste4 from '../Logos/Zeste/4.png';
import Zeste5 from '../Logos/Zeste/5.png';
import Zeste6 from '../Logos/Zeste/6.png';

import Ziara1 from '../Logos/Ziara/z11.png';
import Ziara2 from '../Logos/Ziara/z22.jpeg';
import Ziara3 from '../Logos/Ziara/z33.jpeg';
import Ziara4 from '../Logos/Ziara/z44.jpeg';
import Ziara5 from '../Logos/Ziara/z55.jpeg';
import Ziara6 from '../Logos/Ziara/z66.jpeg';

const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Listen for filter changes from Hero section
  useEffect(() => {
    const handleSetFilter = (event: CustomEvent) => {
      setActiveFilter(event.detail);
    };

    window.addEventListener('setFilter', handleSetFilter as EventListener);
    return () => window.removeEventListener('setFilter', handleSetFilter as EventListener);
  }, []);

  const filters = ['All', 'UI/UX', 'Graphic', 'Dev Projects', 'Logos'];

  const projects = [
    {
      id: 1,
      title: 'Tepnoty Chatbot App',
      category: 'UI/UX',
      description: `🎨 Designed the complete UI/UX for Tepnoty, an AI-powered chatbot app. Crafted seamless conversational flows, intuitive onboarding, and a powerful admin dashboard—bridging the gap between artificial intelligence and natural communication.`,
      tags: ['Figma', 'Prototyping', 'User Research', '+1'],
      image: Tep1,
      images: [Tep1, Tep2, Tep3, Tep4]
    },
    {
      id: 2,
      title: 'Anibook Website',
      category: 'UI/UX',
      description: `🎬 Anibook is your anime event companion—think BookMyShow, but exclusively for anime! Discover, book, and experience anime screenings with a platform designed for true fans. Intuitive booking flows, personalized recommendations, and a vibrant, otaku-inspired interface make every interaction exciting. Built for seamless discovery and reservation, Anibook brings the anime community together, one screening at a time.`,
      tags: ['Web Design', 'UX Flow', 'Responsive'],
      image: AnibookMockup2,
      images: [Anibook1, Anibook2, Anibook3, AnibookMockup1, AnibookMockup2, AnibookMockup3]
    },
    {
      id: 3,
      title: 'Custom T-Shirt Designs',
      category: 'Graphic',
      description: `Each tee I create isn’t just a graphic—it’s a wearable story.<br/>Rooted in Indian spirituality, zodiac energy, and modern design, my work brings meaning to minimalism.<br/>From sacred symbols and celestial forms to mindful typography, every element speaks.<br/>Whether it’s the peace of “Sukoon” or the fire of Aries, it’s all intentional.<br/>I dive deep into philosophy, astrology, and pop culture, then sketch, refine, and digitize.<br/>Colors? Chosen with emotional intelligence—every hue matches the mood.<br/>Mockups ensure the vibe hits on screen and on cotton.<br/>Fit for streetwear, rituals, or random Tuesdays.<br/>The result? A t-shirt that not only looks good, but feels aligned.`,
      tags: ['Apparel', 'Graphics', 'Branding'],
      image: TShirt1,
      images: [TShirt1, TShirt2, TShirt3, TShirt4, TShirt5, TShirt6, TShirt7, TShirt8, TShirt9, TShirt10, TShirt11, TShirt12, TShirt13, TShirt14, TShirt15, TShirt16, TShirt17, TShirt18, TShirt19, TShirt20, TShirt21, TShirt22, TShirt23]
    },
    {
      id: 4,
      title: 'Indux Solar Branding',
      category: 'Graphic',
      description: `☀️ Elevated Indux Solar’s brand with striking social media visuals—showcasing solar solutions for homes, businesses, and luxury real estate.<br/><a href="https://www.instagram.com/induxsolar/?hl=en" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;margin-right:8px;"><span style="background:#2563eb;color:#fff;padding:6px 16px;border-radius:9999px;font-weight:600;box-shadow:0 2px 8px #2563eb33;">@induxsolar</span></a><a href="https://www.instagram.com/induxproperties/?hl=en" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;"><span style="background:#2563eb;color:#fff;padding:6px 16px;border-radius:9999px;font-weight:600;box-shadow:0 2px 8px #2563eb33;">@induxproperties</span></a>`,
      tags: ['Branding', 'Social Media', 'Solar'],
      image: Indux1,
      images: [Indux0, Indux1, Indux2, Indux3, Indux4, Indux5, Indux6, Indux7, Indux8]
    },
    {
      id: 5,
      title: 'MedMind Health Assistant',
      category: 'Dev Projects',
      description: `🏥 MedMind is your calm, AI-powered health companion. Built with Gemini 1.5 Flash, it offers symptom checks, home care tips, and medical disclaimers—turning panic-Googling into informed confidence. Led architecture, prompt safety, and deployment with Team Codemates.`,
      tags: ['React', 'Gemini AI', 'AI', 'Prompt Engineering', 'Health Tech', 'Health Assistant'],
      image: MedMindImage,
      images: [MedMindImage],
      isExternal: true,
      externalUrl: 'https://huggingface.co/spaces/Charan2369/MedMind_App'
    },
    {
      id: 14,
      title: 'PlantVerse AR App',
      category: 'Dev Projects',
      description: `🌱 PlantVerse is your pocket botanist—AI-powered plant recognition for instant knowledge. Built with modern web tech for seamless, educational adventures.`,
      tags: ['React', 'AI Integration', 'Responsive Design', 'Plant Recognition'],
      image: PlantVerseImage,
      images: [PlantVerseImage],
      isExternal: true,
      externalUrl: 'https://huggingface.co/spaces/Charan2369/Plantverse'
    },
    {
      id: 6,
      title: 'Bombay Tribe Social Media',
      category: 'Graphic',
      description: `🔥 Drove viral impact for Bombay Tribe—93K+ reach, 1.5% engagement, and 42 posts of vibrant fashion and lifestyle content.View my designs live at BombayTribe.com

      <br/><a href="https://bombaytribe.com/" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:12px;"><span style="background:#2563eb;color:#fff;padding:8px 20px;border-radius:9999px;font-weight:600;box-shadow:0 2px 8px #2563eb33;">View their website</span></a> <br>`,
      tags: ['Social Media', 'Fashion', 'Lifestyle'],
      image: Bombay1,
      images: [Bombay1, Bombay2, Bombay3, Bombay4, Bombay5, Bombay6, Bombay7, Bombay8, Bombay9, Bombay10, Bombay11, Bombay12, Bombay13, Bombay14, Bombay15, Bombay16, Bombay17]
    },
    {
      id: 7,
      title: 'Agroking Branding',
      category: 'Graphic',
      description: `🌿 Designed eco-friendly packaging and branding for Agroking—spices, leafy greens, and fresh produce. Every detail emphasizes organic authenticity and sustainability.<br/><a href="https://www.instagram.com/agroking.in/?hl=en" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;"><span style="background:#2563eb;color:#fff;padding:6px 16px;border-radius:9999px;font-weight:600;box-shadow:0 2px 8px #2563eb33;">@agroking.in</span></a>`,
      tags: ['Branding', 'Logo Design', 'Agriculture'],
      image: Agro1,
      images: [Agro1, Agro2, Agro3, Agro4, Agro5, Agro6, Agro7, Agro8, Agro9, Agro10, Agro11]
    },
    // Logo Projects
    {
      id: 8,
      title: 'Tepnoty Logo Design',
      category: 'Logos',
      description: `🤖 Logo for Tepnoty—an AI chatbot app. Clean, modern, and approachable, designed for seamless communication across all platforms.`,
      tags: ['Logo Design', 'Brand Identity', 'AI Tech'],
      image: TepLogo1,
      images: [TepLogo1, TepLogo2, TepLogo3, TepLogo4, TepLogo5, TepLogo6, TepLogo7, ]
    },
    {
      id: 9,
      title: 'Uniqon Fashion Logo',
      category: 'Logos',
      description: `👗 Logo for Uniqon—a women’s fashion brand pioneering 3D Try-On tech. Elegant, innovative, and empowering for the modern shopper.`,
      tags: ['Fashion', 'Logo Design', 'Typography'],
      image: Uniqon0,
      images: [Uniqon0, Uniqon1, Uniqon2, Uniqon3]
    },
    {
      id: 10,
      title: 'Glos Brand Identity',
      category: 'Logos',
      description: `⭐ Minimalist luxury for Glos—star-inspired logo reflecting premium quality and modern elegance.`,
      tags: ['Brand Identity', 'Modern Design', 'Versatile'],
      image: Glos1,
      images: [Glos1, Glos2, Glos3, Glos4, Glos5, Glos6, Glos7]
    },
    {
      id: 11,
      title: 'Xee Academy Logo',
      category: 'Logos',
      description: `🎓 Built trust for Xee Academy—professional, approachable logo for students, parents, and educators.`,
      tags: ['Education', 'Professional', 'Institution'],
      image: Xee1,
      images: [Xee1, Xee2, Xee3, Xee4, Xee5, Xee6, Xee7]
    },
    {
      id: 12,
      title: 'Lashes Beauty Brand',
      category: 'Logos',
      description: `💫 Trendy Future’s “Lashes” line—luxury, innovation, and self-expression in a single elegant logo.`,
      tags: ['Beauty', 'Feminine', 'Elegant'],
      image: Lashes1,
      images: [Lashes1, Lashes2, Lashes3, Lashes4, Lashes5, Lashes6]
    },
    {
      id: 13,
      title: 'Zeste Brand Logo',
      category: 'Logos',
      description: `⚡ Zeste’s logo pulses with energy—modern, vibrant, and designed for forward-thinking brands.`,
      tags: ['Modern', 'Vibrant', 'Innovation'],
      image: Zeste1,
      images: [Zeste1, Zeste2, Zeste3, Zeste4, Zeste5, Zeste6]
    },
    {
      id: 15,
      title: 'Ziara Brand Identity',
      category: 'Logos',
      description: `✨ Ziara’s brand identity—elegance meets contemporary luxury in a memorable, refined logo.`,
      tags: ['Brand Identity', 'Luxury', 'Contemporary'],
      image: Ziara1,
      images: [Ziara1, Ziara2, Ziara3, Ziara4, Ziara5, Ziara6]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: any) => {
      setSelectedProject(project);
  };

  return (
    <section id="selected-work" className="relative mobile-section-padding mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      
      {/* Background Elements - Responsive */}
      <div className="absolute top-20 left-4 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-3">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      <div className="absolute bottom-20 right-4 sm:right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 opacity-4">
        <img 
          src={Sphere} 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Stars - Responsive */}
      <div className="absolute top-32 right-8 sm:right-32 w-3 sm:w-4 h-3 sm:h-4 opacity-60">
        <img 
          src={Stars1} 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-40 left-10 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 opacity-70">
        <img 
          src={Stars2} 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-40 left-32 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={Butterfly} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="hidden sm:block absolute bottom-32 right-40 w-10 sm:w-12 h-10 sm:h-12">
        <img 
          src={Saturn} 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="mobile-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="mobile-text text-white/70 font-primary">
            A curated collection of projects I'm proud of
          </p>
        </div>

        {/* Filter Tabs - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              data-category={filter === 'Dev Projects' ? 'Frontend' : filter}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-space-500 to-space-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              onClick={() => handleProjectClick(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 sm:px-3 py-1 bg-space-500/80 text-white text-xs sm:text-sm rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* External Link Icon for external projects */}
                {project.isExternal && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-space-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default SelectedWorkSection;
