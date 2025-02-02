import React from 'react';
import { Zap, Users, Award } from 'lucide-react';
import { FeatureItem } from './types';

const features: FeatureItem[] = [
  {
    icon: Zap,
    text: 'Cutting-edge AI solutions tailored to your needs',
  },
  {
    icon: Users,
    text: 'Expert team with decades of combined experience',
  },
  {
    icon: Award,
    text: 'Award-winning AI implementations',
  },
];

export default function Features() {
  return (
    <div className="space-y-4">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
            transform transition-all duration-300 hover:scale-110 hover:bg-[#00F0FF]/20">
            <item.icon className="w-4 h-4 text-[#00F0FF]" />
          </div>
          <span className="text-gray-300">{item.text}</span>
        </div>
      ))}
    </div>
  );
}