import sravaniHero from "@/assets/wed-temple-ceremony.jpg";
import sravaniMandap from "@/assets/gallery-grand-mandap.png";
import sravaniNight from "@/assets/gallery-night-view-wide.png";

import pravallikaHero from "@/assets/wed-mandap-decor.jpg";
import pravallikaMandap from "@/assets/gallery-mandap-decor.png";
import pravallikaFloral from "@/assets/wed-floral.jpg";

import anushaHero from "@/assets/gallery-lake-view.png";
import anushaMandap from "@/assets/gallery-wedding-side-view.png";
import anushaReception from "@/assets/gallery-full-stage-decor.png";

export type WeddingSection = { heading: string; body: string };

export type RealWedding = {
  slug: string;
  coupleNames: string;
  city: string;
  date: string; // ISO
  displayDate: string;
  guests: number;
  package: string;
  ceremonies: string[];
  heroImage: string;
  gallery: { src: string; alt: string }[];
  excerpt: string;
  metaDescription: string;
  sections: WeddingSection[];
  highlights: string[];
  vendorCredits: { role: string; name: string }[];
  testimonial: { quote: string; attribution: string };
};

export const realWeddings: RealWedding[] = [
  {
    slug: "sravani-karthik-ammapalli-temple-wedding",
    coupleNames: "Sravani & Karthik",
    city: "Hyderabad",
    date: "2025-02-14",
    displayDate: "February 2025",
    guests: 220,
    package: "Gold Temple Package",
    ceremonies: ["Pellikuthuru", "Mangala Snanam", "Kanyadanam", "Mangalsutra Dharanam", "Reception"],
    heroImage: sravaniHero,
    gallery: [
      { src: sravaniMandap, alt: "Sravani and Karthik's golden floral mandap at Ammapalli Temple" },
      { src: sravaniNight, alt: "Ammapalli Temple wedding venue lit up at night for Sravani and Karthik's reception" },
    ],
    excerpt:
      "A classic Telugu temple wedding at Ammapalli Sri Sita Ramachandra Swamy Temple — 220 guests, a golden jasmine mandap and the full ritual flow led by the temple's senior purohit.",
    metaDescription:
      "Sravani & Karthik's Ammapalli Temple wedding — 220 guests, Gold package, golden jasmine mandap and full Telugu ritual flow at Sri Sita Ramachandra Swamy Temple, Shamshabad. Planned by Satavahana Events.",
    sections: [
      {
        heading: "Why they chose Ammapalli Temple",
        body: "Sravani's grandparents were married at the Ammapalli Sri Sita Ramachandra Swamy Temple in the 1960s. When she and Karthik began planning, choosing the same kalyana mandapam felt like the most natural decision in the world. The 13th-century shrine in Shamshabad sits 25 km from central Hyderabad — close enough for city guests, peaceful enough to feel like a destination.",
      },
      {
        heading: "The muhurtam",
        body: "We secured a prime 9:48 AM muhurtam in February — one of the most auspicious Telugu wedding-season slots. Booking was confirmed four months in advance with the temple board, and the senior purohit was briefed on family traditions from both Sravani's (Andhra) and Karthik's (Telangana) sides so every ritual honored both lineages.",
      },
      {
        heading: "Mandap & décor",
        body: "The mandap was built in fresh jasmine and marigold with banana stalks, brass kalash and a backdrop of woven mango leaves. We added a subtle gold canopy that caught the morning sun streaming through the temple gopuram — a small touch that produced the wedding's most-shared photograph.",
      },
      {
        heading: "Catering — 220 traditional Telangana plates",
        body: "Banana-leaf bhojanam for all 220 guests: pulihora, gongura pachadi, sakinalu, bobbatlu, garelu, sarva pindi, payasam and filter coffee. Two live counters (dosa and chaat) ran through the morning. Our FSSAI-certified central kitchen scaled the menu without compromising the home-style flavour both families wanted.",
      },
      {
        heading: "Reception at Trident Hyderabad",
        body: "The evening reception moved to the Trident's ballroom — a black-and-gold setup with a multi-cuisine spread and a sangeet performance choreographed by Sravani's cousins. Hotel block bookings, transport and a guest concierge desk were handled by our team end-to-end.",
      },
    ],
    highlights: [
      "9:48 AM premium temple muhurtam",
      "Golden jasmine & marigold mandap",
      "220-guest Telangana banana-leaf bhojanam",
      "4 photographers + 2 videographers + drone",
      "Same-day edit screened at the reception",
    ],
    vendorCredits: [
      { role: "Planning & coordination", name: "Satavahana Events" },
      { role: "Mandap & floral décor", name: "Satavahana Events in-house design" },
      { role: "Catering", name: "Satavahana Events central kitchen" },
      { role: "Photography", name: "Satavahana Films" },
      { role: "Reception venue", name: "Trident Hyderabad" },
    ],
    testimonial: {
      quote:
        "Our Ammapalli Temple wedding was beyond what we imagined. Satavahana Events handled the priest, mandap, catering and our 220 guests so we could simply enjoy every ritual.",
      attribution: "Sravani & Karthik · February 2025",
    },
  },
  {
    slug: "pravallika-rohan-destination-wedding",
    coupleNames: "Pravallika & Rohan",
    city: "Bengaluru → Ammapalli",
    date: "2024-11-28",
    displayDate: "November 2024",
    guests: 180,
    package: "Platinum Destination Package",
    ceremonies: ["Haldi", "Mehendi", "Sangeet", "Wedding", "Reception"],
    heroImage: pravallikaHero,
    gallery: [
      { src: pravallikaMandap, alt: "Pravallika and Rohan's destination wedding mandap at Ammapalli Temple" },
      { src: pravallikaFloral, alt: "Fresh floral arrangements for Pravallika and Rohan's three-day Telugu wedding" },
    ],
    excerpt:
      "A three-day destination wedding for an 80-strong Bengaluru and US guest list — haldi and mehendi at the hotel, wedding at Ammapalli Temple, reception under the stars.",
    metaDescription:
      "Pravallika & Rohan's three-day destination wedding at Ammapalli Temple — 180 guests from Bengaluru and the US, Platinum package, haldi to reception. Planned by Satavahana Events.",
    sections: [
      {
        heading: "Planning a destination wedding remotely",
        body: "Pravallika lived in Bengaluru, Rohan in San Francisco, and 80 of their guests were flying in from the US, UK and Gulf. Everything — from the temple muhurtam to airport pickups — had to be coordinated over WhatsApp and video calls. We assigned a dedicated planner who became the family's single point of contact for nine months.",
      },
      {
        heading: "Hotel block & guest concierge",
        body: "We blocked 60 rooms across two five-star properties near the airport for easy outstation logistics. A guest concierge desk handled airport transfers, welcome hampers, ritual briefings in English for the US relatives, and the day-by-day itinerary printed in both English and Telugu.",
      },
      {
        heading: "Haldi, mehendi & sangeet at the hotel",
        body: "Day one was a poolside haldi with marigold arches and a yellow dress code. Day two split into a daytime mehendi for the women and an evening sangeet with a 12-song choreographed performance, sound and stage by our in-house production team.",
      },
      {
        heading: "The Ammapalli Temple ceremony",
        body: "The wedding ceremony itself happened at Ammapalli Sri Sita Ramachandra Swamy Temple at a 10:30 AM muhurtam. We added imported orchids to the traditional jasmine mandap and built a tented seating area for elderly guests. The full ceremony was livestreamed in HD for family in the US.",
      },
      {
        heading: "Reception under the stars",
        body: "The reception returned to the hotel lawns — a black-and-gold setup with live counters, a curated bar and a cinematic same-day edit screened during dinner. Pravallika's father gave a speech that had the entire room in tears.",
      },
    ],
    highlights: [
      "3-day production: haldi → reception",
      "60-room hotel block & airport concierge",
      "HD livestream for US family",
      "Imported orchid + jasmine mandap",
      "Same-day cinematic edit",
    ],
    vendorCredits: [
      { role: "End-to-end planning", name: "Satavahana Events" },
      { role: "Mandap & décor", name: "Satavahana Events in-house design" },
      { role: "Catering", name: "Satavahana Events central kitchen" },
      { role: "Photography & livestream", name: "Satavahana Films" },
      { role: "Choreography", name: "Satavahana Productions" },
    ],
    testimonial: {
      quote:
        "We flew in 80 guests from Bengaluru and the US. The team coordinated the entire destination wedding — hotel rooms, airport pickups, the temple ceremony, even the mehendi at our hotel. Flawless.",
      attribution: "Pravallika & Rohan · November 2024",
    },
  },
  {
    slug: "anusha-arjun-nri-wedding",
    coupleNames: "Anusha & Arjun",
    city: "USA → Hyderabad",
    date: "2024-06-22",
    displayDate: "June 2024",
    guests: 140,
    package: "Gold Temple Package",
    ceremonies: ["Pellikuthuru", "Kashi Yatra", "Mangalsutra Dharanam", "Reception"],
    heroImage: anushaHero,
    gallery: [
      { src: anushaMandap, alt: "Anusha and Arjun's golden wedding mandap with floral garlands at Ammapalli Temple" },
      { src: anushaReception, alt: "Anusha and Arjun's reception stage at Ammapalli Temple with the gopuram lit at night" },
    ],
    excerpt:
      "An NRI bride who needed everything planned from 13,000 km away. We delivered a 140-guest Ammapalli Temple wedding with a livestreamed ceremony for relatives in New Jersey.",
    metaDescription:
      "Anusha & Arjun's NRI Ammapalli Temple wedding — planned remotely from New Jersey, 140 guests, Gold package, full Telugu rituals with HD livestream. Planned by Satavahana Events.",
    sections: [
      {
        heading: "Planning remotely from New Jersey",
        body: "Anusha works in pharma R&D in New Jersey and had exactly one week in India for her wedding. Every decision — venue, muhurtam, mandap, catering, photographer, bridal stylist — had to be made on video calls. We sent weekly progress decks with options, vendor reels and venue walkthroughs filmed on-site at Ammapalli Temple.",
      },
      {
        heading: "Bridal styling without an in-person trial",
        body: "Our senior bridal stylist did three video consultations to lock the saree, jewellery and HD makeup look. Trials happened the day before the wedding, with the stylist on stand-by for the entire morning of the ceremony.",
      },
      {
        heading: "The temple ceremony",
        body: "A 11:15 AM muhurtam at Ammapalli Sri Sita Ramachandra Swamy Temple, with the senior purohit briefed on the family's Vaikhanasa traditions. The mandap was kept classical — fresh jasmine, marigold, brass kalash, banana stalks — to honour the temple's centuries-old aesthetic.",
      },
      {
        heading: "HD livestream for the US family",
        body: "30 of Anusha's relatives couldn't make the trip. We set up a three-camera HD livestream with a dedicated English-language commentary feed explaining each ritual. The stream peaked at 87 concurrent viewers across the US, UK and Australia.",
      },
      {
        heading: "Reception at the temple grounds",
        body: "Instead of moving to a hotel, the reception happened on the temple grounds themselves — a 140-guest black-and-gold setup with the gopuram lit behind the stage. Telangana-Andhra fusion menu, a curated dessert counter and a small live ghazal performance.",
      },
    ],
    highlights: [
      "100% remote planning from New Jersey",
      "11:15 AM Vaikhanasa-aligned muhurtam",
      "Classical jasmine & brass-kalash mandap",
      "3-camera HD livestream with English commentary",
      "Reception on the temple grounds",
    ],
    vendorCredits: [
      { role: "Remote planning", name: "Satavahana Events" },
      { role: "Bridal styling", name: "Satavahana Studio" },
      { role: "Mandap & décor", name: "Satavahana Events in-house design" },
      { role: "Catering", name: "Satavahana Events central kitchen" },
      { role: "Livestream & photography", name: "Satavahana Films" },
    ],
    testimonial: {
      quote:
        "As an NRI bride, I needed a planner who could handle everything remotely. Satavahana Events did exactly that — bookings, design, rituals, food. They livestreamed the wedding for our family in the US.",
      attribution: "Anusha & Arjun · June 2024",
    },
  },
];

export function getRealWedding(slug: string) {
  return realWeddings.find((w) => w.slug === slug);
}
