import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const words = ["Full Stack Developer", "Backend Specialist", "Software Engineer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : 80, parseInt(Math.random() * 40)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10 flex flex-col items-start md:items-center md:text-center px-4"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-xs tracking-widest uppercase font-medium shadow-sm flex items-center gap-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-white leading-tight"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
             Tanmay Dixit.
          </span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="h-10 md:h-16 flex items-center md:justify-center text-xl md:text-3xl lg:text-4xl text-zinc-400 font-light tracking-wide mb-6"
        >
          <span>{`${words[index].substring(0, subIndex)}`}</span>
          <span className={`w-[2px] h-[60%] bg-purple-500 ml-1.5 ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl md:max-w-2xl text-base md:text-lg text-zinc-400 mb-12 leading-relaxed"
        >
          Architecting robust backend systems and crafting seamless full-stack applications. 
          Currently studying Computer Science with a passion for clean code and elevated design.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
          >
            <FiDownload />
            Resume
          </a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full mt-24 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm gap-4 hidden sm:flex"
        >
          <p>Full Stack Developer based in India.</p>
          <div className="flex gap-5">
            <a href="https://github.com/tanmaydixit" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-2">
              <FiGithub size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/tanmaydixit" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-2">
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
