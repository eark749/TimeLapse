import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { navItems, serviceItems } from './navData';

const TimeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 text-[#00F0FF] transition-all duration-500 ease-in-out
    group-hover:text-white group-hover:scale-125 group-hover:rotate-180
    group-hover:animate-pulse"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transform origin-center"
    />
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
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center px-4 py-6">
      <nav
        className={`
          relative w-full max-w-4xl px-4 py-2.5 rounded-full
          transition-all duration-500 ease-in-out 
          flex items-center justify-between
          ${isScrolled ? 'bg-black/50 scale-95' : 'bg-black/30'}
          backdrop-blur-lg border border-white/10
          hover:border-white/20 hover:bg-black/60
          hover:scale-[1.02] transform
        `}
      >
        <Link to="/" className="flex items-center space-x-2 group">
          <TimeIcon />
          <span
            className="text-xl font-bold transition-all duration-500 ease-in-out
            relative after:absolute after:bottom-0 after:left-0 after:h-[2px] 
            after:w-0 after:bg-white after:transition-all after:duration-500
            group-hover:after:w-full
            bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-transparent bg-clip-text
            group-hover:text-white group-hover:bg-none
            group-hover:tracking-widest group-hover:translate-x-2"
          >
            TimeLapse
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.label === 'Services' ? (
                <div>
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="px-5 py-2 text-base font-medium text-white/70 hover:text-white
                      transition-colors duration-200 rounded-full hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                  {isServicesOpen && (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 py-2 bg-black/90 backdrop-blur-lg
                        rounded-xl border border-white/10 shadow-xl"
                    >
                      {serviceItems.map((service) => (
                        <Link
                          key={service.label}
                          to={service.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white
                            hover:bg-white/10 transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink href={item.href}>{item.label}</NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF]
              text-white font-medium transition-all duration-300 ease-in-out
              hover:shadow-lg hover:shadow-[#B026FF]/20
              hover:scale-105 hover:brightness-110
              active:scale-95"
          >
            Contact
          </Link>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </nav>
    </div>
  );
}