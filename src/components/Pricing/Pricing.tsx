import React from 'react';
import { Link } from 'react-router-dom';
import { pricingTiers } from './pricingData';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-[#00F0FF] rounded-full blur-[128px] top-0 left-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#B026FF] rounded-full blur-[128px] bottom-0 right-0 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={tier.name} 
              tier={tier} 
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}