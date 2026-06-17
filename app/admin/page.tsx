'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Admin() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', excerpt: '' });

  const addPost = () => {
    if (newPost.title && newPost.excerpt) {
      setPosts([...posts, { ...newPost, id: Date.now() }]);
      setNewPost({ title: '', excerpt: '' });
      alert('Post added! (Demo - data is in-memory)');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">Admin Dashboard</h1>
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Add New Blog Post</h2>
          <input
            type="text"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            className="w-full p-4 mb-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800"
          />
          <textarea
            placeholder="Excerpt"
            value={newPost.excerpt}
            onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
            className="w-full p-4 mb-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 h-32"
          />
          <button
            onClick={addPost}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Publish Post
          </button>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Added Posts (Demo)</h3>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl text-sm overflow-auto">{JSON.stringify(posts, null, 2)}</pre>
        </div>
        <p className="text-center mt-8 text-sm text-gray-500">Note: This is a demo admin panel. For production, connect to a backend like Supabase or your own API.</p>
      </div>
    </div>
  );
}