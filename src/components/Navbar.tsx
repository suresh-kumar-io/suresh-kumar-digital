import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 top-4 z-50 w-[min(960px,92vw)] -translate-x-1/2 rounded-2xl px-4 py-3 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/40" : "glass"
      }`}
    >
      <nav className="flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2 font-display text-base font-semibold">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--electric)] glow" />
          <span className="text-foreground">Suresh<span className="text-gradient-accent">.</span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Suresh_Kumar_Resume.docx"
          download
          className="rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] px-4 py-1.5 text-sm font-medium text-[var(--primary-foreground)] transition-transform hover:scale-[1.04]"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
