import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutPage from '../pages/company/About';
import CareersPage from '../pages/company/Careers';
import MachineLearningPage from '../pages/services/MachineLearning';
import DataAnalyticsPage from '../pages/services/DataAnalytics';
import ConsultingPage from '../pages/services/Consulting';
import ContactPage from '../pages/Contact';
import BlogPage from '../pages/resources/Blog';
import DocumentationPage from '../pages/resources/Documentation';
import CaseStudiesPage from '../pages/resources/CaseStudies';
import PricingPage from '../pages/Pricing';
import GetStartedPage from '../pages/GetStarted';
import LearnMorePage from '../pages/LearnMore';
import HealthcareDiagnosticsPage from '../pages/portfolio/HealthcareDiagnostics';
import AITrendsPage from '../pages/blog/AITrends';
import MLBestPracticesPage from '../pages/blog/MLBestPractices';
import HealthcareCaseStudyPage from '../pages/case-studies/Healthcare';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/company/about',
    element: <AboutPage />,
  },
  {
    path: '/company/careers',
    element: <CareersPage />,
  },
  {
    path: '/services/machine-learning',
    element: <MachineLearningPage />,
  },
  {
    path: '/services/data-analytics',
    element: <DataAnalyticsPage />,
  },
  {
    path: '/services/consulting',
    element: <ConsultingPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/docs',
    element: <DocumentationPage />,
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/get-started',
    element: <GetStartedPage />,
  },
  {
    path: '/learn-more',
    element: <LearnMorePage />,
  },
  {
    path: '/portfolio/healthcare-diagnostics',
    element: <HealthcareDiagnosticsPage />,
  },
  {
    path: '/blog/ai-trends',
    element: <AITrendsPage />,
  },
  {
    path: '/blog/ml-best-practices',
    element: <MLBestPracticesPage />,
  },
  {
    path: '/case-studies/healthcare',
    element: <HealthcareCaseStudyPage />,
  }
]);