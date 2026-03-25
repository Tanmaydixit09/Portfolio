import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiExternalLink } from 'react-icons/fi';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "Aug 2023 — Present",
    score: "CGPA: 7.3",
  },
  {
    institution: "Takshashila Public School",
    degree: "Intermediate / Higher Secondary",
    duration: "Mar 2021 — Jun 2022",
    score: "Percentage: 82%",
  },
  {
    institution: "Takshashila Public School",
    degree: "Matriculation / Secondary School",
    duration: "Mar 2019 — Mar 2020",
    score: "Percentage: 90%",
  }
];

const certificationsData = [
  {
    title: "Computational Theory",
    issuer: "Infosys Springboard",
    date: "Aug 2023",
    link: "https://www.linkedin.com/posts/tanmaydixit09_infosys-springboard-computational-theory-activity-7101564344567406592-PqXk"
  },
  {
    title: "Cloud Computing",
    issuer: "IIT Kharagpur | NPTEL",
    date: "May 2023",
    link: "https://www.linkedin.com/posts/tanmaydixit09_nptel-cloud-computing-certification-activity-7065643445674065920-XqYk"
  },
  {
    title: "Python For Beginners",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    link: "https://www.linkedin.com/posts/tanmaydixit09_infosys-springboard-python-certification-activity-7161564344567406592-ZqRk"
  },
  {
    title: "Hacker Rank Skill Certifications",
    issuer: "JavaScript & C++",
    date: "Continuous",
    details: "Solved 260+ Data Structures & Algorithms Problems across LeetCode, GeeksforGeeks."
  }
];

const TimelineItem = ({ data, isCert, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: isCert ? 30 : -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 md:pl-0"
  >
    {/* Timeline dot */}
    <div className="md:hidden absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
    
    <div className={`md:w-1/2 ${isCert ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'} relative`}>
      {/* Desktop Timeline dot */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 h-4 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-[0_0_12px_#a855f7] border-2 border-purple-500/30 hover:bg-purple-500 hover:shadow-[0_0_20px_#a855f7]"></div>
      <div className="glass-card p-6 md:p-8 hover:border-zinc-700 transition-colors group relative overflow-hidden">
        {/* Glow effect */}
        <div className={`absolute top-0 ${isCert ? 'left-0 bg-blue-500/5' : 'right-0 bg-purple-500/5'} w-1/2 h-full blur-2xl group-hover:bg-opacity-10 transition-all duration-500 pointer-events-none`}></div>
        
        <div className="relative z-10">
          <span className={`inline-block px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 ${isCert ? 'text-blue-400' : 'text-purple-400'} text-xs font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-sm`}>
            {data.duration || data.date}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2 ${isCert ? 'justify-start md:justify-start' : 'justify-end md:justify-end'}">
            {data.institution || data.title}
          </h3>
          <p className="text-base text-zinc-400 font-medium mb-3">
            {data.degree || data.issuer}
          </p>
          {(data.score || data.details) && (
            <div className={`mt-4 pt-4 border-t border-zinc-800/50 ${isCert ? 'text-zinc-500' : 'text-purple-400/80'} text-sm font-medium`}>
              {data.score || data.details}
            </div>
          )}
          {data.link && (
             <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 text-sm font-bold uppercase tracking-wider transition-colors">
               View Certificate <FiExternalLink />
             </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          Journey & Credentials
        </h2>
        <p className="text-zinc-500 max-w-2xl text-lg">
          My academic foundation and professional certifications that shape my engineering ethos.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent -translate-x-1/2"></div>
        {/* Left Line for Mobile */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

        <div className="flex flex-col gap-12 md:gap-8">
          {/* Header Row */}
          <div className="hidden md:flex justify-between w-full px-12 mb-8">
            <div className="w-1/2 text-right pr-12">
              <h3 className="text-3xl font-black text-white flex items-center justify-end gap-3 opacity-80">
                Education <FiBookOpen className="text-purple-500" />
              </h3>
            </div>
            <div className="w-1/2 pl-12">
              <h3 className="text-3xl font-black text-white flex items-center gap-3 opacity-80">
                <FiAward className="text-blue-500" /> Certifications
              </h3>
            </div>
          </div>

          <div className="md:hidden mb-4 pl-8">
             <h3 className="text-2xl font-black text-white flex items-center gap-3">
                <FiBookOpen className="text-purple-500" /> Education
              </h3>
          </div>

          {educationData.map((edu, idx) => (
            <TimelineItem key={`edu-${idx}`} data={edu} isCert={false} index={idx} />
          ))}

          <div className="md:hidden mt-8 mb-4 pl-8">
             <h3 className="text-2xl font-black text-white flex items-center gap-3">
                <FiAward className="text-blue-500" /> Certifications
              </h3>
          </div>

          {certificationsData.map((cert, idx) => (
            <TimelineItem key={`cert-${idx}`} data={cert} isCert={true} index={idx + educationData.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
