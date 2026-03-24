import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCode, FiDatabase } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, lg: { x: -30 } }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6 text-zinc-400 order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
            Engineering precise, <br/>
            scalable backends.
          </h2>
          
          <p className="text-xl leading-relaxed text-zinc-300">
            I am a full-stack developer with a strong emphasis on backend architecture, currently advancing my studies in Computer Science.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400">
            I excel at transforming abstract requirements into resilient APIs, optimizing relational databases, and maintaining clean code standards across the entire stack. Designing systems that scale seamlessly is what drives me.
          </p>

          <div className="pt-8 mt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-black text-white mb-1">3+</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Years Dev</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-1">10+</h4>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Projects</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, lg: { x: 30 } }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 lg:col-start-7 w-full order-1 lg:order-2"
        >
          <div className="flex flex-col gap-4">
            <div className="glass-card p-6 flex items-start gap-5 hover:border-zinc-700 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0 shadow-lg">
                <FiServer size={22} className="text-purple-400"/>
              </div>
              <div>
                <h4 className="text-lg text-zinc-100 font-bold mb-1 tracking-tight">System Architecture</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Designing RESTful APIs and resilient microservices using Node.js and Express to handle concurrent loads securely.</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-5 hover:border-zinc-700 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0 shadow-lg">
                <FiDatabase size={22} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg text-zinc-100 font-bold mb-1 tracking-tight">Data Engineering</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Structuring complex schemas in MongoDB and executing performant SQL queries for robust data integrity.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-5 hover:border-zinc-700 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0 shadow-lg">
                <FiCode size={22} className="text-teal-400" />
              </div>
              <div>
                <h4 className="text-lg text-zinc-100 font-bold mb-1 tracking-tight">Frontend Ecosystem</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Crafting responsive, highly interactive user interfaces using React, Tailwind CSS, and elegant Framer Motion animations.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
