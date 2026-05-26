import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ammapalli Temple Weddings — Call +91 88855 52388" },
      { name: "description", content: "Book your Ammapalli Temple wedding with Satavahana Events. Call or WhatsApp +91 88855 52388. Free consultation. Shamshabad, Hyderabad." },
      { property: "og:title", content: "Contact Ammapalli Temple Weddings" },
      { property: "og:description", content: "Call +91 88855 52388 to book your sacred Ammapalli Temple wedding." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const BUDGETS = ["10–15 Lakhs", "15–20 Lakhs", "20–25 Lakhs", "25–50 Lakhs", "50 Lakhs+"];
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const lines = [
      "*New Wedding Enquiry — Ammapalli Temple Weddings*",
      "",
      `*Name:* ${fd.get("name") || ""}`,
      `*Phone:* ${fd.get("phone") || ""}`,
      fd.get("email") && `*Email:* ${fd.get("email")}`,
      fd.get("date") && `*Wedding Date:* ${fd.get("date")}`,
      fd.get("guests") && `*Estimated Guests:* ${fd.get("guests")}`,
      fd.get("budget") && `*Budget:* ${fd.get("budget")}`,
      fd.getAll("services").length && `*Services of Interest:* ${fd.getAll("services").join(", ")}`,
      fd.get("message") && "",
      fd.get("message") && `*Message:*\n${fd.get("message")}`,
    ].filter(Boolean) as string[];
    const text = encodeURIComponent(lines.join("\n"));
    const waNumber = SITE.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — tap Send to complete your enquiry.");
    (e.currentTarget as HTMLFormElement).reset();
    setLoading(false);
  };
  const wa = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Contact</div>
        <h1 className="font-display text-5xl md:text-6xl mt-6">Let's plan your <span className="gold-gradient italic">temple wedding</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-6">A complimentary 60-minute consultation with our planning atelier. We respond within 24 hours.</p>
      </section>

      {/* QUICK CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-16">
        <a href={`tel:${SITE.phoneRaw}`} className="border border-border p-8 bg-card/40 hover-lift text-center">
          <Phone className="size-7 text-gold mx-auto" />
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">Call</div>
          <div className="font-display text-2xl mt-2">{SITE.phone}</div>
        </a>
        <a href={`${wa}?text=Hi%20Satavahana%20Events`} target="_blank" rel="noopener" className="border border-border p-8 bg-card/40 hover-lift text-center">
          <MessageCircle className="size-7 text-gold mx-auto" />
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">WhatsApp</div>
          <div className="font-display text-2xl mt-2">Message us</div>
        </a>
        <a href={`mailto:${SITE.email}`} className="border border-border p-8 bg-card/40 hover-lift text-center">
          <Mail className="size-7 text-gold mx-auto" />
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">Email</div>
          <div className="font-display text-lg mt-2 break-all">{SITE.email}</div>
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12">
        <form onSubmit={onSubmit} className="lg:col-span-3 space-y-6 border border-border p-8 md:p-12 bg-card/40">
          <h2 className="font-display text-3xl">Wedding inquiry</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Wedding Date (approx.)" name="date" type="date" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Estimated Guests" name="guests" type="number" />
          </div>
          <div className="space-y-3">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Service Interest <span className="normal-case tracking-normal text-muted-foreground/70">(select all that apply)</span></label>
            <div className="grid sm:grid-cols-2 gap-2">
              {services.map((s) => (
                <label key={s.slug} className="flex items-center gap-3 border border-border bg-background px-4 py-3 cursor-pointer hover:border-gold transition-colors">
                  <input type="checkbox" name="services" value={s.title} className="accent-gold size-4 shrink-0" />
                  <span className="text-sm text-foreground">{s.title}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Your Budget</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BUDGETS.map((b) => (
                <label key={b} className="flex items-center gap-2 border border-border bg-background px-3 py-2.5 cursor-pointer hover:border-gold transition-colors text-sm">
                  <input type="radio" name="budget" value={b} className="accent-gold" />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Tell us about your wedding</label>
            <textarea name="message" rows={5} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold outline-none" placeholder="Family traditions, vision, guest count, anything we should know…" />
          </div>
          <button disabled={loading} className="w-full inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform disabled:opacity-50">
            {loading ? "Opening WhatsApp…" : (<>Send via WhatsApp <Send className="size-4" /></>)}
          </button>
          <p className="text-[11px] text-center text-muted-foreground">Your details will be sent to {SITE.phone} on WhatsApp.</p>
        </form>

        <div className="lg:col-span-2 space-y-6">
          <div className="border border-border p-8 bg-card/40">
            <div className="text-xs tracking-[0.3em] uppercase text-gold">Office</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex items-start gap-3"><MapPin className="size-4 text-gold mt-0.5 shrink-0" />{SITE.address}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex items-start gap-3"><Phone className="size-4 text-gold mt-0.5 shrink-0" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a></p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex items-start gap-3"><Mail className="size-4 text-gold mt-0.5 shrink-0" />{SITE.email}</p>
          </div>
          <div className="aspect-square border border-border overflow-hidden">
            <iframe title="Ammapalli Temple location" src={SITE.mapsEmbed} className="w-full h-full" loading="lazy" />
          </div>
          <Link to="/faq" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold hover:underline">
            Read FAQs <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</label>
      <input type={type} name={name} required={required} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold outline-none" />
    </div>
  );
}
