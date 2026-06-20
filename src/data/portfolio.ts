// ============================================================
//  ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Campos com { pt: "...", en: "..." } aparecem nos dois idiomas.
//  Edite aqui ou peça para o Claude atualizar.
// ============================================================

// ─── CONFIG GERAL ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Pedro Bonis",
  displayName: 'Pedro "Bonis"',

  bio: {
    pt: ``,
    en: ``,
  },

  photo: "https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png",

  socials: {
    twitter:  "https://x.com/bonis_crypto",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-bonilha-ferreira-68271625a/",
    github:   "https://github.com/Bonisph",
  },
};

// ─── SOBRE — destaques (4 cards) ──────────────────────────────────────────────
export const aboutStats = [
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
];

// ─── EXPERIÊNCIAS ─────────────────────────────────────────────────────────────
// logo: use Google favicon — https://www.google.com/s2/favicons?domain=site.com&sz=256
// end: null = "Presente" / "Present"
export const experiences: {
  id: number;
  company: string;
  logo: string;
  logoBg?: "dark" | "light";
  link?: string;
  roles: {
    title: { pt: string; en: string };
    start: string;
    end: string | null;
    description: { pt: string; en: string };
  }[];
}[] = [
  {
    id: 1,
    company: "Binance",
    logo: "https://www.google.com/s2/favicons?domain=binance.com&sz=256",
    logoBg: "dark",
    link: "https://binance.com",
    roles: [
      {
        title: { pt: "Global Affiliate BD", en: "Global Affiliate BD" },
        start: "Jun 2026",
        end:   null,
        description: { pt: "", en: "" },
      },
    ],
  },
  {
    id: 2,
    company: "Arbitrum",
    logo: "https://www.google.com/s2/favicons?domain=arbitrum.io&sz=256",
    logoBg: "dark",
    link: "https://arbitrum.io",
    roles: [
      {
        title: { pt: "Ambassador – Brasil", en: "Ambassador – Brazil" },
        start: "Jan 2025",
        end:   "Mai 2026",
        description: {
          pt: "Produziu 70+ peças de conteúdo educativo em português sobre RWA, DeFi, governança e crescimento de ecossistema no LATAM. Vídeos curtos sobre infraestrutura L2 com 65k+ visualizações acumuladas. Co-organizou o Arbilink Brasil, primeiro evento oficial da Arbitrum no Brasil (SP, Nov 2025), e foi speaker no ETH Latam no painel de RWA ao lado de Credbull, Mercado Bitcoin e Plume Network.",
          en:  "Produced 70+ educational content pieces in Portuguese covering RWA, DeFi, governance, and ecosystem growth across LATAM. Short-form videos on L2 infrastructure with 65K+ accumulated views. Co-organized Arbilink Brasil, Arbitrum's first official in-person event in Brazil (SP, Nov 2025), and spoke at ETH Latam on an RWA panel alongside Credbull, Mercado Bitcoin, and Plume Network.",
        },
      },
    ],
  },
  {
    id: 3,
    company: "Modular Crypto",
    logo: "https://media.beehiiv.com/cdn-cgi/image/format=auto,onerror=redirect/uploads/asset/file/f66aa22c-da3d-45d9-a9ab-981749782825/1.jpg",
    roles: [
      {
        title: { pt: "Growth Leader", en: "Growth Leader" },
        start: "Mai 2025",
        end:   "Mai 2026",
        description: {
          pt: "Responsável por crescimento, parcerias e expansão de ecossistema. Prospecta e fecha parcerias com protocolos e organizações Web3, com portfolio de 10+ acordos ativos. Co-liderou 9 eventos presenciais pelo Brasil com 1.500+ participantes no total. Embarcou 120+ desenvolvedores, estruturou 4 programas de builders com 70+ participantes e apoiou o lançamento de 27+ projetos.",
          en:  "Leads growth, partnerships, and ecosystem expansion. Prospects and closes deals with Web3 protocols and organizations, with 10+ active partnerships. Co-led 9 in-person regional events across Brazil reaching 1,500+ total attendees. Onboarded 120+ developers, structured 4 builder programs with 70+ participants, and supported the launch of 27+ projects.",
        },
      },
      {
        title: { pt: "Social Media & Conteúdo", en: "Social Media & Content" },
        start: "Jul 2024",
        end:   "Mai 2025",
        description: {
          pt: "Desenvolveu a presença da marca no X, Instagram e LinkedIn, produzindo conteúdo educativo com 500k+ visualizações acumuladas. Criou e executou estratégias de conteúdo de forma autônoma. Co-apresentou o Estado da Solana, programa ao vivo quinzenal com 19 episódios e média de 150–200 espectadores.",
          en:  "Built brand presence across X, Instagram, and LinkedIn, producing educational content with 500K+ accumulated views. Developed and executed content strategies autonomously. Co-hosted Estado da Solana, a bi-weekly live program with 19 episodes and 150–200 average live viewers.",
        },
      },
    ],
  },
];

