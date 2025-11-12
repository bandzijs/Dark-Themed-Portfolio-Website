import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const socials = [
    { icon: Github, label: "GitHub", href: "#", visible: false },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emils-ronis-757919268/", visible: true },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-400">Let's Work Together</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Button
              asChild
              className="bg-emerald-400 text-zinc-950 hover:bg-emerald-500"
            >
              <a href="mailto:emilsronis@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                emilsronis@gmail.com
              </a>
            </Button>

            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zinc-500 hover:text-emerald-400 transition-colors ${!social.visible ? 'invisible' : ''}`}
                  aria-label={social.label}
                  style={!social.visible ? { visibility: "hidden", width: 0, height: 0, padding: 0, margin: 0 } : {}}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
