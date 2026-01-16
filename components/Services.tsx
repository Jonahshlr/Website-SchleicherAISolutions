import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, MessageSquare, BarChart3, Database, Workflow, Lock, Phone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-brand-500/30 hover:bg-zinc-900/50 transition-colors duration-300 backdrop-blur-sm relative overflow-hidden flex flex-col items-start justify-center min-h-[180px]"
  >
    {/* Subtle gradient blob on hover */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

    <div className="mb-6 inline-flex p-3 rounded-2xl bg-zinc-900 border border-white/10 text-white group-hover:bg-brand-500 group-hover:border-brand-400 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/50">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-white">{title}</h3>
  </motion.div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "KI-Support Chatbots",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "KI-Telefonassistenten",
      icon: <Phone className="w-5 h-5" />
    },
    {
      title: "Prozess-Automatisierung",
      icon: <Workflow className="w-5 h-5" />
    },
    {
      title: "Datenanalyse & Insights",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Automatisierte Content-Erstellung",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Lead-Qualifizierung",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Sicherheit & Compliance",
      icon: <Lock className="w-5 h-5" />
    }
  ];

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Wir lösen echte Probleme.
            </h2>
            <p className="text-zinc-400 font-light text-lg">
              Wir implementieren nicht einfach nur KI-Tools. Wir identifizieren die Flaschenhälse in Ihrem Unternehmen und entwickeln passgenaue Lösungen, die messbare Ergebnisse liefern.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="group text-white border-b border-white pb-1 hover:text-brand-400 hover:border-brand-400 transition-colors inline-flex items-center gap-2"
            >
              Lösung anfragen
              <span className="block w-0 h-0.5 bg-brand-400 group-hover:w-full transition-all duration-300 hidden"></span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};