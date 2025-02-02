import React, { useState } from 'react';
import {
  Users,
  BarChart,
  Lightbulb,
  Award,
  BookOpen,
  Target,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-cyan-400/20">
      <Icon className="w-8 h-8 text-cyan-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ExpertiseLevel = ({ level, description, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{level}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div
          className="bg-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, role, company, content, rating }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-400 mb-4 italic">"{content}"</p>
      <div>
        <div className="text-white font-semibold">{name}</div>
        <div className="text-cyan-400">{role}</div>
        <div className="text-gray-400 text-sm">{company}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Industries',
      content:
        'The AI consulting team provided invaluable insights that helped us transform our operations. Their expertise in AI strategy and implementation was crucial to our success.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Director of Innovation',
      company: 'Future Systems',
      content:
        'Their systematic approach to AI implementation and deep technical knowledge helped us achieve our digital transformation goals ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Emily Roberts',
      role: 'Head of Digital',
      company: 'Global Solutions Ltd',
      content:
        "The team's expertise in AI strategy development and their hands-on approach to implementation made all the difference in our digital transformation journey.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 absolute left-0 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="overflow-hidden mx-8">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 absolute right-0 z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default function ConsultingPage() {
  const services = [
    {
      icon: Target,
      title: 'AI Strategy Development',
      description:
        'Develop a comprehensive AI roadmap aligned with your business objectives',
    },
    {
      icon: BarChart,
      title: 'Technology Assessment',
      description:
        'Evaluate and recommend optimal AI solutions for your specific needs',
    },
    {
      icon: Lightbulb,
      title: 'Implementation Planning',
      description:
        'Create detailed execution plans for successful AI integration',
    },
    {
      icon: BookOpen,
      title: 'Team Training & Support',
      description: 'Comprehensive training programs to empower your team',
    },
    {
      icon: Award,
      title: 'Change Management',
      description: 'Guide your organization through AI transformation',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-12">
            <Users className="w-12 h-12 text-cyan-400 animate-pulse" />
            <h1 className="text-5xl font-bold text-white">AI Consulting</h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-3xl mb-16">
            <p className="text-xl text-gray-400">
              Navigate the complex AI landscape with confidence. Our expert
              consultants help you develop strategic roadmaps, implement
              solutions, and drive measurable business value through AI
              adoption.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Our Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Expertise Levels */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExpertiseLevel
                level="AI Strategy"
                description="Strategic planning and roadmap development"
                percentage={95}
              />
              <ExpertiseLevel
                level="Technical Implementation"
                description="Hands-on AI solution deployment"
                percentage={90}
              />
              <ExpertiseLevel
                level="Industry Experience"
                description="Cross-sector AI implementation"
                percentage={85}
              />
              <ExpertiseLevel
                level="Change Management"
                description="Organizational transformation"
                percentage={88}
              />
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Client Success Stories
            </h2>
            <Testimonials />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">45+</div>
              <div className="text-gray-400">Industry Experts</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-gray-400 mb-8">
              Schedule a consultation with our AI experts today.
            </p>
            <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
