import { motion } from "framer-motion";

const stats = [
  { v: "4+", l: "Years designing enterprise software" },
  { v: "25+", l: "Products and features shipped" },
  { v: "50+", l: "L3 network tickets resolved" },
  { v: "1", l: "Patent-filed AR concept" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>01 — About</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Engineering precision applied to enterprise product design.
        </motion.h2>

        <div className="mt-14 grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-5 text-base leading-relaxed text-black md:text-lg"
          >
            <p>
              I began in mechanical CAD, delivering structural and telecom
              projects for European and US clients. That discipline now shapes
              how I approach product design.
            </p>
            <p>
              At Siemens I design Siveillance Control and SiPass — enterprise
              security platforms used by operators worldwide — and support L3
              network operations for cRSP, IPsec, and Desigo connectivity.
            </p>
            <p>
              I work across design and engineering to ship interfaces that are
              clear, dependable, and built to scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-black/15 pt-5"
              >
                <div className="font-display text-4xl font-semibold text-black md:text-5xl">
                  {s.v}
                </div>
                <div className="mt-3 text-sm leading-snug text-black/70">
                  {s.l}
                </div>
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
    <div className="text-xs uppercase tracking-[0.3em] text-black">
      {children}
    </div>
  );
}
