import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "Aug 2022 — Present",
    score: "CGPA: 7.3",
    description: "Focusing on advanced algorithms, scalable system design, and database management. Actively participating in tech communities and engineering projects.",
    tags: ["Algorithms", "Data Structures", "Web Arch", "DBMS"]
  },
  {
    institution: "Takshashila Public School",
    degree: "Intermediate / Higher Secondary",
    duration: "Mar 2021 — Jun 2022",
    score: "Percentage: 82%",
    description: "Completed secondary education with a major in Science and Mathematics.",
    tags: ["Physics", "Mathematics", "Computer Science"]
  },
  {
    institution: "Takshashila Public School",
    degree: "Matriculation / Secondary School",
    duration: "Mar 2019 — Mar 2020",
    score: "Percentage: 95%",
    description: "Achieved excellence in core subjects with a strong foundation in logic and science.",
    tags: ["Basic Logic", "General Science", "Languages"]
  }
];

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

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-zinc-700 transition-colors"
          >
            {/* Subtle Watermark for First Item Only */}
            {index === 0 && (
              <div className="absolute -right-20 -bottom-20 text-[200px] font-black tracking-tighter text-zinc-800/20 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                CS
              </div>
            )}

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex-shrink-0">
                <span className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                  {edu.duration}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-lg text-zinc-400 font-medium">{edu.degree}</p>
                <div className="mt-2 text-teal-400 font-bold tracking-tight">{edu.score}</div>
              </div>
              
              <div className="flex-grow">
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2 text-sm text-zinc-500 font-medium">
                  {edu.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-900/40 rounded-full border border-zinc-800">{tag}</span>
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

export default Education;
