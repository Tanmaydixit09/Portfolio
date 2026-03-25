import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: "Computational Theory",
    issuer: "Infosys Springboard",
    date: "Aug 2023",
    link: "https://www.linkedin.com/posts/tanmaydixit09_infosys-springboard-computational-thehttps://www.linkedin.com/posts/tanmaydixit09_learning-computationaltheory-automata-share-7408237583081697280-aWq5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3ZedoBVvtxB4OyA7xQwkxBABo9mhRrQuoory-activity-7101564344567406592-PqXk"
  },
  {
    title: "Cloud Computing",
    issuer: "IIT Kharagpur | NPTEL",
    date: "May 2023",
    link: "https://www.linkedin.com/posts/tanmaydixit09_cloudcomputing-nptel-continuouslearning-share-7411411510561832960-YsWv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3ZedoBVvtxB4OyA7xQwkxBABo9mhRrQuoosts/tanmaydixit09_nptel-cloud-computing-certification-activity-7065643445674065920-XqYk"
  },
  {
    title: "Python For Beginners",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    link: "https://www.lihttps://www.linkedin.com/posts/tanmaydixit09_generativeai-promptengineering-chatgpt-share-7411415975989940224-HlNP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3ZedoBVvtxB4OyA7xQwkxBABo9mhRrQuonkedin.com/posts/tanmaydixit09_infosys-springboard-python-certification-activity-7161564344567406592-ZqRk"
  },
  {
    title: "HackerRank Skill Certifications",
    issuer: "HackerRank",
    date: "Continuous",
    details: "Verified skills in JavaScript (Intermediate) and C++ (Basic)."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 w-full mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Validation.
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            A testament to continuous learning and industry-standard competency.
          </p>
        </div>
        <div className="w-16 h-1 bg-blue-500 rounded-full hidden md:block" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card group p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                <FiAward size={24} />
              </div>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
            
            <div className="mt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                {cert.date}
              </span>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-zinc-400 font-medium text-sm mb-4">{cert.issuer}</p>
              {cert.details && (
                <p className="text-zinc-500 text-sm leading-relaxed">{cert.details}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
