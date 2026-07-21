/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Eye, Heart, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import { SERVICES_SECTION_DATA, STATS_DATA } from "../data/landingData";

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  // Mapping of icon names to actual Lucide component icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-8 h-8 text-warm-terracotta" />;
      case "eye":
        return <Eye className="w-8 h-8 text-warm-terracotta" />;
      case "heart":
      default:
        return <Heart className="w-8 h-8 text-warm-terracotta" />;
    }
  };

  return (
    <section id="atendimentos" className="py-24 bg-warm-sand text-warm-cocoa relative overflow-hidden">
      {/* Soft overlay patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-warm-clay/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-16">
        
        {/* Header content */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-bold"
          >
            Acolhimento & Suporte
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl font-light text-warm-cocoa"
          >
            {SERVICES_SECTION_DATA.title}
          </motion.h2>
          <div className="h-[1px] w-20 bg-warm-clay/30 mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base sm:text-lg md:text-xl text-warm-cocoa/85 leading-relaxed font-light"
          >
            {SERVICES_SECTION_DATA.description}
          </motion.p>
        </div>

        {/* Stats Column/Grid - matching the PDF's 3 distinct boxes precisely */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-warm-beige rounded-[28px] p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm backdrop-blur-sm"
            >
              {/* Outer icon container */}
              <div className="w-16 h-16 rounded-2xl bg-warm-terracotta/10 border border-warm-terracotta/20 flex items-center justify-center mb-2">
                {getIcon(stat.iconName)}
              </div>
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-warm-terracotta block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-warm-cocoa/80 uppercase tracking-widest block">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic call to action row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white text-warm-cocoa rounded-[32px] p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-left gap-8 shadow-2xl border border-warm-beige"
        >
          <div className="space-y-3">
            <span className="inline-block bg-warm-terracotta/10 text-warm-terracotta font-mono text-[10px] tracking-wider font-bold uppercase px-3 py-1 rounded-full">
              Disponibilidade
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Pronta para dar o <span className="italic font-normal text-warm-terracotta">próximo passo?</span>
            </h3>
            <p className="font-sans text-sm text-warm-cocoa/75 leading-relaxed font-light max-w-lg">
              Ofereço um ambiente de escuta qualificada, sigilo absoluto e acolhimento focado nas suas necessidades reais. Seja presencial ou online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="flex items-center justify-center space-x-2.5 bg-warm-terracotta hover:bg-warm-cocoa text-white font-semibold px-6 py-4 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Minha Consulta</span>
            </button>
            <a
              href="https://wa.me/5564999891234?text=Ol%C3%A1%2C%20Dra.%20Milena%20Colin!%20%E2%9C%A8%20Venho%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20o%20agendamento%20de%20uma%20consulta."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 border border-warm-clay text-warm-accent hover:bg-warm-sand font-semibold px-6 py-4 rounded-full text-sm transition-all text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Dúvidas por WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
