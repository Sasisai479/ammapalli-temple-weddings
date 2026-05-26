import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getRealWedding, realWeddings, type WeddingSection } from "@/lib/realWeddings";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquireButton } from "@/components/EnquiryModal";
import { ArrowUpRight, Calendar, Users, Package, MapPin, CheckCircle2, type LucideIcon } from "lucide-react";

const BASE = "https://ammapallitempleweddings.com";

export const Route = createFileRoute("/real-weddings/$slug")({
  loader: ({ params }) => {
    const wedding = getRealWedding(params.slug);
    if (!wedding) throw notFound();
    return { wedding };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [], links: [], scripts: [] };
    const w = loaderData.wedding;
    const url = `${BASE}/real-weddings/${params.slug}`;
    const title = `${w.coupleNames}'s Ammapalli Temple Wedding — ${w.displayDate}`;
    return {
      meta: [
        { title: `${title} | Satavahana Events` },
        { name: "description", content: w.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: w.excerpt },
        { property: "og:image", content: w.heroImage },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: w.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: w.metaDescription,
            image: `${BASE}${w.heroImage}`,
            datePublished: w.date,
            author: { "@type": "Organization", name: "Satavahana Events" },
            publisher: {
              "@type": "Organization",
              name: "Satavahana Events",
              logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            about: {
              "@type": "Place",
              name: "Ammapalli Sri Sita Ramachandra Swamy Temple",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shamshabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Real Weddings", item: `${BASE}/real-weddings` },
              { "@type": "ListItem", position: 3, name: w.coupleNames, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: RealWeddingDetail,
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Story not found</h1>
      <Link to="/real-weddings" className="inline-block mt-6 text-gold text-xs tracking-[0.3em] uppercase">All real weddings →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="text-muted-foreground mt-3">{error.message}</p>
    </div>
  ),
});

function RealWeddingDetail() {
  const { wedding: w } = Route.useLoaderData();
  const related = realWeddings.filter((x) => x.slug !== w.slug).slice(0, 2);

  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] -mt-20 overflow-hidden">
        <img src={w.heroImage} alt={`${w.coupleNames} Ammapalli Temple wedding`} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/40 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 text-center px-6">
          <div className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">Real Wedding · {w.displayDate}</div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            {w.coupleNames}'s <span className="gold-gradient italic">Ammapalli Temple Wedding</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumbs items={[{ label: "Real Weddings", to: "/real-weddings" }, { label: w.coupleNames }]} />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {([
          { icon: Calendar, label: "Date", value: w.displayDate },
          { icon: Users, label: "Guests", value: `${w.guests}` },
          { icon: Package, label: "Package", value: w.package },
          { icon: MapPin, label: "From", value: w.city },
        ] as { icon: LucideIcon; label: string; value: string }[]).map((s) => (
          <div key={s.label} className="border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold">
              <s.icon className="size-3" /> {s.label}
            </div>
            <div className="mt-2 text-foreground">{s.value}</div>
          </div>
        ))}
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg text-muted-foreground leading-relaxed italic">{w.excerpt}</p>
        {w.sections.map((s: WeddingSection) => (
          <div key={s.heading} className="mt-12">
            <h2 className="font-display text-3xl text-foreground">{s.heading}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </article>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">
        {w.gallery.map((g: { src: string; alt: string }) => (
          <div key={g.src} className="aspect-[4/3] overflow-hidden border border-border">
            <img src={g.src} alt={g.alt} loading="lazy" className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl">Highlights</h2>
        <ul className="mt-6 space-y-3">
          {w.highlights.map((h: string) => (
            <li key={h} className="flex items-start gap-3 text-muted-foreground">
              <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" /> <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl">Ceremonies covered</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {w.ceremonies.map((c: string) => (
            <span key={c} className="text-xs tracking-widest uppercase border border-gold/40 text-gold rounded-full px-4 py-2">{c}</span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl">Vendor credits</h2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {w.vendorCredits.map((v: { role: string; name: string }) => (
            <div key={v.role} className="grid grid-cols-2 py-4 text-sm">
              <dt className="text-muted-foreground tracking-wide">{v.role}</dt>
              <dd className="text-foreground">{v.name}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <blockquote className="border-l-2 border-gold pl-6 italic text-xl text-foreground leading-relaxed">
          "{w.testimonial.quote}"
        </blockquote>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase text-gold">— {w.testimonial.attribution}</p>
      </section>

      <section className="bg-card/40 border-y border-border py-20 px-6 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Plan your own</div>
        <h2 className="font-display text-4xl md:text-5xl mt-6">
          Your <span className="gold-gradient italic">Ammapalli Temple</span> wedding
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Talk to Satavahana Events about your dates, guest count and rituals. Free 60-minute consultation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform">
            Start planning <ArrowUpRight className="size-4" />
          </EnquireButton>
          <Link to="/packages" className="inline-flex items-center gap-3 border border-gold/50 rounded-full text-gold px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-colors">
            See packages
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl mb-10">More real weddings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/real-weddings/$slug"
                params={{ slug: r.slug }}
                className="group border border-border bg-card/40 hover-lift overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={r.heroImage} alt={`${r.coupleNames} Ammapalli Temple wedding`} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{r.displayDate}</div>
                  <h3 className="font-display text-xl mt-2 group-hover:text-gold transition-colors">{r.coupleNames}</h3>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
