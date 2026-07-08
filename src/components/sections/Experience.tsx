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
  {
    co: "Siemens Technology and Services",
    role: "Engineering Solutions Projects",
    when: "Current",
    where: "Chennai, India",
    points: [
      "Deliver graphics commissioning for Siveillance Control using Siemens PISM and AutoCAD.",
      "Design alarm and sensor visualization, mapping, and configuration for fire and safety systems.",
      "Lead execution using parametric modeling and feature-based design.",
      "Contribute to 3D BIM integration for visualization, surveillance, and fire-safety compliance.",
      "Ensure compliance with European standards and customer requirements.",
      "Developed an AR-enabled 3D BIM fire-protection concept selected for patent filing.",
      "Own visualization engineering, attribute configuration, KML generation, and PDF export.",
    ],
  },
  {
    co: "Siemens Technology and Services",
    role: "cRSP Services — L2 / L3 Network Support",
    when: "Current",
    where: "Remote · EMEA / US",
    points: [
      "Self-trained and transitioned into L3 networking within 60 days.",
      "Specialize in IPsec, cRSP, BMSaaS, Desigo connectivity, and network diagnostics.",
      "Resolved 50+ complex EMEA and US L3 tickets with zero escalations.",
      "Led Scalance S615 onboarding during FortiGate migration projects.",
      "Implemented and supported IPsec, cRSP, DCCaaS, and Desigo connectivity.",
      "Authored troubleshooting playbooks and reusable automation for IPsec tunnel deployment.",
      "Experienced in NAT, secure connectivity, diagnostics, and customer support operations.",
    ],
  },
  {
    co: "Technology Solutions2",
    role: "Senior CAD Engineer",
    when: "Feb 2021 — May 2022",
    where: "Bengaluru, India",
    points: [
      "Partnered with European telecom clients on technical design and visualization.",
      "Produced layouts, workflow diagrams, and equipment plans in AutoCAD.",
      "Led design reviews and maintained delivery quality.",
    ],
  },
  {
    co: "ASE Structure Design",
    role: "Junior CAD Engineer",
    when: "Oct 2019 — Feb 2021",
    where: "Chennai, India",
    points: [
      "Delivered US telecom projects with structural plans, elevations, and site layouts.",
      "Built dynamic AutoCAD blocks and maintained a reusable component library.",
      "Authored schematics and specifications for specialized telecom equipment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>04 — Experience</SectionLabel>
        <h2 className="font-display mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          A career built across engineering, design, and networks.
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
