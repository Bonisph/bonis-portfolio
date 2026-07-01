import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
