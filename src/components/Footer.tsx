import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#00F0FF]">
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

const footerLinks = {
  company: [
    { label: 'About', href: '/company/about' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Machine Learning', href: '/services/machine-learning' },
    { label: 'Data Analytics', href: '/services/data-analytics' },
    { label: 'Consulting', href: '/services/consulting' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href.startsWith('#') && !isHome) {
      return (
        <Link
          to={`/${link.href}`}
          className="text-gray-400 hover:text-[#00F0FF] transition-colors"
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        to={link.href}
        className="text-gray-400 hover:text-[#00F0FF] transition-colors"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <TimeIcon />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-transparent bg-clip-text">
                TimeLapse
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming the future with artificial intelligence. We build
              innovative solutions that drive business growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} TimeLapse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="#"
              className="text-gray-400 hover:text-[#00F0FF] transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-[#00F0FF] transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
