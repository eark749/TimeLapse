import React from 'react';
import { Cpu, CircleDot, Boxes } from 'lucide-react';

export default function RoboLogo() {
  return (
    <div className="relative w-24 h-24">
      {/* Outer rotating pattern */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
        <Boxes className="w-24 h-24 text-[#00F0FF]/30" />
      </div>
      
      {/* Inner CPU with glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#00F0FF] blur-xl opacity-50 animate-pulse" />
          <Cpu className="w-12 h-12 text-[#00F0FF] relative z-10 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 animate-[spin_3s_linear_infinite]">
          <CircleDot className="w-6 h-6 text-[#00F0FF]/40" />
        </div>
        <div className="absolute bottom-0 right-0 animate-[spin_2s_linear_infinite_reverse]">
          <CircleDot className="w-6 h-6 text-[#B026FF]/40" />
        </div>
      </div>
    </div>
  );
}