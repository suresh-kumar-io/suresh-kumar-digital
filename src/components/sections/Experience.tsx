import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const items = [
  {
    co: "Siemens Technology and Services",
    role: "UI/UX Designer",
    when: "May 2022 — Present",
    where: "Chennai, India",
    points: [
      "Designed enterprise B2B & B2C interfaces for Siveillance Control and SiPass.",
      "Shipped dashboards, ordering workflows and customer-management surfaces.",
      "Built interactive prototypes in Figma and collaborated across product, engineering and stakeholders.",
      "Contributed to a patent-selected 3D building visualization concept with AR.",
    ],
  },
  {
    co: "Siemens Technology and Services",
    role: "Engineering Solutions Projects",
    when: "Current · Siemens",
    where: "Chennai, India",
    points: [
      "Delivered graphics commissioning solutions for Siveillance Control using Siemens PISM & AutoCAD.",
      "Designed alarm/sensor visualization, mapping, and configuration for fire & safety systems.",
      "Led design execution using parametric modeling, feature-based design, and engineering best practices.",
      "Collaborated on 3D BIM integration for visualization, surveillance, and fire-safety compliance.",
      "Ensured compliance with European standards and customer requirements.",
      "Developed AR-enabled 3D BIM concept for fire protection; contributed to patent-filed innovation.",
      "Independently delivered visualization engineering, attribute configuration, KML generation, and PDF export capabilities.",
    ],
  },
  {
    co: "Siemens Technology and Services",
    role: "cRSP Services – L2/L3 Network Support",
    when: "Current · Siemens",
    where: "Remote · EMEA / US",
    points: [
      "Self-trained and transitioned into L3 networking within 60 days.",
      "Specialized in IPsec architecture, cRSP, BMSaaS, Desigo connectivity, and network diagnostics.",
      "Resolved 50+ complex EMEA/US L3 tickets with zero escalations.",
      "Led Scalance S615 onboarding during FortiGate migration projects.",
      "Implemented and supported IPsec, cRSP, DCCaaS, and Desigo connectivity solutions.",
      "Created troubleshooting playbooks and reusable automation scripts for IPsec tunnel deployment.",
      "Experienced in NAT, secure connectivity, network troubleshooting, and customer support operations.",
    ],
  },
  {
    co: "Technology Solutions2",
    role: "Senior CAD Engineer",
    when: "Feb 2021 — May 2022",
    where: "Bengaluru, India",
    points: [
      "Partnered with European telecom clients on technical design and visualization.",
      "Produced layouts, workflow diagrams and equipment plans in AutoCAD.",
      "Led design reviews and maintained delivery quality.",
    ],
  },
  {
    co: "ASE Structure Design",
    role: "Junior CAD Engineer",
    when: "Oct 2019 — Feb 2021",
    where: "Chennai, India",
    points: [
      "Executed US telecom projects with structural plans, elevations and site layouts.",
      "Built dynamic AutoCAD blocks and maintained a reusable component library.",
      "Authored schematics and specifications for specialized telecom equipment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>04 · Journey</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
          A path built across <span className="text-gradient-accent">engineering & design</span>.
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--electric)] to-transparent md:left-1/2" />
          <div className="space-y-16">
            {items.map((it, i) => (
              <motion.div
                key={it.co}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--electric)] glow md:left-1/2"
                />
                <div className={i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}>
                  <div className="text-xs uppercase tracking-widest text-[var(--cyan)]">{it.when}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{it.role}</h3>
                  <div className="text-muted-foreground">{it.co} · {it.where}</div>
                </div>
                <div className={i % 2 ? "mt-4 md:mt-0 md:pr-12 md:text-right" : "mt-4 md:mt-0 md:pl-12"}>
                  <ul className="glass space-y-2 rounded-2xl p-5 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2 text-left">
                        <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
