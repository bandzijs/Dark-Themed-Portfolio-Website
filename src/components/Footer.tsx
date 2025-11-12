export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Emīls Ronis. All rights reserved.
          </p>
          <p className="text-zinc-600">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
