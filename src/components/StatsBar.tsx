
import React from 'react';
import { Users, Camera, Trophy, Sparkles } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "50K+", color: "text-blue-400" },
    { icon: Camera, label: "Photos Analyzed", value: "500K+", color: "text-cyan-400" },
    { icon: Trophy, label: "Matches Found", value: "1M+", color: "text-purple-400" },
    { icon: Sparkles, label: "AR Try-Ons", value: "100K+", color: "text-pink-400" }
  ];

  return (
    <div className="relative z-10 bg-black/20 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center justify-center mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color} mr-2`} />
                <span className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated background line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
    </div>
  );
};

export default StatsBar;
