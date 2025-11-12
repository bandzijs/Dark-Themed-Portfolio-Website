export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-emerald-400">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of recent work showcasing my skills and experience
          </p>
        </div>

        <div className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <p className="text-zinc-400 text-lg">
              Projects coming soon...
            </p>
            <p className="text-zinc-500 text-sm">
              I'm currently working on exciting projects that will be showcased here soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
