import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StatsCounter } from "@/components/StatsCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";
import hero from "@/assets/wed-ammapalli.jpg";
import couple from "@/assets/wed-couple.jpg";
import rituals from "@/assets/wed-temple-ceremony.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ammapalli Temple Weddings | Satavahana Events" },
      { name: "description", content: "Satavahana Events — 12+ years, 500+ weddings, 200+ ceremonies at Ammapalli Sri Sita Ramachandra Swamy Temple, Shamshabad. Hyderabad's trusted planners." },
      { property: "og:title", content: "About Ammapalli Temple Weddings — Satavahana Events" },
      { property: "og:description", content: "12 years. 500+ weddings. Hyderabad's trusted Ammapalli Temple wedding planners." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/about" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] -mt-20 overflow-hidden">
        <img src={hero} alt="Ammapalli Temple silhouette at golden hour" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 text-center px-6">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">About Us</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6">Designing weddings <span className="gold-gradient italic">since 2013</span></h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] relative overflow-hidden hover-zoom">
          <img src={couple} alt="Telugu wedding couple in traditional attire" width={1600} height={2000} loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Our Story</div>
          <h2 className="font-display text-4xl mt-6">A family of <span className="gold-gradient italic">wedding artisans</span></h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Satavahana Events was founded in 2013 with a simple promise — to plan Telugu weddings the way our own families would.
            What began as a two-person studio in Jubilee Hills has grown into Hyderabad's most trusted name in temple weddings,
            with a team of 40+ planners, designers and on-ground crew.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Our specialisation is the Ammapalli Sri Sita Ramachandra Swamy Temple — a centuries-old shrine that holds deep
            significance for South Indian families. We've planned over 200 weddings here, building unmatched familiarity with
            the temple's rituals, muhurtam timings and infrastructure.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Every wedding we touch is an opportunity to honour tradition while delivering uncompromising luxury. From the first
            consultation to the final farewell, we are quietly relentless about the details — so your family can simply be present.
          </p>
        </div>
      </section>

      <section className="bg-card/40 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="By the numbers" title="A decade of" highlight="trusted celebrations" />
          <div className="mt-16"><StatsCounter /></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="border border-border p-10 bg-background hover-lift">
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Our Mission</div>
          <h3 className="font-display text-3xl mt-4">To make sacred weddings effortless</h3>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            We believe a wedding should be experienced, not managed. Our mission is to absorb every operational worry
            so couples and families can be fully present for the rituals that matter.
          </p>
        </div>
        <div className="border border-border p-10 bg-background hover-lift">
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Our Vision</div>
          <h3 className="font-display text-3xl mt-4">India's most loved temple wedding studio</h3>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            To be the first name South Indian families think of when they imagine a wedding rooted in tradition,
            executed with quiet luxury, and remembered for generations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Why Choose Us" title="The Satavahana" highlight="difference" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {[
            { t: "Temple-trained team", d: "Years of dedicated experience at Ammapalli — we know every priest, every protocol, every shortcut." },
            { t: "Telugu at heart", d: "Native fluency in Telugu, deep familiarity with Smartha and Vaishnava traditions." },
            { t: "Single-window planning", d: "One planner. One contract. One team. Zero handover gaps." },
            { t: "Transparent pricing", d: "Itemised proposals, no hidden costs, flexible packages." },
            { t: "NRI-friendly", d: "Remote-first communication, video walk-throughs, live streaming." },
            { t: "End-to-end production", d: "Décor, catering, photography, accommodation, entertainment — all in-house." },
          ].map((f) => (
            <div key={f.t} className="border border-border p-8 bg-card/40 hover-lift">
              <CheckCircle2 className="size-6 text-gold" />
              <h4 className="font-display text-xl mt-4">{f.t}</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 py-24 my-12">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-radial)" }} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={rituals} alt="Temple wedding planning at Ammapalli" loading="lazy" width={1600} height={900} className="aspect-video object-cover hover-zoom" />
          <div>
            <h2 className="font-display text-4xl">Ready to begin <span className="gold-gradient italic">your story?</span></h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Schedule a complimentary planning consultation with our team.</p>
            <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-8 hover:translate-y-[-2px] transition-transform">
              Book consultation <ArrowUpRight className="size-4" />
            </EnquireButton>
          </div>
        </div>
      </section>
    </>
  );
}
