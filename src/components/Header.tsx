/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from "react";
import { Menu, X, Calendar, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Cursos & Atividades", href: "#cursos" },
    { label: "Sobre Mim", href: "#sobre-mim" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-warm-sand/85 backdrop-blur-md border-b border-warm-beige transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Welcoming/Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScroll(e, "#inicio")}
          className="flex flex-col items-start group"
        >
          <span className="font-serif text-lg tracking-widest text-warm-terracotta font-semibold uppercase group-hover:text-warm-cocoa transition-colors">
            MILENA COLIN
          </span>
          <span className="font-mono text-[10px] tracking-wider text-warm-clay uppercase">
            Psicologia Integrativa
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-warm-cocoa/80 hover:text-warm-terracotta transition-colors relative py-2 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-warm-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side: Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="flex items-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-warm-sand text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-warm-cocoa hover:text-warm-terracotta p-2 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-warm-sand border-b border-warm-beige overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-base font-medium text-warm-cocoa/90 hover:text-warm-terracotta py-2 transition-colors block border-b border-warm-beige/30"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center space-x-2 bg-warm-terracotta hover:bg-warm-cocoa text-warm-sand font-medium py-3 rounded-full transition-colors w-full cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Horário</span>
                </button>
                <a
                  href="https://wa.me/5564999891234?text=Ol%C3%A1%2C%20Dra.%20Milena%20Colin!%20%E2%9C%A8%20Venho%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20o%20agendamento%20de%20uma%20consulta."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 border border-warm-terracotta text-warm-terracotta hover:bg-warm-terracotta hover:text-warm-sand font-medium py-3 rounded-full transition-all w-full text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
