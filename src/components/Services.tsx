import React, { useEffect, useRef } from 'react';
import {
  Brain,
  Database,
  Briefcase,
  Cloud,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Custom ML models tailored to your business needs with state-of-the-art algorithms. Harness the power of predictive analytics, deep learning, and computer vision to gain a competitive edge.',
    link: '/services/machine-learning',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 15 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={100 + (i % 5) * 50}
              cy={50 + Math.floor(i / 5) * 50}
              r="4"
              fill="#00F0FF"
              className="animate-pulse"
            >
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
            {i < 10 && (
              <line
                x1={100 + (i % 5) * 50}
                y1={50 + Math.floor(i / 5) * 50}
                x2={100 + ((i + 5) % 5) * 50}
                y2={100 + Math.floor((i + 5) / 5) * 50}
                stroke="url(#grad1)"
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur={`${3 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        ))}
      </svg>
    ),
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with our AI-powered analytics platform. Identify trends, optimize strategies, and make informed decisions with precision.',
    link: '/services/data-analytics',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <rect
              x={70 + i * 25}
              y={200}
              width="15"
              height="0"
              fill="url(#grad3)"
              opacity="0.8"
            >
              <animate
                attributeName="height"
                values={`0;${100 + Math.random() * 80};0`}
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`200;${100 - Math.random() * 80};200`}
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </svg>
    ),
  },
  {
    icon: Briefcase,
    title: 'Consulting',
    description:
      'Expert AI consulting services to help you navigate the complex landscape of artificial intelligence. Our solutions offer strategic guidance and implementation support.',
    link: '/services/consulting',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i}>
            <path
              d={`M ${50} ${40 + i * 20} Q ${200} ${20 + i * 25}, ${350} ${
                40 + i * 20
              }`}
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="2"
            >
              <animate
                attributeName="d"
                values={`
                  M ${50} ${40 + i * 20} Q ${200} ${20 + i * 25}, ${350} ${
                  40 + i * 20
                };
                  M ${50} ${40 + i * 20} Q ${200} ${60 + i * 25}, ${350} ${
                  40 + i * 20
                };
                  M ${50} ${40 + i * 20} Q ${200} ${20 + i * 25}, ${350} ${
                  40 + i * 20
                }
                `}
                dur={`${4 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </svg>
    ),
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure solutions. Modernize your applications and optimize performance with our comprehensive cloud services.',
    link: '/services/cloud-solutions',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={100 + i * 40}
              cy={100}
              r={15 + Math.sin(i) * 5}
              fill="url(#grad4)"
              opacity="0.6"
            >
              <animate
                attributeName="r"
                values={`${15 + Math.sin(i) * 5};${20 + Math.sin(i) * 5};${
                  15 + Math.sin(i) * 5
                }`}
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`100;${90 + Math.sin(i) * 10};100`}
                dur={`${4 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            {i < 5 && (
              <line
                x1={100 + i * 40}
                y1={100}
                x2={140 + i * 40}
                y2={100}
                stroke="url(#grad4)"
                strokeWidth="2"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.6;0.3"
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        ))}
      </svg>
    ),
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'Advanced computer vision solutions for object detection, image recognition, and visual search. Automate visual tasks and enhance security.',
    link: '/services/computer-vision',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g>
          <circle
            cx="200"
            cy="100"
            r="40"
            fill="none"
            stroke="url(#grad5)"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="40;45;40"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = 200 + Math.cos(angle) * 60;
            const y = 100 + Math.sin(angle) * 60;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="#00F0FF">
                  <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur={`${2 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <line
                  x1="200"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="url(#grad5)"
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${3 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            );
          })}
        </g>
      </svg>
    ),
  },
  {
    icon: MessageSquare,
    title: 'NLP Services',
    description:
      'Natural Language Processing solutions for text analysis, translation, and chatbots. Transform text data into valuable insights.',
    link: '/services/nlp',
    animation: () => (
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i}>
            <rect
              x={50 + i * 75}
              y={80}
              width="60"
              height="20"
              rx="10"
              fill="url(#grad6)"
              opacity="0.6"
            >
              <animate
                attributeName="y"
                values={`${80};${75 + Math.sin(i) * 10};${80}`}
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.9;0.6"
                dur={`${3 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
            {i < 4 && (
              <line
                x1={110 + i * 75}
                y1={90}
                x2={125 + i * 75}
                y2={90}
                stroke="url(#grad6)"
                strokeWidth="2"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.6;0.3"
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        ))}
      </svg>
    ),
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="services" className="bg-[#0A0A0A] py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leverage our expertise in artificial intelligence to transform your
            business and stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-xl bg-white/5 
                transition-all duration-500 ease-in-out group
                border border-transparent hover:border-[#00F0FF]/50
                hover:[box-shadow:0_0_30px_rgba(0,240,255,0.3)]
                opacity-0 translate-y-8"
            >
              <div className="p-4">
                <service.animation />
                <div
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF]
                  flex items-center justify-center mb-3
                  transform transition-all duration-500 ease-in-out
                  group-hover:scale-110 group-hover:rotate-3"
                >
                  <service.icon className="w-6 h-6 text-white transform transition-transform duration-500 ease-in-out" />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2 
                  transition-colors duration-500 ease-in-out
                  group-hover:text-[#00F0FF]"
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 transition-colors duration-500 ease-in-out">
                  {service.description}
                </p>

                <div
                  className="mt-4 flex items-center text-[#00F0FF] opacity-0 transform translate-y-2 
                  transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span className="mr-2">Learn More</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
