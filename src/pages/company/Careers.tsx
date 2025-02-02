import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/Footer';
import { Users, Brain, Code, MessageCircle, Rocket, Heart } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const JobCard = ({ title, description, requirements, icon: Icon }) => (
  <motion.div
    className="bg-white/5 p-6 rounded-lg border border-white/10"
    whileHover={{
      scale: 1.02,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[#00F0FF]/10 rounded-lg">
        <Icon className="w-6 h-6 text-[#00F0FF]" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            Requirements:
          </h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <motion.button
          className="px-4 py-2 bg-[#00F0FF]/20 text-[#00F0FF] rounded-lg hover:bg-[#00F0FF]/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white/5 p-6 rounded-lg border border-white/10"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="w-8 h-8 text-[#00F0FF] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function CareersPage() {
  const jobs = [
    {
      title: 'AI Research Scientist',
      description:
        "Join our research team to develop cutting-edge AI solutions and push the boundaries of what's possible.",
      requirements: [
        'Ph.D. in Computer Science, AI, or related field',
        'Strong background in machine learning',
        'Published research in top-tier conferences',
        'Experience with PyTorch or TensorFlow',
      ],
      icon: Brain,
    },
    {
      title: 'Machine Learning Engineer',
      description:
        'Build and deploy ML models for production environments while solving complex technical challenges.',
      requirements: [
        '5+ years of software engineering experience',
        'Expertise in Python and ML frameworks',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong system design skills',
      ],
      icon: Code,
    },
    {
      title: 'AI Product Manager',
      description:
        'Lead the development of AI-powered products from conception to launch.',
      requirements: [
        '3+ years of product management experience',
        'Understanding of ML/AI concepts',
        'Strong analytical and communication skills',
        'Experience with agile methodologies',
      ],
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Help us shape the future of AI technology and make a real impact
              on businesses worldwide.
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BenefitCard
                icon={Users}
                title="Great Team"
                description="Work with talented individuals who are passionate about AI"
              />
              <BenefitCard
                icon={MessageCircle}
                title="Learning & Growth"
                description="Regular workshops, conferences, and learning opportunities"
              />
              <BenefitCard
                icon={Heart}
                title="Amazing Benefits"
                description="Competitive salary, health insurance, and flexible work hours"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-[#00F0FF]/20 to-purple-600/20 p-8 rounded-lg text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <motion.button
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Resume
            </motion.button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
