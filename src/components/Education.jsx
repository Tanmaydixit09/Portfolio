import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Backbone.
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            Academic fundamentals laying the groundwork for complex problem solving.
          </p>
        </div>
        <div className="w-16 h-1 bg-teal-500 rounded-full hidden md:block" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 relative overflow-hidden group hover:border-zinc-700 transition-colors"
        >
          {/* Subtle Watermark */}
          <div className="absolute -right-20 -bottom-20 text-[200px] font-black tracking-tighter text-zinc-800/20 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            CS
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16">
            <div className="flex-shrink-0">
              <span className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                2023 — 2027
              </span>
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Computer Science
              </h3>
              <p className="text-lg text-zinc-400 font-medium">B.Tech Degree</p>
            </div>
            
            <div className="flex-grow">
              <p className="text-zinc-400 leading-relaxed mb-6">
                Cultivating a rigorous foundation in algorithms, scalable architecture design, and low-level mechanics. Passionate about participating in tech-driven environments to push robust engineering practices.
              </p>
              
              <div className="flex flex-wrap gap-2 text-sm text-zinc-500 font-medium">
                <span className="px-3 py-1 bg-zinc-900/40 rounded-full border border-zinc-800">Algorithms</span>
                <span className="px-3 py-1 bg-zinc-900/40 rounded-full border border-zinc-800">Data Structures</span>
                <span className="px-3 py-1 bg-zinc-900/40 rounded-full border border-zinc-800">Database Theory</span>
                <span className="px-3 py-1 bg-zinc-900/40 rounded-full border border-zinc-800">Operating Systems</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
