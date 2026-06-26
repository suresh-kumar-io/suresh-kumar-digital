## Portfolio content update

Update the portfolio with minimal UI changes, preserving the existing glass-card styling, gradient timeline, animations, and responsive layout.

### 1. Skills section (`src/components/sections/Skills.tsx`)
- Append a new skill card titled **Networking (L2/L3 Support)** to the `groups` array.
- Items: IPsec Tunneling, NAT, cRSP, BMSaaS, Desigo Solution, Network Troubleshooting.
- Reuse the same chip style, hover color transition, numbered label, and `motion.div` animation timing.

### 2. Experience section (`src/components/sections/Experience.tsx`)
- Add two new timeline cards **under Siemens** as current projects alongside the existing UI/UX Designer role.
- Place them immediately after the existing Siemens card so they read as part of the same tenure.
- Card 1:
  - **Role:** Engineering Solutions Projects
  - **Company/Location:** Siemens · Chennai, India
  - **When:** Current
  - **Highlights:** graphics commissioning for Siveillance Control using PISM & AutoCAD; alarm/sensor visualization; parametric modeling; 3D BIM integration; European standards compliance; AR-enabled 3D BIM fire-protection concept; visualization engineering, attribute configuration, KML generation, PDF export.
- Card 2:
  - **Role:** cRSP Services – L2/L3 Network Support
  - **Company/Location:** Siemens · Remote / EMEA-US
  - **When:** Current
  - **Highlights:** self-trained to L3 within 60 days; IPsec, cRSP, BMSaaS, Desigo connectivity; 50+ complex EMEA/US L3 tickets with zero escalations; Scalance S615 onboarding during FortiGate migration; IPsec, cRSP, DCCaaS, Desigo support; troubleshooting playbooks and automation scripts; NAT, secure connectivity, network diagnostics, customer support.
- No changes to timeline markup, glass cards, bullet styling, or animation parameters.

### Verification
- Run the dev build to confirm the new skill and experience cards render without layout or TypeScript errors.
- Take a quick scroll/screenshot check to confirm the timeline remains visually balanced on desktop and mobile.