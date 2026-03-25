import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCode, FiDatabase } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 w-full">
      <div className="grid grid-cols-1 gap-12 lg:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full space-y-6 text-zinc-400 py-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
            About Me
          </h2>
          <p className="text-xl leading-relaxed text-zinc-300">
            Cultivating a rigorous foundation in algorithms and system development.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400">
            Dedicated to refining robust coding architectures and driving continuous innovation through hands-on technical problem solving. I excel at transforming abstract requirements into resilient APIs, optimizing relational databases, and maintaining clean code standards across the entire stack.
          </p>
          <div className="flex justify-center grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center border-t border-zinc-900 pt-12 mt-8">
            <div>
              <h4 className="text-3xl font-black text-white mb-1">10+</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">260+</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">DSA Solved</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">3+</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">Hackathons</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">C++</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">Primary Lang</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
