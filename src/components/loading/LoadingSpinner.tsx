import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="relative w-16 h-16">
      {/* Outer spinning ring */}
      <div className="absolute inset-0 rounded-full border-t-2 border-[#00F0FF] 
        animate-[spin_1s_linear_infinite] shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
      
      {/* Inner spinning ring */}
      <div className="absolute inset-2 rounded-full border-t-2 border-[#B026FF] 
        animate-[spin_0.8s_linear_infinite_reverse] shadow-[0_0_15px_rgba(176,38,255,0.5)]" />
      
      {/* Center dot */}
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] 
        animate-pulse shadow-[0_0_20px_rgba(0,240,255,0.7)]" />
    </div>
  );
}