/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "O que é a Psicologia Integrativa?",
    answer: "A Psicologia Integrativa é uma abordagem terapêutica profunda que combina diferentes teorias e técnicas (como Terapia Cognitivo-Comportamental, Terapia de Trauma, Constelação Familiar e Hipnoterapia) de forma personalizada. Em vez de encaixar o paciente em uma única técnica, nós adaptamos o tratamento às necessidades singulares da pessoa para acolher mente, corpo e história de vida simultaneamente."
  },
  {
    question: "Como funcionam as sessões de terapia online?",
    answer: "As sessões online são realizadas através de plataformas seguras de videochamada (como Google Meet ou Zoom) que garantem absoluto sigilo e privacidade. O atendimento online possui a mesma eficácia científica, acolhimento e compromisso ético do consultório presencial, com a conveniência de poder ser realizado no conforto e segurança de sua casa."
  },
  {
    question: "Qual é a duração e frequência das sessões?",
    answer: "As sessões individuais e de casal têm duração média de 50 minutos a 1 hora. A frequência recomendada para o início do processo é semanal, permitindo estabelecer um vínculo terapêutico seguro e dar continuidade consistente ao trabalho de transformação das dores e fortalecimento das relações."
  },
  {
    question: "Como funciona a abordagem de Milena Colin para terapia de trauma?",
    answer: "O trabalho com traumas e ciclos de dor apoia-se em abordagens contemporâneas especializadas e integrativas de reprocessamento, incluindo Hipnoterapia Naturalista e Ericksoniana, Bioalinhamento e Psicologia Positiva. O foco é reprocessar memórias difíceis de forma segura e compassiva, sem sobrecarregar o sistema nervoso do paciente, permitindo restaurar a segurança interna e romper ciclos repetitivos de dor."
  },
  {
    question: "Como posso agendar uma primeira consulta?",
    answer: "Você pode solicitar um agendamento diretamente clicando em qualquer botão de 'Agendar Horário' nesta página ou nos chamando diretamente via WhatsApp. Nós faremos uma triagem rápida para compreender sua preferência de modalidade (online ou presencial), melhor período de atendimento e daremos as orientações necessárias para iniciar seu processo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Delicate background circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-warm-sand/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-semibold"
          >
            Dúvidas Frequentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light"
          >
            Perguntas <span className="italic font-normal text-warm-accent">Frequentes</span>
          </motion.h2>
          <div className="h-[2px] w-16 bg-warm-clay mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-warm-cocoa/75 font-light"
          >
            Entenda detalhadamente como funciona o processo psicoterapêutico integrativo e sinta-se seguro(a) para dar os primeiros passos.
          </motion.p>
        </div>

        {/* Elegant FAQ list using Framer Motion heights */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-warm-beige rounded-2xl overflow-hidden bg-warm-sand/15 hover:bg-warm-sand/30 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4">
                    <HelpCircle className="w-5 h-5 text-warm-terracotta/75 mt-0.5 group-hover:text-warm-terracotta transition-colors flex-shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-medium text-warm-cocoa group-hover:text-warm-terracotta transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 rounded-full bg-warm-sand border border-warm-beige/60 flex items-center justify-center text-warm-accent"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-16 pr-10">
                        <p className="font-sans text-sm text-warm-cocoa/80 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Floating guidance accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center flex items-center justify-center space-x-2 text-xs font-mono text-warm-clay uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5 text-warm-gold" />
          <span>Atendimento ético sob as diretrizes do CFP</span>
        </motion.div>

      </div>
    </section>
  );
}
