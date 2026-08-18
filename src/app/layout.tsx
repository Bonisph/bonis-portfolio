import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* Display face for headings, wordmark and CTAs. Space Grotesk tops out at 700,
   so display type uses 700 rather than the 800 Helvetica was carrying. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Pedro "Bonis" — Portfólio',
  description:
    "Portfólio pessoal de Pedro Bonis — works, conteúdo e eventos na interseção entre Tecnologia e Negócios.",
  openGraph: {
    title: 'Pedro "Bonis" — Portfólio',
    description: "Portfólio pessoal de Pedro Bonis — works, conteúdo e eventos na interseção entre Tecnologia e Negócios.",
    url: "https://bonis-portfolio-three.vercel.app",
    type: "website",
    images: [{ url: "https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png", width: 1200, height: 630, alt: 'Pedro "Bonis"' }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bonis_crypto",
    title: 'Pedro "Bonis" — Portfólio',
    description: "Portfólio pessoal de Pedro Bonis — works, conteúdo e eventos na interseção entre Tecnologia e Negócios.",
    images: ["https://i.ibb.co/xqYsQs8M/Foto-do-portfolio.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}>
      <head>
        <link rel="preload" as="image" href="/hero-bliss-wallpaper.png" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
