'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/admin', label: 'Admin' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-zinc-950 text-white overflow-hidden">
      {/* Navbar - Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-9 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-xl font-bold"
            >DO</motion.div>
            <span className="font-bold text-2xl tracking-tight">Dan Ongesa</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.href} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-violet-400 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-3 glass rounded-2xl hover:scale-110 transition-all"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 glass rounded-2xl">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero with super animation */}
      <section className="min-h-screen pt-24 flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e520_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-sm tracking-[3px]">FULL-STACK DEVELOPER</div>
            <h1 className="text-7xl md:text-[5.5rem] font-bold tracking-tighter leading-none mb-8">
              Dan Canny<br />Ongesa
            </h1>
            <p className="text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
              Crafting immersive digital experiences with code and creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-10 py-4 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-3 hover:border-white/40"
              >
                Explore Work <span className="text-xl">↓</span>
              </motion.a>
              <Link href="/login" className="glass px-10 py-4 rounded-2xl font-semibold text-lg inline-flex items-center justify-center">
                Admin Access
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div className="absolute bottom-20 right-10 hidden lg:block float" style={{animationDelay: '1s'}}>
          <div className="glass w-40 h-40 rounded-3xl p-6 flex items-center justify-center text-6xl">🚀</div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-bold text-center mb-16"
          >About Me</motion.h2>
          <div className="glass p-16 rounded-3xl">
            <p className="text-xl leading-relaxed text-center text-slate-300">
              Passionate full-stack developer turning bold ideas into elegant, high-performance applications. 
              I specialize in React, Next.js, Node.js and love building things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-20">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'SneekSave', desc: 'Smart financial tracking & savings platform', link: '#' },
              { title: 'SparkBlog', desc: 'Modern content platform with real-time features', link: '#' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="glass-card glass p-10 rounded-3xl group"
              >
                <div className="h-2 w-12 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded mb-8"></div>
                <h3 className="text-4xl font-semibold mb-4 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-lg mb-8">{project.desc}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-violet-400 hover:gap-3 transition-all">
                  View Case Study →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/dancannyongesa" target="_blank" className="hover:text-violet-400 transition-colors"><Github className="h-7 w-7" /></a>
            <a href="#" className="hover:text-violet-400 transition-colors"><Linkedin className="h-7 w-7" /></a>
            <a href="mailto:your@email.com" className="hover:text-violet-400 transition-colors"><Mail className="h-7 w-7" /></a>
          </div>
          <p className="text-slate-500">© 2026 Dan Canny Ongesa. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}