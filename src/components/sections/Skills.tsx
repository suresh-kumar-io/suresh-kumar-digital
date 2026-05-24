import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups = [
  { t: "UI/UX", items: ["User Interface", "User Experience", "Wireframing", "Prototyping", "Interaction Design", "Accessibility"] },
  { t: "Product Design", items: ["Dashboard Design", "Design Systems", "User Flows", "Information Architecture", "Responsive Web", "Workflow Design"] },
  { t: "Tools", items: ["Figma", "Adobe XD", "Revit", "AutoCAD", "SolidWorks", "Creo"] },
  { t: "Engineering", items: ["BIM & CAD", "Structural Modelling", "PLM", "ASME / ANSI", "Technical Submittals", "AR / 3D Concepts"] },
  { t: "Collaboration", items: ["Stakeholder Comms", "Cross-functional Teams", "Design Reviews", "Agile Workflow", "User Research", "Requirement Gathering"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>02 · Skills</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
          A <span className="text-gradient-accent">multi-disciplinary</span> toolkit.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Engineering, design and craft — combined to ship enterprise products users actually love.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at top right, oklch(0.7 0.2 230 / 0.15), transparent 60%)" }}
              />
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">{g.t}</h3>
                <span className="text-xs text-muted-foreground">0{gi + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, i) => (
                  <motion.span
                    key={it}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.3, delay: gi * 0.08 + i * 0.04 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-[var(--cyan)]/50 hover:text-foreground"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
