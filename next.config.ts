import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Every host listed here is a door into /_next/image: anyone can pass an
       arbitrary URL from it and spend the image-optimisation quota. Keep the
       list to hosts actually referenced in src/data/portfolio.ts. */
    remotePatterns: [
      // Foto da seção pessoal
      { protocol: "https", hostname: "i.ibb.co" },
      // Favicons das empresas em Experiência e Formação
      { protocol: "https", hostname: "www.google.com", pathname: "/s2/favicons/**" },
      // Logo da Modular Crypto
      { protocol: "https", hostname: "media.beehiiv.com" },
    ],
  },
};

export default nextConfig;
