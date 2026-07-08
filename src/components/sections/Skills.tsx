import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups = [
  {
    t: "UI / UX Design",
    items: ["Interface Design", "Interaction Design", "Wireframing", "Prototyping", "Accessibility", "User Research"],
  },
  {
    t: "Product Design",
    items: ["Dashboards", "Design Systems", "Information Architecture", "Workflow Design", "Responsive Design"],
  },
  {
    t: "Tools",
    items: ["Figma", "Adobe XD", "Revit", "AutoCAD", "SolidWorks", "Creo"],
  },
  {
    t: "Engineering",
    items: ["BIM & CAD", "Structural Modelling", "PLM", "ASME / ANSI", "Technical Submittals", "AR & 3D Concepts"],
  },
  {
    t: "Collaboration",
    items: ["Stakeholder Communication", "Cross-functional Teams", "Design Reviews", "Agile", "Requirement Gathering"],
  },
  {
    t: "Networking (L2 / L3)",
    items: ["IPsec Tunneling", "NAT", "cRSP", "BMSaaS", "Desigo Solution", "Network Troubleshooting"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>02 — Capabilities</SectionLabel>
        <h2 className="font-display mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          A multi-disciplinary practice spanning design, engineering, and networks.
        </h2>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="border-t border-black/15 pt-5"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold text-black">
                  {g.t}
                </h3>
                <span className="text-xs text-black/60">0{gi + 1}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-black">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
