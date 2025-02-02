import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DocSection } from './types';

interface DocSidebarProps {
  sections: DocSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export default function DocSidebar({ sections, activeSection, onSectionChange }: DocSidebarProps) {
  return (
    <nav className="w-64 pr-8">
      <ul className="space-y-2">
        {sections.map(section => (
          <li key={section.id}>
            <button
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between
                ${activeSection === section.id ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'text-gray-400 hover:text-white'}
                transition-colors duration-300`}
            >
              {section.title}
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}