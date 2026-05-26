import temple from "@/assets/wed-temple-ceremony.jpg";
import mandap from "@/assets/wed-mandap-decor.jpg";
import catering from "@/assets/wed-catering.jpg";
import couple from "@/assets/wed-couple.jpg";
import haldi from "@/assets/svc-haldi-mehendi.png";
import mehendi from "@/assets/wed-mehendi.jpg";
import sangeet from "@/assets/svc-entertainment.png";
import soundLighting from "@/assets/svc-sound-lighting.png";
import reception from "@/assets/svc-reception.png";
import floral from "@/assets/wed-floral.jpg";
import rituals from "@/assets/wed-rituals.jpg";
import videography from "@/assets/wed-videography.jpg";
import bridal from "@/assets/svc-bridal.png";
import ammapalli from "@/assets/svc-accommodation.png";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "temple-wedding-planning",
    title: "Temple Wedding Planning",
    tagline: "Sacred ceremonies, flawlessly orchestrated",
    description:
      "End-to-end planning of your Ammapalli Temple wedding — from muhurtam coordination and priest arrangements to guest hospitality and ritual flow. Our planners handle every detail so your families can focus on the moment.",
    image: temple,
    highlights: ["Muhurtam & ritual scheduling", "Priest & purohit coordination", "Temple liaison & permissions", "Guest hospitality desk", "Logistics & vendor management"],
    benefits: [
      "Stress-free, single-point planning across every ceremony day",
      "Deep familiarity with Ammapalli Temple traditions and timings",
      "Telugu-speaking on-ground crew dedicated to your event",
      "Clear, transparent budgeting with no hidden costs",
    ],
    process: [
      { step: "Consultation", detail: "Free 60-minute discovery call to understand your vision, customs and budget." },
      { step: "Proposal & Design", detail: "A detailed plan with mandap design, vendors, timelines and a transparent quote." },
      { step: "Production", detail: "Vendor booking, rehearsals, accommodation and ritual scheduling." },
      { step: "Wedding Day", detail: "Dedicated planner + on-ground crew managing every moment from start to finish." },
    ],
    faqs: [
      { q: "Do you handle the entire Ammapalli Temple booking?", a: "Yes — we coordinate with temple authorities for your muhurtam slot, permissions, ritual setup and priest arrangements." },
      { q: "How early should we book?", a: "We recommend booking 4–6 months in advance for premium muhurtam dates, especially during Telugu wedding season." },
    ],
  },
  {
    slug: "wedding-catering",
    title: "Wedding Catering Services",
    tagline: "A Telugu feast, served with grace",
    description:
      "Authentic South Indian wedding catering with traditional Telangana, Andhra and multi-cuisine menus. From banana-leaf bhojanam to live counters and grand reception dinners — our catering is hygienic, elegant and unforgettable.",
    image: catering,
    highlights: ["Traditional Telangana thali", "Andhra wedding feast", "Live chaat & dosa counters", "Vegetarian & non-vegetarian menus", "Sweets, payasam & desserts"],
    benefits: [
      "FSSAI-certified hygiene and food-safety standards",
      "Custom menus tailored to family traditions and dietary needs",
      "Trained service staff in traditional attire",
      "Scalable from 100 to 2,000+ guests",
    ],
    process: [
      { step: "Menu Tasting", detail: "Complimentary tasting session to finalise your menu." },
      { step: "Customisation", detail: "Family recipes, regional specialities and dietary preferences are incorporated." },
      { step: "On-site Setup", detail: "Live counters, plated service or buffet — staged to match your décor." },
      { step: "Service & Cleanup", detail: "Uniformed staff, refilling, and complete post-event cleanup." },
    ],
    faqs: [
      { q: "Can you serve traditional Telangana wedding food?", a: "Absolutely — pulihora, gongura pachadi, bobbatlu, garelu, ariselu and more are part of our signature Telangana wedding menu." },
      { q: "Do you cater for non-vegetarian receptions?", a: "Yes, we offer separate non-veg menus including chicken biryani, mutton curry, fish fry and Andhra-style specialities." },
    ],
  },
  {
    slug: "floral-decoration",
    title: "Floral Decoration",
    tagline: "Blooms that tell your story",
    description:
      "Lavish floral installations using fresh jasmine, marigold, roses and orchids. Our florists craft mandap canopies, entrance arches, aisle florals and stage backdrops with a luxury South Indian sensibility.",
    image: floral,
    highlights: ["Jasmine & marigold mandaps", "Floral chandeliers", "Aisle & entrance arches", "Stage backdrop florals", "Brass urli centrepieces"],
    benefits: [
      "Sourced fresh from the finest flower markets",
      "Custom palettes — traditional, modern luxe or pastel",
      "Eco-friendly setup and post-event removal",
      "Photography-ready arrangements",
    ],
    process: [
      { step: "Theme Mood-board", detail: "We share visual references and a 3D mock-up." },
      { step: "Sample Approval", detail: "Live samples of garlands and centrepieces for sign-off." },
      { step: "Day-of Setup", detail: "On-site team installs florals 6–8 hours before guests arrive." },
      { step: "Touch-ups", detail: "Continuous refresh through the event — every bloom stays vibrant." },
    ],
    faqs: [
      { q: "Can we choose specific flower colours?", a: "Yes — we work with you to choose a palette that matches your outfits, theme and family preferences." },
      { q: "Do you offer artificial flower options?", a: "We specialise in fresh florals but offer high-quality artificial accents where needed for budget or longevity." },
    ],
  },
  {
    slug: "mandap-decoration",
    title: "Traditional Mandap Decoration",
    tagline: "The sacred stage, sculpted in beauty",
    description:
      "Bespoke mandap design rooted in South Indian tradition — pillared canopies, banana stalks, kalash placements, brass lamps and intricate floral architecture, designed to honour the rituals.",
    image: mandap,
    highlights: ["Custom mandap architecture", "Banana stalks & kalash", "Brass diyas & lamps", "Hanging floral canopy", "Kanyadaan seating design"],
    benefits: [
      "Designed in accordance with Telugu wedding rituals",
      "Sturdy structures, safety-certified",
      "Photogenic from every angle",
      "Modular setups for indoor or temple courtyards",
    ],
    process: [
      { step: "Design", detail: "3D mandap renders for your approval." },
      { step: "Engineering", detail: "Structure built and stress-tested off-site." },
      { step: "Installation", detail: "Decorated on-site the morning of the wedding." },
      { step: "Dismantle", detail: "Quick, clean removal post-ceremony." },
    ],
    faqs: [
      { q: "Can you set up a mandap inside Ammapalli Temple premises?", a: "Yes — we are familiar with temple guidelines and have set up mandaps that respect both ritual flow and the temple's sanctity." },
      { q: "How long does mandap setup take?", a: "Typically 6–10 hours depending on complexity and venue access." },
    ],
  },
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Frames that outlive a lifetime",
    description:
      "Cinematic candid photography by award-winning Telugu wedding photographers. We capture rituals, expressions and quiet in-between moments with a documentary eye.",
    image: couple,
    highlights: ["Candid wedding photography", "Traditional ritual coverage", "Pre-wedding shoots", "Couple portraits", "Same-day edits"],
    benefits: [
      "Multi-photographer coverage with backup gear",
      "Edited high-resolution album within 4 weeks",
      "Premium photo books and frames available",
      "Drone photography for outdoor venues",
    ],
    process: [
      { step: "Style Discussion", detail: "We align on candid vs traditional, mood and shot list." },
      { step: "Pre-wedding", detail: "Optional outdoor or temple pre-wedding shoot." },
      { step: "Wedding Coverage", detail: "Full ceremony coverage by lead + assistant photographers." },
      { step: "Delivery", detail: "Curated edit, online gallery and printed album." },
    ],
    faqs: [
      { q: "How many photos do we receive?", a: "Typically 600–1,200 hand-picked, edited images depending on event duration." },
      { q: "Do you cover all ceremonies?", a: "Yes — haldi, mehendi, sangeet, wedding and reception can all be bundled." },
    ],
  },
  {
    slug: "wedding-videography",
    title: "Wedding Videography",
    tagline: "Cinema for the most important day",
    description:
      "Cinematic wedding films — from teaser reels to full-length documentaries. 4K coverage, drone footage, live streaming and same-day highlights for an audience that can't be there in person.",
    image: videography,
    highlights: ["4K cinematic films", "Drone aerial coverage", "Live streaming", "Same-day edit reels", "Highlight teasers"],
    benefits: [
      "Cinematic colour grading and sound design",
      "Multi-camera setups for every angle",
      "Stream to family abroad in HD",
      "Edited delivery in 6–8 weeks",
    ],
    process: [
      { step: "Concept", detail: "Tone, music, narrative direction agreed upfront." },
      { step: "Filming", detail: "Crew of 2–4 cinematographers across all events." },
      { step: "Edit", detail: "Teaser within 7 days; full film in 6–8 weeks." },
      { step: "Delivery", detail: "Cloud delivery + branded USB drive with all assets." },
    ],
    faqs: [
      { q: "Can you live-stream our temple wedding?", a: "Yes — we offer professional multi-camera HD live streaming to YouTube, Zoom or private links." },
      { q: "Do you provide drone shots inside temple grounds?", a: "Where temple authorities permit, we operate licensed drones for sweeping aerial coverage." },
    ],
  },
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup & Styling",
    tagline: "Radiance, ritual-ready",
    description:
      "Premium HD and airbrush bridal makeup by senior artists specialising in South Indian brides. Multiple looks across haldi, muhurtam and reception — designed to last under temple lights and long photography sessions.",
    image: bridal,
    highlights: ["HD & airbrush makeup", "Traditional South Indian look", "Reception glam look", "Hair styling & jadai billalu", "Saree & jewellery draping"],
    benefits: [
      "Dermatologically tested premium products",
      "Trial sessions before wedding day",
      "On-location service for bride & family",
      "Sweat-proof, photo-ready finish",
    ],
    process: [
      { step: "Trial", detail: "Pre-wedding trial to finalise looks." },
      { step: "Day 1: Haldi/Mehendi", detail: "Light, fresh styling for daytime functions." },
      { step: "Wedding Day", detail: "Full bridal look with traditional jewellery." },
      { step: "Reception", detail: "Glamorous transformation with second look." },
    ],
    faqs: [
      { q: "Do you offer makeup for the bride's family?", a: "Yes — packages can include the mother of the bride, sisters and bridesmaids." },
      { q: "How long does bridal makeup take?", a: "Typically 2.5–3 hours for the full bridal look including hair and draping." },
    ],
  },
  {
    slug: "guest-accommodation",
    title: "Guest Accommodation",
    tagline: "Hospitality that feels like home",
    description:
      "End-to-end accommodation management for outstation and NRI guests — premium hotels near Ammapalli Temple, group transport, welcome hampers and concierge support.",
    image: ammapalli,
    highlights: ["Hotel block bookings", "Airport transfers", "Welcome hampers", "Local sightseeing", "24/7 concierge desk"],
    benefits: [
      "Negotiated group rates with partner hotels",
      "Single point of contact for guest queries",
      "Multilingual concierge support",
      "Curated welcome hampers with local touches",
    ],
    process: [
      { step: "Guest List Review", detail: "We map outstation and VIP guests." },
      { step: "Hotel Allocation", detail: "Block-booked rooms with curated amenities." },
      { step: "Transport", detail: "Airport pickups, inter-venue shuttles, return drops." },
      { step: "On-site Desk", detail: "Concierge desk at the hotel for queries." },
    ],
    faqs: [
      { q: "How far is Ammapalli Temple from Hyderabad airport?", a: "Approximately 60 km — about a 90-minute drive. We arrange comfortable AC transfers for guests." },
      { q: "Do you handle group hotel bookings?", a: "Yes, we partner with leading 3–5 star hotels around Shamshabad and arrange block rates." },
    ],
  },
  {
    slug: "wedding-entertainment",
    title: "Wedding Entertainment",
    tagline: "A celebration that never pauses",
    description:
      "Live music, classical performances, DJs, dhol players, baraat bands and choreographed sangeet productions — curated entertainment for every ceremony.",
    image: sangeet,
    highlights: ["Live carnatic & Hindustani music", "DJ & sound system", "Dhol & baraat bands", "Sangeet choreography", "Celebrity bookings"],
    benefits: [
      "Vetted, professional performers",
      "Sound & lighting included",
      "Stage management on the day",
      "Family choreography support",
    ],
    process: [
      { step: "Brief", detail: "We understand the moods you want across events." },
      { step: "Curation", detail: "We propose artists and performances." },
      { step: "Rehearsal", detail: "Choreography sessions with family." },
      { step: "Show Day", detail: "Full show direction and tech support." },
    ],
    faqs: [
      { q: "Can you arrange Telugu folk performances?", a: "Yes — Lambadi, Perini Shivatandavam and other classical Telugu performances are available." },
      { q: "Do you provide DJs for the reception?", a: "Yes, with full lighting, sound and an MC if required." },
    ],
  },
  {
    slug: "reception-planning",
    title: "Reception Planning",
    tagline: "A grand finale, in black and gold",
    description:
      "Reception design with a luxury sensibility — chandelier-lit ballrooms, themed entrances, multi-cuisine catering, premium bar service and entertainment direction for the night to remember.",
    image: reception,
    highlights: ["Stage & entrance design", "Premium bar service", "Multi-cuisine reception menu", "Entertainment direction", "Guest seating plans"],
    benefits: [
      "Banquets sourced for any guest count",
      "Themed décor: classic black & gold, pastel, rustic luxe",
      "Live counters and chef stations",
      "Professional MC and event flow",
    ],
    process: [
      { step: "Theme & Venue", detail: "Hotel or banquet selection and theme lock-in." },
      { step: "Design", detail: "Décor, lighting and stage drawings." },
      { step: "Catering", detail: "Reception menu tasting and finalisation." },
      { step: "Event Night", detail: "End-to-end production direction." },
    ],
    faqs: [
      { q: "Do you book reception venues in Hyderabad?", a: "Yes — we partner with leading hotels and convention centres across Hyderabad." },
      { q: "Can you serve a multi-cuisine menu?", a: "Yes — Indian, Continental, Chinese and live counters are all available." },
    ],
  },
  {
    slug: "sound-lighting",
    title: "Sound & Lighting Production",
    tagline: "Engineered ambience for sacred moments",
    description:
      "Concert-grade sound systems, theatrical lighting, LED walls and stage truss production for sangeet, reception and large-scale wedding events.",
    image: soundLighting,
    highlights: ["Line-array sound systems", "Moving-head lighting", "LED walls & projection", "Stage truss & risers", "FOH engineers"],
    benefits: [
      "Tour-grade equipment from international brands",
      "Backup generators and redundancy",
      "Tested with rehearsals",
      "Aesthetic that matches the décor",
    ],
    process: [
      { step: "Tech Plot", detail: "Lighting and sound plot designed for your venue." },
      { step: "Load-in", detail: "Full setup the day before key events." },
      { step: "Rehearsal", detail: "Cue-to-cue rehearsal with performers." },
      { step: "Showtime", detail: "Live operation by trained engineers." },
    ],
    faqs: [
      { q: "Do you provide sound for the temple ceremony itself?", a: "Yes — discreet, low-profile sound that respects the sanctity of the temple while ensuring all guests can hear the rituals." },
      { q: "Can you set up LED walls for the reception?", a: "Yes — single, dual or wraparound LED walls with custom content." },
    ],
  },
  {
    slug: "haldi-mehendi-setup",
    title: "Mehendi & Haldi Setup",
    tagline: "Joy, painted in turmeric and henna",
    description:
      "Vibrant haldi and mehendi décor with marigold backdrops, themed lounges, master mehendi artists and curated grazing tables — the daytime celebration that sets the tone for the wedding.",
    image: haldi,
    highlights: ["Marigold haldi backdrops", "Master mehendi artists", "Themed lounges & swings", "Live snack counters", "Folk performances"],
    benefits: [
      "Daytime décor that photographs beautifully",
      "Multiple mehendi artists for guests",
      "Hygienic herbal haldi mix",
      "Music and folk acts curated",
    ],
    process: [
      { step: "Theme", detail: "Marigold, phulkari, boho or modern palettes." },
      { step: "Setup", detail: "Décor, swings and lounges installed morning-of." },
      { step: "Artists", detail: "Mehendi and folk performers booked." },
      { step: "Service", detail: "Snacks and beverages served through the day." },
    ],
    faqs: [
      { q: "How many mehendi artists do you provide?", a: "Typically 4–8 artists depending on guest count to ensure no one waits long." },
      { q: "Can haldi be set up in our home?", a: "Yes — we offer compact home setups as well as venue-scale productions." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
