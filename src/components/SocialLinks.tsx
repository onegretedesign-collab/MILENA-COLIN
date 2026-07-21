/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Linkedin, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function SocialLinks() {
  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/colinmilena/",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-warm-terracotta hover:border-warm-terracotta",
      label: "@colinmilena"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/milenacolin/", // Elegant assumed profile
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-warm-clay hover:border-warm-clay",
      label: "Milena Colin"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5564999891234?text=Ol%C3%A1%2C%20Dra.%20Milena%20Colin!%20%E2%9C%A8%20Venho%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20o%20agendamento%20de%20uma%20consulta.",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "hover:text-emerald-500 hover:border-emerald-500",
      label: "Fale Conosco"
    }
  ];

  return (
    <div className="flex items-center space-x-4">
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-warm-sand/80 transition-colors duration-300 ${link.color}`}
          title={`${link.name}: ${link.label}`}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
