/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Play, X, Heart, Video } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/landingData";
import { Testimonial } from "../types";

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  // Convert standard YouTube or video links to embed format
  const getEmbedUrl = (url?: string) => {
    if (!url) return "";
    if (url.includes("youtube.com/watch")) {
      const v = new URLSearchParams(url.split("?")[1]).get("v");
      if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes("youtube.com/shorts/")) {
      const id = url.split("youtube.com/shorts/")[1]?.split("?")[0];
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <section id="depoimentos" className="py-24 bg-warm-sand/40 relative overflow-hidden scroll-mt-24">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-warm-clay/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-semibold"
          >
            Acolhimento & Vínculos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light"
          >
            Depoimentos em <span className="italic font-normal text-warm-terracotta">Vídeo</span>
          </motion.h2>
          <div className="h-[2px] w-16 bg-warm-clay/60 mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-warm-cocoa/75 font-light"
          >
            Assista aos relatos reais de pacientes e alunas que transformaram suas vidas, curaram relações e alcançaram maturidade emocional.
          </motion.p>
        </div>

        {/* Testimonials Grid: Videos em formato 16:9 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-warm-beige rounded-[28px] overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between group transition-all duration-300"
            >
              {/* 1º: VÍDEO (FORMATO 1920x1080 / 16:9 ASPECT RATIO) */}
              <div 
                onClick={() => setSelectedVideo(testimonial)}
                className="relative w-full aspect-[16/9] bg-warm-cocoa/10 overflow-hidden cursor-pointer group/thumb"
              >
                <img
                  src={testimonial.videoThumbnail || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1920&h=1080&auto=format&fit=crop"}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-black/40 transition-colors duration-300" />

                {/* Central Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-md text-warm-terracotta flex items-center justify-center shadow-lg group-hover/thumb:scale-110 group-hover/thumb:bg-warm-terracotta group-hover/thumb:text-white transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* 1920x1080 HD Badge, Name Tag & Duration */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[11px] font-mono text-white/90 pointer-events-none">
                  <div className="flex flex-col items-start gap-1.5">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold text-[10px]">
                      1920x1080 HD
                    </span>
                    <span className="bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-sans text-xs font-semibold text-white tracking-wide shadow-md border border-white/10">
                      {testimonial.name}
                    </span>
                  </div>
                  {testimonial.duration && (
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-mono text-[10px]">
                      {testimonial.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* BOTÃO DE ASSISTIR DEPOIMENTO */}
              <div className="p-4 sm:p-5">
                <button
                  onClick={() => setSelectedVideo(testimonial)}
                  className="w-full flex items-center justify-center space-x-2 bg-warm-sand/80 hover:bg-warm-terracotta text-warm-cocoa hover:text-white font-medium py-3 px-4 rounded-full text-xs sm:text-sm transition-all duration-300 border border-warm-beige hover:border-warm-terracotta cursor-pointer group/btn"
                >
                  <Video className="w-4 h-4 text-warm-terracotta group-hover/btn:text-white transition-colors" />
                  <span>Assistir Depoimento</span>
                  <Play className="w-3.5 h-3.5 fill-current opacity-70 ml-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Guarantee / Ethic Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/70 border border-warm-beige py-4 px-8 rounded-full max-w-3xl mx-auto shadow-xs"
        >
          <div className="flex items-center space-x-1.5 text-warm-terracotta">
            <Heart className="w-4 h-4 fill-warm-terracotta" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider">Autorização & Sigilo</span>
          </div>
          <span className="hidden sm:inline text-warm-clay/40">|</span>
          <p className="text-xs text-warm-cocoa/75 font-light">
            Depoimentos gravados e publicados com autorização expressa dos clientes.
          </p>
        </motion.div>

      </div>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-warm-cocoa/70 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-[#FAF7F3] border border-warm-beige w-full max-w-3xl rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-white border-b border-warm-beige flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-warm-terracotta uppercase font-bold block">
                    Depoimento em Vídeo HD (1920x1080)
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-warm-cocoa">
                    {selectedVideo.name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="bg-warm-sand hover:bg-warm-beige text-warm-cocoa p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Box (16:9 ratio 1920x1080) */}
              <div className="relative w-full aspect-[16/9] bg-black">
                {selectedVideo.videoUrl && (selectedVideo.videoUrl.includes("youtu") || selectedVideo.videoUrl.includes("vimeo")) ? (
                  <iframe
                    src={getEmbedUrl(selectedVideo.videoUrl)}
                    title={`Depoimento de ${selectedVideo.name}`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <img
                      src={selectedVideo.videoThumbnail}
                      alt={selectedVideo.name}
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-warm-terracotta text-white flex items-center justify-center shadow-lg animate-pulse">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                      <p className="text-white font-serif text-base font-light max-w-md">
                        Espaço reservado para o vídeo de {selectedVideo.name}.
                      </p>
                      <p className="text-white/70 text-xs font-mono">
                        Suba o link do vídeo em <code>TESTIMONIALS_DATA</code> no arquivo <code>landingData.ts</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Description */}
              <div className="p-5 sm:p-6 bg-white space-y-2">
                <p className="font-serif text-sm sm:text-base text-warm-cocoa/90 font-light italic">
                  "{selectedVideo.text}"
                </p>
                <div className="text-xs font-mono text-warm-accent">
                  {selectedVideo.role}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
