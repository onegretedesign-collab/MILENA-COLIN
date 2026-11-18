/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Award,
  MessageCircle
} from "lucide-react";
import { CourseItem } from "../types";

interface CourseDetailModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  isLiked: boolean;
  likeCount: number;
  onToggleLike: (courseId: string) => void;
  onNextCourse?: () => void;
  onPrevCourse?: () => void;
  currentIndex?: number;
  totalCourses?: number;
}

export default function CourseDetailModal({
  course,
  isOpen,
  onClose,
  isLiked,
  likeCount,
  onToggleLike,
  onNextCourse,
  onPrevCourse,
  currentIndex = 0,
  totalCourses = 0
}: CourseDetailModalProps) {
  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNextCourse) {
        onNextCourse();
      } else if (e.key === "ArrowLeft" && onPrevCourse) {
        onPrevCourse();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNextCourse, onPrevCourse]);

  if (!course) return null;

  const whatsappInquiryUrl = `https://wa.me/5564999891234?text=${encodeURIComponent(
    `Olá! Tenho interesse no curso "${course.title}" da Dra. Milena Colin e gostaria de tirar algumas dúvidas sobre o conteúdo.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-warm-cocoa/50 backdrop-blur-md"
          />

          {/* Modal Container: Expanded & Interactive with Horizontal Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="bg-[#FAF7F3] border border-warm-beige/90 w-full max-w-4xl rounded-3xl shadow-2xl relative z-10 overflow-hidden text-warm-cocoa max-h-[92vh] flex flex-col"
          >
            {/* Top Navigation Bar with Manual Switcher Controls */}
            <div className="px-5 py-3.5 bg-white/90 border-b border-warm-beige/80 flex items-center justify-between gap-3 flex-shrink-0 backdrop-blur-xs">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 bg-warm-terracotta/10 text-warm-terracotta text-xs font-mono font-semibold px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span>Conteúdo do Curso</span>
                </span>
                {totalCourses > 1 && (
                  <span className="text-xs font-mono text-warm-cocoa/60 font-medium pl-1 hidden sm:inline-block">
                    {currentIndex + 1} de {totalCourses}
                  </span>
                )}
              </div>

              {/* Course Manual Switcher (Left / Right) & Close */}
              <div className="flex items-center space-x-2">
                {totalCourses > 1 && (
                  <div className="flex items-center space-x-1 bg-warm-sand/50 p-1 rounded-full border border-warm-beige">
                    <button
                      onClick={onPrevCourse}
                      className="w-8 h-8 rounded-full bg-white hover:bg-warm-terracotta hover:text-white text-warm-cocoa flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                      title="Curso anterior (Seta esquerda)"
                      aria-label="Curso anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono px-2 font-semibold text-warm-cocoa/75">
                      {currentIndex + 1}/{totalCourses}
                    </span>
                    <button
                      onClick={onNextCourse}
                      className="w-8 h-8 rounded-full bg-white hover:bg-warm-terracotta hover:text-white text-warm-cocoa flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                      title="Próximo curso (Seta direita)"
                      aria-label="Próximo curso"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white hover:bg-warm-terracotta/10 text-warm-cocoa/70 hover:text-warm-terracotta border border-warm-beige flex items-center justify-center transition-all cursor-pointer"
                  title="Fechar (Esc)"
                  aria-label="Fechar modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content: 2-Column Responsive Layout */}
            <div className="overflow-y-auto flex-grow p-4 sm:p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                
                {/* Column 1: Capa do Curso em Destaque Completa sem cortes */}
                <div className="md:col-span-5 flex flex-col space-y-3">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[#FAF7F3] border border-warm-beige/80 shadow-md aspect-square flex items-center justify-center group">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-contain object-center transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Floating Like Button */}
                    <button
                      onClick={() => onToggleLike(course.id)}
                      className="absolute top-3 left-3 bg-white/95 hover:bg-white text-warm-cocoa text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md z-10 cursor-pointer transition-all active:scale-95"
                      aria-label="Curtir este curso"
                    >
                      <motion.div
                        animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-colors ${
                            isLiked
                              ? "fill-red-500 text-red-500"
                              : "text-warm-cocoa/70 hover:text-red-500"
                          }`}
                        />
                      </motion.div>
                      <span className="font-mono text-xs text-warm-cocoa font-bold">
                        {likeCount}
                      </span>
                    </button>

                    {/* Badge */}
                    {course.badge && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-warm-terracotta text-white font-mono text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded-full shadow-sm">
                          {course.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Highlights under Cover */}
                  <div className="grid grid-cols-2 gap-2 text-center pt-1">
                    <div className="bg-white/80 border border-warm-beige/70 p-2.5 rounded-xl">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-warm-cocoa/60 block">Formato</span>
                      <span className="text-xs font-semibold text-warm-cocoa">100% Online</span>
                    </div>
                    <div className="bg-white/80 border border-warm-beige/70 p-2.5 rounded-xl">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-warm-cocoa/60 block">Acesso</span>
                      <span className="text-xs font-semibold text-warm-terracotta">Imediato</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Conteúdos Completos do Curso */}
                <div className="md:col-span-7 flex flex-col space-y-5">
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="inline-block bg-warm-terracotta/10 text-warm-terracotta font-mono text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-warm-cocoa font-medium leading-tight">
                      {course.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-warm-clay uppercase">
                      Sobre o Curso
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-warm-cocoa/85 leading-relaxed font-light">
                      {course.description}
                    </p>
                  </div>

                  {/* Detailed Contents / O que você vai aprender */}
                  {course.features && course.features.length > 0 && (
                    <div className="bg-white border border-warm-beige/80 p-5 sm:p-6 rounded-2xl space-y-3.5 shadow-2xs">
                      <div className="flex items-center space-x-2 text-warm-cocoa">
                        <BookOpen className="w-4 h-4 text-warm-terracotta" />
                        <h4 className="font-serif text-base font-semibold">
                          Conteúdos e Aprendizados:
                        </h4>
                      </div>
                      
                      <ul className="space-y-3">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-warm-cocoa/90 font-light leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-warm-terracotta/10 text-warm-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Guarantee & Platform Security */}
                  <div className="bg-warm-sand/30 border border-warm-beige/60 p-3.5 rounded-xl space-y-2">
                    <div className="flex items-center space-x-2 text-xs text-warm-cocoa/75 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>Compra 100% Segura e Acesso Imediato através da Kiwify</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-warm-cocoa/60 font-light">
                      <Award className="w-3.5 h-3.5 text-warm-gold flex-shrink-0" />
                      <span>Metodologia desenvolvida com mais de 20 anos de prática clínica</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Modal Bottom Action Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-warm-beige/80 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <div className="flex items-center space-x-3 self-center sm:self-auto">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-warm-cocoa/75 hover:text-warm-terracotta font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dúvidas sobre o conteúdo? Fale no WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                {totalCourses > 1 && (
                  <div className="flex items-center space-x-1 sm:hidden mr-auto">
                    <button
                      onClick={onPrevCourse}
                      className="p-2 rounded-full border border-warm-beige text-warm-cocoa hover:bg-warm-sand/50"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onNextCourse}
                      className="p-2 rounded-full border border-warm-beige text-warm-cocoa hover:bg-warm-sand/50"
                      aria-label="Próximo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <a
                  href={course.checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm text-center"
                >
                  <span>Garantir Minha Vaga</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
