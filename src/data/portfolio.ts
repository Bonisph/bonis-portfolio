// ============================================================
//  ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Campos com { pt: "...", en: "..." } aparecem nos dois idiomas.
//  Edite aqui ou peça para o Claude atualizar.
// ============================================================

// ─── CONFIG GERAL ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Pedro Bonis",
  displayName: 'Pedro "Bonis"',

  // Cargos/funções exibidos na Hero abaixo do nome
  roles: {
    pt: ["Empreendedor", "Builder de IA", "Estrategista de Negócios"],
    en:  ["Entrepreneur",  "AI Builder",   "Business Strategist"],
  },

  tagline: {
    pt: "Construindo na interseção entre Tecnologia e Negócios.",
    en: "Building at the intersection of Technology and Business.",
  },

  bio: {
    pt: ``, // Adicione sua bio aqui
    en: ``, // Add your bio here
  },

  // Foto da Hero — use sempre uma URL externa:
  // ImgBB: imgbb.com | GitHub CDN: cole imagem em qualquer issue do GitHub → copie a URL
  // Cloudinary: cloudinary.com
  photo: "https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png",

  socials: {
    twitter:  "https://x.com/bonis_crypto",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-bonilha-ferreira-68271625a/",
    github:   "https://github.com/seuperfil", // atualize quando quiser
  },
};

// ─── SOBRE — destaques (4 cards) ──────────────────────────────────────────────
export const aboutStats = [
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
  { value: "", label: { pt: "", en: "" } },
];

// ─── WORKS ────────────────────────────────────────────────────────────────────
export const works: {
  id: number;
  type: "experience" | "project";
  title: { pt: string; en: string };
  company: string;
  period: string;
  description: { pt: string; en: string };
  tags: string[];
  link: string;
}[] = [
  // Experiência:
  // { id: 1, type: "experience", title: { pt: "Cargo", en: "Role" }, company: "Empresa",
  //   period: "2024 – Presente", description: { pt: "...", en: "..." }, tags: [], link: "" },
  // Projeto:
  // { id: 2, type: "project", title: { pt: "Nome", en: "Name" }, company: "",
  //   period: "2025", description: { pt: "...", en: "..." }, tags: ["Next.js"], link: "https://..." },
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
}[] = [
  // { id: 1, title: { pt: "Título", en: "Title" }, platform: "LinkedIn",
  //   date: "Maio 2026", excerpt: { pt: "...", en: "..." }, link: "https://..." },
];

// ─── EVENTOS ──────────────────────────────────────────────────────────────────
export const events: {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  date: string;
  location: string;
  image: string; // URL externa ou /events/foto.jpg
  type: { pt: string; en: string };
}[] = [
  // { id: 1, title: { pt: "Nome", en: "Name" }, description: { pt: "...", en: "..." },
  //   date: "Mar 2026", location: "São Paulo, SP", image: "https://...",
  //   type: { pt: "Palestra", en: "Talk" } },
];

// ─── LADO PESSOAL ─────────────────────────────────────────────────────────────
// Coisas não-profissionais que moldam quem você é.
// image: URL externa ou caminho local /personal/foto.jpg (opcional)
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
    // Cole aqui a URL da imagem hospedada (ImgBB, GitHub CDN ou Cloudinary):
    image: "", // ex: "https://i.ibb.co/abc123/sneakers.jpg"
  },
  // Adicione mais itens pessoais abaixo:
  // { id: 2, title: { pt: "...", en: "..." }, description: { pt: "...", en: "..." }, image: "..." },
];
