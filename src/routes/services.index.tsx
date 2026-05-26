import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";
import hero from "@/assets/wed-mandap-decor.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding Services — Planning & Décor" },
      { name: "description", content: "Ammapalli Temple wedding services: muhurtam booking, mandap décor, Telugu catering, photography, bridal makeup, guest accommodation. Hyderabad." },
      { property: "og:title", content: "Ammapalli Temple Wedding Services — Satavahana Events" },
      { property: "og:description", content: "15+ premium wedding services by Hyderabad's trusted Ammapalli Temple wedding planners." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/services" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] -mt-20 overflow-hidden">
        <img src={hero} alt="Luxury floral mandap setup for Telugu temple wedding" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Our Services</div>
          <h1 className="font-display text-5xl md:text-6xl mt-6">Every ceremony, <span className="gold-gradient italic">crafted in detail</span></h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <section className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <p className="text-muted-foreground leading-relaxed">
          From the first ring ceremony to the final reception toast, Satavahana Events delivers fifteen specialised
          wedding services for Ammapalli Temple couples. Each service is designed for South Indian traditions,
          executed with luxury craftsmanship, and fully customisable to your family's wishes.
        </p>
      </section>

      {/* 16:9 service cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-card border border-border overflow-hidden hover-lift hover-zoom block"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={s.image} alt={`${s.title} for South Indian weddings`} loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
                <div className="absolute top-3 left-3 text-[10px] tracking-[0.3em] uppercase text-gold bg-background/80 px-3 py-1.5 rounded-sm">
                  Service {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl">{s.title}</h2>
                <p className="text-sm italic text-gold/80 mt-1">{s.tagline}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{s.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                  Discover <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32 text-center">
        <SectionHeading eyebrow="Need a custom plan?" title="Let's design a" highlight="bespoke proposal" intro="Mix and match services across packages or build a fully bespoke wedding around your family's traditions." />
        <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-10 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-10 hover:translate-y-[-2px] transition-transform">
          Request a consultation <ArrowUpRight className="size-4" />
        </EnquireButton>
      </section>
    </>
  );
}
