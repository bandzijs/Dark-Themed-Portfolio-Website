import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const brands = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Spotify"
  ];

  const skills = [
    { text: "Frontend Development", color: "bg-orange-500" },
    { text: "Backend & APIs", color: "bg-blue-600" },
    { text: "System Design", color: "bg-purple-600" }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl flex-1 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 relative">
          <p className="text-zinc-500">
            Hi, my name is Emīls Ronis
          </p>
          
          <h1 className="text-zinc-100 max-w-5xl mx-auto leading-tight">
            Crafting Digital Solutions That Drive Growth and Innovation
          </h1>
          
          <div className="relative inline-block mt-12">
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="w-full h-full bg-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-zinc-600">Photo</span>
              </div>
              
              {/* Floating skill tags */}
              <div className="absolute -left-32 top-8 rotate-[-8deg]">
                <span className={`${skills[0].color} text-white px-4 py-2 rounded shadow-lg inline-block`}>
                  {skills[0].text}
                </span>
              </div>
              
              <div className="absolute -right-32 top-16 rotate-[5deg]">
                <span className={`${skills[1].color} text-white px-4 py-2 rounded shadow-lg inline-block`}>
                  {skills[1].text}
                </span>
              </div>
              
              <div className="absolute -left-24 bottom-8 rotate-[-5deg]">
                <span className={`${skills[2].color} text-white px-4 py-2 rounded shadow-lg inline-block`}>
                  {skills[2].text}
                </span>
              </div>
            </div>
            
            {/* Description text - REMOVED */}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full mt-16 space-y-8">
        {/* Brand logos */}
        <div className="flex items-center justify-center gap-12 opacity-40">
          {brands.map((brand) => (
            <span key={brand} className="text-zinc-500">
              {brand}
            </span>
          ))}
        </div>

        {/* Social links and CTA */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/emils-ronis-757919268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 rounded-full border border-zinc-800 hover:border-emerald-400/50"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 rounded-full border border-zinc-800 hover:border-emerald-400/50 invisible"
            aria-label="GitHub"
            style={{ visibility: "hidden", width: 0, height: 0, padding: 0, margin: 0 }}
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:emilsronis@gmail.com"
            className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 rounded-full border border-zinc-800 hover:border-emerald-400/50"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-pink-600 text-white hover:bg-pink-700 ml-4"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}