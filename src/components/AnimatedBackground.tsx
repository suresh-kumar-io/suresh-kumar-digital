import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.2_0.06_265/0.6),transparent_60%)]" />
      <motion.div
        className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full anim-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 230 / 0.35), transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full anim-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.3), transparent 70%)", animationDelay: "2s" }}
      />
      <motion.div
        className="absolute top-1/2 left-0 h-[380px] w-[380px] rounded-full anim-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.16 200 / 0.22), transparent 70%)", animationDelay: "4s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}
