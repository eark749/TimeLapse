import React from 'react';
import { StatsItem } from './types';

const stats: StatsItem[] = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Success Rate', value: '98%' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
            transform transition-all duration-500 hover:scale-105 hover:bg-white/10
            hover:border-[#00F0FF]/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]
            ${index === stats.length - 1 ? 'col-span-2' : ''}`}
        >
          <div className="text-3xl font-bold text-white mb-2 transition-transform duration-300">
            {stat.value}
          </div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}