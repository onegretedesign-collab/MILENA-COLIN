/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import { COURSES_LIST, COURSES_DATA } from "../data/landingData";
import { CourseItem } from "../types";
import CourseDetailModal from "./CourseDetailModal";

export default function CoursesSalesSection() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Likes state: track liked courses in localStorage
  const [likesState, setLikesState] = useState<Record<string, boolean>>(() => {
    const saved: Record<string, boolean> = {};
    COURSES_LIST.forEach((c) => {
      const stored = localStorage.getItem(`liked_course_${c.id}`);
      if (stored !== null) {
        saved[c.id] = stored === "true";
      }
    });
    return saved;
  });

  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    COURSES_LIST.forEach((c) => {
      const stored = localStorage.getItem(`liked_course_${c.id}`);
      const isLiked = stored === "true";
      counts[c.id] = c.initialLikes + (isLiked ? 1 : 0);
    });
    return counts;
  });

  const handleToggleLike = (courseId: string) => {
    const currentlyLiked = !!likesState[courseId];
    const newLiked = !currentlyLiked;

    setLikesState((prev) => ({ ...prev, [courseId]: newLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [courseId]: prev[courseId] + (newLiked ? 1 : -1)
    }));

    localStorage.setItem(`liked_course_${courseId}`, String(newLiked));
  };

  const handleOpenModal = (course: CourseItem) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Scroll carousel left/right
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="cursos" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#FAF7F3] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm-terracotta/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-warm-clay/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Header with Carousel Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-warm-terracotta/10 border border-warm-terracotta/20 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-warm-terracotta" />
              <span className="font-mono text-xs tracking-widest text-warm-terracotta uppercase font-semibold">
                {COURSES_DATA.title}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-cocoa font-light leading-tight">
              Aprenda, Fortaleça e <span className="font-normal italic text-warm-terracotta">Transforme suas Relações</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-warm-cocoa/80 font-light leading-relaxed">
              {COURSES_DATA.subtitle}
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-white border border-warm-beige hover:border-warm-terracotta hover:bg-warm-terracotta hover:text-white text-warm-cocoa flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-white border border-warm-beige hover:border-warm-terracotta hover:bg-warm-terracotta hover:text-white text-warm-cocoa flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
        >
          {COURSES_LIST.map((course) => {
            const isLiked = !!likesState[course.id];
            const currentLikes = likeCounts[course.id] || course.initialLikes;

            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="snap-start flex-shrink-0 w-[290px] sm:w-[320px] md:w-[350px] bg-white border border-warm-beige rounded-[28px] overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                {/* Top Image Box */}
                <div className="relative w-full h-52 sm:h-60 bg-warm-sand overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Curtir (Like) Button - Exactly like reference model */}
                  <button
                    onClick={() => handleToggleLike(course.id)}
                    className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md z-10 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                    aria-label="Curtir curso"
                  >
                    <motion.div
                      animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isLiked
                            ? "fill-red-500 text-red-500"
                            : "text-warm-cocoa/70 hover:text-red-500"
                        }`}
                      />
                    </motion.div>
                    <span className="text-xs font-semibold text-warm-cocoa font-mono">
                      {currentLikes}
                    </span>
                  </button>

                  {/* Discount / Status Badge */}
                  {course.badge && (
                    <span className="absolute top-3 right-3 bg-warm-terracotta/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs shadow-sm">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Category tag */}
                    <div className="inline-block bg-warm-terracotta/10 text-warm-terracotta text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                      {course.category}
                    </div>

                    {/* Course Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-warm-cocoa leading-snug group-hover:text-warm-terracotta transition-colors">
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-sm text-warm-cocoa/75 leading-relaxed font-light line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Card Footer Action Buttons */}
                  <div className="pt-2 space-y-2.5 border-t border-warm-beige/60">
                    {/* Primary Action Button: Direct Kiwify Checkout */}
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-white font-medium py-3 px-4 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow cursor-pointer text-center"
                    >
                      <span>Garantir Vaga</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Secondary Action Link: Mais detalhes */}
                    <button
                      onClick={() => handleOpenModal(course)}
                      className="w-full text-center text-xs font-semibold text-warm-terracotta hover:text-warm-cocoa py-1 transition-colors cursor-pointer flex items-center justify-center space-x-1"
                    >
                      <span>Mais detalhes</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-warm-beige/40 border border-warm-beige rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-warm-terracotta/10 flex items-center justify-center text-warm-terracotta flex-shrink-0 hidden sm:flex">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-warm-cocoa">
                Dúvidas sobre qual formação escolher?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-warm-cocoa/75 font-light">
                Fale com a equipe da Dra. Milena Colin no WhatsApp e receba uma orientação personalizada.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5564999891234?text=Ol%C3%A1!%20%E2%9C%A8%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20da%20Dra.%20Milena%20Colin."
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 bg-white border border-warm-terracotta text-warm-terracotta hover:bg-warm-terracotta hover:text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center space-x-2"
          >
            <span>Falar com Atendimento</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isLiked={!!likesState[selectedCourse.id]}
          likeCount={likeCounts[selectedCourse.id] || selectedCourse.initialLikes}
          onToggleLike={handleToggleLike}
        />
      )}
    </section>
  );
}
