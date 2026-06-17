'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Handled by next-themes

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/admin', label: 'Admin' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">DO</div>
            <span className="font-semibold text-xl">Dan Ongesa</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Dan Canny Ongesa</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer crafting digital experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform">
                View Projects
              </a>
              <a href="mailto:your@email.com" className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-center">
              Passionate developer with expertise in React, Node.js, and modern web technologies. I build scalable applications and love turning ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'SneekSave', desc: 'Financial management app', link: '#' },
              { title: 'SparkBlog', desc: 'Modern blogging platform', link: '#' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.desc}</p>
                <a href={project.link} className="text-blue-600 hover:underline flex items-center gap-2">
                  View Project <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/dancannyongesa" target="_blank"><Github className="h-6 w-6" /></a>
            <a href="#"><Linkedin className="h-6 w-6" /></a>
            <a href="mailto:your@email.com"><Mail className="h-6 w-6" /></a>
          </div>
          <p>© 2026 Dan Canny Ongesa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}