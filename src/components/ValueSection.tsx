import { useState, useEffect } from "react";

export function ValueSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const techIcons = [
    { name: "Notion", emoji: "📝" },
    { name: "Figma", emoji: "🎨" },
    { name: "React", emoji: "⚛️" }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            <span className="text-zinc-400">Available for work</span>
          </div>
          <h2 className="text-zinc-100">How I add value?</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Research Paper Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <span className="text-emerald-400">✓</span>
              </div>
              <h3 className="text-zinc-100">Research Paper</h3>
            </div>
            
            <p className="text-zinc-500">
              Exploring AR-powered learning with Astrono—my app designed to make astronomy immersive for curious minds.
            </p>

            <div className="relative mt-6">
              <div className="w-full h-48 bg-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-zinc-600">Research Paper Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-zinc-900 px-4 py-2 rounded-full hover:bg-white transition-colors">
                know more
              </button>
            </div>
          </div>

          {/* Tech Stacks & Music Player */}
          <div className="space-y-6">
            {/* Tech Stacks */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💚</span>
                <h3 className="text-zinc-100">Tech Stacks</h3>
              </div>
              
              <p className="text-zinc-500 mb-4">
                My core workflow—built for thinking, designing, and building smarter.
              </p>

              <div className="flex gap-3">
                {techIcons.map((tech) => (
                  <div 
                    key={tech.name}
                    className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-xl"
                  >
                    {tech.emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Music Player */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white h-64 flex items-center justify-center">
              <span className="text-white/60">Music Player</span>
            </div>

            {/* Location & Weather */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between text-zinc-400">
              <span>Bangalore, India</span>
              <span>{formatTime(currentTime)}</span>
              <span>Partly Cloudy 24°C</span>
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 leading-relaxed">
                I'm a product designer by trade, an innovator by mindset, and a founder at heart. Currently, I live and work in Bangalore, India—creating bespoke, high-impact digital experiences that blend clarity, emotion, and scale.
              </p>
            </div>

            {/* Conversion Rate */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-emerald-400 mb-2" style={{ fontSize: "5rem", lineHeight: "1" }}>
                28%
              </div>
              <h3 className="text-zinc-100 mb-2">Conversion Rate</h3>
              <p className="text-zinc-500">
                Simpl checkout revamp improved flows—cut friction, boosted conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}