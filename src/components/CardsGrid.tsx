/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  Instagram, 
  Target, 
  Calendar, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { 
  COURSES_DATA, 
  INSTAGRAM_DATA, 
  MISSION_DATA, 
  APPOINTMENT_CTA_DATA 
} from "../data/landingData";

interface CardsGridProps {
  onOpenContact: () => void;
}

export default function CardsGrid({ onOpenContact }: CardsGridProps) {
  return (
    <section id="bento-grid" className="py-24 bg-warm-sand/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs tracking-widest text-warm-terracotta uppercase">Atividades & Conexões</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light">
            Caminhos para <span className="italic font-normal text-warm-accent">Transformação</span>
          </h2>
          <div className="h-[1px] w-24 bg-warm-clay mx-auto" />
        </div>

        {/* Bento Grid Layout - Clean 4-card symmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: Meus Cursos */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EFE8E2] border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group"
          >
            {/* Soft decorative background circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-warm-terracotta/5 transition-transform group-hover:scale-125 duration-500" />
            
            <div className="space-y-6 z-10 w-full">
              <div className="w-12 h-12 rounded-2xl bg-warm-terracotta/10 border border-warm-terracotta/20 flex items-center justify-center text-warm-terracotta">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-light text-warm-cocoa uppercase tracking-tight">
                  Meus <span className="font-semibold block text-warm-terracotta italic font-serif">Cursos</span>
                </h3>
                <p className="font-sans text-sm text-warm-cocoa/80 leading-relaxed font-light">
                  {COURSES_DATA.description}
                </p>
              </div>
            </div>

            <div className="pt-6 z-10">
              <a 
                href="#cursos"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-warm-terracotta group-hover:text-warm-cocoa transition-colors"
              >
                <span>Ver catálogo de cursos</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* CARD 2: Psicologia na Prática */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group"
          >
            {/* Graphic design element */}
            <div className="absolute bottom-0 right-0 left-0 h-1/3 bg-gradient-to-t from-warm-sand/40 to-transparent pointer-events-none" />
            
            <div className="space-y-6 z-10">
              <div className="w-12 h-12 rounded-2xl bg-warm-clay/10 border border-warm-clay/20 flex items-center justify-center text-warm-accent">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-light text-warm-cocoa uppercase tracking-tight">
                  Psicologia <span className="font-semibold block text-warm-accent italic font-serif">na prática</span>
                </h3>
                <p className="font-sans text-sm text-warm-cocoa/80 leading-relaxed font-light">
                  {INSTAGRAM_DATA.description}
                </p>
              </div>
            </div>

            <div className="pt-6 z-10">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-warm-sand/80 hover:bg-warm-accent hover:text-white text-warm-cocoa text-xs font-semibold px-4 py-2.5 rounded-full border border-warm-beige transition-all duration-300"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Acompanhar no Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 3: Minha Missão */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FBF9F6] border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group"
          >
            <div className="space-y-6 z-10">
              <div className="w-12 h-12 rounded-2xl bg-warm-accent/10 border border-warm-accent/20 flex items-center justify-center text-warm-accent">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-light text-warm-cocoa uppercase tracking-tight">
                  Minha <span className="font-semibold block text-warm-cocoa italic font-serif">Missão</span>
                </h3>
                <p className="font-sans text-sm text-warm-cocoa/80 leading-relaxed font-light">
                  {MISSION_DATA.description}
                </p>
              </div>
            </div>

            <div className="pt-6 z-10 flex items-center space-x-2 text-xs text-warm-clay font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-warm-gold" />
              <span>Construindo Vínculos Leves</span>
            </div>
          </motion.div>

          {/* CARD 4: Agende seu Horário */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FDFBF9] text-warm-cocoa border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group"
          >
            {/* Elegant luxury visual style */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-warm-terracotta/10 to-transparent rounded-bl-[100px]" />
            
            <div className="space-y-6 z-10">
              <div className="w-12 h-12 rounded-2xl bg-warm-terracotta/10 border border-warm-terracotta/20 flex items-center justify-center text-warm-terracotta">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-light text-warm-cocoa uppercase tracking-tight">
                  Agende <span className="font-semibold block text-warm-clay italic font-serif">seu horário</span>
                </h3>
                <p className="font-sans text-sm text-warm-cocoa/80 leading-relaxed font-light">
                  {APPOINTMENT_CTA_DATA.description}
                </p>
                <p className="font-mono text-[10px] tracking-wider text-warm-terracotta uppercase pt-1">
                  {APPOINTMENT_CTA_DATA.subtext}
                </p>
              </div>
            </div>

            <div className="pt-6 z-10">
              <button
                onClick={onOpenContact}
                className="w-full bg-warm-terracotta hover:bg-warm-cocoa hover:text-white text-white font-medium py-3 px-5 rounded-full text-sm transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
