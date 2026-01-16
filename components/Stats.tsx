import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, delay }: { value: string, label: string, delay: number }) => (
  <div className="flex flex-col items-center justify-center p-8 border-r last:border-r-0 border-white/10 w-full relative group">
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500"></div>
    <motion.div 
      initial={{ scale: 0.5, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: delay 
      }}
      className="text-6xl font-semibold text-white mb-2 tracking-tighter"
    >
      {value}
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2 }}
      className="text-zinc-500 text-sm font-medium uppercase tracking-widest"
    >
      {label}
    </motion.div>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-black relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 divide-white/10">
          <StatItem value="325%" label="Effizienz" delay={0} />
          <StatItem value="20h+" label="Zeitgewinn / Woche" delay={0.15} />
          <StatItem value="Ø 2 Mo" label="Amortisation" delay={0.3} />
        </div>
      </div>
    </section>
  );
};