// ─── PROJETOS ─────────────────────────────────────────────────────────────────
export const projects: {
  id: number;
  title: { pt: string; en: string };
  period: string;
  description: { pt: string; en: string };
  tags: string[];
  link: string;
}[] = [
  // { id: 1, title: { pt: "Nome", en: "Name" }, period: "2025",
  //   description: { pt: "...", en: "..." }, tags: ["Next.js"], link: "https://..." },
];

// ─── CONTEÚDO ─────────────────────────────────────────────────────────────────
export const content: {
  id: number;
  title: { pt: string; en: string };
  platform: string;
  date: string;
  excerpt: { pt: string; en: string };
  link: string;
  thumbnail?: string;
}[] = [];

// ─── EVENTOS ──────────────────────────────────────────────────────────────────
// type: "Host" | "Palestra"/"Talk" | "Painel"/"Panel" | "Organização"/"Organizer"
// media: array de { type: "image" | "video", url: string }
//   - image: URL do ImgBB
//   - video: URL do YouTube (ex: https://youtube.com/watch?v=ID)
//   Deixe o array vazio ([]) enquanto não tiver mídia.
export const events: {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  date: string;
  location: string;
  media: { type: "image" | "video"; url: string }[];
  types: { pt: string; en: string }[];
}[] = [
  {
    id: 1,
    title: { pt: "Arbilink Brazil 2025", en: "Arbilink Brazil 2025" },
    description: {
      pt: "Primeiro evento oficial da Arbitrum no Brasil. Co-liderei a organização, fui host do palco e speaker no painel sobre o programa de embaixadores da Arbitrum. Durante o evento participei ainda de um podcast gravado ao vivo.",
      en: "Arbitrum's first official event in Brazil. Co-led the organization, hosted the stage, and spoke on a panel about the Arbitrum ambassador program. Also joined a live podcast recorded during the event.",
    },
    date: "Nov 2025",
    location: "São Paulo, SP",
    media: [
      { type: "image", url: "https://i.ibb.co/C3QyxbwF/ELZ-0922.jpg" },
      { type: "image", url: "https://i.ibb.co/Qvcjq10z/ELZ-0647.jpg" },
      { type: "video", url: "https://www.youtube.com/watch?v=vI6-GmvSAIQ" },
    ],
    types: [
      { pt: "Host", en: "Host" },
      { pt: "Palestrante", en: "Speaker" },
    ],
  },
  {
    id: 2,
    title: { pt: "ETH Latam (Arbitrum Day) 2025", en: "ETH Latam (Arbitrum Day) 2025" },
    description: {
      pt: "Speaker no painel de RWA no Arbitrum Day dentro do ETH Latam. Participei ao lado de representantes da Credbull, Mercado Bitcoin e Plume Network, discutindo o futuro de ativos do mundo real em blockchains.",
      en: "Speaker on the RWA panel at Arbitrum Day during ETH Latam. Joined representatives from Credbull, Mercado Bitcoin, and Plume Network to discuss the future of real-world assets on blockchains.",
    },
    date: "2025",
    location: "São Paulo, SP",
    media: [
      { type: "image", url: "https://i.ibb.co/cKC2swDL/IMG-4235.jpg" },
    ],
    types: [
      { pt: "Palestrante", en: "Speaker" },
    ],
  },
  {
    id: 3,
    title: { pt: "Modular House SP 2025", en: "Modular House SP 2025" },
    description: {
      pt: "Co-liderei a organização do Modular House São Paulo, fui host do evento e participei em palco falando sobre o programa de embaixadores da Arbitrum. O evento contou com o apoio de Scroll, Arbitrum DAO, Devconnect, Team1 Avax, ETH Latam e Mercado Bitcoin.",
      en: "Co-led the organization of Modular House São Paulo, hosted the event, and took the stage to speak about the Arbitrum ambassador program. The event was supported by Scroll, Arbitrum DAO, Devconnect, Team1 Avax, ETH Latam, and Mercado Bitcoin.",
    },
    date: "2025",
    location: "São Paulo, SP",
    media: [
      { type: "image", url: "https://i.ibb.co/pj5Q8sw4/ELZ-2002.jpg" },
      { type: "image", url: "https://i.ibb.co/xtGPPngF/ELZ-2168.jpg" },
      { type: "image", url: "https://i.ibb.co/fdDvYm6d/ELZ-2086.jpg" },
      { type: "image", url: "https://i.ibb.co/x8MLYxsV/ELZ-2038.jpg" },
      { type: "video", url: "https://youtu.be/s6mJZ_RHUes" },
    ],
    types: [
      { pt: "Host", en: "Host" },
      { pt: "Palestrante", en: "Speaker" },
    ],
  },
  {
    id: 4,
    title: { pt: "Modular House RJ 2025", en: "Modular House RJ 2025" },
    description: {
      pt: "Co-liderei a organização do Modular House Rio de Janeiro e participei em palco. O evento contou com o apoio de Scroll, Arbitrum DAO, Mantle, Rayls, Plume e Chainlink.",
      en: "Co-led the organization of Modular House Rio de Janeiro and participated on stage. The event was supported by Scroll, Arbitrum DAO, Mantle, Rayls, Plume, and Chainlink.",
    },
    date: "2025",
    location: "Rio de Janeiro, RJ",
    media: [
      { type: "image", url: "https://i.ibb.co/cKnJmcKL/Baskerp-115.jpg" },
      { type: "video", url: "https://youtu.be/6jrnFo-8XDI" },
    ],
    types: [
      { pt: "Organizador", en: "Organizer" },
    ],
  },
  {
    id: 5,
    title: { pt: "Arbilunch RJ 2025", en: "Arbilunch RJ 2025" },
    description: {
      pt: "Co-liderei a organização do Arbilunch no Rio de Janeiro, um almoço exclusivo de networking reunindo founders, KOLs e embaixadores da Arbitrum.",
      en: "Co-led the organization of Arbilunch in Rio de Janeiro, an exclusive networking lunch bringing together founders, KOLs, and Arbitrum ambassadors.",
    },
    date: "2025",
    location: "Rio de Janeiro, RJ",
    media: [
      { type: "image", url: "https://i.ibb.co/gM9Sw5n3/Gy-Zo-Ly-UWEAAs0-EW.jpg" },
    ],
    types: [
      { pt: "Organizador", en: "Organizer" },
    ],
  },
  {
    id: 6,
    title: { pt: "Modular Carnival 2025", en: "Modular Carnival 2025" },
    description: {
      pt: "Moderador do painel 'Solana além das memecoins' no Modular Carnival. Conduzi a discussão sobre tudo que a Solana entrega além das memecoins, o que a rede realmente oferece e o que enxergávamos para o seu futuro. Também apoiei a organização do evento.",
      en: "Moderated the 'Solana Beyond Memecoins' panel at Modular Carnival. Led the discussion about everything Solana delivers beyond memecoins, what the network truly offers, and our vision for its future. Also supported the event organization.",
    },
    date: "2025",
    location: "Belo Horizonte, MG",
    media: [
      { type: "image", url: "https://i.ibb.co/8gSscY2L/20250227-170204.jpg" },
      { type: "image", url: "https://i.ibb.co/VGHSC56/G8-ZSSq-JXIAAZL2h.jpg" },
      { type: "video", url: "https://youtu.be/0SHSsuaroCA" },
    ],
    types: [
      { pt: "Moderador", en: "Moderator" },
      { pt: "Organizador", en: "Organizer" },
    ],
  },
];

// ─── LADO PESSOAL ─────────────────────────────────────────────────────────────
export const personal: {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  image?: string;
}[] = [
  {
    id: 1,
    title: {
      pt: "Sneakerhead & Empreendedor",
      en: "Sneakerhead & Entrepreneur",
    },
    description: {
      pt: `Em 2020, durante a pandemia, ainda adolescente, descobri o mundo sneaker e enxerguei um mercado ali dentro. A paixão por me vestir bem e por colecionar coisas que têm história e valor virou o meu primeiro negócio. Comecei a comprar, revender e estudar a fundo a cultura sneaker e o mercado de streetwear. Foram experiências que me ensinaram muito sobre nicho, demanda, relacionamento com cliente e a arte de encontrar oportunidade onde outros veem só estilo.`,
      en: `In 2020, during the pandemic, I was a teenager when I discovered the sneaker world and saw a real market inside it. A passion for dressing well and collecting things with story and value became my first business venture. I started buying, reselling, and deeply studying sneaker culture and the streetwear market. Those experiences taught me a lot about niche, demand, customer relationships, and the art of finding opportunity where others just see style.`,
    },
    image: "https://i.ibb.co/F45kkLQb/Jordan-1-High-Chicago-Lost-And-Found.jpg",
  },
];
