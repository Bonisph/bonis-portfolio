import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Content from "@/components/Content";
import Events from "@/components/Events";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Content />
        <Events />
        <Personal />
      </main>
      <Footer />
    </>
  );
}
