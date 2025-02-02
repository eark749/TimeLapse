import React from 'react';
import { Brain, Cpu, BarChart, Shield } from 'lucide-react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'State-of-the-art machine learning models customized for your needs.'
  },
  {
    icon: Cpu,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture that grows with your business.'
  },
  {
    icon: BarChart,
    title: 'Real-time Analytics',
    description: 'Instant insights and predictions for informed decision-making.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and data protection measures.'
  }
];

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-[#00F0FF] rounded-full blur-[150px] 
            opacity-20 -top-48 -left-24 animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-[#B026FF] rounded-full blur-[150px] 
            opacity-20 -bottom-48 -right-24 animate-pulse delay-1000" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Our AI Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn how our cutting-edge AI technology can transform your business
              operations and drive unprecedented growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-bold text-[#00F0FF] mb-2">98%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-bold text-[#00F0FF] mb-2">500+</div>
              <div className="text-gray-400">Clients Worldwide</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-bold text-[#00F0FF] mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white font-semibold hover:shadow-lg hover:shadow-[#00F0FF]/20 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}