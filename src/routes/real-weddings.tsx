import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquireButton } from "@/components/EnquiryModal";
import { realWeddings } from "@/lib/realWeddings";
import { ArrowUpRight, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/real-weddings")({
  head: () => ({
    meta: [
      { title: "Real Ammapalli Temple Weddings — Stories & Photos | Satavahana Events" },
      { name: "description", content: "Real Ammapalli Temple wedding stories — couples, ceremonies, mandap décor, guest counts and budgets. See exactly how we plan Telugu temple weddings at Ammapalli Sri Sita Ramachandra Swamy Temple, Shamshabad." },
      { property: "og:title", content: "Real Ammapalli Temple Weddings — Stories & Photos" },
      { property: "og:description", content: "Real Ammapalli Temple wedding stories — couples, mandaps, ceremonies and guest counts." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/real-weddings" },
      { property: "og:image", content: realWeddings[0]?.heroImage },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/real-weddings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Real Ammapalli Temple Weddings",
          url: "https://ammapallitempleweddings.com/real-weddings",
          hasPart: realWeddings.map((w) => ({
            "@type": "Article",
            headline: `${w.coupleNames} — Ammapalli Temple Wedding`,
            datePublished: w.date,
            url: `https://ammapallitempleweddings.com/real-weddings/${w.slug}`,
          })),
        }),
      },
    ],
  }),
  component: RealWeddingsIndex,
});

function RealWeddingsIndex() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumbs items={[{ label: "Real Weddings" }]} />
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <SectionHeading
          eyebrow="Real Weddings"
          title="Real Ammapalli Temple"
          highlight="weddings"
          intro="Couples, ceremonies, mandap décor and guest counts — exactly how we've planned Telugu temple weddings at Ammapalli Sri Sita Ramachandra Swamy Temple."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {realWeddings.map((w) => (
          <Link
            key={w.slug}
            to="/real-weddings/$slug"
            params={{ slug: w.slug }}
            className="group border border-border bg-card/40 hover-lift overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={w.heroImage}
                alt={`${w.coupleNames} Ammapalli Temple wedding`}
                loading="lazy"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{w.displayDate}</div>
              <h2 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">{w.coupleNames}</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{w.excerpt}</p>
              <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-3" /> {w.city}</span>
                <span className="inline-flex items-center gap-1.5"><Users className="size-3" /> {w.guests} guests</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                Read story <ArrowUpRight className="size-3" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-card/40 border-y border-border py-24 px-6 text-center">
        <SectionHeading eyebrow="Plan yours" title="Your Ammapalli Temple" highlight="wedding story" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform">
            Start planning <ArrowUpRight className="size-4" />
          </EnquireButton>
        </div>
      </section>
    </>
  );
}
