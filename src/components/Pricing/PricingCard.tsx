import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingTier } from './types';

interface PricingCardProps {
  tier: PricingTier;
  isPopular?: boolean;
}

export default function PricingCard({ tier, isPopular }: PricingCardProps) {
  return (
    <div 
      className={`relative p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between
        ${isPopular 
          ? 'bg-gradient-to-b from-[#00F0FF]/10 to-[#B026FF]/10 scale-105 border-[#00F0FF]/30' 
          : 'bg-white/5 hover:bg-white/10'
        } border border-white/10 backdrop-blur-sm`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full text-white text-sm font-medium">
          Most Popular
        </div>
      )}

      <div>
        <img 
          src={tier.image} 
          alt={tier.name} 
          className="w-full aspect-video object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-gray-400 mb-4">{tier.description}</p>
        <div className="text-4xl font-bold text-white mb-6">
          ${tier.price}
          <span className="text-lg text-gray-400">/mo</span>
        </div>
      </div>

      <ul className="space-y-4">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-[#00F0FF] mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/get-started"
        className={`mt-6 block w-full py-4 rounded-lg font-semibold text-center transition-all duration-300
          ${isPopular
            ? 'bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white hover:shadow-lg hover:shadow-[#00F0FF]/20'
            : 'bg-white/10 text-white hover:bg-white/20'
          } transform hover:scale-105`}
      >
        Get Started
      </Link>
    </div>
  );
}