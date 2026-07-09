import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const channels = [
  { l: "Email", v: "sureshmanohar5597@gmail.com", h: "mailto:sureshmanohar5597@gmail.com" },
  { l: "Phone", v: "+91 87784 92332", h: "tel:+918778492332" },
  { l: "LinkedIn", v: "linkedin.com/in/sureshkumarm539", h: "https://www.linkedin.com/in/sureshkumarm539" },
  { l: "Résumé", v: "Download PDF", h: "/Suresh_Kumar_Resume.docx" },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-black/10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>06 — Contact</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-6xl md:text-7xl"
        >
          Available for UI/UX design roles.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-black md:text-lg">
          Open to UX research, UI designer, and product designer positions —
          full-time or freelance. Replies within 24 hours.
        </p>

        <ul className="mt-14 max-w-3xl">
          {channels.map((c, i) => (
            <motion.li
              key={c.l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-t border-black/15"
            >
              <a
                href={c.h}
                className="flex items-baseline justify-between gap-6 py-5 text-black"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-black/60">
                  {c.l}
                </span>
                <span className="text-right text-sm md:text-base">
                  {c.v}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
