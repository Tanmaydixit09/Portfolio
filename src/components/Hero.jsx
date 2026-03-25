import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiCode, FiSmartphone, FiFeather } from 'react-icons/fi';

const words = ["Full Stack Developer", "Backend Specialist", "Software Engineer"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.4, ease: "easeIn" } }
  };

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
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 w-full overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start px-4 lg:px-0"
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
            className="flex flex-col gap-2 mb-6"
          >
            <motion.span 
              key={currentWordIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-xl md:text-3xl lg:text-4xl text-zinc-400 font-light tracking-wide"
            >
              {words[currentWordIndex]}
            </motion.span>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg text-zinc-400 mb-12 leading-relaxed"
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
              <FiDownload size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex gap-6 text-zinc-500"
          >
            <a href="https://github.com/Tanmaydixit09" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-2">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tanmaydixit09/" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors flex items-center gap-2">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:tanmaydixit09@gmail.com" className="hover:text-zinc-200 transition-colors flex items-center gap-2">
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative lg:block flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Background Elements */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -inset-6 bg-zinc-900/60 border border-zinc-800/40 rounded-full rotate-6 group-hover:rotate-3 transition-transform duration-700" />
            <div className="absolute -inset-8 bg-zinc-950/80 border border-zinc-800 rounded-full -rotate-3 group-hover:rotate-0 transition-transform duration-700" />

            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full pointer-events-none z-[5] flex items-center justify-center">
              <div className="w-full h-full rounded-full border-4 border-teal-400/30 shadow-[0_0_40px_rgba(52,211,153,0.15)]" />
            </div>

            {/* The Actual Image (circular frame) */}
            <div className="absolute inset-6 rounded-full overflow-hidden border border-zinc-800 shadow-2xl relative z-10 flex items-center justify-center">
              <img 
                src="/cv-pic-portrait.jpg" 
                alt="Tanmay Dixit - Portrait" 
                className="w-full h-full object-cover rounded-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>

            {/* Circular Tech Badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-zinc-900/60 border border-teal-400/30 flex items-center justify-center text-teal-300 z-20 shadow-lg"
            >
              <FiCode />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-zinc-900/60 border border-blue-400/30 flex items-center justify-center text-blue-300 z-20 shadow-lg"
            >
              <FiSmartphone />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-1/2 -right-14 w-12 h-12 rounded-full bg-zinc-900/60 border border-purple-400/30 flex items-center justify-center text-purple-300 z-20 shadow-lg"
            >
              <FiFeather />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

