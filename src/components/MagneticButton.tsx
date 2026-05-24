import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  download?: boolean;
  onClick?: () => void;
};

export function MagneticButton({ children, href, variant = "primary", download, onClick }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] text-[var(--primary-foreground)] glow"
      : "glass text-foreground hover:bg-white/10";

  const Inner = (
    <motion.span style={{ x: sx, y: sy }} className="relative flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        onMouseMove={move}
        onMouseLeave={reset}
        className={`${base} ${styles}`}
      >
        {Inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${styles}`}
    >
      {Inner}
    </motion.button>
  );
}
