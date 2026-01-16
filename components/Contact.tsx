import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send, User, Smartphone, MessageSquare, AtSign } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link for direct sending via default mail client
    const subject = `Anfrage von ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A` +
                 `Telefon: ${formData.phone}%0D%0A` +
                 `Email: ${formData.email}%0D%0A%0D%0A` +
                 `Nachricht:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:info@SchleicherAiSolutions.de?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-black relative flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info & Text */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight"
            >
              Prozesse optimieren. <br />
              <span className="text-zinc-500">Wettbewerbsfähig bleiben.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-light mb-10 max-w-md"
            >
              Sprechen Sie direkt mit uns über Ihre Herausforderungen. Füllen Sie das Formular aus oder nutzen Sie einen der direkten Wege.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-4"
            >
              {/* Phone Card */}
              <a 
                href="tel:+4917655564345"
                className="group flex items-center gap-6 p-4 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform text-white group-hover:text-brand-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs uppercase tracking-wider font-medium mb-1">Rufen Sie uns an</span>
                  <span className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">+49 176 55564345</span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:info@SchleicherAiSolutions.de"
                className="group flex items-center gap-6 p-4 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform text-white group-hover:text-brand-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs uppercase tracking-wider font-medium mb-1">Schreiben Sie uns</span>
                  <span className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">info@SchleicherAiSolutions.de</span>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href="https://www.instagram.com/schleicheraisolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-4 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform text-white group-hover:text-brand-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs uppercase tracking-wider font-medium mb-1">Folgen Sie uns</span>
                  <span className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">@schleicheraisolutions</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl">
              <h3 className="text-2xl font-medium text-white mb-6">Kontaktaufnahme</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-zinc-400 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-zinc-400 ml-1">Email Adresse</label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@firma.de"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-zinc-400 ml-1">Telefonnummer</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 123 4567890"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Message (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-zinc-400 ml-1">Nachricht <span className="text-zinc-600">(Optional)</span></label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-500" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-white text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group shadow-lg shadow-white/5"
                >
                  Anfrage absenden
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};