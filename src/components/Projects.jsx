import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: "Patient Medical Record System",
    description: "A secure backend system for managing sensitive patient medical data. Built with rigorous architecture to handle compliance and complex data relations.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    github: "https://github.com/tanmaydixit",
    live: "#"
  },
  {
    title: "Course Management Engine",
    description: "A comprehensive API platform featuring robust JWT authentication, scalable CRUD operations, and strict role-based access control.",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
    github: "https://github.com/tanmaydixit",
    live: "#"
  },
  {
    title: "QuickTask Intelligence",
    description: "An AI-powered task platform optimizing productivity through intelligent prioritization. Designed with a seamless modern UX.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "AI Integration"],
    github: "https://github.com/tanmaydixit",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Selected Work.
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            Showcasing scalable systems, robust architectures, and clean interfaces I've developed recently.
          </p>
        </div>
        <div className="w-16 h-1 bg-blue-500 rounded-full hidden md:block" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group relative glass-card p-8 flex flex-col h-full hover:border-zinc-700 overflow-hidden"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

            <div className="relative z-10 flex-grow">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight leading-tight pr-4">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-zinc-500">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                    <FiGithub size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
                      <FiArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                {project.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-6 border-t border-zinc-800/60">
              <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-wide uppercase text-zinc-500">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-900/50 rounded text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
