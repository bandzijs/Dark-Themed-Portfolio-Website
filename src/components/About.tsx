import { Code2, Database, Layers } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating robust APIs and database architectures for scalable applications",
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-emerald-400">About Me</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I'm a fullstack developer passionate about creating seamless digital experiences. 
            With expertise in both frontend and backend technologies, I bring ideas to life with 
            clean, efficient, and scalable code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-emerald-400/30 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
