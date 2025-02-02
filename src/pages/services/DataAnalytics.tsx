import React, { useState } from 'react';
import {
  Database,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  Search,
  Table,
} from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

const AnalyticsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-cyan-400/20">
      <Icon className="w-8 h-8 text-cyan-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const InsightMetric = ({ label, value, trend }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
      <div className="text-gray-400 mb-2">{label}</div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div
        className={`flex items-center ${
          trend >= 0 ? 'text-green-400' : 'text-red-400'
        }`}
      >
        <TrendingUp
          className={`w-4 h-4 mr-1 ${trend < 0 ? 'transform rotate-180' : ''}`}
        />
        <span>{Math.abs(trend)}% vs last month</span>
      </div>
    </div>
  );
};

const DataSourceCard = ({ title, description, status }) => {
  return (
    <div className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-duration-300">
      <div
        className={`w-3 h-3 rounded-full mr-4 ${
          status === 'active' ? 'bg-green-400' : 'bg-gray-400'
        }`}
      />
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function DataAnalyticsPage() {
  const [activeTab, setActiveTab] = useState('realtime');

  const analyticsFeatures = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description:
        'Monitor your data streams in real-time with millisecond latency',
    },
    {
      icon: PieChart,
      title: 'Predictive Insights',
      description:
        'Forecast trends and patterns using advanced statistical models',
    },
    {
      icon: LineChart,
      title: 'Performance Metrics',
      description:
        'Track KPIs and business metrics with interactive dashboards',
    },
    {
      icon: Search,
      title: 'Data Discovery',
      description: 'Uncover hidden patterns and correlations in your data',
    },
    {
      icon: Table,
      title: 'Custom Reports',
      description: 'Generate tailored reports with automated data processing',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-12">
            <Database className="w-12 h-12 text-cyan-400 animate-pulse" />
            <h1 className="text-5xl font-bold text-white">Data Analytics</h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-3xl mb-16">
            <p className="text-xl text-gray-400">
              Transform your raw data into actionable insights with our advanced
              analytics platform. Make informed decisions faster with real-time
              analytics, predictive modeling, and interactive visualizations.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Performance Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightMetric label="Data Processed" value="2.5TB" trend={12} />
              <InsightMetric label="Query Speed" value="0.3ms" trend={-8} />
              <InsightMetric label="Active Users" value="12.4k" trend={15} />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Analytics Suite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyticsFeatures.map((feature, index) => (
                <AnalyticsCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Connected Data Sources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataSourceCard
                title="Cloud Data Warehouse"
                description="Real-time sync with major cloud providers"
                status="active"
              />
              <DataSourceCard
                title="API Integrations"
                description="Connected to 50+ business applications"
                status="active"
              />
              <DataSourceCard
                title="IoT Data Streams"
                description="Processing 1M+ events per second"
                status="active"
              />
              <DataSourceCard
                title="Legacy Systems"
                description="Seamless integration with existing databases"
                status="active"
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Why Choose Our Analytics Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-400">Uptime Guaranteed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  500+
                </div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-gray-400 mb-8">
              Start turning your data into actionable insights today.
            </p>
            <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
