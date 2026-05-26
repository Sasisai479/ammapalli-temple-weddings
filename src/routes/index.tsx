import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/wed-temple-ceremony.jpg";
import heroNight from "@/assets/hero-ammapalli-night.jpg";
import heroMorning from "@/assets/hero-ammapalli-morning.jpg";
import ammapalli from "@/assets/wed-ammapalli.jpg";
import couple from "@/assets/wed-couple.jpg";
import catering from "@/assets/wed-catering.jpg";
import floral from "@/assets/wed-floral.jpg";
import mandap from "@/assets/wed-mandap-decor.jpg";
import bridal from "@/assets/svc-bridal.png";

import { services } from "@/lib/services";
import { faqs, SITE } from "@/lib/site";
import { ArrowUpRight, Sparkles, Heart, Crown, CheckCircle2, Star, MapPin, Phone, Instagram } from "lucide-react";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { StatsCounter } from "@/components/StatsCounter";
import { FAQList } from "@/components/FAQList";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquireButton } from "@/components/EnquiryModal";

const heroSlides = [
  { src: heroNight, alt: "Ammapalli Temple wedding mandap illuminated at night by Satavahana Events" },
  { src: heroMorning, alt: "Ammapalli Temple wedding floral mandap decoration in morning light by Satavahana Events" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Weddings — #1 Planner, Shamshabad Hyderabad" },
      { name: "description", content: "Hyderabad's #1 Ammapalli Temple wedding planners. 500+ weddings, 12+ years. Muhurtam, mandap, catering, photography. Call +91 88855 52388." },
      { property: "og:title", content: "Ammapalli Temple Weddings — Satavahana Events Hyderabad" },
      { property: "og:description", content: "Sacred Ammapalli Temple weddings by Hyderabad's most trusted planners. 500+ weddings, 12+ years. Call +91 88855 52388." },
      { property: "og:image", content: hero },
      { property: "og:url", content: "https://ammapallitempleweddings.com/" },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ammapalli Temple Wedding Planning",
          serviceType: "Temple Wedding Planning",
          provider: {
            "@type": "LocalBusiness",
            name: "Ammapalli Temple Weddings",
            telephone: "+918885552388",
            url: "https://ammapallitempleweddings.com",
            parentOrganization: { "@type": "Organization", name: "Satavahana Events" },
          },
          areaServed: "Hyderabad, Telangana, India",
          description: "Complete wedding planning for Ammapalli Temple weddings — catering, décor, rituals, photography. Contact +91 88855 52388.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the contact number for Ammapalli Temple Weddings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The official contact number for Ammapalli Temple Weddings, managed by Satavahana Events, is +91 88855 52388. Call or WhatsApp us to book your muhurtam, plan rituals, catering and décor at Ammapalli Sri Sita Ramachandra Swamy Temple, Shamshabad, Hyderabad.",
              },
            },
            {
              "@type": "Question",
              name: "Who manages weddings at Ammapalli Temple?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ammapalli Temple Weddings is managed by Satavahana Events — Hyderabad's trusted temple wedding planners. We handle end-to-end planning at Ammapalli Sri Sita Ramachandra Swamy Temple, from muhurtam booking and priest arrangements to mandap décor, Telugu catering and photography. Call +91 88855 52388.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book an Ammapalli Temple wedding?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "To book your Ammapalli Temple wedding, contact Satavahana Events at +91 88855 52388 or WhatsApp the same number. We offer a free 60-minute consultation, confirm your muhurtam date with the temple and prepare a transparent quote within 24 hours.",
              },
            },
            ...faqs.slice(0, 6).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const services6 = services.slice(0, 6);

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] -mt-20 overflow-hidden">
        {heroSlides.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            width={1600}
            height={900}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[1500ms] ease-in-out ${slide === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-28 pb-10 sm:pt-24 sm:pb-8 md:pt-20 md:pb-0">
          <div className="fade-up">
            <div className="text-[10px] tracking-[0.5em] uppercase text-gold mb-6">Managed by Satavahana Events</div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-foreground leading-[0.95]">
              Ammapalli Temple
              <br />
              <span className="gold-gradient italic">Weddings</span>
            </h1>
            <div className="gold-divider w-40 mx-auto my-8" />
            <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              Celebrate your sacred wedding at the divine Ammapalli Sri Sita Ramachandra Swamy Temple with complete planning,
              catering, decoration, photography and guest management — by Hyderabad's most trusted temple wedding planners.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="group inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform">
                <Phone className="size-4" /> Call {SITE.phone}
              </a>
              <EnquireButton className="inline-flex items-center gap-3 border border-gold/50 rounded-full text-gold px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-colors">
                Plan your wedding <ArrowUpRight className="size-4" />
              </EnquireButton>
            </div>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Ammapalli Weddings · Satavahana Events · Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-1">
        <StatsCounter />
      </section>

      {/* ABOUT TEMPLE */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden hover-zoom">
          <img src={ammapalli} alt="Ammapalli Sri Sita Ramachandra Swamy Temple at sunset" width={1600} height={1080} loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold">About Ammapalli Temple</div>
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            A 600-year-old sanctuary for <span className="gold-gradient italic">sacred unions</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Nestled in Shamshabad just 25 km from central Hyderabad, the Ammapalli Sri Sita Ramachandra Swamy Temple is one of the
            oldest and most revered shrines in Telangana. Devotees have travelled here for centuries to seek the blessings of Lord Rama
            and Goddess Sita for prosperity, fertility and lifelong unions.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Today, Ammapalli is a destination of choice for couples seeking an authentic, spiritually grounded Telugu wedding experience.
            Its serene Dravidian architecture, intimate gopuram and sanctified mandap create a setting that no banquet hall can replicate.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              "25 km from Hyderabad city",
              "12 km from RGI Airport",
              "Centuries-old Dravidian temple",
              "Auspicious muhurtam slots year-round",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <Link to="/about" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold mt-10 hover:gap-4 transition-all">
            Read our story <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeading
            eyebrow="Why Couples Choose Us"
            title="The most trusted name in"
            highlight="Hyderabad temple weddings"
            intro="Twelve years, five hundred weddings, one obsession — making your sacred day unforgettable."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Sparkles, t: "End-to-End Planning", d: "Single point of contact across muhurtam, mandap, catering, photography and guest hospitality." },
              { icon: Heart, t: "Authentic Telugu Traditions", d: "Veda-trained pundits, regional cuisine and rituals performed exactly as your family wishes." },
              { icon: Crown, t: "Luxury, Done Right", d: "Premium florals, cinematic films, designer décor — every detail is investment-worthy." },
              { icon: Star, t: "12+ Years Experience", d: "From intimate temple ceremonies to 1,500-guest celebrations — we've delivered them all." },
              { icon: CheckCircle2, t: "Transparent Pricing", d: "Itemised proposals, no hidden costs, flexible packages for every budget." },
              { icon: MapPin, t: "Destination Specialists", d: "Curated experiences for NRI families and couples flying in from across India and abroad." },
            ].map((f) => (
              <div key={f.t} className="border border-border p-8 bg-background hover-lift">
                <f.icon className="size-7 text-gold" />
                <h3 className="font-display text-2xl mt-5">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — 16:9 horizontal cards */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Our Wedding Planning Services</div>
            <h2 className="font-display text-4xl md:text-5xl">A complete <span className="gold-gradient italic">celebration suite</span></h2>
          </div>
          <Link to="/services" className="text-xs tracking-[0.3em] uppercase text-gold hover:underline">View all services →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services6.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden bg-card border border-border hover-lift hover-zoom block"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={s.image} alt={`${s.title} — ${s.tagline}`} loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">Service</div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="text-xs text-muted-foreground italic mt-2">{s.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold">
                  Learn more <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PACKAGES TEASE */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-gold">Temple Wedding Packages</div>
            <h2 className="font-display text-4xl md:text-5xl mt-6">From intimate to <span className="gold-gradient italic">grand</span></h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Our Silver, Gold and Platinum temple wedding packages cover every guest count and budget — fully customisable,
              transparently priced, and built around your family's traditions.
            </p>
            <Link to="/packages" className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-10 hover:translate-y-[-2px] transition-transform">
              Compare Packages <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="relative aspect-video overflow-hidden hover-zoom">
            <img src={mandap} alt="Luxury floral mandap decoration for Telugu wedding" loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
          </div>
        </div>
      </section>

      {/* CATERING + DECOR + RITUALS QUICK LINKS */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeading eyebrow="Signature Specialities" title="Built for the" highlight="South Indian wedding" />
        <div className="grid md:grid-cols-3 gap-px bg-border mt-16">
          {[
            { img: catering, t: "Catering Services", d: "Authentic Telangana, Andhra and multi-cuisine wedding menus served on banana leaves or live counters.", to: "/catering" },
            { img: floral, t: "Decoration Services", d: "Floral mandaps, brass lamps, jasmine canopies and themed reception décor for every ceremony.", link: { to: "/services/$slug" as const, params: { slug: "floral-decoration" } } },
            { img: bridal, t: "Bridal Styling", d: "Premium HD bridal makeup, hair styling, saree draping and jewellery setting for every ceremony.", link: { to: "/services/$slug" as const, params: { slug: "bridal-makeup" } } },
          ].map((s) => (
            <div key={s.t} className="bg-background hover-lift hover-zoom group">
              <div className="aspect-video relative overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
                {"to" in s && s.to && (
                  <Link to={s.to} className="inline-flex items-center gap-2 mt-5 text-xs tracking-[0.3em] uppercase text-gold">
                    Explore <ArrowUpRight className="size-4" />
                  </Link>
                )}
                {"link" in s && s.link && (
                  <Link to={s.link.to} params={s.link.params} className="inline-flex items-center gap-2 mt-5 text-xs tracking-[0.3em] uppercase text-gold">
                    Explore <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="Real Weddings" title="Moments," highlight="made eternal" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
          {[couple, mandap, bridal, floral, catering, hero, ammapalli, heroNight].map((src, i) => (
            <Link key={i} to="/gallery" className="aspect-square relative overflow-hidden hover-zoom group">
              <img src={src} alt={`Ammapalli temple wedding gallery image ${i + 1}`} loading="lazy" width={800} height={800} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-3 border border-gold/50 text-gold px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-colors">
            View full gallery <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card/40 border-y border-border py-32 px-6">
        <SectionHeading eyebrow="What Couples Say" title="Stories of" highlight="happy unions" />
        <div className="mt-20"><TestimonialSlider /></div>
      </section>

      {/* AMMAPALLI TEMPLE INFO — captures informational SERP traffic and funnels to wedding bookings */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="The Sacred Venue" title="About Ammapalli" highlight="Sri Sita Ramachandra Swamy Temple" />
        <div className="mt-12 grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="font-display text-2xl text-foreground mb-4">Ammapalli Temple, Shamshabad</h3>
            <p>
              The <strong className="text-foreground">Ammapalli Sri Sita Ramachandra Swamy Temple</strong> — locally
              called <em>Ammapalli Ramalayam</em> — is a 13th-century Kakatiya-era shrine in Shamshabad, Hyderabad. Built
              around a serene <em>kalyana mandapam</em> and a lakeside colonnade, it is one of Telangana's most
              auspicious venues for Telugu temple weddings.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Location:</strong> Ammapalli, Shamshabad, Hyderabad — Telangana 501218.<br />
              <strong className="text-foreground">Distance:</strong> ~25 km from central Hyderabad, ~12 km from RGIA airport.<br />
              <strong className="text-foreground">Temple timings:</strong> 6:00 AM – 12:30 PM and 4:00 PM – 8:30 PM, all days.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-foreground mb-4">Booking your Ammapalli wedding</h3>
            <p>
              We are <strong className="text-foreground">Satavahana Events</strong> — the official wedding planners
              for <strong className="text-foreground">Ammapalli Temple Weddings</strong>. We coordinate the temple muhurtam,
              priest arrangements, mandap décor, Telugu catering, photography, guest hospitality and rituals end-to-end so
              your family is free to be fully present.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Muhurtam booking:</strong> 4–6 months in advance for premium Telugu wedding
              season slots (Jan–Mar, Apr–Jun, Nov–Dec).<br />
              <strong className="text-foreground">Wedding cost:</strong> ₹2.5 lakh (intimate) to ₹12 lakh+ (3-day destination).<br />
              <strong className="text-foreground">Contact:</strong> <a href={`tel:${SITE.phoneRaw}`} className="text-gold hover:underline">+91 88855 52388</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <SectionHeading eyebrow="Frequently Asked" title="Your" highlight="questions, answered" />
        <div className="mt-12">
          <FAQList items={faqs.slice(0, 6)} />
        </div>
        <div className="text-center mt-10">
          <Link to="/faq" className="text-xs tracking-[0.3em] uppercase text-gold hover:underline">See all FAQs →</Link>
        </div>
      </section>

      {/* MAP + INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Find the Temple</div>
          <h3 className="font-display text-3xl md:text-4xl mt-4">Visit <span className="gold-gradient italic">Ammapalli</span></h3>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{SITE.address}</p>
          <div className="aspect-video mt-6 border border-border overflow-hidden">
            <iframe title="Ammapalli Temple location" src={SITE.mapsEmbed} className="w-full h-full" loading="lazy" />
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Follow Our Journey</div>
          <h3 className="font-display text-3xl md:text-4xl mt-4">On <span className="gold-gradient italic">Instagram</span></h3>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">A daily feed of temple ceremonies, mandap décor, bridal portraits and behind-the-scenes moments.</p>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[
              { src: couple, href: "https://www.instagram.com/reel/DYeTUBQuGkJ/" },
              { src: mandap, href: "https://www.instagram.com/reel/DYW0UTyJJeb/" },
              { src: bridal, href: "https://www.instagram.com/reel/DXoQGrRDi3o/" },
              { src: floral, href: "https://www.instagram.com/reel/DXeIwMfiSwT/" },
              { src: hero, href: "https://www.instagram.com/reel/DSrOYfZibQH/" },
            ].map((post, i) => (
              <a key={i} href={post.href} target="_blank" rel="noopener noreferrer" className="aspect-square relative overflow-hidden hover-zoom group">
                <img src={post.src} alt={`Satavahana Events Instagram reel ${i + 1}`} loading="lazy" width={600} height={600} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 grid place-items-center bg-background/0 group-hover:bg-background/60 transition-colors">
                  <Instagram className="size-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-radial)" }} />
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Begin</div>
        <h2 className="font-display text-5xl md:text-6xl mt-8">
          Let's design <span className="gold-gradient italic">your forever.</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">A private consultation with our planning atelier — by invitation, complimentary.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-10 py-4 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform">
            Request a consultation <ArrowUpRight className="size-4" />
          </EnquireButton>
          <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-3 border border-gold/50 text-gold px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/10">
            <Phone className="size-4" /> {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
