import React from 'react';
import Features from './Features';
import Stats from './Stats';
import ScrollReveal from '../animations/ScrollReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-[500px] h-[500px] bg-[#B026FF] rounded-full blur-[128px] top-0 right-0 
          animate-pulse"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Pioneering the Future of
                <span className={`block text-[#00F0FF] ${styles.gradientText}`}>
                  Artificial Intelligence
                </span>
              </h2>

              <p className="text-gray-400 mb-8">
                We're a team of AI experts, data scientists, and engineers
                passionate about pushing the boundaries of what's possible with
                artificial intelligence.
              </p>

              <Features />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Stats />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}