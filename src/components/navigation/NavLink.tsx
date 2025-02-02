import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAnchor = href.startsWith('#');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isAnchor) {
      const sectionId = href.substring(1);
      if (location.pathname !== '/') {
        // Navigate to home and scroll to section
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        // Already on home, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
      window.scrollTo(0, 0); // Scroll to top for new pages
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative px-5 py-2 text-base font-medium text-white/70 hover:text-white
        transition-colors duration-200 rounded-full hover:bg-white/10"
    >
      {children}
    </a>
  );
}