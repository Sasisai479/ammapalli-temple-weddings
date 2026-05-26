import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { testimonials, stats } from "@/lib/site";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding Reviews | Satavahana Events" },
      { name: "description", content: "Reviews from couples who chose Satavahana Events for their Ammapalli Temple wedding — Hyderabad, Bengaluru, USA, UK and Gulf NRI families." },
      { property: "og:title", content: "Ammapalli Temple Wedding Reviews" },
      { property: "og:description", content: "Stories of happy unions from real couples at Ammapalli Temple." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumbs items={[{ label: "Testimonials" }]} />
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Testimonials</div>
        <h1 className="font-display text-5xl md:text-6xl mt-6">Stories of <span className="gold-gradient italic">happy unions</span></h1>
        <div className="flex items-center justify-center gap-1 mt-6">
          {[1,2,3,4,5].map((i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
          <span className="text-muted-foreground text-sm tracking-widest uppercase ml-3">4.9 / 5 · 200+ reviews</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 text-center">
              <div className="font-display text-4xl gold-gradient">{s.value}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/40 border-y border-border py-24 px-6 my-16">
        <TestimonialSlider />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="border border-border p-8 bg-card/40 hover-lift">
            <Quote className="size-6 text-gold/60" />
            <p className="font-display text-xl leading-relaxed mt-4">"{t.quote}"</p>
            <div className="mt-6 text-gold tracking-widest uppercase text-xs">{t.name}</div>
            <div className="text-muted-foreground text-xs mt-1">{t.location}</div>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl">Be our next <span className="gold-gradient italic">happy couple</span></h2>
        <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-8 hover:translate-y-[-2px] transition-transform">
          Book a consultation <ArrowUpRight className="size-4" />
        </EnquireButton>
      </section>
    </>
  );
}
