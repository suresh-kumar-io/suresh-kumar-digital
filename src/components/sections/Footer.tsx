import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-px origin-left bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent"
        />
        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Suresh Kumar · All rights reserved
          </div>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-sm text-muted-foreground"
          >
            Designed with <span className="text-gradient-accent">passion</span> by Suresh Kumar
          </motion.div>
          <a href="#hero" className="rounded-full glass px-4 py-1.5 text-xs text-muted-foreground hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-t from-[var(--electric)]/10 to-transparent blur-3xl" />
    </footer>
  );
}
