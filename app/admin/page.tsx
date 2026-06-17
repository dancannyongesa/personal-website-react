'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Admin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', content: '' });

  const addPost = () => {
    if (newPost.title && newPost.excerpt) {
      setPosts([...posts, { ...newPost, id: Date.now(), date: new Date().toISOString() }]);
      setNewPost({ title: '', excerpt: '', content: '' });
      alert('Post published successfully! (In-memory demo)');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-zinc-950 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-400">Manage your content</p>
          </div>
          <Link href="/" className="glass px-6 py-3 rounded-2xl text-sm">← Home</Link>
        </div>

        <div className="glass p-12 rounded-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-white">Create New Blog Post</h2>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Short Excerpt"
              value={newPost.excerpt}
              onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
              className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none"
            />
            <textarea
              placeholder="Full Content"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none h-48"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={addPost}
              className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-2xl text-lg"
            >
              Publish Post
            </motion.button>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold mb-6 text-white">Published Posts ({posts.length})</h3>
          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-xl font-medium text-white">{post.title}</h4>
                  <p className="text-slate-400 mt-2 line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-slate-500 mt-4">{new Date(post.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 italic">No posts yet. Create one above!</p>
          )}
        </div>

        <p className="text-center mt-12 text-slate-500 text-sm">
          Demo mode • Data resets on refresh. For production use a database.
        </p>
      </div>
    </div>
  );
}