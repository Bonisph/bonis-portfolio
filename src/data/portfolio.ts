// ============================================================
//  ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Campos com { pt: "...", en: "...", es: "..." } aparecem nos três idiomas.
//  Edite aqui ou peça para o Claude atualizar.
// ============================================================

// ─── CONFIG GERAL ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Pedro Bonis",
  displayName: 'Pedro "Bonis"',

  bio: {
    pt: ``,
    en: ``,
    es: ``,
  },

  photo: "https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png",

  socials: {
    twitter:  "https://x.com/bonis_crypto",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-bonilha-ferreira-68271625a/",
    github:   "https://github.com/Bonisph",
    telegram: "https://t.me/bonis_crypto",
    calendly: "https://calendly.com/pedro-f-binance/30min",
  },
};

// ─── SOBRE — destaques (4 cards) ──────────────────────────────────────────────
export const aboutStats = [
  { value: "", label: { pt: "", en: "", es: "" } },
  { value: "", label: { pt: "", en: "", es: "" } },
  { value: "", label: { pt: "", en: "", es: "" } },
  { value: "", label: { pt: "", en: "", es: "" } },
];

// ─── EXPERIÊNCIAS ─────────────────────────────────────────────────────────────
// logo: use Google favicon — https://www.google.com/s2/favicons?domain=site.com&sz=256
// end: null = "Presente" / "Present" / "Presente"
// stats: métricas chave que aparecem como chips abaixo da descrição
export const experiences: {
  id: number;
  company: string;
  logo: string;
  logoBg?: "dark" | "light";
  link?: string;
  roles: {
    title: { pt: string; en: string; es?: string };
    start: string;
    end: string | null;
    description: { pt: string; en: string; es?: string };
    stats?: { value: string; label: { pt: string; en: string; es?: string } }[];
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
        title: { pt: "Global Affiliate BD", en: "Global Affiliate BD", es: "Global Affiliate BD" },
        start: "Jun 2026",
        end:   null,
        description: { pt: "", en: "", es: "" },
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
        title: { pt: "Ambassador – Brasil", en: "Ambassador – Brazil", es: "Embajador – Brasil" },
        start: "Jan 2025",
        end:   "Mai 2026",
        description: {
          pt: "Produziu 70+ peças de conteúdo educativo em português sobre RWA, DeFi, governança e crescimento de ecossistema no LATAM. Vídeos curtos sobre infraestrutura L2 com 65k+ visualizações acumuladas. Co-organizou o Arbilink Brasil, primeiro evento oficial da Arbitrum no Brasil (SP, Nov 2025), e foi speaker no ETH Latam no painel de RWA ao lado de Credbull, Mercado Bitcoin e Plume Network.",
          en:  "Produced 70+ educational content pieces in Portuguese covering RWA, DeFi, governance, and ecosystem growth across LATAM. Short-form videos on L2 infrastructure with 65K+ accumulated views. Co-organized Arbilink Brasil, Arbitrum's first official in-person event in Brazil (SP, Nov 2025), and spoke at ETH Latam on an RWA panel alongside Credbull, Mercado Bitcoin, and Plume Network.",
          es:  "Produjo 70+ piezas de contenido educativo en portugués sobre RWA, DeFi, gobernanza y crecimiento del ecosistema en LATAM. Videos cortos sobre infraestructura L2 con 65K+ visualizaciones acumuladas. Co-organizó Arbilink Brasil, primer evento oficial de Arbitrum en Brasil (SP, nov. 2025), y fue speaker en ETH Latam en el panel de RWA junto a Credbull, Mercado Bitcoin y Plume Network.",
        },
        stats: [
          { value: "70+",  label: { pt: "conteúdos criados",       en: "content pieces",       es: "contenidos creados"    } },
          { value: "65k+", label: { pt: "visualizações",           en: "views",                es: "visualizaciones"       } },
          { value: "2",    label: { pt: "palestras / painéis",     en: "talks & panels",       es: "charlas y paneles"     } },
          { value: "1",    label: { pt: "evento co-organizado",    en: "co-organized event",   es: "evento co-organizado"  } },
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Modular Crypto",
    logo: "https://media.beehiiv.com/cdn-cgi/image/format=auto,onerror=redirect/uploads/asset/file/f66aa22c-da3d-45d9-a9ab-981749782825/1.jpg",
    roles: [
      {
        title: { pt: "Growth Leader", en: "Growth Leader", es: "Líder de Crecimiento" },
        start: "Mai 2025",
        end:   "Mai 2026",
        description: {
          pt: "Responsável por crescimento, parcerias e expansão de ecossistema. Prospecta e fecha parcerias com protocolos e organizações Web3, com portfolio de 10+ acordos ativos. Co-liderou 9 eventos presenciais pelo Brasil com 1.500+ participantes no total. Embarcou 120+ desenvolvedores, estruturou 4 programas de builders com 70+ participantes e apoiou o lançamento de 27+ projetos.",
          en:  "Leads growth, partnerships, and ecosystem expansion. Prospects and closes deals with Web3 protocols and organizations, with 10+ active partnerships. Co-led 9 in-person regional events across Brazil reaching 1,500+ total attendees. Onboarded 120+ developers, structured 4 builder programs with 70+ participants, and supported the launch of 27+ projects.",
          es:  "Lidera el crecimiento, las alianzas y la expansión del ecosistema. Prospecta y cierra acuerdos con protocolos y organizaciones Web3, con un portafolio de 10+ alianzas activas. Co-lideró 9 eventos presenciales por Brasil con 1.500+ participantes en total. Incorporó 120+ desarrolladores, estructuró 4 programas de builders con 70+ participantes y apoyó el lanzamiento de 27+ proyectos.",
        },
        stats: [
          { value: "10+",    label: { pt: "parcerias ativas",    en: "active partnerships",  es: "alianzas activas"     } },
          { value: "9",      label: { pt: "eventos co-liderados",en: "co-led events",        es: "eventos co-liderados" } },
          { value: "1.500+", label: { pt: "participantes",       en: "attendees",            es: "participantes"        } },
          { value: "120+",   label: { pt: "devs embarcados",     en: "devs onboarded",       es: "devs incorporados"    } },
          { value: "27+",    label: { pt: "projetos apoiados",   en: "projects supported",   es: "proyectos apoyados"   } },
        ],
      },
      {
        title: { pt: "Social Media & Conteúdo", en: "Social Media & Content", es: "Redes Sociales & Contenido" },
        start: "Jul 2024",
        end:   "Mai 2025",
        description: {
          pt: "Desenvolveu a presença da marca no X, Instagram e LinkedIn, produzindo conteúdo educativo com 500k+ visualizações acumuladas. Criou e executou estratégias de conteúdo de forma autônoma. Co-apresentou o Estado da Solana, programa ao vivo quinzenal com 19 episódios e média de 150–200 espectadores.",
          en:  "Built brand presence across X, Instagram, and LinkedIn, producing educational content with 500K+ accumulated views. Developed and executed content strategies autonomously. Co-hosted Estado da Solana, a bi-weekly live program with 19 episodes and 150–200 average live viewers.",
          es:  "Desarrolló la presencia de marca en X, Instagram y LinkedIn, produciendo contenido educativo con 500K+ visualizaciones acumuladas. Creó y ejecutó estrategias de contenido de forma autónoma. Co-presentó Estado da Solana, programa en vivo quincenal con 19 episodios y un promedio de 150–200 espectadores.",
        },
        stats: [
          { value: "500k+",    label: { pt: "views acumuladas",    en: "accumulated views",   es: "visualizaciones"        } },
          { value: "19",       label: { pt: "episódios ao vivo",   en: "live episodes",       es: "episodios en vivo"      } },
          { value: "150–200",  label: { pt: "espectadores / ep.",  en: "viewers / episode",   es: "espectadores / ep."     } },
        ],
      },
    ],
  },
];

// ─── PROJETOS ─────────────────────────────────────────────────────────────────
export const projects: {
  id: number;
  title: { pt: string; en: string; es?: string };
  period: string;
  description: { pt: string; en: string; es?: string };
  tags: string[];
  link: string;
}[] = [
  // { id: 1, title: { pt: "Nome", en: "Name", es: "Nombre" }, period: "2025",
  //   description: { pt: "...", en: "...", es: "..." }, tags: ["Next.js"], link: "https://..." },
];

// ─── CONTEÚDO ─────────────────────────────────────────────────────────────────
export const content: {
  id: number;
  title: { pt: string; en: string; es?: string };
  platform: string;
  date: string;
  excerpt: { pt: string; en: string; es?: string };
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
  title: { pt: string; en: string; es?: string };
  description: { pt: string; en: string; es?: string };
  date: string;
  location: string;
  media: { type: "image" | "video"; url: string }[];
  types: { pt: string; en: string; es?: string }[];
}[] = [
  {
    id: 1,
    title: { pt: "Arbilink Brazil 2025", en: "Arbilink Brazil 2025", es: "Arbilink Brazil 2025" },
    description: {
      pt: "Primeiro evento oficial da Arbitrum no Brasil. Co-liderei a organização, fui host do palco e speaker no painel sobre o programa de embaixadores da Arbitrum. Durante o evento participei ainda de um podcast gravado ao vivo.",
      en: "Arbitrum's first official event in Brazil. Co-led the organization, hosted the stage, and spoke on a panel about the Arbitrum ambassador program. Also joined a live podcast recorded during the event.",
      es: "Primer evento oficial de Arbitrum en Brasil. Co-lideré la organización, fui host del escenario y speaker en el panel sobre el programa de embajadores de Arbitrum. También participé en un podcast grabado en vivo durante el evento.",
    },
    date: "Nov 2025",
    location: "São Paulo, SP",
    media: [
      { type: "image", url: "https://i.ibb.co/C3QyxbwF/ELZ-0922.jpg" },
      { type: "image", url: "https://i.ibb.co/Qvcjq10z/ELZ-0647.jpg" },
      { type: "video", url: "https://www.youtube.com/watch?v=vI6-GmvSAIQ" },
    ],
    types: [
      { pt: "Host", en: "Host", es: "Host" },
      { pt: "Organizador", en: "Organizer", es: "Organizador" },
      { pt: "Palestrante", en: "Speaker", es: "Ponente" },
    ],
  },
  {
    id: 2,
    title: { pt: "ETH Latam (Arbitrum Day) 2025", en: "ETH Latam (Arbitrum Day) 2025", es: "ETH Latam (Arbitrum Day) 2025" },
    description: {
      pt: "Speaker no painel de RWA no Arbitrum Day dentro do ETH Latam. Participei ao lado de representantes da Credbull, Mercado Bitcoin e Plume Network, discutindo o futuro de ativos do mundo real em blockchains.",
      en: "Speaker on the RWA panel at Arbitrum Day during ETH Latam. Joined representatives from Credbull, Mercado Bitcoin, and Plume Network to discuss the future of real-world assets on blockchains.",
      es: "Speaker en el panel de RWA en el Arbitrum Day durante ETH Latam. Participé junto a representantes de Credbull, Mercado Bitcoin y Plume Network, discutiendo el futuro de los activos del mundo real en blockchains.",
    },
    date: "2025",
    location: "São Paulo, SP",
    media: [
      { type: "image", url: "https://i.ibb.co/cKC2swDL/IMG-4235.jpg" },
    ],
    types: [
      { pt: "Palestrante", en: "Speaker", es: "Ponente" },
    ],
  },
  {
    id: 3,
    title: { pt: "Modular House SP 2025", en: "Modular House SP 2025", es: "Modular House SP 2025" },
    description: {
      pt: "Co-liderei a organização do Modular House São Paulo, fui host do evento e participei em palco falando sobre o programa de embaixadores da Arbitrum. O evento contou com o apoio de Scroll, Arbitrum DAO, Devconnect, Team1 Avax, ETH Latam e Mercado Bitcoin.",
      en: "Co-led the organization of Modular House São Paulo, hosted the event, and took the stage to speak about the Arbitrum ambassador program. The event was supported by Scroll, Arbitrum DAO, Devconnect, Team1 Avax, ETH Latam, and Mercado Bitcoin.",
      es: "Co-lideré la organización del Modular House São Paulo, fui host del evento y participé en el escenario hablando sobre el programa de embajadores de Arbitrum. El evento contó con el apoyo de Scroll, Arbitrum DAO, Devconnect, Team1 Avax, ETH Latam y Mercado Bitcoin.",
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
      { pt: "Host", en: "Host", es: "Host" },
      { pt: "Organizador", en: "Organizer", es: "Organizador" },
      { pt: "Palestrante", en: "Speaker", es: "Ponente" },
    ],
  },
  {
    id: 4,
    title: { pt: "Modular House RJ 2025", en: "Modular House RJ 2025", es: "Modular House RJ 2025" },
    description: {
      pt: "Co-liderei a organização do Modular House Rio de Janeiro e participei em palco. O evento contou com o apoio de Scroll, Arbitrum DAO, Mantle, Rayls, Plume e Chainlink.",
      en: "Co-led the organization of Modular House Rio de Janeiro and participated on stage. The event was supported by Scroll, Arbitrum DAO, Mantle, Rayls, Plume, and Chainlink.",
      es: "Co-lideré la organización del Modular House Río de Janeiro y participé en el escenario. El evento contó con el apoyo de Scroll, Arbitrum DAO, Mantle, Rayls, Plume y Chainlink.",
    },
    date: "2025",
    location: "Rio de Janeiro, RJ",
    media: [
      { type: "image", url: "https://i.ibb.co/cKnJmcKL/Baskerp-115.jpg" },
      { type: "video", url: "https://youtu.be/6jrnFo-8XDI" },
    ],
    types: [
      { pt: "Organizador", en: "Organizer", es: "Organizador" },
    ],
  },
  {
    id: 5,
    title: { pt: "Arbilunch RJ 2025", en: "Arbilunch RJ 2025", es: "Arbilunch RJ 2025" },
    description: {
      pt: "Co-liderei a organização do Arbilunch no Rio de Janeiro, um almoço exclusivo de networking reunindo founders, KOLs e embaixadores da Arbitrum.",
      en: "Co-led the organization of Arbilunch in Rio de Janeiro, an exclusive networking lunch bringing together founders, KOLs, and Arbitrum ambassadors.",
      es: "Co-lideré la organización del Arbilunch en Río de Janeiro, un almuerzo exclusivo de networking que reunió a founders, KOLs y embajadores de Arbitrum.",
    },
    date: "2025",
    location: "Rio de Janeiro, RJ",
    media: [
      { type: "image", url: "https://i.ibb.co/gM9Sw5n3/Gy-Zo-Ly-UWEAAs0-EW.jpg" },
    ],
    types: [
      { pt: "Organizador", en: "Organizer", es: "Organizador" },
    ],
  },
  {
    id: 6,
    title: { pt: "Modular Carnival 2025", en: "Modular Carnival 2025", es: "Modular Carnival 2025" },
    description: {
      pt: "Moderador do painel 'Solana além das memecoins' no Modular Carnival. Conduzi a discussão sobre tudo que a Solana entrega além das memecoins, o que a rede realmente oferece e o que enxergávamos para o seu futuro. Também apoiei a organização do evento.",
      en: "Moderated the 'Solana Beyond Memecoins' panel at Modular Carnival. Led the discussion about everything Solana delivers beyond memecoins, what the network truly offers, and our vision for its future. Also supported the event organization.",
      es: "Moderé el panel 'Solana más allá de las memecoins' en el Modular Carnival. Conduje la discusión sobre todo lo que Solana ofrece más allá de las memecoins, lo que la red realmente entrega y nuestra visión para su futuro. También apoyé la organización del evento.",
    },
    date: "2025",
    location: "Belo Horizonte, MG",
    media: [
      { type: "image", url: "https://i.ibb.co/8gSscY2L/20250227-170204.jpg" },
      { type: "image", url: "https://i.ibb.co/VGHSC56/G8-ZSSq-JXIAAZL2h.jpg" },
      { type: "video", url: "https://youtu.be/0SHSsuaroCA" },
    ],
    types: [
      { pt: "Moderador", en: "Moderator", es: "Moderador" },
      { pt: "Organizador", en: "Organizer", es: "Organizador" },
    ],
  },
];

// ─── FORMAÇÃO ─────────────────────────────────────────────────────────────────
export const education: {
  id: number;
  institution: string;
  logo: string;
  logoBg?: "dark" | "light";
  link?: string;
  degree: { pt: string; en: string; es?: string };
  field: { pt: string; en: string; es?: string };
  start: string;
  end: string | null;
  description?: { pt: string; en: string; es?: string };
  stats?: { value: string; label: { pt: string; en: string; es?: string } }[];
}[] = [
  {
    id: 1,
    institution: "UTFPR",
    logo: "https://www.google.com/s2/favicons?domain=utfpr.edu.br&sz=256",
    logoBg: "dark",
    link: "https://utfpr.edu.br",
    degree: { pt: "Bacharel em Administração de Empresas", en: "Bachelor's in Business Administration", es: "Licenciatura en Administración de Empresas" },
    field:  { pt: "Administração", en: "Business Administration", es: "Administración" },
    start: "2022",
    end:   "2026",
    description: {
      pt: "Bacharel em Administração de Empresas pela Universidade Tecnológica Federal do Paraná (UTFPR) — 1ª no Sul do Brasil em Administração e entre as melhores universidades tecnológicas do país pelo IGC do INEP por 9 anos consecutivos. Meu Trabalho de Conclusão de Curso investigou o papel das blockchains, stablecoins e Real World Assets na democratização do acesso a ativos financeiros na América Latina, conectando gestão, finanças e tecnologia blockchain.",
      en: "Bachelor's in Business Administration from the Federal University of Technology – Paraná (UTFPR) — ranked 1st in southern Brazil in Business Administration and consistently among Brazil's leading technological universities (INEP IGC for 9 consecutive years). My thesis investigated the role of blockchains, stablecoins, and Real World Assets in democratizing access to financial assets in Latin America, bridging management, finance, and blockchain technology.",
      es: "Licenciado en Administración de Empresas por la Universidad Tecnológica Federal de Paraná (UTFPR) — 1ª en el Sur de Brasil en Administración y entre las mejores universidades tecnológicas del país (IGC del INEP, 9 años consecutivos). Mi TCC investigó el papel de las blockchains, stablecoins y Real World Assets en la democratización del acceso a activos financieros en América Latina.",
    },
    stats: [],
  },
];

// ─── LADO PESSOAL ─────────────────────────────────────────────────────────────
export const personal: {
  id: number;
  title: { pt: string; en: string; es?: string };
  description: { pt: string; en: string; es?: string };
  image?: string;
  stats?: { value: string; label: { pt: string; en: string; es?: string }; currencyBRL?: number }[];
}[] = [
  {
    id: 1,
    title: {
      pt: "Sneakerhead & Empreendedor",
      en: "Sneakerhead & Entrepreneur",
      es: "Sneakerhead & Emprendedor",
    },
    description: {
      pt: `Em 2020, durante a pandemia, ainda adolescente, descobri o mundo sneaker e enxerguei um mercado ali dentro. A paixão por me vestir bem e por colecionar coisas que têm história e valor virou o meu primeiro negócio. Comecei a comprar, revender e estudar a fundo a cultura sneaker e o mercado de streetwear. Foram experiências que me ensinaram muito sobre nicho, demanda, relacionamento com cliente e a arte de encontrar oportunidade onde outros veem só estilo.`,
      en: `In 2020, during the pandemic, I was a teenager when I discovered the sneaker world and saw a real market inside it. A passion for dressing well and collecting things with story and value became my first business venture. I started buying, reselling, and deeply studying sneaker culture and the streetwear market. Those experiences taught me a lot about niche, demand, customer relationships, and the art of finding opportunity where others just see style.`,
      es: `En 2020, durante la pandemia, siendo adolescente, descubrí el mundo de las zapatillas y vi un mercado real dentro de él. La pasión por vestirme bien y coleccionar cosas con historia y valor se convirtió en mi primer negocio. Comencé a comprar, revender y estudiar a fondo la cultura sneaker y el mercado de streetwear. Esas experiencias me enseñaron mucho sobre nichos, demanda, relación con el cliente y el arte de encontrar oportunidades donde otros solo ven estilo.`,
    },
    stats: [
      { value: "590+",    label: { pt: "tênis vendidos",    en: "sneakers sold",   es: "zapatillas vendidas" } },
      { value: "R$600k+", label: { pt: "faturamento total", en: "total revenue",   es: "facturación total"   }, currencyBRL: 600000 },
    ],
  },
];
