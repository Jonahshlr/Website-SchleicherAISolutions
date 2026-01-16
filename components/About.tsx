import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Cpu, TrendingUp } from 'lucide-react';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description, index }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.6)" }}
    className="glass-panel p-6 rounded-2xl flex gap-6 items-start border border-white/5 hover:border-brand-500/30 transition-colors duration-300 bg-black/40 backdrop-blur-md cursor-default"
  >
    <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors shadow-inner">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const About: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "1. Analyse",
      description: "Wir durchleuchten Ihre Workflows und finden verborgene Kostenfresser und Zeitfresser."
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "2. Integration",
      description: "Maßgeschneiderte KI-Lösungen, die sich nahtlos in Ihre bestehenden IT-Systeme einfügen."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "3. Skalierung",
      description: "Mehr Output bei gleichen Ressourcen. Ihre Mitarbeiter konzentrieren sich auf das Wesentliche."
    }
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs mb-8 cursor-default"
            >
              <MapPin className="w-3 h-3 text-brand-500" /> In ganz Hessen aktiv
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
              Nicht nur KI-Agenten. <br />
              <span className="text-brand-500">Sondern gelöste Probleme.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                Wir sind SchleicherAiSolutions. Wir verkaufen keine KI "von der Stange". Wir analysieren Ihre Unternehmensstrukturen, finden die kostenintensivsten Ineffizienzen und beheben diese durch intelligente Automatisierung.
              </p>
              <p>
                Unser Ziel ist es, den Mittelstand in Hessen wettbewerbsfähig zu halten. Wir konzentrieren uns auf die kritischsten Aspekte in Ihrem Unternehmen, damit Sie sich wieder auf Innovation und Wachstum fokussieren können, statt in manuellen Prozessen festzustecken.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Ambient Background Glow for the Cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-6 relative z-10"
            >
              {steps.map((step, i) => (
                <AboutCard 
                  key={i} 
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  index={i} 
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};