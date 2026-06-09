import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Prerender "/" so dist/client contains an index.html for static deploys (Vercel).
export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: false,
      retryCount: 2,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
