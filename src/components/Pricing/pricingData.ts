import { PricingTier } from './types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 499,
    description: 'For small businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      'Up to 10,000 API calls/month',
      'Basic AI model customization',
      'Single AI chatbot',
      'Basic analytics',
      'Email support',
      'REST API access'
    ]
  },
  {
    name: 'Professional',
    price: 1499,
    description: 'For growing teams',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Up to 100,000 API calls/month',
      'Advanced AI customization',
      'Multiple chatbots',
      'Advanced analytics',
      '24/7 Priority support',
      'GraphQL & REST API access',
      'Custom integrations',
      'Team collaboration'
    ]
  },
  {
    name: 'Enterprise',
    price: 4999,
    description: 'For large organizations needing full control',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: [
      'Unlimited API calls',
      'Full AI model control & customization',
      'Custom AI infrastructure',
      'Real-time analytics & insights',
      'Dedicated support team',
      'Enterprise data processing',
      'Custom API development',
      'Priority feature requests',
      '99.999% uptime SLA'
    ]
  }
];