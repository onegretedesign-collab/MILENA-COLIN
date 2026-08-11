/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, Stat, CourseItem } from "../types";

export const HERO_DATA = {
  welcome: "BEM-VINDA!",
  greeting: "Olá, sou",
  name: "Milena Colin",
  title: "Psicóloga Integrativa",
  description: "Psicóloga Integrativa que há mais de 20 anos transforma vidas, ajudando pessoas a saírem do caos nos relacionamentos e a construírem vínculos mais leves, saudáveis e seguros."
};

export const COURSES_DATA = {
  title: "Cursos & Formações",
  subtitle: "Treinamentos práticos e profundos desenvolvidos para transformar sua saúde emocional e suas relações.",
  description: "Formações criadas para quem deseja crescer emocionalmente, fortalecer relações e desenvolver uma vida mais equilibrada."
};

export const COURSES_LIST: CourseItem[] = [
  {
    id: "curso-educacao-tempos-dificeis",
    title: "Educação em Tempos Difíceis",
    category: "Educação & Parentalidade",
    image: "https://i.postimg.cc/bvJ0GSYh/CURSO-EDUCACAO-EM-TEMPOS-DIFICEIS.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/jgdhX5t",
    badge: "Mais Procurado",
    price: "Inscrição Aberta",
    description: "Um guia prático e profundo para educar filhos com inteligência emocional, firmeza e afeto diante dos desafios da sociedade moderna.",
    features: [
      "Compreensão de limites e comunicação assertiva",
      "Ferramentas práticas para birras e conflitos familiares",
      "Desenvolvimento de inteligência emocional em crianças e adolescentes",
      "Acesso imediato e certificado de participação"
    ],
    initialLikes: 142
  },
  {
    id: "curso-ano-prospero",
    title: "Conquistando um Ano Próspero",
    category: "Desenvolvimento Pessoal",
    image: "https://i.postimg.cc/MGT0cf6h/CURSO-CONQUISTANDO-UM-ANO-PROSPERO.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/mrsIKN2",
    badge: "Lote Especial",
    price: "Inscrição Aberta",
    description: "Aprenda a alinhar suas metas emocionais, mentais e espirituais para construir um ano de verdadeiros frutos e prosperidade integral.",
    features: [
      "Planejamento emocional e metas realistas",
      "Ruptura de crenças limitantes sobre prosperidade",
      "Gestão de rotina e equilíbrio entre vida pessoal e profissional",
      "Planilha e mapa mental de acompanhamento"
    ],
    initialLikes: 198
  },
  {
    id: "curso-familia-caos-ordem",
    title: "Família: Do Caos à Ordem",
    category: "Relações Familiares",
    image: "https://i.postimg.cc/cJH7Kt1y/CURSO-FAMILIA-DO-CAOS-A-ORDEM.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/gRINxNk",
    badge: "Destaque",
    price: "Inscrição Aberta",
    description: "Ferramentas sistêmicas para identificar dinâmicas disfuncionais, curar feridas familiares e restabelecer a harmonia e o respeito no lar.",
    features: [
      "Visão sistêmica da família e ordens do amor",
      "Resolução de desentendimentos entre casais e familiares",
      "Superação de mágoas e reestruturação do ambiente lar",
      "Exercícios práticos de pacificação familiar"
    ],
    initialLikes: 256
  },
  {
    id: "curso-mentoria",
    title: "Mentoria Exclusiva",
    category: "Acompanhamento em Grupo",
    image: "https://i.postimg.cc/8C5dFfkN/CURSO-MENTORIA.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/qG5K4nu",
    badge: "Vagas Limitadas",
    price: "Turma Aberta",
    description: "Mentoria focada na resolução de conflitos, fortalecimento da postura adulta e maturação emocional acelerada com suporte direto.",
    features: [
      "Encontros ao vivo direcionados e análises de casos reais",
      "Direcionamento individualizado da Dra. Milena Colin",
      "Comunidade exclusiva de alunas e trocas enriquecedoras",
      "Material didático complementar de apoio"
    ],
    initialLikes: 310
  },
  {
    id: "acompanhamento-mensal",
    title: "Acompanhamento Mensal",
    category: "Suporte Contínuo",
    image: "https://i.postimg.cc/vmB71x8y/ACOMPANHAMENTO-MENSAL.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/kBMlBil",
    badge: "Assinatura",
    price: "Acesso Mensal",
    description: "Suporte mensal contínuo com encontros periódicos, tira-dúvidas e direcionamento prático para a manutenção da sua leveza emocional.",
    features: [
      "Sessões periódicas de acompanhamento e suporte emocional",
      "Canal de tira-dúvidas direto",
      "Conteúdos e ferramentas exclusivas mês a mês",
      "Cancelamento simples sem fidelidade"
    ],
    initialLikes: 175
  }
];

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
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1920&h=1080&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "02:15"
  },
  {
    id: "t-2",
    name: "Carlos e Ana Beatriz",
    role: "Terapia de Casal",
    text: "Estávamos à beira do divórcio quando iniciamos as sessões. O olhar atento e a sensibilidade da Milena para nos ajudar a compreender nossas histórias individuais foram fundamentais para reconectarmos nossos laços.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1920&h=1080&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "03:40"
  },
  {
    id: "t-3",
    name: "Juliana Mendes",
    role: "Aluna de Formação & Cursos",
    text: "Os cursos da Milena são de uma profundidade ímpar. Não é apenas teoria; ela entrega caminhos práticos e ferramentas que verdadeiramente transformam o nosso cotidiano e fortalecem nossa autoestima.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&h=1080&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "01:50"
  }
];
