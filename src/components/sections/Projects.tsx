import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./About";
import { Lightbox } from "./Lightbox";
import conferenceRoomBooking from "@/assets/Dashboard_Page.png.asset.json";
import securityDashboard1 from "@/assets/security-dashboard-1.png.asset.json";
import building3d1 from "@/assets/building-3d-1.png.asset.json";
import aiDashboard from "@/assets/ai-dashboard.png.asset.json";
import scl6 from "@/assets/Page_6-2.jpg.asset.json";
import scl7 from "@/assets/Page_7-2.jpg.asset.json";
import scl8 from "@/assets/Page_8-2.jpg.asset.json";
import scl9 from "@/assets/Page_9-2.jpg.asset.json";
import scl10 from "@/assets/Page_10-2.jpg.asset.json";
import scl11 from "@/assets/Page_11-2.jpg.asset.json";
import crbRooms from "@/assets/crb-Room_Page.png.asset.json";
import crbBooking from "@/assets/crb-Booking_Modal.png.asset.json";
import crbCalendar from "@/assets/crb-Calendar_Page.png.asset.json";
import crbMyBookings from "@/assets/crb-My_Bookings.png.asset.json";
import crbAdmin from "@/assets/crb-Admin_Page.png.asset.json";

type Metric = { label: string; value: string };

type Project = {
  image: string;
  images?: string[];
  id: string;
  title: string;
  tag: string;
  year: string;
  challenge: string;
  solution: string;
  result: string;
  fit?: "cover" | "contain";
  metrics: Metric[];
};

const sclImages = [scl6.url, scl7.url, scl8.url, scl9.url, scl10.url, scl11.url];

const defaultMetrics: Metric[] = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Product Stage", value: "0 → 1" },
  { label: "NPS Score", value: "9.5" },
  { label: "Revenue Growth", value: "+23%" },
];

const projects: Project[] = [
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
    metrics: [
      { label: "Role", value: "UX Research" },
      { label: "Product Stage", value: "0 → 1" },
      { label: "NPS Score", value: "8.0" },
      { label: "Revenue Growth", value: "+76%" },
    ],
  },
  {
    id: "conference-room-booking",
    title: "Conference Room Booking Application",
    tag: "Workspace Management",
    year: "2024",
    challenge:
      "Teams struggled with room availability conflicts, limited visibility into booking trends, and no way to reserve on behalf of managers.",
    solution:
      "Designed an end-to-end web application with amenity selection, delegated booking for managers, and a 24-hour dashboard showing room status and trends. The experience was built entirely through an agentic AI workflow combining Figma, Make, and Copilot-assisted prototyping to accelerate research, iteration, and delivery.",
    result:
      "Covered complete UX/UI design and requirement implementation, streamlining reservations and improving occupancy visibility.",
    image: conferenceRoomBooking.url,
    fit: "cover",
    metrics: defaultMetrics,
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
    image: sclImages[0],
    images: sclImages,
    fit: "contain",
    metrics: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Product Stage", value: "0 → 1" },
      { label: "NPS Score", value: "8.0" },
      { label: "Revenue Growth", value: "+20%" },
    ],
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
    metrics: [
      { label: "Role", value: "UI Designer" },
      { label: "Product Stage", value: "Enhancement" },
      { label: "NPS Score", value: "8.0" },
      { label: "Revenue Growth", value: "+53%" },
      { label: "Customer", value: "HCL Tech" },
    ],
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
    metrics: [
      { label: "Role", value: "Innovator" },
      { label: "Product Stage", value: "POC" },
      { label: "NPS Score", value: "9" },
      { label: "Revenue Growth", value: "Patent filed" },
    ],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>02 — Case Study</SectionLabel>
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
                <MetricsRow metrics={p.metrics} />
                <div className="mt-6">
                  <Gallery
                    images={p.images && p.images.length > 1 ? p.images : [p.image]}
                    alt={p.title}
                    fit={p.fit}
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

function MetricsRow({ metrics }: { metrics: Metric[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-black/15 pt-6 sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="min-w-0">
          <dt className="text-[10px] uppercase tracking-[0.3em] text-black/60">{m.label}</dt>
          <dd className="font-display mt-2 text-base font-semibold leading-snug text-black sm:text-lg">
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Gallery({
  images,
  alt,
  fit,
}: {
  images: string[];
  alt: string;
  fit?: "cover" | "contain";
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const [zoom, setZoom] = useState(false);
  const dragged = useRef(false);
  const multi = images.length > 1;

  useEffect(() => {
    if (!multi || paused || zoom) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [paused, zoom, multi, images.length, tick]);

  const go = (n: number) => {
    setIndex((n + images.length) % images.length);
    setTick((t) => t + 1);
  };

  return (
    <>
      <div
        className="relative aspect-[4/3] select-none overflow-hidden rounded-lg border border-black/15 bg-[#DFDFD9]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex h-full w-full cursor-grab active:cursor-grabbing"
          drag={multi && !reduce ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => {
            dragged.current = true;
            setPaused(true);
          }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -400) go(index + 1);
            else if (info.offset.x > 60 || info.velocity.x > 400) go(index - 1);
            setTimeout(() => (dragged.current = false), 0);
          }}
          animate={{ x: `-${index * 100}%` }}
          transition={
            reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 32 }
          }
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Enlarge ${alt} image ${i + 1}`}
              onClick={() => {
                if (dragged.current) return;
                setIndex(i);
                setZoom(true);
              }}
              className="h-full w-full shrink-0 grow-0 basis-full"
            >
              <img
                src={src}
                alt={`${alt} — ${i + 1}`}
                loading="lazy"
                draggable={false}
                className={`pointer-events-none h-full w-full ${
                  fit === "contain" ? "object-contain p-4" : "object-cover"
                }`}
              />
            </button>
          ))}
        </motion.div>

        {multi && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-sm transition hover:bg-black/80"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-sm transition hover:bg-black/80"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {zoom && (
        <Lightbox
          images={images}
          index={index}
          alt={alt}
          onClose={() => setZoom(false)}
          onIndexChange={setIndex}
        />
      )}
    </>
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
