import React from 'react';
import { Activity, Users, TrendingUp } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

export default function HealthcareCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
            alt="Healthcare AI Case Study"
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
          
          <h1 className="text-4xl font-bold text-white mb-6">AI-Powered Healthcare Diagnostics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 p-6 rounded-xl">
              <Activity className="w-8 h-8 text-[#00F0FF] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">45%</div>
              <div className="text-gray-400">Accuracy Improvement</div>
            </div>
            {/* More metrics */}
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Challenge</h2>
            <p>A leading hospital faced challenges with diagnostic accuracy...</p>
            
            <h2>Solution</h2>
            <p>We implemented a deep learning system trained on over 1M medical images...</p>
            
            <h2>Results</h2>
            <p>The AI system achieved remarkable improvements in diagnostic accuracy...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}