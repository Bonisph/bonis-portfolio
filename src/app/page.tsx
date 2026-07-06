import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Education from "@/components/Education";
import Content from "@/components/Content";
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
        <Hero />
        <About />
        <Works />
        <Education />
        <Events />
        <Content />
        <Personal />
      </main>
      <Footer />
    </>
  );
}
