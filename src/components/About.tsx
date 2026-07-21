/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, CheckCircle2, Star, Sparkles, ShieldCheck } from "lucide-react";
import { ABOUT_DATA } from "../data/landingData";

export default function About() {
  return (
    <section id="sobre-mim" className="py-24 bg-white relative overflow-hidden">
      {/* Structural layout decorations */}
      <div className="absolute top-1/2 -left-36 w-72 h-72 rounded-full bg-warm-sand/40 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-warm-clay/5 rounded-bl-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with sophisticated frame */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[3/4]"
            >
              {/* Premium shadow backdrop */}
              <div className="absolute -inset-4 bg-warm-sand/80 rounded-[40px] blur-xl pointer-events-none" />
              
              {/* Creative border highlight layer */}
              <div className="absolute -left-3 -top-3 right-3 bottom-3 border-2 border-warm-terracotta/20 rounded-[36px] pointer-events-none" />

              {/* Sophisticated display container */}
              <div className="w-full h-full rounded-[36px] overflow-hidden border border-warm-beige shadow-xl relative bg-white">
                <img
                  src="https://i.postimg.cc/nL36WQdZ/IMG-3299.png"
                  alt="Dra. Milena Colin - Especialidades"
                  className="w-full h-full object-cover object-bottom scale-[1.08] translate-y-[7.5%] hover:scale-[1.12] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid minimal certification tag */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-warm-beige/55 px-4 py-2 rounded-full shadow-sm flex items-center space-x-2 z-10">
                  <ShieldCheck className="w-4 h-4 text-warm-terracotta" />
                  <span className="font-mono text-[10px] tracking-widest text-warm-cocoa font-bold uppercase">Psicoterapia Baseada em Evidências</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Specializations & Biography */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-semibold">Biografia & Credenciais</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-cocoa font-light leading-tight">
                {ABOUT_DATA.title}
              </h2>
              <div className="h-[2px] w-16 bg-warm-terracotta" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-xl text-warm-accent/95 italic leading-relaxed font-light"
            >
              "{ABOUT_DATA.intro}"
            </motion.p>

            {/* Structured Specialization Cards/List - visually delightful check circles with minimal list details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_DATA.specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start space-x-3 p-3.5 bg-warm-sand/30 hover:bg-warm-sand/60 rounded-2xl border border-warm-beige/40 hover:border-warm-beige transition-colors group"
                >
                  <div className="mt-0.5 text-warm-terracotta group-hover:text-warm-cocoa transition-colors flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-sans text-warm-cocoa/90 leading-snug font-medium">
                    {spec}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick Summary block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-warm-sand/40 border border-warm-beige rounded-[24px] flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-xl bg-warm-terracotta flex items-center justify-center text-white flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-warm-cocoa font-serif">Formação Multidisciplinar Contínua</h4>
                <p className="text-xs text-warm-cocoa/70 leading-relaxed font-light">
                  Uma trajetória pautada pela seriedade científica, ética profunda e acolhimento humano personalizado.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
