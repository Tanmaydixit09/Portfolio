import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message captured. I will be in touch shortly.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Connect.
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            Discussing full-time roles, engineering collaborations, or scalable project developments.
          </p>
        </div>
        <div className="w-16 h-1 bg-pink-500 rounded-full hidden md:block" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12 pr-0 lg:pr-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Direct Channels</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Open to compelling engineering roles and networking. I prioritize inquiries regarding backend architecture and systems programming.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a href="mailto:tanmaydixit09@gmail.com" className="flex items-center gap-5 group p-4 -ml-4 rounded-xl hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-pink-400 group-hover:border-pink-500/30 transition-all shadow-md">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Protocol</h4>
                <p className="text-zinc-200 font-medium">tanmaydixit09@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-5 group p-4 -ml-4 rounded-xl hover:bg-zinc-900/50 transition-colors cursor-default">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all shadow-md">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Base Location</h4>
                <p className="text-zinc-200 font-medium">India / Global Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6 flex flex-col hover:border-zinc-700 transition-colors">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              <div className="space-y-2 relative">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-inner"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Return Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-inner"
                  placeholder="john@organization.com"
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Encrypted Payload</label>
              <textarea
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all resize-none shadow-inner leading-relaxed"
                placeholder="Discussing engineering opportunities..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-4 rounded-lg bg-zinc-100 text-zinc-950 font-bold tracking-wide hover:bg-zinc-300 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {isSubmitting ? 'Transmitting...' : 'Transmit Request'}
              {!isSubmitting && <FiSend className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
