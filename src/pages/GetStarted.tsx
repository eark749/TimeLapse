import React from 'react';
import { Brain, Rocket, Users, Code } from 'lucide-react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

const steps = [
  {
    icon: Brain,
    title: 'Initial Consultation',
    description: 'Meet with our AI experts to discuss your business needs and objectives.'
  },
  {
    icon: Code,
    title: 'Solution Design',
    description: 'Our team develops a customized AI implementation plan for your business.'
  },
  {
    icon: Users,
    title: 'Team Integration',
    description: 'We work with your team to ensure smooth adoption of AI solutions.'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Deploy your AI solution with ongoing support and optimization.'
  }
];

export default function GetStartedPage() {
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
              Begin Your AI Journey
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business with cutting-edge AI solutions. Our expert team
              will guide you through every step of the implementation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]"
                />
              </div>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]"
              />
              <button className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white font-semibold hover:shadow-lg hover:shadow-[#00F0FF]/20 transition-all duration-300">
                Start Your Journey
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}