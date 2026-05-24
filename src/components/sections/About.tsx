import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 4, s: "+", l: "Years Experience" },
  { v: 25, s: "+", l: "Products Shipped" },
  { v: 1, s: "", l: "Patent-Selected Concept" },
  { v: 100, s: "%", l: "Recruiter Energy" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const d = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / d);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>01 · About</SectionLabel>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              From <span className="text-gradient-accent">CAD precision</span> to{" "}
              <span className="text-gradient-accent">pixel-perfect product design</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I began my career as a Mechanical Engineer crafting CAD systems for global telecom and
                structural projects — obsessed with how things fit, flow, and function.
              </p>
              <p>
                That engineering mindset now drives my product design practice at{" "}
                <span className="text-foreground">Siemens</span>, where I design enterprise dashboards,
                workflow platforms, and scalable systems for{" "}
                <span className="text-foreground">Siveillance Control</span> and{" "}
                <span className="text-foreground">SiPass</span> — used by security teams across the globe.
              </p>
              <p>
                I bridge structure and storytelling, engineering rigor and visual craft. The result is
                interfaces that feel inevitable.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((st, i) => (
              <motion.div
                key={st.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass relative overflow-hidden rounded-2xl p-5"
              >
                <div className="font-display text-4xl font-semibold text-gradient">
                  <Counter to={st.v} suffix={st.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{st.l}</div>
                <div className="shimmer absolute inset-0 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
    >
      <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
      {children}
    </motion.div>
  );
}
