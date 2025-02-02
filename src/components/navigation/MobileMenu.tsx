import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-white/90 hover:text-white transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 py-2 rounded-xl
          bg-black/50 backdrop-blur-lg border border-white/10">
          <Link
            to="/"
            className="block px-4 py-2 text-sm text-white/70 hover:text-white
              hover:bg-white/10 transition-colors"
            onClick={onToggle}
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-4 py-2 text-sm text-white/70 hover:text-white
                hover:bg-white/10 transition-colors"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 pt-2 mt-2 border-t border-white/10">
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-center rounded-full
                bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white
                hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              onClick={onToggle}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}