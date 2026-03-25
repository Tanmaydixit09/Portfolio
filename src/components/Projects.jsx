import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: "CodeSync - Collaborative Code Editor",
    description: "Developed a full-stack real-time collaborative IDE supporting multi-user live code editing with sub-50ms latency using room-based communication via Socket.IO. Engineered secure authentication and JWT-based Role-Based Access Control.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Monaco Editor"],
    github: "https://github.com/Tanmaydixit09",
    live: "#",
    image: "/project-1.png",
    date: "Jan 2026 - Feb 2026"
  },
  {
    title: "Confidentiality of Patient's Medical Records",
    description: "Developed a secure Medical Records Management System to store/manage patient data with high confidentiality through encryption. Integrated secure data transmission using HTTPS and JWT authentication to prevent unauthorized access.",
    tech: ["React.js", "React Router", "JavaScript", "REST API", "Node.js", "MongoDB"],
    github: "https://github.com/Tanmaydixit09",
    live: "#",
    image: "/project-2.png",
    date: "Oct 2025 - Nov 2025"
  },
  {
    title: "C++ OOP & Data Structures",
    description: "Completed structured training focused on C++ programming, OOP, and Data Structures through practical coding assignments and real-world problem-solving exercises. Mastered core DSA concepts with 260+ problems solved.",
    tech: ["C++", "OOPS", "Data Structures", "Algorithms"],
    github: "https://github.com/Tanmaydixit09",
    live: "#",
    image: "/project-3.png",
    date: "Jun 2025 - Jul 2025"
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
            className="group relative glass-card flex flex-col h-full hover:border-zinc-700 overflow-hidden rounded-2xl p-0"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-full h-48 sm:h-56 overflow-hidden relative z-10 border-b border-zinc-800/50">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
              <span className="text-purple-400 font-bold text-xs tracking-widest uppercase mb-3 block">{project.date}</span>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight leading-tight pr-4">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-zinc-500 flex-shrink-0">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white cursor-pointer transition-colors" aria-label="GitHub Repository">
                    <FiGithub size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white cursor-pointer transition-colors" aria-label="Live Demo">
                      <FiArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="pt-6 border-t border-zinc-800/60 mt-auto">
                <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-semibold tracking-wide md:tracking-wider uppercase text-zinc-500">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-zinc-900/80 rounded text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
