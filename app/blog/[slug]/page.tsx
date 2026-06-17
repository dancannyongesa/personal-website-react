'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const postContent = {
    'nextjs-features': {
      title: 'Building Modern Web Apps with Next.js',
      content: 'Next.js 15 brings incredible new features like React 19 support, better caching, and partial prerendering...'
    },
    'ai-in-dev': {
      title: 'The Future of AI in Development',
      content: 'AI is revolutionizing coding with tools like Grok, Cursor, and more...'
    }
  };

  const post = postContent[slug as keyof typeof postContent] || { title: 'Post Not Found', content: 'Sorry, this post does not exist.' };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
      <div className="max-w-3xl mx-auto px-6 prose dark:prose-invert">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-8"
        >
          {post.title}
        </motion.h1>
        <div className="text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
        <div className="mt-12 pt-8 border-t">
          <a href="/blog" className="text-blue-600 hover:underline">← Back to Blog</a>
        </div>
      </div>
    </div>
  );
}