'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Apps with Next.js',
    date: '2026-06-01',
    excerpt: 'Exploring the latest features in Next.js 15 and how to build blazing fast applications.',
    slug: 'nextjs-features'
  },
  {
    id: 2,
    title: 'The Future of AI in Development',
    date: '2026-05-15',
    excerpt: 'How AI tools are transforming the way we code and build software.',
    slug: 'ai-in-dev'
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 p-8 rounded-2xl hover:border-blue-500 group"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</div>
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">Read more →</Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}