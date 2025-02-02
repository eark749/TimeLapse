import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
