import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-[#F4F4F4]">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="text-lg font-semibold tracking-tight">Mira Hale</div>
          <p className="mt-3 max-w-sm text-sm text-[#A8A8A8]">
            Digital media artist & designer working across motion, identity, and interface. Based in Lisbon, available worldwide.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#A8A8A8]">Index</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/work" className="hover:underline underline-offset-4">Work</Link></li>
            <li><Link to="/about" className="hover:underline underline-offset-4">About</Link></li>
            <li><Link to="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#A8A8A8]">Elsewhere</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Instagram</a></li>
            <li><a href="https://www.behance.net" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Behance</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-[#A8A8A8] sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Mira Hale. All rights reserved.</div>
          <div>Lisbon — Worldwide</div>
        </div>
      </div>
    </footer>
  );
}
