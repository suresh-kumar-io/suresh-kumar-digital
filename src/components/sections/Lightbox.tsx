import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ images, index, alt, onClose, onIndexChange }: Props) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onIndexChange]);

  const duration = reduce ? 0 : 0.3;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${alt} — enlarged view`}
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration, ease: "easeOut" }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 will-change-[opacity]"
      >
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} — ${index + 1} of ${images.length}`}
          drag={reduce ? false : "y"}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.35}
          onDragEnd={(_, info) => {
            if (info.offset.y > 120) onClose();
          }}
          onClick={(e) => e.stopPropagation()}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration, ease: "easeOut" }}
          className="max-h-[90vh] max-w-[92vw] rounded-lg bg-[#DFDFD9] object-contain shadow-2xl will-change-transform"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange((index - 1 + images.length) % images.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-lg text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange((index + 1) % images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-lg text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              ›
            </button>
          </>
        )}

        <button
          ref={closeRef}
          type="button"
          aria-label="Close image"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-4 top-4 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
