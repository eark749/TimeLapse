import React from 'react';
import { CaseStudy } from './types';

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-[#0B0F17] rounded-3xl p-8 hover:bg-opacity-80 transition-all duration-300">
      <div className="text-gray-400 text-xs mb-3">{study.industry}</div>

      <h3 className="text-white text-2xl font-bold mb-3">{study.title}</h3>

      <p className="text-gray-400 text-sm mb-8">{study.summary}</p>

      {/* Change grid to flex for sequential layout */}
      <div className="flex flex-col gap-4">
        {study.metrics.map((metric, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="text-[#00F0FF] text-2xl font-bold">
              {metric.value}
            </div>
            <div className="text-gray-400 text-xs">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
