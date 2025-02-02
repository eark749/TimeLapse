import React, { useState } from 'react';
import { Brain, Database, Network, Cpu, BarChart3, Cog } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300">
      <Icon className="w-8 h-8 text-cyan-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400 text-black font-bold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const MLMetrics = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { value: '98%', label: 'Accuracy Rate' },
    { value: '2.5x', label: 'Faster Processing' },
    { value: '60%', label: 'Cost Reduction' },
  ];

  return (
    <div className="flex justify-between space-x-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`text-center p-6 rounded-lg transition-all duration-300 ${
            activeMetric === index ? 'bg-cyan-400 bg-opacity-20' : 'bg-gray-900'
          }`}
          onMouseEnter={() => setActiveMetric(index)}
        >
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            {metric.value}
          </div>
          <div className="text-gray-400">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default function MachineLearningPage() {
  const features = [
    {
      icon: Network,
      title: 'Neural Networks',
      description:
        'Custom deep learning architectures tailored to your specific use cases',
    },
    {
      icon: Database,
      title: 'Data Processing',
      description:
        'Advanced data preprocessing and feature engineering pipelines',
    },
    {
      icon: Cpu,
      title: 'Model Optimization',
      description:
        'Performance tuning and deployment optimization for production',
    },
    {
      icon: BarChart3,
      title: 'Analytics Integration',
      description:
        'Seamless integration with your existing analytics infrastructure',
    },
    {
      icon: Cog,
      title: 'Automated Training',
      description: 'Continuous model training and improvement pipelines',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-12">
            <Brain className="w-12 h-12 text-cyan-400 animate-pulse" />
            <h1 className="text-5xl font-bold text-white">
              Machine Learning Solutions
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-3xl mb-16">
            <p className="text-xl text-gray-400">
              Transform your business with our cutting-edge machine learning
              solutions. We help organizations harness the power of AI to
              automate processes, uncover hidden insights, and make data-driven
              decisions.
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Performance Metrics
            </h2>
            <MLMetrics />
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Our Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our Process</h2>
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Requirements Analysis"
                description="We work closely with your team to understand your specific needs and objectives"
              />
              <ProcessStep
                number="2"
                title="Data Assessment"
                description="Thorough evaluation of your data quality and preprocessing requirements"
              />
              <ProcessStep
                number="3"
                title="Model Development"
                description="Custom ML model development and iterative improvement cycles"
              />
              <ProcessStep
                number="4"
                title="Deployment & Integration"
                description="Seamless deployment into your existing infrastructure with monitoring"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how our ML solutions can drive your business
              forward.
            </p>
            <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
