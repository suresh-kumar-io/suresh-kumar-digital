# Premium Minimalist Redesign

Convert the current dark, gradient-heavy portfolio into a light, editorial, monochrome layout on a warm neutral canvas. All text pure black, all content left-aligned, all decorative gradients/glows/animated backgrounds removed.

## 1. Design tokens (`src/styles.css`)

- Background `--background: #DFDFD9`; foreground `--foreground: #000000`.
- Muted foreground: `#000000` at 65% opacity for secondary copy (still reads as black, only softer).
- Card / popover / secondary: same `#DFDFD9` (no raised surfaces).
- Border: `#000000` at 12% for hairline dividers.
- Remove `--cyan`, `--electric`, `--violet` accent usage (keep vars but map to black so any stray reference stays monochrome).
- Font stack: load **Inter** (body) + **Geist** (display) via `<link>` tags in `src/routes/__root.tsx` head; set `--font-sans: "Inter"`, `--font-display: "Geist"`.
- Delete gradient/glow utilities' visual effect: `.glass`, `.glass-strong`, `.text-gradient`, `.text-gradient-accent`, `.grid-bg`, `.glow`, `.noise`, `.shimmer`, `.anim-gradient` are flattened to transparent / plain black text / hairline border only. Keep class names so components don't break.
- Custom scrollbar: solid black thumb on neutral track.

## 2. Global structure

- Remove `AnimatedBackground` and `CursorGlow` from the root render (visual clutter; not aligned with minimalist brief).
- Keep `ScrollProgress` as a 1px black bar.
- Navbar: left-aligned wordmark + right-aligned nav links, no glass; bottom hairline border.

## 3. Section-by-section rework

All sections: max-width container, left padding aligned to a single grid gutter, **no centered text anywhere**, no card gradients. Headings use Geist, body uses Inter. Section labels become small uppercase black tracking-wide.

- **Hero** (`Hero.tsx`): left-aligned name "Suresh Kumar", role line, 2-line positioning statement, single primary text-link CTA. Remove floating shapes / gradient orbs.
- **About**: left column heading, right column paragraph → convert to single left-aligned column with generous line-height.
- **Skills**: left-aligned list groups; numbered index + group title + comma-separated or chip items with hairline black border, no fill.
- **Projects / Case studies**: switch grid to a stacked **image-left / content-right** two-column layout (single column on mobile). Consistent `aspect-[4/3]` image frame, `object-cover` with neutral `#DFDFD9` letterbox where needed. Right column: eyebrow (year · tag), title, then three short labeled lines — **Challenge**, **Solution**, **Key Result** — each 1–2 sentences, rewritten from existing problem/process/solution copy. Remove modal gradient backdrop; modal becomes a plain sheet on `#DFDFD9` with hairline border.
- **Experience**: drop the center timeline rail and dot glow; use a left-aligned list — role, company · location, dates, bullets. Hairline divider between entries.
- **Certifications**: left-aligned list with issuer + year, hairline dividers.
- **Contact**: left-aligned heading + single email link + secondary links (LinkedIn, resume). No card.
- **Footer**: left-aligned; name, role, copyright, small nav; hairline top border.

## 4. Copy rewrite (professional, outcome-focused)

Pass through every section's strings and tighten:
- Hero: "Suresh Kumar — Senior UI/UX Designer & Network Engineer. Designing enterprise security software and supporting L3 network operations at Siemens."
- Project entries rewritten to Challenge / Solution / Key Result, 2–4 lines total, business-outcome framing (e.g., "Reduced operator decision time", "Zero escalations across 50+ L3 tickets", "Patent-filed AR concept"). No marketing filler.
- Skills / About tightened to concise factual statements.
- Experience bullets already factual — light edit for parallel structure, keep the two new Siemens roles and existing content intact.

## 5. Responsiveness & a11y

- Single-column stack under `md`; two-column (image-left / text-right) from `md` up in Projects and About.
- Maintain ≥ 16px body, ≥ 1.5 line-height, sufficient contrast (pure black on `#DFDFD9` is ~13:1).
- Preserve existing scroll offsets and section anchors.

## 6. Files touched

- `src/styles.css` — tokens, utilities flattened, fonts.
- `src/routes/__root.tsx` — font `<link>` tags, remove animated background/cursor glow mounts.
- `src/components/Navbar.tsx` — restyle.
- `src/components/sections/Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Experience.tsx`, `Certifications.tsx`, `Contact.tsx`, `Footer.tsx` — layout + copy.
- `src/components/AnimatedBackground.tsx`, `CursorGlow.tsx` — leave files, just stop rendering them.

## Out of scope

- No new routes, no backend, no new images, no motion library changes (Framer Motion stays; animations reduced to simple fade/translate).
- Existing project images reused as-is.

Confirm and I'll implement.