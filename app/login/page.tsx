'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Demo login - in real app use auth
    setTimeout(() => {
      alert('Demo Login Successful! Redirecting to Admin...');
      window.location.href = '/admin';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass w-full max-w-md p-10 rounded-3xl border border-white/20 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🔑</span>
          </div>
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-slate-400 mt-2">Sign in to access admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-white/40"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-white/40"
              placeholder="••••••••"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </motion.button>
        </form>

        <p className="text-center mt-8 text-slate-500 text-sm">
          Demo: any email + any password works
        </p>
        <Link href="/" className="block text-center mt-6 text-slate-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
