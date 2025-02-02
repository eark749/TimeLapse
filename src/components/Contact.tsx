import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Check } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: false,
    form: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91 9104039861' },
    { icon: Mail, label: 'Email Us', value: 'vanshsoniofficial@gmail.com' },
    { icon: MapPin, label: 'Visit Us', value: 'Bangalore, IN' },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-[#00F0FF] rounded-full blur-[128px] bottom-0 left-0 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            data-section="header"
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.header
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Ready to transform your business with AI? Let's talk about your
              project.
            </p>
          </div>

          <div
            data-section="cards"
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              isVisible.cards
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-white/5 border border-white/10 text-center transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-105 bg-white/10' : ''
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] flex items-center justify-center mx-auto mb-4 transform transition-transform duration-500 hover:rotate-12">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            data-section="form"
            className={`space-y-6 transition-all duration-1000 ${
              isVisible.form
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Your Name', 'Your Email'].map((placeholder, index) => (
                <input
                  key={index}
                  type={placeholder.includes('Email') ? 'email' : 'text'}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transform transition-all duration-300 focus:scale-[1.02] hover:bg-white/10"
                  disabled={isSubmitting}
                />
              ))}
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transform transition-all duration-300 focus:scale-[1.02] hover:bg-white/10"
              disabled={isSubmitting}
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transform transition-all duration-300 focus:scale-[1.02] hover:bg-white/10"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? 'animate-pulse' : ''
              }`}
            >
              <span className="flex items-center justify-center">
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  'Send Message'
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
