import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg"
    whileHover={{
      scale: 1.02,
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
    }}
    transition={{ duration: 0.2 }}
  >
    <motion.h3
      className="text-xl font-semibold text-white mb-3"
      whileHover={{ scale: 1.01 }}
    >
      {title}
    </motion.h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl font-bold text-white mb-8"
            whileHover={{ scale: 1.01 }}
          >
            About Us
          </motion.h1>

          <div className="grid gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="prose prose-invert"
            >
              <p className="text-gray-400 text-lg">
                We are a leading AI solutions provider, dedicated to
                transforming businesses through innovative artificial
                intelligence technologies. Our team of experts combines
                cutting-edge AI research with practical business applications.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <motion.h2
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  Our Mission
                </motion.h2>
                <p className="text-gray-400">
                  To democratize AI technology and make it accessible to
                  businesses of all sizes, helping them achieve their full
                  potential through intelligent automation and data-driven
                  decision making.
                </p>
              </div>
              <motion.div
                className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
              >
                <iframe
                  src="https://my.spline.design/retrofuturisticcircuitloop-4a71d239cc2c149a1d26f486213ff50f/"
                  frameBorder="0"
                  className="w-full h-full absolute inset-0"
                  title="AI Technology Visualization"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Rest of the component remains the same */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="grid md:grid-cols-3 gap-8"
            >
              <FeatureCard
                title="Innovation"
                description="Pushing the boundaries of what's possible with AI technology"
              />
              <FeatureCard
                title="Expertise"
                description="World-class team of AI researchers and engineers"
              />
              <FeatureCard
                title="Impact"
                description="Transforming businesses through AI-driven solutions"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg"
              whileHover={{
                scale: 1.01,
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
              }}
            >
              <motion.h2
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ scale: 1.01 }}
              >
                Join Our Journey
              </motion.h2>
              <p className="text-white text-lg mb-6">
                Ready to transform your business with AI? Let's collaborate and
                unlock your full potential.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
