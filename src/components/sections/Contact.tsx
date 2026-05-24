import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "./About";
import { MagneticButton } from "../MagneticButton";

const channels = [
  { l: "Email", v: "sureshmanohar5597@gmail.com", h: "mailto:sureshmanohar5597@gmail.com" },
  { l: "Phone", v: "+91 87784 92332", h: "tel:+918778492332" },
  { l: "LinkedIn", v: "linkedin.com/in/sureshkumar", h: "#" },
  { l: "Behance", v: "behance.net/sureshkumar", h: "#" },
  { l: "Dribbble", v: "dribbble.com/sureshkumar", h: "#" },
];

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ne: Record<string, string> = {};
    if (!form.name.trim()) ne.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) ne.email = "Valid email required";
    if (form.message.trim().length < 10) ne.message = "At least 10 characters";
    setErr(ne);
    if (Object.keys(ne).length) return;
    setState("sending");
    setTimeout(() => { setState("sent"); setForm({ name: "", email: "", message: "" }); }, 1200);
    setTimeout(() => setState("idle"), 3500);
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>06 · Contact</SectionLabel>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Let's build <span className="text-gradient-accent">something exceptional</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              I'm open to product design roles, freelance collaborations and conversations about
              enterprise UX. Reach out — I reply within 24 hours.
            </p>

            <div className="mt-10 space-y-2">
              {channels.map((c, i) => (
                <motion.a
                  key={c.l}
                  href={c.h}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex items-center justify-between border-b border-white/5 py-3 transition-colors hover:border-[var(--cyan)]/50"
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</span>
                  <span className="flex items-center gap-2 text-sm text-foreground transition-transform group-hover:-translate-x-1">
                    {c.v}
                    <span className="text-[var(--cyan)] transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton href="/Suresh_Kumar_Resume.docx" download>Download Resume ↓</MagneticButton>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass-strong relative space-y-5 rounded-3xl p-8"
          >
            <Field label="Your name" err={err.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                placeholder="Jane Recruiter"
              />
            </Field>
            <Field label="Email" err={err.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Message" err={err.message}>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about the role or project..."
              />
            </Field>

            <motion.button
              type="submit"
              disabled={state !== "idle"}
              whileTap={{ scale: 0.97 }}
              className="relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)] disabled:opacity-80"
            >
              <motion.span
                key={state}
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2"
              >
                {state === "idle" && <>Send message →</>}
                {state === "sending" && <>Sending<span className="anim-pulse-glow">...</span></>}
                {state === "sent" && <>✓ Message sent</>}
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, err, children }: { label: string; err?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        {err && <span className="text-[10px] text-[var(--destructive)]">{err}</span>}
      </div>
      <div className={`rounded-xl border bg-white/[0.03] px-4 py-3 transition-colors focus-within:border-[var(--cyan)]/60 ${err ? "border-[var(--destructive)]/50" : "border-white/10"}`}>
        {children}
      </div>
    </label>
  );
}
