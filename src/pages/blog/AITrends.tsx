import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

export default function AITrendsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80"
            alt="AI Trends"
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
          
          <div className="flex items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Mar 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Dr. Sarah Chen
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              AI Trends
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">The Future of AI in Enterprise</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="lead">Exploring how artificial intelligence is transforming business operations and revolutionizing decision-making processes across industries...</p>
            
            <h2>The Current State of Enterprise AI</h2>
            <p>As we move further into 2024, artificial intelligence continues to reshape how enterprises operate...</p>
            
            <h2>Key Trends Shaping the Future</h2>
            <ul>
              <li>Automated Decision Making</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Applications</li>
            </ul>
            
            <h2>Implementation Challenges</h2>
            <p>While the benefits of AI are clear, organizations face several challenges...</p>
            
            <h2>Looking Ahead</h2>
            <p>The future of enterprise AI looks promising with several emerging trends...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}