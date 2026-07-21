/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Star, Award, Heart, ShieldCheck } from "lucide-react";
import { HERO_DATA } from "../data/landingData";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen pt-28 pb-16 md:py-36 bg-warm-cocoa text-warm-sand flex items-center overflow-hidden"
    >
      {/* Decorative elegant background glow elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-warm-terracotta/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-warm-clay/10 blur-3xl pointer-events-none" />
      
      {/* Fine-line architectural grids for a sophisticated look */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-warm-terracotta/20 border border-warm-clay/30 px-4 py-2 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-warm-beige uppercase">
              {HERO_DATA.welcome}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white tracking-tight">
              {HERO_DATA.greeting}{" "}
              <span className="font-normal block text-warm-beige italic font-serif">
                {HERO_DATA.name}
              </span>
            </h1>
            
            <h2 className="font-serif text-2xl md:text-3xl text-warm-clay font-medium italic">
              {HERO_DATA.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-warm-sand/80 font-light leading-relaxed max-w-xl"
          >
            {HERO_DATA.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onOpenContact}
              className="group flex items-center justify-center space-x-3 bg-warm-terracotta hover:bg-warm-sand hover:text-warm-cocoa text-warm-sand text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Agendar Minha Consulta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <a
              href="#cursos"
              className="flex items-center justify-center border border-warm-clay/40 hover:border-white text-warm-beige hover:text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
            >
              Conhecer Cursos
            </a>
          </motion.div>

          {/* Core Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-warm-sand/10 max-w-md"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-warm-gold font-bold">+20 Anos</span>
              <span className="text-xs text-warm-sand/60">Experiência Clínica</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-warm-gold font-bold">+18k</span>
              <span className="text-xs text-warm-sand/60">Vidas Transformadas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-warm-gold font-bold">100%</span>
              <span className="text-xs text-warm-sand/60">Foco Integrativo</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image with sophisticated arch/frame design */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4]"
          >
            {/* Elegant Background Card Shadow/Layer */}
            <div className="absolute -inset-2 bg-warm-terracotta/20 rounded-[40px] blur-xl pointer-events-none" />
            
            {/* Elegant Gold/Clay Accent Border frame */}
            <div className="absolute inset-2 -right-2 -bottom-2 border-2 border-warm-clay/30 rounded-[36px] pointer-events-none" />

            {/* Arched image frame */}
            <div className="w-full h-full rounded-[36px] overflow-hidden border border-warm-clay/20 shadow-2xl relative bg-warm-cocoa/40">
              <img
                src="https://i.postimg.cc/jjMG1JMk/IMG-3298.png"
                alt="Dra. Milena Colin - Psicóloga Integrativa"
                className="w-full h-full object-cover object-top scale-[1.10] -translate-y-[10%] hover:scale-[1.15] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant dark fade at the bottom to blend the image edge seamlessly */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-warm-cocoa via-warm-cocoa/40 to-transparent pointer-events-none" />
              
              {/* Subtle glassmorphic tag on bottom of image */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-warm-cocoa/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 flex items-center justify-between z-10">
                <div className="min-w-0 flex-1 pr-2">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-white truncate">Dra. Milena Colin</h4>
                  <p className="text-[8px] sm:text-[10px] font-mono text-warm-clay uppercase tracking-wider truncate">CRP Ativo • Especialista Integrativa</p>
                </div>
                <div className="flex -space-x-1.5 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-7 h-7 rounded-full bg-warm-terracotta flex items-center justify-center border border-warm-cocoa">
                    <Heart className="w-3 h-3 sm:w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-6 h-6 sm:w-7 h-7 rounded-full bg-warm-gold flex items-center justify-center border border-warm-cocoa">
                    <Award className="w-3 h-3 sm:w-3.5 h-3.5 text-warm-cocoa" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
