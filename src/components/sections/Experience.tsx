import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const items = [
  {
    co: "Siemens Technology and Services",
    role: "Senior UI/UX Designer",
    when: "May 2022 — Present",
    where: "Chennai, India",
    points: [
      "Design enterprise B2B and B2C interfaces for Siveillance Control and SiPass.",
      "Ship dashboards, ordering workflows, and customer-management surfaces used in production.",
      "Build interactive prototypes in Figma and align product, engineering, and stakeholders.",
      "Contributed to a patent-filed 3D building visualization concept with AR.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>04 — Experience</SectionLabel>
        <h2 className="font-display mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          UI/UX design at Siemens.
        </h2>

        <div className="mt-16 space-y-12">
          {items.map((it, i) => (
            <motion.article
              key={`${it.co}-${it.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-6 border-t border-black/15 pt-8 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
                  {it.when}
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold text-black md:text-2xl">
                  {it.role}
                </h3>
                <div className="mt-2 text-sm text-black/70">
                  {it.co} · {it.where}
                </div>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3 text-sm leading-relaxed text-black">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-black" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
