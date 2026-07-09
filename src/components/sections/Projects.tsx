import { motion } from "framer-motion";
import { SectionLabel } from "./About";
import conferenceRoomBooking from "@/assets/Dashboard_Page.png.asset.json";
import securityDashboard1 from "@/assets/security-dashboard-1.png.asset.json";
import scl6 from "@/assets/scl-Page_6.jpg.asset.json";
import building3d1 from "@/assets/building-3d-1.png.asset.json";
import aiDashboard from "@/assets/ai-dashboard.png.asset.json";

type Project = {
  image: string;
  id: string;
  title: string;
  tag: string;
  year: string;
  challenge: string;
  solution: string;
  result: string;
  fit?: "cover" | "contain";
};

const projects: Project[] = [
  {
    id: "conference-room-booking",
    title: "Conference Room Booking Application",
    tag: "Workspace Management",
    year: "2024",
    challenge:
      "Teams struggled with room availability conflicts, limited visibility into booking trends, and no way to reserve on behalf of managers.",
    solution:
      "Designed an end-to-end web application with amenity selection, delegated booking for managers, and a 24-hour dashboard showing room status and trends.",
    result:
      "Covered complete UX/UI design and requirement implementation, streamlining reservations and improving occupancy visibility.",
    image: conferenceRoomBooking.url,
    fit: "cover",
  },
  {
    id: "sipass",
    title: "Software Compatibility & Lifecycle",
    tag: "Access Management",
    year: "2023",
    challenge:
      "Admin teams navigated inconsistent ordering and customer flows across regions.",
    solution:
      "Consolidated the experience into a single source of truth with intelligent defaults and a scalable customer hub.",
    result: "Cut task completion time and simplified onboarding for regional administrators.",
    image: scl6.url,
    fit: "contain",
  },
  {
    id: "security-dashboard",
    title: "Siemens Security Dashboard",
    tag: "Monitoring · KPI Visualization",
    year: "2024",
    challenge:
      "Stakeholders lacked a single view of security KPIs across multi-tenant deployments.",
    solution:
      "Built a modular dashboard with drill-down patterns, live threat feeds, and high-contrast dark-mode visualization.",
    result: "Adopted in customer reviews as the reference view for portfolio-wide security posture.",
    image: securityDashboard1.url,
    fit: "contain",
  },
  {
    id: "3d-building",
    title: "3D Building Visualization with AR",
    tag: "Patent-Filed Concept",
    year: "2024",
    challenge:
      "Operators needed spatial awareness of security events across multi-floor facilities.",
    solution:
      "Prototyped an AR-ready 3D view mapping live security events to CAD building data.",
    result: "Selected for Siemens patent consideration as a next-generation situational awareness concept.",
    image: building3d1.url,
    fit: "cover",
  },
  {
    id: "ai-dashboard",
    title: "AI Security Dashboard",
    tag: "Innovation Concept",
    year: "2024",
    challenge:
      "Analysts needed proactive surfacing of anomalies in industrial security telemetry.",
    solution:
      "Prototyped an AI-assisted triage surface with summarized incidents and one-click playbooks.",
    result: "Presented at an internal Siemens innovation event as a forward-looking capability.",
    image: aiDashboard.url,
    fit: "contain",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>03 — Selected Work</SectionLabel>
        <h2 className="font-display mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          Case studies from enterprise security and operations.
        </h2>

        <div className="mt-20 space-y-24">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="grid gap-10 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/15 bg-[#DFDFD9]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full ${
                      p.fit === "contain" ? "object-contain p-4" : "object-cover"
                    }`}
                  />
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
                  {p.tag} · {p.year}
                </div>
                <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-black md:text-3xl">
                  {p.title}
                </h3>

                <dl className="mt-8 space-y-6 text-sm leading-relaxed text-black">
                  <Row label="Challenge" value={p.challenge} />
                  <Row label="Solution" value={p.solution} />
                  <Row label="Key Result" value={p.result} />
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-black/15 pt-4">
      <dt className="text-[10px] uppercase tracking-[0.3em] text-black/60">
        {label}
      </dt>
      <dd className="mt-2 text-black">{value}</dd>
    </div>
  );
}

