import React from 'react';
import { FiGithub, FiLinkedin, FiCompass } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-3xl relative z-10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-white tracking-tighter">
              Tanmay Dixit.
            </h3>
            <p className="text-zinc-500 text-sm mt-1 tracking-wide font-medium">
              Software Engineer &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-800/50">
            Deployed on Vercel
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Tanmay09" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/tanmaydixit09" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
