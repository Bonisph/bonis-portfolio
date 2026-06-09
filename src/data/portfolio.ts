// ============================================================
//  ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Campos com { pt: "...", en: "..." } aparecem nos dois idiomas.
//  Edite aqui ou peça para o Claude atualizar.
// ============================================================

// ─── CONFIG GERAL ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Pedro Bonis",
  displayName: 'Pedro "Bonis"',

  roles: {
    pt: ["Empreendedor", "Builder de IA", "Estrategista de Negócios"],
    en:  ["Entrepreneur",  "AI Builder",   "Business Strategist"],
  },

  tagline: {
    pt: "Construindo na interseção entre Tecnologia e Negócios.",
    en: "Building at the intersection of Technology and Business.",
  },

  bio: {
    pt: ``,
    en: ``,
  },

  photo: "https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png",

  socials: {
    twitter:  "https://x.com/bonis_crypto",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-bonilha-ferreira-68271625a/",
    github:   "https://github.com/seuperfil",
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
// Cada entrada = uma empresa. "roles" agrupa cargos na mesma empresa (igual LinkedIn).
// logo: URL do logo da empresa (ImgBB, Clearbit, etc.)
// end: null = "Presente" / "Present"
export const experiences: {
  id: number;
  company: string;
  logo: string;
  link?: string;
  roles: {
    title: { pt: string; en: string };
    contract: { pt: string; en: string };
    start: string;
    end: string | null;
    description: { pt: string; en: string };
  }[];
}[] = [
  {
    id: 1,
    company: "Binance",
    logo: "https://logo.clearbit.com/binance.com",
    link: "https://binance.com",
    roles: [
      {
        title:    { pt: "Affiliate Business Development", en: "Affiliate Business Development" },
        contract: { pt: "Full-time", en: "Full-time" },
        start: "Jun 2026",
        end:   null,
        description: { pt: "", en: "" }, // Adicione descrição quando quiser
      },
    ],
  },
  {
    id: 2,
    company: "Arbitrum",
    logo: "https://logo.clearbit.com/arbitrum.io",
    link: "https://arbitrum.io",
    roles: [
      {
        title:    { pt: "Arbitrum Ambassador", en: "Arbitrum Ambassador" },
        contract: { pt: "Contrato Indireto", en: "Indirect Contract" },
        start: "Fev 2025",
        end:   "Mai 2026",
        description: {
          pt: "", // Adicione sua descrição aqui
          en: "",
        },
      },
    ],
  },
  {
    id: 3,
    company: "Modular Crypto",
    logo: "", // Adicione o logo quando tiver a URL
    roles: [
      {
        title:    { pt: "Growth Leader", en: "Growth Leader" },
        contract: { pt: "Full-time", en: "Full-time" },
        start: "Mai 2025",
        end:   "Abr 2026",
        description: {
          pt: "", // Adicione sua descrição aqui
          en: "",
        },
      },
      {
        title:    { pt: "Social Media & Community Manager", en: "Social Media & Community Manager" },
        contract: { pt: "Autônomo", en: "Self-employed" },
        start: "Jul 2024",
        end:   "Abr 2025",
        description: {
          pt: "", // Adicione sua descrição aqui
          en: "",
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
      pt: `Em 2020, durante a pandemia, ainda adolescente, descobri o mundo sneaker — e enxerguei um mercado ali dentro. A paixão por me vestir bem e por colecionar coisas que têm história e valor virou o meu primeiro negócio. Comecei a comprar, revender e estudar a fundo a cultura sneaker e o mercado de streetwear. Foram experiências que me ensinaram muito sobre nicho, demanda, relacionamento com cliente e a arte de encontrar oportunidade onde outros veem só estilo.`,
      en: `In 2020, during the pandemic, I was a teenager when I discovered the sneaker world — and saw a real market inside it. A passion for dressing well and collecting things with story and value became my first business venture. I started buying, reselling, and deeply studying sneaker culture and the streetwear market. Those experiences taught me a lot about niche, demand, customer relationships, and the art of finding opportunity where others just see style.`,
    },
    image: "https://i.ibb.co/F45kkLQb/Jordan-1-High-Chicago-Lost-And-Found.jpg",
  },
];
