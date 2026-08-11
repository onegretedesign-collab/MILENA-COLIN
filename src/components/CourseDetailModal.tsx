/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ExternalLink, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { CourseItem } from "../types";

interface CourseDetailModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  isLiked: boolean;
  likeCount: number;
  onToggleLike: (courseId: string) => void;
}

export default function CourseDetailModal({
  course,
  isOpen,
  onClose,
  isLiked,
  likeCount,
  onToggleLike
}: CourseDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-warm-cocoa/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-warm-sand border border-warm-beige w-full max-w-2xl rounded-[28px] sm:rounded-[32px] shadow-2xl relative z-10 overflow-hidden text-warm-cocoa max-h-[calc(100vh-2rem)] flex flex-col"
          >
            {/* Header Image with Floating Tags */}
            <div className="relative w-full h-56 sm:h-72 bg-warm-cocoa/10 overflow-hidden flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-cocoa/80 via-transparent to-black/30 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-warm-cocoa p-2 rounded-full transition-colors shadow-md z-20 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Like Button on modal image */}
              <button
                onClick={() => onToggleLike(course.id)}
                className="absolute top-4 left-4 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md z-20 cursor-pointer hover:bg-white transition-all"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isLiked
                      ? "fill-red-500 text-red-500"
                      : "text-warm-cocoa hover:text-red-500"
                  }`}
                />
                <span className="text-xs font-semibold text-warm-cocoa font-mono">
                  {likeCount}
                </span>
              </button>

              {/* Title & Badge Overlaid at bottom of image */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                {course.badge && (
                  <span className="inline-block bg-warm-terracotta text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold">
                    {course.badge}
                  </span>
                )}
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight drop-shadow-sm">
                  {course.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow scrollbar-thin">
              {/* Category & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-warm-beige/80 pb-4">
                <span className="text-xs font-mono tracking-wider text-warm-accent uppercase font-semibold bg-warm-terracotta/10 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="text-xs font-sans font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{course.price || "Inscrições Abertas"}</span>
                </span>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-semibold text-warm-cocoa">
                  Sobre esta formação
                </h4>
                <p className="font-sans text-sm sm:text-base text-warm-cocoa/85 leading-relaxed font-light">
                  {course.description}
                </p>
              </div>

              {/* Features / Modules checklist */}
              {course.features && course.features.length > 0 && (
                <div className="space-y-3 bg-white/70 border border-warm-beige p-5 rounded-2xl">
                  <h4 className="font-serif text-base font-semibold text-warm-cocoa flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-warm-terracotta" />
                    <span>O que você vai encontrar:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-sm text-warm-cocoa/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-warm-terracotta flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Guarantee banner */}
              <div className="bg-warm-beige/40 border border-warm-beige rounded-xl p-4 flex items-center space-x-3 text-xs text-warm-cocoa/75">
                <ShieldCheck className="w-5 h-5 text-warm-terracotta flex-shrink-0" />
                <p>
                  Pagamento seguro via <strong>Kiwify</strong> com acesso imediato após a confirmação da inscrição.
                </p>
              </div>
            </div>

            {/* Modal Footer with Direct Checkout Button */}
            <div className="p-4 sm:p-6 bg-white/90 border-t border-warm-beige flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase text-warm-clay tracking-wider block">
                  Plataforma Oficial Kiwify
                </span>
                <span className="text-xs text-warm-cocoa font-medium">
                  Acesso 100% Garantido
                </span>
              </div>

              <a
                href={course.checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg cursor-pointer text-sm"
              >
                <span>Garantir Minha Vaga Agora</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
