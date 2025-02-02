import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00F0FF] mr-2">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transform origin-center"
    />
    {/* Hour hand */}
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="transform origin-center"
    />
    {/* Minute hand */}
    <line
      x1="12"
      y1="12"
      x2="16"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="transform origin-center"
    />
    {/* Center dot */}
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A0A0A] flex items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
          .font-pt-sans-narrow {
            font-family: 'PT Sans Narrow', sans-serif;
          }
        `}
      </style>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/aOOoHH6IH28vDdJe/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-[#00F0FF] rounded-full blur-[128px] -top-48 -left-24 animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#B026FF] rounded-full blur-[128px] -bottom-48 -right-24 animate-pulse delay-700" />
      </div>

      <div className="absolute bottom-12 left-8 z-10">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <TimeIcon />
            <span className="text-white/80">Time-Driven Innovation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block font-bebas-neue">Shaping Tomorrow</span>
            <span className="block bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-transparent bg-clip-text">
              Through Innovation
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-md mb-12">
            We harness the power of cutting-edge technology to transform time
            into opportunity. Experience the future of innovation today with
            TimeLapse.
          </p>

          <div className="flex gap-4">
            <Link
              to="/get-started"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B026FF] to-[#00F0FF] transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            </Link>
            <Link
              to="/learn-more"
              className="px-8 py-4 rounded-lg border border-white/10 text-white font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Learn More
              </span>
              <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
