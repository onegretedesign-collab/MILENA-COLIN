/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "../data/landingData";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[78vh] lg:min-h-[84vh] pt-24 pb-12 sm:pb-16 md:pt-32 md:pb-12 bg-[#FAF7F3] text-warm-cocoa flex items-center overflow-hidden"
    >
      {/* Background Banner Image for Desktop - naturally proportioned on the right side */}
      <div className="hidden md:flex absolute right-0 bottom-0 top-0 md:w-[65%] lg:w-[58%] xl:w-[54%] pointer-events-none select-none overflow-hidden items-center justify-end z-0">
        <img
          src={HERO_DATA.bannerImage}
          alt="Banner Dra. Milena Colin"
          className="w-full h-full object-cover object-right max-h-[580px] sm:max-h-[680px] lg:max-h-[760px] opacity-95 lg:opacity-100 sm:-translate-y-[3%] transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge blend gradients - seamless transparency fade to background */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-[#FAF7F3] via-[#FAF7F3]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FAF7F3] via-[#FAF7F3]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF7F3]/80 to-transparent pointer-events-none" />
      </div>

      {/* Decorative subtle atmospheric glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />
      
      {/* Content Container - Aligned to the Left */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center text-left space-y-5 sm:space-y-6 md:space-y-7 py-2 sm:py-4 md:translate-y-[4%]">
          
          {/* Main Title & Profession */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2 sm:space-y-3"
          >
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-warm-cocoa tracking-tight">
              {HERO_DATA.greeting}{" "}
              <span className="font-normal block text-warm-terracotta italic font-serif">
                {HERO_DATA.name}
              </span>
            </h1>
            
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-warm-clay font-medium italic">
              {HERO_DATA.title}
            </h2>
          </motion.div>

          {/* Dedicated Mobile Image Showcase - Elegantly framed and positioned so text NEVER overlaps the portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:hidden w-full my-1 rounded-3xl overflow-hidden shadow-md border border-warm-beige/80 bg-gradient-to-b from-white to-warm-sand/40 relative group"
          >
            <img
              src={HERO_DATA.bannerImage}
              alt="Dra. Milena Colin"
              className="w-full h-auto max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] object-cover object-right"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F3] via-transparent to-transparent opacity-25 pointer-events-none" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-warm-cocoa/90 font-light leading-relaxed max-w-xl"
          >
            {HERO_DATA.description}
          </motion.p>

          {/* Core Trust Badges - positioned directly below description and above CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 border-y border-warm-clay/15 max-w-lg"
          >
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif text-warm-gold font-bold">+20 Anos</span>
              <span className="text-[11px] sm:text-xs text-warm-cocoa/75 font-medium leading-tight">Experiência Clínica</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif text-warm-gold font-bold">+18k</span>
              <span className="text-[11px] sm:text-xs text-warm-cocoa/75 font-medium leading-tight">Vidas Transformadas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif text-warm-gold font-bold">100%</span>
              <span className="text-[11px] sm:text-xs text-warm-cocoa/75 font-medium leading-tight">Foco Integrativo</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1"
          >
            <button
              onClick={onOpenContact}
              className="group flex items-center justify-center space-x-3 bg-warm-terracotta hover:bg-warm-cocoa hover:text-white text-white text-base font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Agendar Minha Consulta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <a
              href="#cursos"
              className="flex items-center justify-center border border-warm-clay/50 hover:border-warm-cocoa bg-white/60 hover:bg-white text-warm-clay hover:text-warm-cocoa px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-xs text-center"
            >
              Conhecer Cursos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
