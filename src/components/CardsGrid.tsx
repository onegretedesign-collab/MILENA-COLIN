/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Instagram, 
  Target, 
  MessageSquare, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { 
  COURSES_DATA, 
  INSTAGRAM_DATA, 
  MISSION_DATA, 
  APPOINTMENT_CTA_DATA, 
  TESTIMONIALS_DATA 
} from "../data/landingData";

interface CardsGridProps {
  onOpenContact: () => void;
}

export default function CardsGrid({ onOpenContact }: CardsGridProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="cursos" className="py-24 bg-warm-sand/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs tracking-widest text-warm-terracotta uppercase">Atividades & Conexões</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light">
            Caminhos para <span className="italic font-normal text-warm-accent">Transformação</span>
          </h2>
          <div className="h-[1px] w-24 bg-warm-clay mx-auto" />
        </div>

        {/* Bento Grid Layout - Highly modern, sophisticated and asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: Meus Cursos */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EFE8E2] border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group"
          >
            {/* Real image of Milena / support photo integrated beautifully as background/accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none hidden sm:block">
              <img 
                src="https://i.postimg.cc/N0dWnrNc/IMG-3300.png" 
                alt="Curso Milena Colin" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Soft decorative background circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-warm-terracotta/5 transition-transform group-hover:scale-125 duration-500" />
            
            <div className="space-y-6 z-10 max-w-[85%] sm:max-w-[70%]">
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
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-warm-terracotta group-hover:text-warm-cocoa transition-colors"
              >
                <span>Saber mais sobre as turmas</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
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
            className="bg-[#FBF9F6] border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group md:col-span-2 lg:col-span-1"
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

          {/* CARD 4: Depoimentos Reais - Asymmetric grid element span */}
          <div className="bg-[#E6DCD2]/50 border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm md:col-span-2 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-warm-clay/10 blur-xl" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-warm-terracotta/10 flex items-center justify-center text-warm-terracotta">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl font-light text-warm-cocoa uppercase tracking-tight">
                  Depoimentos <span className="font-semibold italic text-warm-terracotta">reais</span>
                </h3>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full border border-warm-clay/30 hover:border-warm-terracotta text-warm-cocoa flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full border border-warm-clay/30 hover:border-warm-terracotta text-warm-cocoa flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Testimonials Body with AnimatePresence */}
            <div className="relative flex-grow flex items-center my-4 overflow-hidden min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 w-full"
                >
                  <p className="font-serif text-base sm:text-lg text-warm-cocoa/90 italic leading-relaxed font-light">
                    "{TESTIMONIALS_DATA[activeTestimonial].text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm text-warm-cocoa">
                      {TESTIMONIALS_DATA[activeTestimonial].name}
                    </h4>
                    {TESTIMONIALS_DATA[activeTestimonial].role && (
                      <p className="text-xs font-mono text-warm-accent uppercase mt-0.5">
                        {TESTIMONIALS_DATA[activeTestimonial].role}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex space-x-2 pt-4">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "w-8 bg-warm-terracotta" : "w-1.5 bg-warm-clay/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CARD 5: Agende seu Horário */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FDFBF9] text-warm-cocoa border border-warm-beige rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group md:col-span-2 lg:col-span-1"
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
                Agendar Consulta Online / Presencial
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
