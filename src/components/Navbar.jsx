import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-black text-white tracking-tighter hover:opacity-80 transition-opacity"
          >
            TD.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-zinc-500 hover:text-white relative group transition-colors"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-zinc-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://github.com/Tanmay09" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/tanmaydixit09" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <FiLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-col items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden glass absolute top-full left-4 right-4 mt-2 rounded-2xl py-6 flex flex-col space-y-4 px-6 border border-zinc-800 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-zinc-400 hover:text-white text-lg font-bold tracking-tight"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-800 flex gap-4">
              <a href="https://github.com/Tanmay09" className="text-zinc-400 hover:text-white"><FiGithub size={20} /></a>
              <a href="https://linkedin.com/in/tanmaydixit09" className="text-zinc-400 hover:text-white"><FiLinkedin size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
