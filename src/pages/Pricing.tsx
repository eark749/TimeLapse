import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';
import PricingComponent from '../components/Pricing/Pricing';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24">
        <PricingComponent />
      </main>
      <Footer />
    </div>
  );
}