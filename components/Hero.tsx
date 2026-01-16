import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
      
      {/* Ambient Light from Top */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-6 md:mt-10"
      >
        
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1] break-words hyphens-auto w-full"
        >
          Wettbewerbs&shy;fähigkeit <br />
          durch intelligente Prozesse
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 font-light px-2"
        >
          Wir lösen ineffiziente Abläufe in Ihrem Unternehmen. <br className="hidden md:block"/> 
          Spezialisiert auf Prozessoptimierung für den Mittelstand in ganz Hessen.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]"
          >
            Prozesse optimieren 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </motion.div>

      {/* THE LIQUID VISUAL */}
      <div className="relative w-full max-w-[1000px] h-[400px] sm:h-[600px] mt-8 md:mt-[-100px] flex items-center justify-center pointer-events-none z-10">
        
        {/* Floating Glass Card Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -20, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute left-[10%] top-[40%] hidden md:block z-30"
        >
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 w-64 shadow-2xl shadow-brand-500/10 backdrop-blur-xl border border-white/10">
            <div className="flex flex-col">
              <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Prozesskosten</span>
              <span className="text-2xl font-semibold text-white">- 50%</span>
            </div>
            <div className="ml-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-brand-400 rotate-180" />
            </div>
          </div>
        </motion.div>

        {/* Floating Glass Card Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 1 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute right-[5%] bottom-[30%] hidden md:block z-30"
        >
          <div className="glass-panel p-4 rounded-2xl w-72 shadow-2xl shadow-brand-500/10 backdrop-blur-xl border border-white/10">
             <span className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">Reduzierung operativer Engpässe</span>
             <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-2">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "75%" }}
                 transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                 className="h-full bg-brand-400"
               ></motion.div>
             </div>
             <div className="flex justify-between items-end">
               <span className="text-3xl font-semibold text-white">bis zu 75%</span>
               <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-white" />
               </div>
             </div>
          </div>
        </motion.div>

        {/* The Abstract Liquid Object */}
        <div className="absolute inset-0 flex items-center justify-center">
           <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: 1,
                rotate: [0, 360]
              }}
              transition={{ 
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.5 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]"
           >
              {/* Core Blob */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-900 via-zinc-800 to-black animate-liquid blur-xl opacity-80"></div>
              
              {/* Shiny Surface Overlay */}
              <div className="absolute inset-0 rounded-full animate-liquid liquid-gradient mix-blend-overlay opacity-90"></div>
              
              {/* Inner Light */}
              <div className="absolute inset-[20%] rounded-full bg-brand-400/20 blur-[50px] animate-pulse-slow"></div>

              {/* Metallic Rim */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-liquid opacity-30"></div>
           </motion.div>
        </div>

      </div>

      {/* Particle dust */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </section>
  );
};