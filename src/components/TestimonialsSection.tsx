import React from 'react';
import { Quote } from 'lucide-react';
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

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Charan transformed our brand presence completely. His designs increased our social engagement by 30% in just 3 months.",
      author: "Rajesh Kumar",
      position: "CEO, Indux Solar",
      avatar: "RK"
    },
    {
      quote: "Working with Charan was refreshing. He brings creativity and technical skills together seamlessly.",
      author: "Priya Sharma",
      position: "Product Manager, DigiLeap",
      avatar: "PS"
    },
    {
      quote: "Charan didn't sleep for 48 hours during the hackathon. We got a whole app and 17 memes. Respect.",
      author: "Anonymous Developer",
      position: "Hackathon Teammate",
      avatar: "AD"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-48 h-48 opacity-4">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
        />
      </div>
      
      <div className="absolute bottom-20 left-20 w-32 h-32 opacity-5">
        <img 
          src="/src/Assets/Sphere.png" 
          alt="" 
          className="w-full h-full animate-sphere-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Stars */}
      <div className="absolute top-32 left-32 w-4 h-4 opacity-60">
        <img 
          src="/src/Assets/Stars1.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
        />
      </div>
      <div className="absolute bottom-40 right-40 w-3 h-3 opacity-70">
        <img 
          src="/src/Assets/Stars2.png" 
          alt="" 
          className="w-full h-full animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-32 w-10 h-10">
        <img 
          src="/src/Assets/Butterfly.png" 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="absolute bottom-32 right-40 w-12 h-12">
        <img 
          src="/src/Assets/Saturn.png" 
          alt="Saturn" 
          className="w-full h-full animate-saturn-rotate opacity-50"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="hidden sm:block absolute top-32 left-32 w-24 sm:w-30 h-24 sm:h-30">
        <img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="w-full h-full animate-butterfly-flutter opacity-60"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kind Words
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-primary">
            What people say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote size={32} className="text-space-400 opacity-60" />
                </div>
                
                {/* Quote Text */}
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-space-500 to-stellar-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonial.position}
                    </p>
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

export default TestimonialsSection;