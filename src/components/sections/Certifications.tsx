import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const certs = [
  { t: "Foundations of UI & UX Design", by: "Coursera" },
  { t: "Start the UX Design Process", by: "Coursera" },
  { t: "Build Wireframes & Low-Fi Prototypes", by: "Coursera" },
  { t: "Conduct UX Research & Test Early Concepts", by: "Coursera" },
  { t: "Professional in Product Design & Analysis", by: "CADD Center" },
  { t: "Plant Design Management System", by: "CADD Center" },
];

const achievements = [
  { t: "Patent-Selected Concept", d: "3D building visualization integrated with Siemens security systems." },
  { t: "Innovation Hackathon", d: "Presented AutoCAD × Siemens PISM integration concept internally." },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>05 · Recognition</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
          Certifications & <span className="text-gradient-accent">achievements</span>.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {certs.map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass group rounded-xl p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-foreground">{c.t}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{c.by}</div>
                  </div>
                  <span className="text-[var(--cyan)] transition-transform group-hover:rotate-12">✦</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--electric)]/20 blur-2xl" />
                <div className="text-xs uppercase tracking-widest text-[var(--cyan)]">Highlight</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
