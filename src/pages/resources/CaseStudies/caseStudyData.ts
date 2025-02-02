import { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Diagnostics',
    industry: 'Healthcare',
    summary:
      'How we helped a leading hospital improve diagnostic accuracy using ML for medical imaging, assisting radiologists in detecting anomalies.',
    challenge:
      'Facing challenges with diagnostic accuracy and lengthy processing times for medical imaging.',
    solution:
      'Implemented deep learning system trained on 1M+ annotated medical images.',
    image: 'https://source.unsplash.com/800x600/?hospital',
    metrics: [
      { value: '45%', label: 'Accuracy Boost' },
      { value: '30%', label: 'Time Saved' },
      { value: '60%', label: 'Faster Diagnosis' },
      { value: '50k+', label: 'Patients' },
    ],
    testimonial: {
      quote: 'The AI system has revolutionized our diagnostic workflow.',
      author: 'Dr. Sarah Mitchell',
      role: 'Chief of Radiology',
    },
    implementation: '6 months',
    roi: '380% in first year',
  },
  {
    id: 2,
    title: 'Retail Inventory Optimization',
    industry: 'Retail',
    summary:
      'Smart inventory management across 500+ stores, minimizing stockouts and improving supply chain.',
    challenge:
      'Managing inventory across locations with varying demands led to inefficiencies.',
    solution:
      'Deployed predictive analytics using sales data and seasonal trends.',
    image: 'https://source.unsplash.com/800x600/?retail',
    metrics: [
      { value: '25%', label: 'Cost Cut' },
      { value: '40%', label: 'Efficiency' },
      { value: '60%', label: 'Less Stockouts' },
      { value: '$5M', label: 'Saved Yearly' },
    ],
    testimonial: {
      quote: 'Transformed our inventory management and reduced costs.',
      author: 'James Wilson',
      role: 'Supply Chain Director',
    },
    implementation: '4 months',
    roi: '250% in first year',
  },
  {
    id: 3,
    title: 'Financial Fraud Detection',
    industry: 'Finance',
    summary:
      'Real-time fraud detection system protecting millions of customers from financial loss.',
    challenge:
      'Rising sophisticated fraud attempts causing losses and trust issues.',
    solution: 'Real-time ML monitoring for suspicious patterns.',
    image: 'https://source.unsplash.com/800x600/?finance',
    metrics: [
      { value: '99.9%', label: 'Detection' },
      { value: '$10M', label: 'Saved' },
      { value: '85%', label: 'Less False Flags' },
      { value: '3ms', label: 'Response' },
    ],
    testimonial: {
      quote: 'Dramatically improved fraud detection accuracy.',
      author: 'Michael Chang',
      role: 'Head of Security',
    },
    implementation: '8 months',
    roi: '450% in first year',
  },
  {
    id: 4,
    title: 'Smart Manufacturing',
    industry: 'Manufacturing',
    summary:
      'AI-driven predictive maintenance and quality control, optimizing production efficiency.',
    challenge: 'Equipment failures and quality issues causing costly delays.',
    solution: 'IoT sensors with AI analytics for predictive maintenance.',
    image: 'https://source.unsplash.com/800x600/?manufacturing',
    metrics: [
      { value: '75%', label: 'Less Downtime' },
      { value: '35%', label: 'Cost Saved' },
      { value: '45%', label: 'Quality Up' },
      { value: '$8M', label: 'Annual ROI' },
    ],
    testimonial: {
      quote: 'Transformed operations with predictive maintenance.',
      author: 'Robert Chen',
      role: 'Plant Manager',
    },
    implementation: '12 months',
    roi: '320% in first year',
  },
  {
    id: 5,
    title: 'Agricultural AI',
    industry: 'Agriculture',
    summary: 'Smart farming across 50,000 acres using AI and satellite data.',
    challenge: 'Weather uncertainty affecting crop yields and profits.',
    solution: 'AI-driven precision agriculture with satellite monitoring.',
    image: 'https://source.unsplash.com/800x600/?agriculture',
    metrics: [
      { value: '35%', label: 'More Yield' },
      { value: '40%', label: 'Water Saved' },
      { value: '30%', label: 'Less Fertilizer' },
      { value: '25%', label: 'Cost Down' },
    ],
    testimonial: {
      quote: 'Revolutionary approach to farming and resources.',
      author: 'Emma Davis',
      role: 'Agricultural Director',
    },
    implementation: '9 months',
    roi: '280% in first year',
  },
  {
    id: 6,
    title: 'Smart City Traffic',
    industry: 'Government',
    summary:
      'AI traffic optimization reducing congestion in metropolitan area.',
    challenge: 'Growing traffic causing delays and environmental issues.',
    solution: 'Real-time AI traffic prediction and signal optimization.',
    image: 'https://source.unsplash.com/800x600/?traffic',
    metrics: [
      { value: '30%', label: 'Less Traffic' },
      { value: '25%', label: 'Less Emissions' },
      { value: '20%', label: 'Faster Trips' },
      { value: '15M', label: 'People Helped' },
    ],
    testimonial: {
      quote: "Significantly improved citizens' daily commute.",
      author: 'Lisa Wong',
      role: 'Transportation Director',
    },
    implementation: '18 months',
    roi: '200% in first year',
  },
];
