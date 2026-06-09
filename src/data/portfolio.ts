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
    link: "https://binance.com",
    roles: [
      {
        title: { pt: "Affiliate Business Development", en: "Affiliate Business Development" },
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
export const events: {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  date: string;
  location: string;
  image: string;
  type: { pt: string; en: string };
}[] = [];

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
