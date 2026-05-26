import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { galleryCategories } from "@/lib/site";
import { EnquireButton } from "@/components/EnquiryModal";
import temple from "@/assets/wed-temple-ceremony.jpg";

import diningArea from "@/assets/gallery-dining-area.png";
import dining from "@/assets/gallery-dining.png";
import stageDecor from "@/assets/gallery-stage-decor.png";
import mandapDecor from "@/assets/gallery-mandap-decor.png";
import sittingArea from "@/assets/gallery-sitting-area.png";
import divineDecor from "@/assets/gallery-divine-decor.png";
import fullDecor from "@/assets/gallery-full-decor.png";
import weddingDecorTwo from "@/assets/gallery-wedding-decor-2.png";
import weddingDecorThree from "@/assets/gallery-wedding-decor-3.png";
import weddingDecorFour from "@/assets/gallery-wedding-decor-4.png";
import weddingDecorFive from "@/assets/gallery-wedding-decor-5.png";
import weddingDecorSix from "@/assets/gallery-wedding-decor-6.png";
import decorSideView from "@/assets/gallery-decor-side-view.png";
import templeDecor from "@/assets/gallery-temple-decor.png";
import sittingAreaTwo from "@/assets/gallery-sitting-area-2.png";
import sittingAreaThree from "@/assets/gallery-sitting-area-3.png";
import sittingAreaMain from "@/assets/gallery-sitting-area-main.png";
import fullDecorSideView from "@/assets/gallery-full-decor-side-view.png";
import fullDecorFront from "@/assets/gallery-full-decor-front.png";
import weddingSittingFull from "@/assets/gallery-wedding-sitting-full.png";
import templeAerial from "@/assets/gallery-temple-aerial.png";
import tablesSetup from "@/assets/gallery-tables-setup.png";
import ganeshaDecor from "@/assets/gallery-ganesha-decor.png";

import weddingEntrance from "@/assets/gallery-wedding-entrance.png";
import fullDecorFamily from "@/assets/gallery-full-decor-family.png";
import fullStageDecor from "@/assets/gallery-full-stage-decor.png";
import haldiSeatingWide from "@/assets/gallery-haldi-seating-wide.png";
import haldiArea from "@/assets/gallery-haldi-area.png";
import haldiDecor from "@/assets/gallery-haldi-decor.png";
import haldiDecorTwo from "@/assets/gallery-haldi-decor-2.png";
import haldiFlowers from "@/assets/gallery-haldi-flowers.png";
import haldiSitting from "@/assets/gallery-haldi-sitting.png";
import mandapFlowers from "@/assets/gallery-mandap-flowers.png";
import mandapSideView from "@/assets/gallery-mandap-side-view.png";
import grandMandap from "@/assets/gallery-grand-mandap.png";
import nightViewDecor from "@/assets/gallery-night-view-decor.png";
import nightViewWide from "@/assets/gallery-night-view-wide.png";
import sittingAreaAisle from "@/assets/gallery-sitting-area-aisle.png";
import sittingAerialSymmetry from "@/assets/gallery-sitting-aerial-symmetry.png";
import sittingSideStage from "@/assets/gallery-sitting-side-stage.png";
import sittingPalms from "@/assets/gallery-sitting-palms.png";
import sittingRows from "@/assets/gallery-sitting-rows.png";
import lakeView from "@/assets/gallery-lake-view.png";
import weddingSideView from "@/assets/gallery-wedding-side-view.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Ammapalli Temple Wedding Photos & Gallery" },
      { name: "description", content: "Real Ammapalli Temple wedding photos: mandap décor, ceremonies, Telugu catering, bridal portraits and receptions at Sri Sita Ramachandra Swamy Temple." },
      { property: "og:title", content: "Ammapalli Temple Wedding Photo Gallery" },
      { property: "og:description", content: "Real Ammapalli Temple weddings, beautifully captured." },
      { property: "og:url", content: "https://ammapallitempleweddings.com/gallery" },
      { property: "og:image", content: temple },
    ],
    links: [{ rel: "canonical", href: "https://ammapallitempleweddings.com/gallery" }],
  }),
  component: Gallery,
});

