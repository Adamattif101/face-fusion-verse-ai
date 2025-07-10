
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color,
  delay = 0,
  onClick 
}) => {
  return (
    <Card 
      className={`bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 group animate-fade-in ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
