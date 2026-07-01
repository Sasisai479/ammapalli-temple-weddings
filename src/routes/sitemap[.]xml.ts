import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { realWeddings } from "@/lib/realWeddings";

interface SitemapEntry {
  path: string;
  changefreq?: string;
  priority?: string;
}

const BASE_URL = "https://ammapallitempleweddings.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/catering", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/real-weddings", changefreq: "monthly", priority: "0.8" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
          ...realWeddings.map((w) => ({
            path: `/real-weddings/${w.slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
