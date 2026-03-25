import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'LeetCode Profile',
    date: 'Updated Mar 2026',
    description:
      'Solved 236 problems (Easy: 109, Medium: 109, Hard: 18). Acceptance ~93.3%. Active days: 50, Max streak: 31. Recent participation in LeetCoding challenges and steady submissions.',
    link: 'https://leetcode.com/u/tanmaydixit09/'
  },
  {
    title: 'Google Cloud Certified - Associate Cloud Engineer',
    date: 'Mar 2025',
    description: 'Demonstrated ability to deploy applications on Google Cloud and manage cloud resources.',
    link: ''
  },
  {
    title: 'First Place - University Hackathon 2024',
    date: 'Dec 2024',
    description: 'Led a 4-person team to build a real-time collaboration app using WebSockets.',
    link: ''
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Achievements</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">Selected awards, certifications and notable accomplishments.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{a.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{a.date}</p>
                </div>
              </div>

              <p className="text-zinc-300 mt-4 text-sm">{a.description}</p>

              {a.link && (
                <a href={a.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm text-teal-300">
                  View
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
