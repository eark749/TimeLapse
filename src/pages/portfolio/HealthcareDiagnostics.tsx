import React from 'react';
import { Brain, Activity, Users, Award } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

export default function HealthcareDiagnosticsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
              alt="Healthcare AI"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            <h1 className="text-4xl font-bold text-white mb-4">AI-Powered Healthcare Diagnostics</h1>
            <p className="text-xl text-gray-400">Revolutionizing medical diagnosis with artificial intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 p-6 rounded-xl">
              <Activity className="w-8 h-8 text-[#00F0FF] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">45%</div>
              <div className="text-gray-400">Accuracy Improvement</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Users className="w-8 h-8 text-[#00F0FF] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">50,000+</div>
              <div className="text-gray-400">Patients Served</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Award className="w-8 h-8 text-[#00F0FF] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">30%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <h2>Project Overview</h2>
            <p>Developed a state-of-the-art AI diagnostic system that assists healthcare professionals in accurate and rapid disease detection...</p>
            
            <h2>Technical Implementation</h2>
            <p>Using deep learning models trained on over 1 million medical images...</p>
            
            <h2>Results & Impact</h2>
            <p>Achieved significant improvements in diagnostic accuracy and efficiency...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}