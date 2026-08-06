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

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#DFDFD9]/90 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#hero"
          className="group inline-flex items-center justify-center"
          aria-label="Suresh Kumar — home"
        >
          <span className="font-display flex h-9 w-9 items-center justify-center border border-black text-base font-bold tracking-tight text-black transition-colors group-hover:border-black/60">
            SK
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`text-sm text-black transition-opacity ${
                  l.id === "work"
                    ? "case-study-cta"
                    : active === l.id
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100"
                }`}
              >
                {l.id === "work" ? "Case studies" : l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Suresh_Kumar_Resume.docx"
          download
          className="text-sm font-medium text-black underline underline-offset-4"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