const gallery: { src: string; cat: string; alt: string }[] = [
  { src: lakeView, cat: "Temple Weddings", alt: "Ammapalli Temple lake-side colonnade illuminated with red lights at night with reflections in the water" },
  { src: weddingSideView, cat: "Mandap Designs", alt: "Side view of the grand golden wedding mandap with winged deity statues, elephants and floral garlands" },
  
  { src: sittingAerialSymmetry, cat: "Reception Events", alt: "Aerial symmetrical view of guest seating with sofas, gold chairs and round tables" },
  { src: sittingSideStage, cat: "Reception Events", alt: "Side view of wedding seating area with white sofas and gold chairs facing the temple stage" },
  { src: sittingPalms, cat: "Reception Events", alt: "Guest seating with red-draped gold chairs under palm trees beside the temple mandap" },
  { src: sittingRows, cat: "Reception Events", alt: "Rows of gold chiavari chairs with red sashes on patterned floor for the ceremony" },
  { src: fullStageDecor, cat: "Temple Weddings", alt: "Night view of the full wedding stage decor with the temple gopuram behind it" },
  { src: nightViewDecor, cat: "Temple Weddings", alt: "Temple wedding stage illuminated at night with the gopuram towering behind it" },
  { src: nightViewWide, cat: "Temple Weddings", alt: "Wide night view of the Ammapalli temple wedding venue with guest seating" },
  { src: stageDecor, cat: "Mandap Designs", alt: "Grand golden wedding stage with floral garlands" },
  
  { src: fullDecorFamily, cat: "Mandap Designs", alt: "Family portrait on the illuminated golden mandap with floral arrangements" },
  { src: mandapDecor, cat: "Decorations", alt: "Mandap with cascading jasmine garlands" },
  { src: divineDecor, cat: "Mandap Designs", alt: "Temple wedding mandap with red and white floral decor" },
  { src: grandMandap, cat: "Mandap Designs", alt: "Lavish golden mandap with jasmine hangings, floral steps and elephant sculpture" },
  { src: mandapSideView, cat: "Mandap Designs", alt: "Side view of the golden wedding mandap with floral garlands and ceremonial setup" },
  { src: fullDecor, cat: "Decorations", alt: "Full temple wedding stage decor with floral arrangements" },
  { src: fullDecorFront, cat: "Temple Weddings", alt: "Front view of the fully decorated Ammapalli temple wedding stage" },
  { src: fullDecorSideView, cat: "Temple Weddings", alt: "Side view of the full temple wedding decor with floral steps" },
  { src: weddingDecorTwo, cat: "Temple Weddings", alt: "Golden temple wedding decor with deity backdrop" },
  { src: weddingDecorThree, cat: "Mandap Designs", alt: "Night-time mandap decor with hanging jasmine garlands" },
  { src: weddingDecorFour, cat: "Mandap Designs", alt: "Mandap ceiling with cascading jasmine garlands and deity backdrop" },
  { src: weddingDecorFive, cat: "Decorations", alt: "Red-draped wedding pathway with golden pillars and floral arrangements" },
  { src: weddingEntrance, cat: "Decorations", alt: "Grand floral wedding entrance with golden pillars and red canopy walkway" },
  { src: weddingDecorSix, cat: "Decorations", alt: "Grand wedding entrance with golden arch and welcome signage" },
  { src: ganeshaDecor, cat: "Decorations", alt: "Ganesha shrine with jasmine garlands and red lighting" },
  { src: decorSideView, cat: "Temple Weddings", alt: "Side view of Ammapalli temple mandap with jasmine garlands" },
  { src: templeDecor, cat: "Temple Weddings", alt: "Ammapalli Temple gopuram with illuminated wedding mandap at night" },
  { src: templeAerial, cat: "Temple Weddings", alt: "Aerial view of Ammapalli Temple gopuram surrounded by greenery" },
  { src: weddingSittingFull, cat: "Temple Weddings", alt: "Temple wedding ceremony with full guest seating at sunset" },
  { src: diningArea, cat: "Catering", alt: "Elegant wedding dining setup with floral centerpiece" },
  { src: dining, cat: "Catering", alt: "Long dining table with floral arrangements" },
  { src: tablesSetup, cat: "Reception Events", alt: "Outdoor reception area with round tables and red linens" },
  { src: sittingArea, cat: "Reception Events", alt: "Wedding seating area with round tables and red decor" },
  { src: sittingAreaMain, cat: "Reception Events", alt: "Temple wedding seating arranged in front of the decorated stage" },
  { src: sittingAreaTwo, cat: "Reception Events", alt: "Aerial view of the guest seating area facing the wedding stage" },
  { src: sittingAreaThree, cat: "Reception Events", alt: "Indoor reception sitting area with red drapes and banquet setup" },
  { src: sittingAreaAisle, cat: "Reception Events", alt: "Grand central aisle with guest seating leading to the temple wedding stage" },
  { src: haldiSeatingWide, cat: "Reception Events", alt: "Haldi ceremony area with pastel draped canopy and seating setup" },
  { src: haldiArea, cat: "Reception Events", alt: "Haldi seating area with pink and orange chair decor under a soft canopy" },
  { src: haldiDecor, cat: "Decorations", alt: "Haldi ceremony backdrop with marigold garlands and brass urli bowls with rose petals" },
  { src: haldiDecorTwo, cat: "Reception Events", alt: "Haldi ceremony hall with pink draped canopy, fairy lights and chiavari chairs" },
  { src: haldiFlowers, cat: "Decorations", alt: "Haldi flower display with marigolds, rose petals and yellow blooms in wicker baskets" },
  { src: haldiSitting, cat: "Reception Events", alt: "Haldi guest seating with orange and pink sashes facing the floral mandap" },
  { src: mandapFlowers, cat: "Mandap Designs", alt: "Grand mandap with red and white garlands and lush white floral arrangements" },
];

