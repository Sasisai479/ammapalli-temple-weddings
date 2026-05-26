import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { packages, faqs } from "@/lib/site";
import { FAQList } from "@/components/FAQList";
import { Check, ArrowUpRight, Crown } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";
import hero from "@/assets/wed-mandap-decor.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding Packages & Cost — Silver, Gold, Platinum" },
      { name: "description", content: "Ammapalli Temple wedding cost: Silver ₹2.5L (100 guests), Gold ₹5.5L (250 guests), Platinum ₹12L+ (3-day, 500 guests). Fully customisable." },
      { property: "og:title", content: "Ammapalli Temple Wedding Packages & Cost" },
      { property: "og:description", content: "Silver, Gold and Platinum Ammapalli Temple wedding packages by Satavahana Events." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/packages" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/packages" }],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] -mt-20 overflow-hidden">
        <img src={hero} alt="Luxury wedding mandap for Ammapalli Temple package" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 text-center px-6">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Packages</div>
          <h1 className="font-display text-5xl md:text-6xl mt-6">Temple wedding <span className="gold-gradient italic">packages</span></h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "Packages" }]} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <p className="text-muted-foreground leading-relaxed">
          Three carefully curated packages — each fully customisable. From an intimate ceremony with close family
          to a 3-day destination celebration, we'll tailor every element to your vision and budget.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div
            key={p.slug}
            className={`relative border ${p.featured ? "border-gold shadow-gold" : "border-border"} bg-card/40 p-8 md:p-10 flex flex-col hover-lift`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-4 py-1 text-[10px] tracking-[0.3em] uppercase">
                Most Popular
              </div>
            )}
            <Crown className={`size-7 ${p.featured ? "text-gold" : "text-gold/60"}`} />
            <h2 className="font-display text-3xl mt-4">{p.name}</h2>
            <p className="text-sm italic text-muted-foreground mt-1">{p.tagline}</p>
            <div className="mt-6">
              <div className="font-display text-4xl gold-gradient">{p.price}</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{p.guests}</div>
            </div>
            <ul className="space-y-3 mt-8 flex-1">
              {p.includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="size-4 text-gold mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <EnquireButton prefillService={p.name} className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-[0.3em] uppercase transition-transform hover:translate-y-[-2px] ${p.featured ? "bg-gold text-primary-foreground rounded-full shadow-gold" : "border border-gold/50 rounded-full text-gold hover:bg-gold/10"}`}>
              Enquire <ArrowUpRight className="size-4" />
            </EnquireButton>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Package FAQs</div>
          <h2 className="font-display text-4xl mt-6">Common questions</h2>
        </div>
        <div className="mt-10"><FAQList items={faqs.slice(0, 8)} /></div>
      </section>
    </>
  );
}
