import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    images: string[];
    category: string;
    tags: string[];
    externalUrl?: string; // Added for dev projects
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTransition, setImageTransition] = useState(false);

  useEffect(() => {
    setImageTransition(true);
    const timeout = setTimeout(() => setImageTransition(false), 400);
    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => 
          prev > 0 ? prev - 1 : project.images.length - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => 
          prev < project.images.length - 1 ? prev + 1 : 0
        );
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleArrowKeys);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev < project.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : project.images.length - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content - Responsive Layout */}
      <div className="relative w-full h-full flex flex-col sm:flex-row">
        {/* Mobile Layout: Stacked, Full Width */}
        <div className="block sm:hidden w-full h-full overflow-y-auto bg-slate-900/95">
          {/* Image */}
          <div className="w-full flex justify-center items-center p-4 relative">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full max-h-64 object-contain rounded-lg shadow-2xl"
            />
            {/* Slide Arrows for Mobile */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 z-10"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 z-10"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}
          </div>
          {/* View Project Button for Dev Projects (Mobile) */}
          {project.externalUrl && (
            <div className="w-full flex justify-center my-4">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-4/5 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-pink-400 via-yellow-200 to-purple-300 text-black shadow-lg hover:scale-105 transition-all duration-300 text-center border-2 border-white/60 outline outline-2 outline-space-200"
                style={{ boxShadow: '0 0 8px 2px #fff4, 0 0 16px 4px #f0f1, 0 0 32px 8px #ff01' }}
              >
                🚀 View Project
              </a>
            </div>
          )}
          {/* Project Info */}
          <div className="w-full px-4 pb-8">
            <div className="flex items-center justify-between mt-2 mb-4">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 ml-4"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
              <p
                className="text-white/80 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          </div>
        </div>
        {/* Desktop Layout: Unchanged */}
        <div className="hidden sm:flex w-full h-full">
          {/* Left Side - Image Display */}
          <div className="flex-1 flex items-center justify-center bg-slate-900/95 relative">
            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 z-10"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 z-10"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </span>
              </div>
              {/* View Project Button for Dev Projects (extra wide, floating animation, black text, more horizontal padding, perfectly centered, animation only) */}
              {project.externalUrl && (
                <div className="absolute animate-float" style={{ left: '35%', transform: 'translate(-50%, 0)', bottom: '96px', pointerEvents: 'none' }}>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[28rem] py-6 px-12 text-2xl font-extrabold rounded-3xl bg-gradient-to-r from-pink-400 via-yellow-200 to-purple-300 text-black shadow-lg hover:scale-105 transition-all duration-300 text-center border-2 border-white/60 outline outline-2 outline-space-200"
                    style={{ boxShadow: '0 0 8px 2px #fff4, 0 0 16px 4px #f0f1, 0 0 32px 8px #ff01', pointerEvents: 'auto' }}
                  >
                    🚀 View Project
                  </a>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2 overflow-x-auto max-w-full pb-2 px-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-space-400 scale-110'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Project Information */}
          <div className="w-96 bg-slate-800/95 backdrop-blur-md border-l border-white/10 flex flex-col relative">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <span className="px-3 py-1 bg-space-500 text-white text-sm rounded-full">
                  {project.category}
                </span>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 ml-4"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Project Details */}
            <div className="flex-1 p-6 overflow-y-auto">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                <p
                  className="text-white/80 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/60 text-sm">Category</span>
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/60 text-sm">Images</span>
                    <span className="text-white text-sm font-medium">{project.images.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white/60 text-sm">Status</span>
                    <span className="text-green-400 text-sm font-medium">Completed</span>
                  </div>
                </div>
              </div>

              {/* Placeholder for additional content */}
              <div className="space-y-4">
                <div className="h-2 bg-white/10 rounded-full" />
                <div className="h-2 bg-white/5 rounded-full w-3/4" />
                <div className="h-2 bg-white/5 rounded-full w-1/2" />
                <div className="h-2 bg-white/10 rounded-full w-2/3" />
                <div className="h-2 bg-white/5 rounded-full w-4/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
