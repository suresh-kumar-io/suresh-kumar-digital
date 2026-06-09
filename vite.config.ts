import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// In Lovable's sandbox the nitro preset is forced to `cloudflare-module` so the
// preview keeps working. On Vercel (not a sandbox) the user-supplied preset is
// honored, producing a `.vercel/output/` build via Vercel's Build Output API.
export default defineConfig({
  nitro: { preset: "vercel" },
});
