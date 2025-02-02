import React from 'react';
import RoboLogo from './RoboLogo';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-50">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#00F0FF] rounded-full blur-[150px] 
          opacity-20 -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-[#B026FF] rounded-full blur-[150px] 
          opacity-20 -bottom-48 -right-24 animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <RoboLogo />
        
        {/* Loading text with typewriter effect */}
        <div className="mt-8 font-mono">
          <span className="inline-block text-[#00F0FF] animate-pulse">&gt;</span>
          <span className="inline-block text-white/80 ml-2 animate-[typing_3s_steps(40,end)_infinite]">
            Initializing AI Systems...
          </span>
        </div>
      </div>
    </div>
  );
}