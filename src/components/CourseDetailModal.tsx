/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ExternalLink, ShieldCheck, Heart } from "lucide-react";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-warm-cocoa/40 backdrop-blur-md"
          />

          {/* Minimalist Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="bg-[#FAF7F3] border border-warm-beige/80 w-full max-w-xl rounded-3xl shadow-2xl relative z-10 overflow-hidden text-warm-cocoa max-h-[calc(100vh-3rem)] flex flex-col"
          >
            {/* Header Image Frame */}
            <div className="relative w-full h-52 sm:h-64 bg-warm-sand/60 overflow-hidden flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Minimal Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F3] via-transparent to-black/20 pointer-events-none" />

              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-warm-cocoa/80 hover:text-warm-cocoa p-2.5 rounded-full transition-all shadow-sm z-20 cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Like Pill */}
              <button
                onClick={() => onToggleLike(course.id)}
                className="absolute top-4 left-4 bg-white/90 hover:bg-white text-warm-cocoa text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm z-20 cursor-pointer transition-all active:scale-95"
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-colors ${
                    isLiked
                      ? "fill-red-500 text-red-500"
                      : "text-warm-cocoa/70 hover:text-red-500"
                  }`}
                />
                <span className="font-mono text-xs text-warm-cocoa">
                  {likeCount}
                </span>
              </button>

              {/* Badge */}
              {course.badge && (
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="bg-warm-terracotta text-white font-mono text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full shadow-xs">
                    {course.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="px-6 sm:px-8 pt-2 pb-6 overflow-y-auto space-y-6 flex-grow scrollbar-none">
              
              {/* Category & Title */}
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] tracking-widest text-warm-terracotta uppercase font-semibold">
                  {course.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-warm-cocoa font-normal leading-snug">
                  {course.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-warm-cocoa/80 leading-relaxed font-light">
                {course.description}
              </p>

              {/* Key Features */}
              {course.features && course.features.length > 0 && (
                <div className="bg-white/80 border border-warm-beige/70 p-5 rounded-2xl space-y-3 shadow-2xs">
                  <h4 className="font-serif text-sm font-semibold text-warm-cocoa">
                    O que você vai aprender:
                  </h4>
                  <ul className="space-y-2.5">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-warm-cocoa/85 font-light leading-snug">
                        <span className="w-4 h-4 rounded-full bg-warm-terracotta/10 text-warm-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Security info */}
              <div className="flex items-center space-x-2.5 text-xs text-warm-cocoa/60 font-light pt-1">
                <ShieldCheck className="w-4 h-4 text-warm-terracotta/80 flex-shrink-0" />
                <span>Inscrição processada com total segurança através da plataforma Kiwify.</span>
              </div>
            </div>

            {/* Minimalist Action Footer */}
            <div className="p-5 sm:p-6 bg-white border-t border-warm-beige/70 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <div className="text-center sm:text-left">
                <span className="text-xs text-warm-cocoa/60 font-light block">Status do curso</span>
                <span className="text-sm font-medium text-emerald-700">Inscrições Abertas</span>
              </div>

              <a
                href={course.checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-white font-medium py-3.5 px-7 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer text-sm"
              >
                <span>Garantir Vaga</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

