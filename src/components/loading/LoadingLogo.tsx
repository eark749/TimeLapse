import React from 'react';
import { Brain } from 'lucide-react';

export default function LoadingLogo() {
  return (
    <div className="mb-8 relative">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-[#00F0FF] blur-[50px] opacity-20 animate-pulse" />
      
      {/* Logo */}
      <Brain className="w-16 h-16 text-[#00F0FF] relative z-10 animate-[bounce_2s_ease-in-out_infinite]" />
    </div>
  );
}