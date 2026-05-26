import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQList } from "@/components/FAQList";
import { Check, ArrowUpRight } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";
import catering from "@/assets/wed-catering.jpg";
import floral from "@/assets/wed-catering-buffet.png";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding Catering — Telangana & Andhra Menus" },
      { name: "description", content: "South Indian wedding catering for Ammapalli Temple — Telangana, Andhra & multi-cuisine menus, live counters, FSSAI-certified. 100 to 2,000+ guests." },
      { property: "og:title", content: "Ammapalli Temple Wedding Catering — Satavahana Events" },
      { property: "og:description", content: "Telangana, Andhra & multi-cuisine wedding catering in Hyderabad." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/catering" },
      { property: "og:image", content: catering },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/catering" }],
  }),
  component: Catering,
});

const menus = [
  { t: "South Indian Wedding Catering", d: "Idli, dosa, vada, sambar, coconut chutney, filter coffee — the classics done with care." },
  { t: "Traditional Telangana Food", d: "Pulihora, gongura pachadi, sakinalu, bobbatlu, garelu, sarva pindi — heritage Telangana flavours." },
  { t: "Andhra Wedding Meals", d: "Spicy Andhra-style fish fry, gongura mutton, pesarattu, biryani, avakaya — fiery and flavourful." },
  { t: "Live Counters", d: "Chaat, dosa, pasta, mocktail and pan stations served fresh through the event." },
  { t: "Sweets & Desserts", d: "Bobbatlu, payasam, kaja, mysore pak, gulab jamun, ice cream counters, kulfi." },
  { t: "Breakfast Menu", d: "Tiffin spreads with hot poori, upma, pongal, vada, pesarattu and chutneys." },
  { t: "Reception Dinner", d: "Multi-cuisine — Indian, Continental, Chinese, Tandoor, with a curated bar service." },
  { t: "Vegetarian Wedding Catering", d: "Pure-veg menus that satisfy traditionalists and modern palates alike." },
];

const faqs = [
  { q: "How much does wedding catering cost in Hyderabad?", a: "Pricing typically ranges from ₹450 to ₹1,800 per plate depending on menu complexity, live counters and service style. We offer transparent per-plate quotes after a tasting." },
  { q: "Do you serve traditional Telangana wedding food?", a: "Yes — pulihora, gongura pachadi, bobbatlu, garelu, ariselu, sarva pindi and the full Telangana wedding spread are part of our signature menus." },
  { q: "Can you cater for non-vegetarian receptions?", a: "Yes — chicken biryani, mutton curry, fish fry, kebabs and Andhra non-veg specialities are available with separate service stations." },
  { q: "Is your catering FSSAI-certified?", a: "Yes — our central kitchen and all event setups are FSSAI-licensed. Hygiene and food safety are non-negotiable." },
  { q: "How many guests can you cater for?", a: "We scale from 100 to 2,000+ guests with ease. Larger events use multiple chef stations and service teams." },
  { q: "Do you offer menu tasting?", a: "Yes — we offer a complimentary tasting session for all confirmed bookings to finalise your menu." },
];

function Catering() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] -mt-20 overflow-hidden">
        <img src={catering} alt="Traditional South Indian wedding catering on banana leaves" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 text-center px-6">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Catering Services</div>
          <h1 className="font-display text-5xl md:text-6xl mt-6">A Telugu feast, <span className="gold-gradient italic">served with grace</span></h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "Catering" }]} />
      </div>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-muted-foreground leading-relaxed text-center">
          Wedding catering is the soul of a Telugu celebration. Satavahana Events brings together master chefs from Telangana,
          Andhra and across India to serve your guests authentic, lovingly prepared food — from traditional banana-leaf bhojanam
          at the temple to grand multi-cuisine reception dinners.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {menus.map((m) => (
          <div key={m.t} className="bg-background p-8 hover-lift">
            <Check className="size-5 text-gold" />
            <h3 className="font-display text-xl mt-4">{m.t}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-card/40 border-y border-border py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={floral} alt="Wedding catering presentation with floral décor" loading="lazy" width={1600} height={900} className="aspect-video object-cover hover-zoom" />
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-gold">Catering Packages</div>
            <h2 className="font-display text-4xl mt-4">From intimate to <span className="gold-gradient italic">imperial</span></h2>
            <ul className="mt-6 space-y-4 text-foreground/90">
              <li className="flex items-start gap-3"><Check className="size-4 text-gold mt-1" /> Temple lunch packages from ₹450/plate</li>
              <li className="flex items-start gap-3"><Check className="size-4 text-gold mt-1" /> Premium reception menus from ₹950/plate</li>
              <li className="flex items-start gap-3"><Check className="size-4 text-gold mt-1" /> Live counters & chef stations from ₹250/plate</li>
              <li className="flex items-start gap-3"><Check className="size-4 text-gold mt-1" /> Bar & beverage services available separately</li>
            </ul>
            <EnquireButton prefillService="Wedding Catering Services" className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-8 hover:translate-y-[-2px] transition-transform">
              Request quote <ArrowUpRight className="size-4" />
            </EnquireButton>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Catering FAQs</div>
          <h2 className="font-display text-4xl mt-6">Common questions</h2>
        </div>
        <div className="mt-10"><FAQList items={faqs} /></div>
      </section>
    </>
  );
}
