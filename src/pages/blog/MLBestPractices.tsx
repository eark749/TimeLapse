import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

export default function MLBestPracticesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
            alt="Machine Learning"
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
          
          <div className="flex items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Mar 12, 2024
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              James Wilson
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Technical
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">Machine Learning Best Practices</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="lead">Key considerations for implementing ML models in production environments...</p>
            {/* Rest of the content */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}