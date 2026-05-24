import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.5 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: sx, y: sy,
        background: "radial-gradient(circle, oklch(0.72 0.2 230 / 0.12), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
