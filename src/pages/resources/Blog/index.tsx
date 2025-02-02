import React from 'react';
import Navbar from '../../../components/navigation/Navbar';
import Footer from '../../../components/Footer';
import BlogCard from './BlogCard';
import { blogPosts } from './blogData';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Latest Insights</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}