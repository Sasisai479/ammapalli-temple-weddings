import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { faqs } from "@/lib/site";
import { FAQList } from "@/components/FAQList";
import { ArrowUpRight } from "lucide-react";
import { EnquireButton } from "@/components/EnquiryModal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding FAQ — Cost, Booking, Muhurtam" },
      { name: "description", content: "Ammapalli Temple wedding FAQs: cost, packages, muhurtam booking, catering, decoration, priests, temple timings, destination wedding planning." },
      { property: "og:title", content: "Ammapalli Temple Wedding FAQs" },
      { property: "og:description", content: "Answers to the most common questions about Ammapalli Temple weddings." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/faq" },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">FAQ</div>
        <h1 className="font-display text-5xl md:text-6xl mt-6">Your <span className="gold-gradient italic">questions, answered</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-6">Everything couples ask before planning an Ammapalli Temple wedding with Satavahana Events.</p>
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <FAQList items={faqs} />
      </section>
      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-border">
        <h2 className="font-display text-3xl">Still have questions?</h2>
        <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-6 hover:translate-y-[-2px] transition-transform">
          Talk to a planner <ArrowUpRight className="size-4" />
        </EnquireButton>
      </section>
    </>
  );
}
