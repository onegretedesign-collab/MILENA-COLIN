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
  description: "Psicóloga Integrativa que há mais de 20 anos transforma vidas, ajudando pessoas a saírem do caos nos relacionamentos e a construírem vínculos mais leves, saudáveis e seguros.",
  bannerImage: "https://i.postimg.cc/CKR7jKFQ/banner-site.png"
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
    image: "https://i.postimg.cc/fbLCLrWJ/b1381362-65e3-4f3e-97b1-ffca0b3f73e4.jpg",
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
  },
  {
    id: "curso-conquistando-ano-prospero-especial",
    title: "Conquistando um Ano Próspero",
    category: "Prosperidade & Propósito",
    image: "https://i.postimg.cc/BbTVTXRP/CONQUISTANDO-UM-ANO-PROSPERO.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/mrsIKN2",
    badge: "Edição Especial",
    price: "Inscrição Aberta",
    description: "Alinhe suas emoções, crenças e decisões práticas para viver um novo ciclo com clareza, equilíbrio e prosperidade genuína.",
    features: [
      "Desbloqueio de padrões emocionais ligados à escassez",
      "Construção de metas alinhadas aos seus valores",
      "Fortalecimento da postura adulta e da autoconfiança",
      "Acesso imediato pela plataforma Kiwify"
    ],
    initialLikes: 164
  },
  {
    id: "curso-familia-caos-ordem-imersao",
    title: "Família: Do Caos à Ordem",
    category: "Relações Familiares",
    image: "https://i.postimg.cc/Rh7D7N2t/FAMILIA-DO-CAOS-A-ORDEM.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/j3LOUSo",
    badge: "Mais Procurado",
    price: "Inscrição Aberta",
    description: "Um caminho prático e acolhedor para restaurar o diálogo, a paz e o respeito dentro do ambiente familiar.",
    features: [
      "Compreensão dos papéis e limites saudáveis no lar",
      "Estratégias para transformar conflitos em conexão",
      "Cura de feridas afetivas e repetição de padrões",
      "Aulas práticas com aplicação imediata no dia a dia"
    ],
    initialLikes: 218
  },
  {
    id: "curso-familia-caos-ordem-completo",
    title: "Família: Do Caos à Ordem — Curso Completo",
    category: "Formação Completa",
    image: "https://i.postimg.cc/1XGjGfbN/FAMILIA-DO-CAOS-A-ORDEM-CURSO-COMPLETO.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/f4CIxgQ",
    badge: "Curso Completo",
    price: "Inscrição Aberta",
    description: "A formação completa com aprofundamento sistêmico e integrativo para reestruturar vínculos conjugais, parentais e familiares.",
    features: [
      "Módulos completos sobre dinâmica familiar e ordens do amor",
      "Aprofundamento na relação entre pais, filhos e casal",
      "Exercícios terapêuticos guiados para pacificação do lar",
      "Material de apoio e acesso integral às aulas"
    ],
    initialLikes: 289
  },
  {
    id: "curso-mentoria-select",
    title: "Mentoria Select",
    category: "Mentoria Exclusiva",
    image: "https://i.postimg.cc/1XGjGfbn/MENTORIA-SELECT.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/qG5K4nu",
    badge: "Vagas Limitadas",
    price: "Turma Select",
    description: "Acompanhamento próximo e aprofundado com a Dra. Milena Colin para acelerar sua maturidade emocional e transformação pessoal.",
    features: [
      "Direcionamento estratégico e olhar clínico personalizado",
      "Encontros focados na resolução de bloqueios emocionais",
      "Fortalecimento da autonomia afetiva e tomada de decisão",
      "Grupo seleto com troca qualificada e suporte contínuo"
    ],
    initialLikes: 247
  },
  {
    id: "curso-3-pilares-sucesso",
    title: "Os 3 Pilares do Sucesso",
    category: "Desenvolvimento Pessoal",
    image: "https://i.postimg.cc/NF6z65Zx/OS-3-PILARES-DO-SUCESSO.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/XPPAdmT",
    badge: "Novo",
    price: "Inscrição Aberta",
    description: "Descubra os três fundamentos emocionais e comportamentais indispensáveis para sustentar realizações com leveza e propósito.",
    features: [
      "Clareza emocional como base para decisões consistentes",
      "Equilíbrio entre vida pessoal, relações e carreira",
      "Superação da autossabotagem e do medo de avançar",
      "Plano prático para consolidar resultados duradouros"
    ],
    initialLikes: 183
  },
  {
    id: "curso-partida-ano-prospero",
    title: "Partida para um Ano Próspero",
    category: "Planejamento & Vida",
    image: "https://i.postimg.cc/Xqfzfpt8/PARTIDA-PARA-UM-ANO-PROSPERO.jpg",
    checkoutUrl: "https://pay.kiwify.com.br/aJ1hgBl",
    badge: "Inscrição Aberta",
    price: "Acesso Imediato",
    description: "O ponto de partida ideal para encerrar ciclos de desgaste emocional e iniciar uma nova fase com direção, paz e foco.",
    features: [
      "Fechamento consciente de ciclos e liberação de pendências",
      "Definição de prioridades emocionais e relacionais",
      "Ferramentas práticas para manter constância no novo ano",
      "Acesso imediato para assistir no seu ritmo"
    ],
    initialLikes: 159
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
    name: "Dalila Garcia",
    role: "Psicoterapia Integrativa & Vínculos",
    text: "O atendimento da Dra. Milena foi um divisor de águas. Com sua sensibilidade e precisão clínica, aprendi a desatar nós emocionais profundos, resgatar minha autoconfiança e vivenciar relações autênticas e em paz.",
    rating: 5,
    videoThumbnail: "https://img.youtube.com/vi/wlwysuh5bM4/hqdefault.jpg",
    videoUrl: "https://youtu.be/wlwysuh5bM4",
    duration: "02:15"
  },
  {
    id: "t-2",
    name: "Maria Goreti",
    role: "Psicoterapia Individual & Bem-estar",
    text: "O processo terapêutico com a Dra. Milena me permitiu reencontrar minha força interior e transformar meus sentimentos com muito acolhimento e clareza.",
    rating: 5,
    videoThumbnail: "https://img.youtube.com/vi/s2O49_5O_LU/hqdefault.jpg",
    videoUrl: "https://youtu.be/s2O49_5O_LU",
    duration: "03:40"
  },
  {
    id: "t-3",
    name: "Pedro Barboza",
    role: "Desenvolvimento Pessoal & Autonomia",
    text: "As sessões foram essenciais para minha tomada de decisão e clareza emocional em momentos decisivos da minha vida.",
    rating: 5,
    videoThumbnail: "https://img.youtube.com/vi/mBRDXKmAF3k/hqdefault.jpg",
    videoUrl: "https://youtu.be/mBRDXKmAF3k",
    duration: "01:50"
  },
  {
    id: "t-4",
    name: "Adriele",
    role: "Psicoterapia & Vínculos Afetivos",
    text: "Experiência transformadora no cuidado das emoções, superação de desafios e fortalecimento do amor-próprio.",
    rating: 5,
    videoThumbnail: "https://img.youtube.com/vi/_F9L5mOEpCA/hqdefault.jpg",
    videoUrl: "https://youtu.be/_F9L5mOEpCA",
    duration: "02:30"
  }
];
