import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from './types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex gap-4 text-sm text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 hover:text-[#00F0FF] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <button className="text-[#00F0FF] hover:text-white transition-colors">
          Read More →
        </button>
      </div>
    </article>
  );
}