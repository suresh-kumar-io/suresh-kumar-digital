import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "./About";
import siveillancePortal from "@/assets/siveillance-portal.jpg.asset.json";

type Project = {
  image?: string;
  id: string;
  title: string;
  tag: string;
  year: string;
  tags: string[];
  problem: string;
  process: string;
  solution: string;
  gradient: string;
};

const projects: Project[] = [
  {
    id: "siveillance",
    title: "Siemens Siveillance Control",
    tag: "Enterprise Security Platform",
    year: "2024",
    tags: ["Dashboard", "B2B", "Design System", "Workflow"],
    problem: "Security operators needed a unified command center to monitor distributed sites without context-switching.",
    process: "Mapped operator workflows, ran usability discussions, built modular components on the Siemens DS, prototyped in Figma.",
    solution: "A real-time situation dashboard with prioritized alerts, smart filtering, and a calmer visual hierarchy — cutting decision time and operator fatigue.",
    gradient: "from-[oklch(0.7_0.2_230)] to-[oklch(0.65_0.22_295)]",
  },
  {
    id: "sipass",
    title: "SiPass Workflow Platform",
    tag: "Access Management",
    year: "2023",
    tags: ["B2B", "Workflow", "Information Architecture"],
    problem: "Admin teams struggled with fragmented ordering and customer-management flows across regions.",
    process: "Audited existing flows, ran stakeholder interviews, defined a single source of truth, validated with interactive prototypes.",
    solution: "A streamlined ordering experience with intelligent defaults and a scalable customer hub — reducing task time and onboarding friction.",
    gradient: "from-[oklch(0.82_0.16_200)] to-[oklch(0.7_0.2_230)]",
  },
  {
    id: "security-dashboard",
    title: "Siemens Security Dashboard",
    tag: "Monitoring · KPI Visualization",
    year: "2024",
    tags: ["Dashboard", "Data Viz", "Responsive"],
    problem: "Stakeholders lacked a single-pane view of security KPIs across multi-tenant deployments.",
    process: "Mapped data model with engineers, defined hierarchy, ran iterations on chart legibility and dark-mode contrast.",
    solution: "A modular KPI dashboard with drill-down patterns and live threat feeds — used in customer reviews.",
    gradient: "from-[oklch(0.65_0.22_295)] to-[oklch(0.82_0.16_200)]",
  },
  {
    id: "3d-building",
    title: "3D Building Visualization · AR",
    tag: "Patent-Selected Concept",
    year: "2024",
    tags: ["3D", "AR", "Innovation", "Concept"],
    problem: "Operators needed spatial awareness of security events across multi-floor buildings.",
    process: "Co-created with engineers, sketched spatial interactions, prototyped AR overlays integrating CAD data with live feeds.",
    solution: "An AR-ready 3D building view that maps live security events to physical space — selected for Siemens patent consideration.",
    gradient: "from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.22_295)]",
  },
  {
    id: "ai-dashboard",
    title: "AI Security Dashboard · Concept",
    tag: "Hackathon · Innovation",
    year: "2024",
    tags: ["AI", "Concept", "Internal Hackathon"],
    problem: "How might AI proactively surface anomalies in industrial security telemetry?",
    process: "Sketched conversational + glanceable patterns, prototyped agent-assisted triage flows.",
    solution: "A predictive surface with AI-summarized incidents and one-click playbooks — presented at an internal innovation event.",
    gradient: "from-[oklch(0.82_0.16_200)] to-[oklch(0.65_0.22_295)]",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>03 · Selected Work</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Case studies that <span className="text-gradient-accent">scale</span>.
          </h2>
          <p className="max-w-md text-muted-foreground">
            Enterprise products, security platforms and conceptual work that shaped my craft.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl text-left ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <MockPreview kind={p.id} />
                <motion.div
                  className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="glass-strong absolute inset-x-4 bottom-4 rounded-2xl p-5 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag} · {p.year}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--electric)] text-[var(--primary-foreground)] transition-transform group-hover:rotate-45">
                    →
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-8"
      >
        <button onClick={onClose} className="absolute right-5 top-5 rounded-full bg-white/5 px-3 py-1 text-sm text-muted-foreground hover:text-foreground">Close ✕</button>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{project.tag} · {project.year}</div>
        <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{project.title}</h3>
        <div className={`mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <MockPreview kind={project.id} />
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { l: "Problem", v: project.problem },
            { l: "Process", v: project.process },
            { l: "Solution", v: project.solution },
          ].map((b) => (
            <div key={b.l}>
              <div className="text-[10px] uppercase tracking-widest text-[var(--cyan)]">{b.l}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MockPreview({ kind }: { kind: string }) {
  if (kind === "3d-building") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotateY: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d", perspective: 800 }}
          className="relative h-40 w-32"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="absolute inset-x-0 mx-auto h-6 w-28 rounded border border-white/40 bg-white/10 backdrop-blur" style={{ top: i * 28 }} />
          ))}
        </motion.div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-end justify-center p-8">
      <div className="grid w-full max-w-md grid-cols-3 gap-2 opacity-90">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="h-12 rounded-lg border border-white/20 bg-white/10 backdrop-blur"
          />
        ))}
      </div>
    </div>
  );
}
