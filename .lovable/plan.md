# Case Study Section Upgrade

Add a metrics row above every case-study image, make the carousel drag/swipe-navigable, and add a premium zoom lightbox.

## 1. Stats row (above the image)

Each of the 5 case studies gets a 4-metric row rendered directly above its image/carousel:

- Role — UI/UX Designer
- Product Stage — 0 → 1
- NPS Score — 9.5
- Revenue Growth — +23%

Layout: 2x2 grid on mobile, 4 columns from `sm:` up. Small uppercase tracked label (matching the existing `text-[10px] uppercase tracking-[0.3em] text-black/60` style), bold black value below. Hairline top border and consistent vertical padding so it reads as part of the card, left-aligned like the rest of the site.

Values live per project in the existing `projects` array so any one can be edited later without touching layout.

## 2. Carousel: drag + swipe

- Pointer/touch drag on the slide track: follow the finger, then commit to next/previous past a ~15% width threshold, otherwise snap back.
- Keeps existing prev/next buttons, dots, autoplay, hover-pause, and preloading.
- Drag pauses autoplay; a committed drag resets the autoplay timer.
- Single-image cards stay static but become clickable for the lightbox.

## 3. Lightbox

- Clicking any case-study image (single or carousel slide) opens a full-screen modal with the image centered, scaled to fit the viewport (`max-h-[90vh] max-w-[92vw]`, `object-contain`).
- Backdrop dims and blurs the page behind it.
- Page scroll locked while open.
- Close via X button, ESC, backdrop click, and swipe-down on mobile.
- Carousel images in the lightbox keep prev/next + arrow-key navigation.

## 4. Motion

- Open: backdrop fades in, image scales 95% → 100% with slight upward motion.
- Close: reverse, image back to 95%.
- 250–350ms ease-out, opacity/transform only (GPU-friendly), blur animated.
- All motion is disabled/reduced when the user prefers reduced motion.

## Technical notes

- Work stays in `src/components/sections/Projects.tsx` plus a small `Lightbox` component; motion via the already-installed `framer-motion`.
- Drag handled with `motion.div` `drag="x"` + `onDragEnd` (no new dependency).
- Accessibility: modal gets `role="dialog"`, `aria-modal`, focus moved to the close button on open and restored on close; images keep descriptive alt text; reduced-motion respected via `useReducedMotion()`.
