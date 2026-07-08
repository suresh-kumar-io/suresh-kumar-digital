import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-end px-6 pb-24 pt-40 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-black/70"
        >
          Portfolio — 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-black sm:text-7xl md:text-[8rem]"
        >
          Suresh Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-black md:text-xl"
        >
          Senior UI/UX Designer and L3 Network Engineer at Siemens. I design
          enterprise security software and support mission-critical network
          operations across EMEA and the US.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-8 text-sm text-black"
        >
          <a href="#work" className="font-medium underline underline-offset-4">
            View selected work
          </a>
          <a href="#contact" className="opacity-70 hover:opacity-100">
            Get in touch
          </a>
          <a
            href="/Suresh_Kumar_Resume.docx"
            download
            className="opacity-70 hover:opacity-100"
          >
            Download résumé
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3"
        >
          <Meta label="Based in" value="Chennai, India" />
          <Meta label="Currently" value="Siemens · Design & Networks" />
          <Meta label="Contact" value="sureshmanohar5597@gmail.com" />
        </motion.div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-left">
      <div className="text-[10px] uppercase tracking-[0.3em] text-black/60">
        {label}
      </div>
      <div className="mt-2 text-sm text-black">{value}</div>
    </div>
  );
}
