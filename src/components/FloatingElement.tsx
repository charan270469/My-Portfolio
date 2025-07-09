import React from 'react';
import { Zap, Code, Palette, Coffee } from 'lucide-react';

// Asset imports
import Sphere from '../Assets/Sphere.png';
import Stars1 from '../Assets/Stars1.png';
import Stars2 from '../Assets/Stars2.png';
import Butterfly from '../Assets/Butterfly.png';
import Saturn from '../Assets/Saturn.png';
import Astronaut from '../Assets/Astronaut.png';
import Rocket from '../Assets/Rocket.png';
import Mouse from '../Assets/Mouse.png';

interface FloatingElementProps {
  icon: 'zap' | 'code' | 'palette' | 'coffee';
  className?: string;
  size?: number;
}

const iconMap = {
  zap: Zap,
  code: Code,
  palette: Palette,
  coffee: Coffee,
};

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  icon, 
  className = '', 
  size = 24 
}) => {
  const IconComponent = iconMap[icon];

  return (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-space-500/20 rounded-full animate-pulse-glow" />
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 animate-float">
          <IconComponent size={size} className="text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default FloatingElement;