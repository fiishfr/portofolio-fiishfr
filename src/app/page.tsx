import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import VisualGallery from "@/components/VisualGallery";
import Contact from "@/components/Contact";
import SiteExperience from "@/components/SiteExperience";

export default function Home() {
  return (
    <>
      <SiteExperience />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <VisualGallery />
        <Contact />
      </main>
    </>
  );
}
