import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      prerender: {
        enabled: true,
        routes: async () => {
          const staticRoutes = [
            "/",
            "/about",
            "/catering",
            "/contact",
            "/faq",
            "/gallery",
            "/packages",
            "/real-weddings",
            "/services",
            "/testimonials",
          ];
          const realWeddingRoutes = [
            "/real-weddings/sravani-karthik-ammapalli-temple-wedding",
            "/real-weddings/pravallika-rohan-destination-wedding",
            "/real-weddings/anusha-arjun-nri-wedding",
          ];
          const serviceRoutes = [
            "/services/temple-wedding-planning",
            "/services/wedding-catering",
            "/services/floral-decoration",
            "/services/mandap-decoration",
            "/services/wedding-photography",
            "/services/wedding-videography",
            "/services/bridal-makeup",
            "/services/guest-accommodation",
            "/services/wedding-entertainment",
            "/services/reception-planning",
            "/services/sound-lighting",
            "/services/haldi-mehendi-setup",
          ];
          return [...staticRoutes, ...realWeddingRoutes, ...serviceRoutes];
        },
      },
    }),
    viteReact(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
