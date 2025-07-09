import React from 'react';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';

const StarField: React.FC = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;