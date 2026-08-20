import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Education from "@/components/Education";
import Events from "@/components/Events";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MusicPlayer />
      <main>
        {/* Sobre e Conteúdos ficam fora até haver o que mostrar. Os componentes
            e os dados seguem no repositório — é só devolver <About /> e
            <Content /> aqui, e o link no Navbar. */}
        <Hero />
        <Works />
        <Education />
        {/* Conteúdos fica fora por enquanto — o componente e os dados seguem no
            repositório, é só voltar com <Content /> quando houver o que mostrar
            (vídeos, threads, artigos, TCC). */}
        <Events />
        <Personal />
      </main>
      <Footer />
    </>
  );
}
