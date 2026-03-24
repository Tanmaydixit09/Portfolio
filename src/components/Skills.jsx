import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Backend Architecture",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "System Design"],
    color: "from-zinc-200 to-zinc-400"
  },
  {
    category: "Frontend Engineering",
    skills: ["JavaScript", "React.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    color: "from-zinc-300 to-zinc-500"
  },
  {
    category: "Databases & Storage",
    skills: ["MongoDB", "SQL", "Mongoose", "Database Design"],
    color: "from-zinc-400 to-zinc-600"
  },
  {
    category: "Dev Tools & Practices",
    skills: ["Git", "GitHub", "Vite", "Postman", "C++"],
    color: "from-zinc-500 to-zinc-700"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            A comprehensive overview of the tools and technologies I utilize to build robust digital solutions.
          </p>
        </div>
        <div className="w-16 h-1 bg-purple-500 rounded-full hidden md:block" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group glass-card p-8 hover:-translate-y-1 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <span className="text-8xl font-black">{index + 1}</span>
            </div>

            <h3 className={`text-xl font-bold mb-6 text-zinc-200 tracking-tight flex items-center gap-3`}>
              <span className="w-2 h-2 rounded-full bg-purple-500/80"></span>
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-600 transition-colors cursor-default tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
