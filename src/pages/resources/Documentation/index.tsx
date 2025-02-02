import React, { useState } from 'react';
import Navbar from '../../../components/navigation/Navbar';
import Footer from '../../../components/Footer';
import DocSidebar from './DocSidebar';
import { documentationSections } from './docData';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState(documentationSections[0].id);

  const currentSection = documentationSections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
          <div className="flex gap-8">
            <DocSidebar
              sections={documentationSections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            <div className="flex-1 bg-white/5 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">{currentSection?.title}</h2>
              <div className="prose prose-invert">
                <p className="text-gray-400">{currentSection?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}