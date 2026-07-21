/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Send, MessageSquare, AlertCircle, Calendar } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "online",
    timePreference: "tarde",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll when the modal is open
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setIsSubmitting(true);
    // Simulate a pristine server-side api call / Firestore save or dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const baseText = `Olá, Dra. Milena Colin! ✨ Venho através do seu site para solicitar um agendamento.

• Nome completo: ${formData.name}
• Canal de preferência: ${formData.modality === "online" ? "Online (Videochamada)" : "Presencial (Consultório)"}
• Período preferencial: ${formData.timePreference.charAt(0).toUpperCase() + formData.timePreference.slice(1)}
• Detalhes/Queixa: ${formData.message || "Gostaria de iniciar o processo de psicoterapia integrativa."}

Agradeço o acolhimento! 🙏`;
    return `https://wa.me/5564999891234?text=${encodeURIComponent(baseText)}`;
  };

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
            className="bg-warm-sand border border-warm-beige w-full max-w-lg rounded-[28px] sm:rounded-[32px] shadow-2xl relative z-10 p-5 sm:p-8 md:p-10 text-warm-cocoa max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-warm-beige/55 transition-colors text-warm-cocoa/70 hover:text-warm-cocoa cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 text-warm-terracotta">
                    <Calendar className="w-5 h-5" />
                    <span className="font-mono text-[10px] tracking-widest font-bold uppercase">Solicitar Agendamento</span>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-warm-cocoa leading-tight">
                    Inicie sua <span className="italic font-normal text-warm-terracotta">jornada</span>
                  </h3>
                  <p className="text-sm text-warm-cocoa/75 font-light leading-relaxed">
                    Preencha os dados abaixo. Entraremos em contato o mais breve possível para confirmar seu horário.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                      Nome Completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Como gostaria de ser chamado(a)?"
                      className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: seuemail@email.com"
                        className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                        WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modality" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                        Modalidade
                      </label>
                      <select
                        id="modality"
                        name="modality"
                        value={formData.modality}
                        onChange={handleChange}
                        className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans appearance-none"
                      >
                        <option value="online">Online (Videochamada)</option>
                        <option value="presencial">Presencial (Consultório)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="timePreference" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                        Melhor período
                      </label>
                      <select
                        id="timePreference"
                        name="timePreference"
                        value={formData.timePreference}
                        onChange={handleChange}
                        className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans appearance-none"
                      >
                        <option value="manha">Manhã</option>
                        <option value="tarde">Tarde</option>
                        <option value="noite">Noite</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-warm-cocoa/70">
                      Mensagem ou Queixa Principal (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte brevemente o que busca com o atendimento..."
                      rows={3}
                      className="w-full bg-white border border-warm-beige/70 focus:border-warm-terracotta rounded-xl px-4 py-3 text-sm transition-colors outline-none font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-warm-terracotta hover:bg-warm-cocoa disabled:bg-warm-clay text-white font-medium py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2 mt-6 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-light text-warm-cocoa">
                    Solicitação <span className="italic font-normal text-warm-accent">Recebida!</span>
                  </h3>
                  <p className="text-sm text-warm-cocoa/75 leading-relaxed font-light">
                    Obrigado, <strong className="font-semibold">{formData.name}</strong>. Seus dados foram guardados com sucesso.
                  </p>
                  <p className="text-sm text-warm-cocoa/75 leading-relaxed font-light">
                    Para acelerar sua consulta, você pode abrir um contato direto no nosso WhatsApp agora mesmo com os dados preenchidos.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl text-sm transition-all shadow-md"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chamar no WhatsApp Agora</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        modality: "online",
                        timePreference: "tarde",
                        message: ""
                      });
                      onClose();
                    }}
                    className="text-xs font-mono tracking-wider uppercase text-warm-cocoa/50 hover:text-warm-cocoa transition-colors"
                  >
                    Voltar à Landing Page
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
