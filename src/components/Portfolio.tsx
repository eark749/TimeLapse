import React, { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './animations/ScrollReveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

const projects = [
  {
    title: 'AI-Powered Healthcare Diagnostics',
    description:
      'Developed an AI system that improved diagnostic accuracy by 45%',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['Healthcare', 'Machine Learning'],
    link: '/portfolio/healthcare-diagnostics',
    impact: '$500K saved in medical costs',
  },
  {
    title: 'Smart City Infrastructure',
    description:
      'Reduced urban energy consumption by 30% using AI optimization',
    image:
      'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80',
    tags: ['IoT', 'Data Analytics'],
    link: '#',
    impact: '50K tons CO2 reduction',
  },
  {
    title: 'Financial Fraud Detection',
    description:
      'Prevented $10M in fraudulent transactions with 99.9% accuracy',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Finance', 'Deep Learning'],
    link: '#',
    impact: '$10M fraud prevented',
  },
  {
    title: 'Autonomous Vehicle Navigation',
    description:
      'Enhanced self-driving capabilities with 99.5% accuracy in object detection',
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    tags: ['Automotive', 'Computer Vision'],
    link: '#',
    impact: '99.5% detection accuracy',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Built multilingual translation system supporting 50+ languages',
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    tags: ['NLP', 'Machine Learning'],
    link: '#',
    impact: '50+ language support',
  },
];

export default function Portfolio() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = useCallback(
    (index) => {
      if (swiperRef.current && index !== activeIndex) {
        swiperRef.current.slideTo(index);
        setActiveIndex(index);
      }
    },
    [activeIndex]
  );

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-[#1e1e2f]"
    >
      {/* Diffraction Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <filter
            id="diffraction-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005"
              numOctaves="3"
              result="turbulence"
              className="animate-turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
              className="animate-displacement"
            />
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path
          d="M0,160 C480,80 960,240 1440,160 L1440,320 L0,320 Z"
          fill="#00F0FF"
          fillOpacity="0.1"
          filter="url(#diffraction-filter)"
          className="animate-wave"
        />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="flex flex-col md:flex-row items-center gap-12">
          {/* Project Description Section */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-4">
              What We Do
            </h3>
            <h2 className="text-4xl font-bold text-white leading-snug mb-6">
              We bring{' '}
              <span className="italic text-[#00F0FF]">AI, engineering</span> &{' '}
              <span className="italic text-[#00F0FF]">content expertise</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Each problem is looked at from a fresh lens to provide you with a
              solution that solves your specific requirements and integrates
              with your existing infrastructure.
            </p>
            <ul className="text-gray-300 space-y-4">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className={`font-medium cursor-pointer transition-all duration-300 
                    p-2 rounded-lg group 
                    ${
                      index === activeIndex
                        ? 'text-[#00F0FF] bg-white/10'
                        : 'hover:text-[#00F0FF] hover:bg-white/5'
                    }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div className="flex items-center justify-between">
                    <span>
                      <span className="text-[#00F0FF] font-bold mr-2">•</span>{' '}
                      {project.title}
                    </span>
                    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.impact}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Carousel Section */}
          <div className="md:w-1/2 w-full relative">
            <Swiper
              modules={[Navigation, EffectCards, Autoplay]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              effect="cards"
              speed={500}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              className="w-full max-w-md mx-auto"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Link to={project.link}>
                    <div
                      className="bg-gradient-to-b from-[#1e1e2f] to-[#2a2a40] 
                      border border-[#2a2a40] rounded-xl overflow-hidden 
                      hover:shadow-2xl transition-all duration-500 
                      transform hover:scale-105"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-sm 
                                bg-[#00F0FF20] text-[#00F0FF]
                                backdrop-blur-sm hover:bg-[#00F0FF] 
                                hover:text-white transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3
                          className="text-xl font-semibold text-white mb-2 
                          hover:text-[#00F0FF] transition-colors duration-300"
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span
                            className="text-[#00F0FF] hover:text-white 
                            transition-colors duration-300"
                          >
                            View Project →
                          </span>
                          <span className="text-xs text-gray-500">
                            {project.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm 
              flex items-center justify-center border border-white/10 
              hover:bg-[#00F0FF]/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm 
              flex items-center justify-center border border-white/10 
              hover:bg-[#00F0FF]/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes turbulence {
          0%, 100% { baseFrequency: 0.005; }
          50% { baseFrequency: 0.01; }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(-50px) rotate(2deg); }
        }
        @keyframes displacement {
          0%, 100% { scale: 20; }
          50% { scale: 30; }
        }
        .animate-turbulence {
          animation: turbulence 10s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }
        .animate-displacement {
          animation: displacement 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