const videos: { id: string; title: string }[] = [
  { id: "hVTh7YcVWVs", title: "Ammapalli Temple Wedding Highlights" },
];

function Gallery() {
  const [tab, setTab] = useState<"Images" | "Videos">("Images");
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-12 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-gold ornament">Gallery</div>
        <h1 className="font-display text-5xl md:text-6xl mt-6">Moments, <span className="gold-gradient italic">made eternal</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-6">A visual journey through the temple ceremonies, mandap designs and joyful celebrations we have produced.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
          {(["Images", "Videos"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-[11px] tracking-[0.3em] uppercase py-4 border transition-colors ${
                tab === t ? "bg-gold text-primary-foreground border-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Images" ? (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 border transition-colors ${
                    filter === c ? "bg-gold text-primary-foreground border-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-border">
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">Gallery coming soon</p>
                <p className="text-muted-foreground/70 mt-4 max-w-md mx-auto">New wedding photographs will be added here shortly.</p>
              </div>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                {filtered.map((g, i) => (
                  <div key={i} className="mb-4 break-inside-avoid overflow-hidden hover-zoom">
                    <img src={g.src} alt={g.alt} loading="lazy" width={1600} height={900} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="border border-border overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">{v.title}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h2 className="font-display text-4xl">Want this for your <span className="gold-gradient italic">wedding?</span></h2>
        <EnquireButton className="inline-flex items-center gap-3 bg-gold text-primary-foreground rounded-full px-10 py-4 text-xs tracking-[0.3em] uppercase shadow-gold mt-8 hover:translate-y-[-2px] transition-transform">
          Book a consultation
        </EnquireButton>
      </section>
    </>
  );
}
