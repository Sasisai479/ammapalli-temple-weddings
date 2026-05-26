import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";
import { ArrowUpRight, Check } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQList } from "@/components/FAQList";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Ammapalli Temple Weddings | Hyderabad` },
          { name: "description", content: `${loaderData.service.description.slice(0, 155)}` },
          { property: "og:title", content: `${loaderData.service.title} — Ammapalli Temple Weddings` },
          { property: "og:description", content: loaderData.service.description },
          { property: "og:image", content: loaderData.service.image },
          { property: "og:url", content: `https://ammapallitempleweddings.com/services/${params.slug}` },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `https://ammapallitempleweddings.com/services/${params.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: loaderData.service.title,
              description: loaderData.service.description,
              provider: { "@type": "LocalBusiness", name: "Ammapalli Temple Weddings" },
              areaServed: "Hyderabad, Telangana, India",
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: loaderData.service.faqs.map((f: {q: string; a: string}) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-5xl">Service not found</h1>
      <Link to="/services" className="inline-block mt-6 text-gold text-xs tracking-[0.3em] uppercase">← All services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] -mt-20 overflow-hidden">
        <img src={service.image} alt={`${service.title} — ${service.tagline}`} width={1600} height={900} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 max-w-7xl mx-auto pt-24">
          <h1 className="font-display text-5xl md:text-7xl">{service.title}</h1>
          <p className="font-display italic text-gold text-2xl mt-3">{service.tagline}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.title }]} />
      </div>

      {/* OVERVIEW + INCLUDED */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Overview</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">About this service</h2>
          <p className="text-lg leading-relaxed text-foreground/90">{service.description}</p>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Whether you are planning an intimate temple ceremony at Ammapalli or a multi-day Telugu wedding spanning haldi,
            mehendi, sangeet, muhurtam and reception — our {service.title.toLowerCase()} service is engineered to scale with your
            vision. Every detail is overseen by a dedicated planner, with vendors and crew vetted from our 12-year network.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">What's included</div>
          <ul className="space-y-4">
            {service.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="size-4 text-gold mt-0.5 shrink-0" /> {h}
              </li>
            ))}
          </ul>
          <EnquireButton prefillService={service.title} className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-6 py-3 text-xs tracking-[0.3em] uppercase shadow-gold w-full justify-center hover:translate-y-[-2px] transition-transform">
            Enquire now <ArrowUpRight className="size-4" />
          </EnquireButton>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Benefits</div>
          <h2 className="font-display text-3xl md:text-4xl mt-4">Why choose this service</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {service.benefits.map((b: string) => (
              <div key={b} className="flex items-start gap-4 p-6 border border-border bg-background hover-lift">
                <Check className="size-5 text-gold mt-1 shrink-0" />
                <p className="text-foreground/90 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-xs tracking-[0.4em] uppercase text-gold">Our Process</div>
        <h2 className="font-display text-3xl md:text-4xl mt-4">From enquiry to celebration</h2>
        <div className="grid md:grid-cols-4 gap-px bg-border mt-10">
          {service.process.map((p: {step: string; detail: string}, i: number) => (
            <div key={p.step} className="bg-background p-8">
              <div className="font-display text-5xl gold-gradient">0{i + 1}</div>
              <h3 className="font-display text-xl mt-4">{p.step}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-xs tracking-[0.4em] uppercase text-gold">Gallery</div>
        <h2 className="font-display text-3xl md:text-4xl mt-4">A visual reference</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
          {[service.image, ...others.map((o) => o.image)].slice(0, 6).map((img, i) => (
            <div key={i} className="aspect-square relative overflow-hidden hover-zoom">
              <img src={img} alt={`${service.title} reference ${i + 1}`} loading="lazy" width={800} height={800} className="absolute inset-0 size-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-xs tracking-[0.4em] uppercase text-gold">FAQ</div>
        <h2 className="font-display text-3xl md:text-4xl mt-4">Common questions</h2>
        <div className="mt-8">
          <FAQList items={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-border">
        <h2 className="font-display text-4xl md:text-5xl">Ready to plan your <span className="gold-gradient italic">{service.title.toLowerCase()}</span>?</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Schedule a complimentary consultation with our planning atelier.</p>
        <EnquireButton prefillService={service.title} className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-10 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-8 hover:translate-y-[-2px] transition-transform">
          Book consultation <ArrowUpRight className="size-4" />
        </EnquireButton>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-8">Related services</div>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group bg-card border border-border overflow-hidden hover-lift hover-zoom">
              <div className="aspect-video relative overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="italic text-gold/80 text-sm mt-1">{s.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                  Explore <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
