/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, Stat } from "../types";

export const HERO_DATA = {
  welcome: "BEM-VINDA!",
  greeting: "Olá, sou",
  name: "Milena Colin",
  title: "Psicóloga Integrativa",
  description: "Psicóloga Integrativa que há mais de 20 anos transforma vidas, ajudando pessoas a saírem do caos nos relacionamentos e a construírem vínculos mais leves, saudáveis e seguros."
};

export const COURSES_DATA = {
  title: "Meus Cursos",
  description: "Formações criadas para quem deseja crescer emocionalmente, fortalecer relações e desenvolver uma vida mais equilibrada."
};

export const INSTAGRAM_DATA = {
  title: "Psicologia na prática",
  description: "Conteúdos pensados para ajudar você a compreender emoções, melhorar relacionamentos e construir uma vida mais leve e equilibrada."
};

export const MISSION_DATA = {
  title: "Minha Missão",
  description: "Acredito que relações saudáveis transformam vidas. Meu trabalho nasce do desejo de ajudar pessoas a compreenderem sua história, romperem ciclos de dor e construírem vínculos mais leves, seguros e verdadeiros."
};

export const APPOINTMENT_CTA_DATA = {
  title: "Agende seu horário",
  description: "Se você deseja transformar seus relacionamentos, fortalecer sua autoestima e viver com mais leveza emocional, esse pode ser o seu primeiro passo.",
  subtext: "Atendimentos presenciais e online.",
  whatsappUrl: "https://wa.me/5564999891234?text=Ol%C3%A1%2C%20Dra.%20Milena%20Colin!%20%E2%9C%A8%20Venho%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20o%20agendamento%20de%20uma%20consulta."
};

export const ABOUT_DATA = {
  title: "Sobre mim",
  intro: "Ao longo da minha trajetória, me especializei em:",
  specializations: [
    "Terapia Cognitivo-Comportamental",
    "Terapia de Trauma",
    "Hipnoterapia Naturalista e Ericksoniana",
    "Psicologia Positiva",
    "Educação Sistêmica",
    "Constelação Familiar",
    "Bioalinhamento",
    "Memórias da Informação",
    "Ciclos de Vida",
    "Especialista em Teologia da História",
    "Formação em Gestão de Pessoas, com experiência em empresas familiares e multinacionais"
  ]
};

export const SERVICES_SECTION_DATA = {
  title: "Atendimentos",
  description: "Sessões presenciais e online para adultos, casais e famílias que desejam transformar relações, fortalecer vínculos e viver com mais leveza emocional."
};

export const STATS_DATA: Stat[] = [
  {
    id: "stat-1",
    value: "+ 18.000",
    label: "atendimentos clínicos",
    iconName: "users"
  },
  {
    id: "stat-2",
    value: "100%",
    label: "atendimento personalizado",
    iconName: "eye"
  },
  {
    id: "stat-3",
    value: "Milhares",
    label: "Histórias acolhidas",
    iconName: "heart"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Mariana Silva",
    role: "Paciente de Terapia Individual",
    text: "A Dra. Milena mudou completamente a forma como encaro meus relacionamentos. Sua abordagem integrativa me ajudou a sair de um ciclo de dependência emocional e a construir um casamento muito mais leve e seguro.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Carlos e Ana Beatriz",
    role: "Terapia de Casal",
    text: "Estávamos à beira do divórcio quando iniciamos as sessões. O olhar atento e a sensibilidade da Milena para nos ajudar a compreender nossas histórias individuais foram fundamentais para reconectarmos nossos laços.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Juliana Mendes",
    role: "Aluna do Curso Crescimento Emocional",
    text: "Os cursos da Milena são de uma profundidade ímpar. Não é apenas teoria; ela entrega caminhos práticos e ferramentas que verdadeiramente transformam o nosso cotidiano e fortalecem nossa autoestima.",
    rating: 5
  }
];
