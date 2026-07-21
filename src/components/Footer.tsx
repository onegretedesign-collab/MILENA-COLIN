/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-beige/30 text-warm-cocoa/60 py-12 border-t border-warm-beige/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-xs tracking-wider uppercase">
            © {currentYear} MILENA COLIN | TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="text-[10px] font-mono tracking-widest text-warm-clay uppercase">
            Psicoterapia Integrativa • CRP Ativo
          </p>
        </div>

        {/* Center column: Social Media Links */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-warm-clay uppercase">Conecte-se</span>
          <SocialLinks />
        </div>

        {/* Right column: custom brand note */}
        <div className="flex items-center space-x-1.5 text-xs text-warm-clay">
          <span>Criado com</span>
          <Heart className="w-3 h-3 text-warm-terracotta fill-warm-terracotta animate-pulse" />
          <span>para uma vida mais leve e saudável</span>
        </div>

      </div>
    </footer>
  );
}
