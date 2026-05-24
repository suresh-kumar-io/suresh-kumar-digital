import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "../MagneticButton";

const roles = ["Product Designer", "UI/UX Designer", "Design Systems Lead", "Enterprise UX Expert"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-dvh items-center justify-center px-6 pt-32">
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
          </span>
          Available for opportunities · Chennai, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl"
        >
          <span className="block text-gradient">Suresh Kumar</span>
          <span className="mt-3 block h-[1.1em] overflow-hidden text-2xl text-muted-foreground sm:text-3xl md:text-4xl">
            <motion.span
              key={idx}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-gradient-accent"
            >
              {roles[idx]}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Crafting enterprise-grade interfaces at <span className="text-foreground">Siemens</span> — building
          security dashboards, scalable design systems, and human-centered workflows used by teams worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#work" variant="primary">View Projects →</MagneticButton>
          <MagneticButton href="/Suresh_Kumar_Resume.docx" download variant="ghost">Download Resume</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">Contact Me</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-6 text-muted-foreground"
        >
          {[
            { l: "Email", h: "mailto:sureshmanohar5597@gmail.com" },
            { l: "LinkedIn", h: "#" },
            { l: "Behance", h: "#" },
            { l: "Dribbble", h: "#" },
          ].map((s) => (
            <a key={s.l} href={s.h} className="text-xs uppercase tracking-widest transition-colors hover:text-foreground">
              {s.l}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <HoloDashboard />

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}

function HoloDashboard() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute right-[-6%] top-[18%] hidden w-72 rotate-6 lg:block"
      >
        <div className="glass-strong anim-float rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Threat Monitor</span>
            <span className="h-2 w-2 rounded-full bg-[var(--cyan)] glow" />
          </div>
          <div className="space-y-2">
            {[78, 42, 91, 56].map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-8 text-[10px] text-muted-foreground">S{i + 1}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: `${v}%` }}
                    transition={{ duration: 1.4, delay: 1 + i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)]"
                  />
                </div>
                <span className="w-8 text-right text-[10px] text-foreground">{v}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-[-4%] top-[55%] hidden w-60 -rotate-6 lg:block"
      >
        <div className="glass-strong anim-float rounded-2xl p-4" style={{ animationDelay: "1.5s" }}>
          <div className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">Active Sessions</div>
          <div className="font-display text-3xl text-gradient-accent">12,438</div>
          <div className="mt-3 flex h-12 items-end gap-1">
            {[40, 60, 35, 80, 55, 90, 70, 95, 65, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.05 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-[var(--electric)] to-[var(--cyan)] opacity-80"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
