/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/landingData";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-warm-sand/40 relative overflow-hidden scroll-mt-24">
      {/* Background elegant accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-warm-clay/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-semibold"
          >
            Acolhimento & Impacto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light"
          >
            Histórias de <span className="italic font-normal text-warm-accent">Superação</span> e Reencontro
          </motion.h2>
          <div className="h-[2px] w-16 bg-warm-clay mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-warm-cocoa/75 font-light"
          >
            O maior testemunho da eficácia do acompanhamento integrativo está nos laços restaurados, na autoestima reconquistada e na leveza emocional relatada por quem vivenciou este processo.
          </motion.p>
        </div>

        {/* Testimonials Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-warm-beige rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-sm relative group transition-all duration-300"
            >
              {/* Elegant absolute Quote mark */}
              <div className="absolute top-8 right-8 text-warm-beige group-hover:text-warm-clay/35 transition-colors duration-300">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              <div className="space-y-6">
                {/* Star rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>

                {/* Testimonial Message */}
                <p className="font-serif text-base text-warm-cocoa/90 leading-relaxed font-light italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-8 mt-8 border-t border-warm-sand flex items-center space-x-4">
                {/* Fallback elegant initials avatar */}
                <div className="w-10 h-10 rounded-full bg-warm-sand flex items-center justify-center border border-warm-beige flex-shrink-0">
                  <span className="font-mono text-xs font-semibold text-warm-terracotta">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-warm-cocoa">
                    {testimonial.name}
                  </h4>
                  {testimonial.role && (
                    <p className="text-xs font-mono text-warm-accent uppercase mt-0.5 tracking-wider">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge/Social proof message at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/60 border border-warm-beige/60 py-4 px-8 rounded-full max-w-3xl mx-auto"
        >
          <div className="flex items-center space-x-1.5 text-warm-terracotta">
            <Heart className="w-4 h-4 fill-warm-terracotta" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider">Compromisso Ético & Sigilo</span>
          </div>
          <span className="hidden sm:inline text-warm-clay/50">|</span>
          <p className="text-xs text-warm-cocoa/70 font-light">
            Todos os depoimentos compartilhados foram devidamente autorizados e respeitam as diretrizes éticas profissionais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
