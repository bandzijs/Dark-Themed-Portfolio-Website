import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueSection } from "./components/ValueSection";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-400 focus:text-zinc-950 focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}