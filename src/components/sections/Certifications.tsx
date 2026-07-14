import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const certs = [
  { t: "Google UX Design", by: "Google" },
  { t: "Foundations of UI & UX Design", by: "Coursera" },
  { t: "Start the UX Design Process", by: "Coursera" },
  { t: "Build Wireframes & Low-Fi Prototypes", by: "Coursera" },
  { t: "Conduct UX Research & Test Early Concepts", by: "Coursera" },
  { t: "Professional in Product Design & Analysis", by: "CADD Center" },
  { t: "Plant Design Management System", by: "CADD Center" },
];

const achievements = [
  {
    t: "Patent-Filed Concept",
    d: "AR-enabled 3D building visualization integrated with Siemens security systems.",
  },
  {
    t: "Innovation Hackathon",
    d: "Presented AutoCAD and Siemens PISM integration concept at an internal Siemens event.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>05 — Recognition</SectionLabel>
        <h2 className="font-display mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          Certifications and achievements.
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
              Certifications
            </div>
            <ul className="mt-6">
              {certs.map((c, i) => (
                <motion.li
                  key={c.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-baseline justify-between gap-6 border-t border-black/15 py-4 text-sm"
                >
                  <span className="text-black">{c.t}</span>
                  <span className="text-black/60">{c.by}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
              Highlights
            </div>
            <div className="mt-6 space-y-8">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-t border-black/15 pt-4"
                >
                  <h3 className="font-display text-lg font-semibold text-black">
                    {a.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/80">
                    {a.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
