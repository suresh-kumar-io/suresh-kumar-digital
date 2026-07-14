import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const items = [
  {
    co: "Siemens Technology and Services",
    role: "Senior UI/UX Designer",
    when: "May 2022 — Present",
    where: "Chennai, India",
    points: [
      "Led end-to-end UI/UX for enterprise SaaS platforms (Siveillance Control, SiPass), translating complex requirements into user flows and high-fidelity prototypes.",
      "Designed B2B/B2C dashboards and workflows that reduced navigation friction and improved task completion.",
      "Applied AI-assisted tools to accelerate ideation, run UX audits, and conduct competitive analysis.",
      "Partnered with stakeholders to present, iterate, and align design decisions with business outcomes.",
      "Built scalable Figma design systems using auto-layout, components, and tokens to ensure consistency across products.",
      "Enforced accessibility standards (WCAG contrast ratios, keyboard navigation, inclusive patterns).",
      "Co-invented an AR/BIM-based security visualization solution currently under patent filing.",
      "Worked within Agile teams, balancing multiple design workstreams across concurrent releases.",
    ],
    products: [
      {
        name: "Conference Room Booking Application",
        lines: [
          "Designed a full-scale booking platform to resolve scheduling conflicts, limited room visibility, and delegation gaps.",
          "Shipped manager-delegated booking, amenity-based filtering, and a real-time 24-hour occupancy dashboard.",
          "Streamlined reservations, improved resource utilization visibility, and supported efficient workplace collaboration.",
        ],
      },
      {
        name: "Software Compatibility & Lifecycle Platform",
        lines: [
          "Consolidated fragmented regional admin workflows into a unified, scalable platform.",
          "Delivered a centralized customer and ordering hub with intelligent defaults and simplified onboarding.",
          "Reduced task complexity and accelerated onboarding for global administrators.",
        ],
      },
      {
        name: "Siemens Security Dashboard",
        lines: [
          "Designed a multi-tenant security intelligence dashboard unifying KPIs, alerts, and threat monitoring.",
          "Built modular UI patterns, deep drill-down navigation, and high-contrast dark-mode visualizations for control rooms.",
          "Adopted as the reference interface for stakeholder reviews of portfolio-wide security posture.",
        ],
      },
      {
        name: "AI-Powered Security Dashboard (Concept / Innovation)",
        lines: [
          "Conceptualized and prototyped an AI-assisted threat triage experience for industrial cybersecurity analysts.",
          "Designed summarized incident views and one-click response playbooks to speed up decision-making.",
          "Showcased at an internal innovation event as a forward-looking design capability.",
        ],
      },
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
              <div className="md:col-span-8 space-y-10">
                <ul className="space-y-3 text-sm leading-relaxed text-black">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-black" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {it.products && it.products.length > 0 && (
                  <div className="space-y-8">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
                      Selected Products
                    </div>
                    {it.products.map((prod) => (
                      <div key={prod.name} className="space-y-3">
                        <h4 className="font-display text-base font-semibold text-black">
                          {prod.name}
                        </h4>
                        <ul className="space-y-2 text-sm leading-relaxed text-black/80">
                          {prod.lines.map((line) => (
                            <li key={line} className="flex gap-3">
                              <span className="mt-2 h-px w-4 shrink-0 bg-black/40" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
