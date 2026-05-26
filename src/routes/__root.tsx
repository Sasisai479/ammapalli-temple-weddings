import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingActions } from "@/components/FloatingActions";
import { EnquiryProvider } from "@/components/EnquiryModal";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page has wandered off the wedding aisle.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs tracking-[0.3em] uppercase text-primary-foreground hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gold px-5 py-2 text-xs tracking-[0.3em] uppercase text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-2 text-xs tracking-[0.3em] uppercase">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ammapalli Temple Weddings — Call +91 88855 52388 | Official Planners" },
      { name: "description", content: "Ammapalli Temple Weddings — official contact +91 88855 52388. Hyderabad's trusted Ammapalli Temple wedding planners by Satavahana Events. Muhurtam, mandap, Telugu catering, photography. Shamshabad." },
      { name: "keywords", content: "ammapalli temple weddings, ammapalli temple wedding photography, ammapalli temple wedding videography, ammapalli temple marriage booking, ammapalli sita rama chandra swamy temple wedding, temple weddings in hyderabad, best temple wedding planners in hyderabad, traditional telugu temple weddings, ammapalli wedding decorations, hyderabad temple wedding packages, south indian temple weddings hyderabad, ammapalli temple pre wedding shoot, wedding planners for temple weddings, budget temple weddings hyderabad, luxury temple wedding planners hyderabad, ammapalli temple marriage arrangements, hindu temple wedding venue hyderabad, satavahana events ammapalli weddings, ammapalli temple wedding management, destination temple weddings telangana, ammapalli temple weddings contact number, +91 88855 52388, 8885552388, ammapalli, ammapalli temple, ammapalli temple shamshabad, ammapalli temple hyderabad, ammapalli temple timings, ammapalli temple muhurtham, ammapalli temple wedding cost, sri sita ramachandra swamy temple, ammapalli ramalayam, shamshabad temple, ammapally temple, Satavahana Events" },
      { name: "author", content: "Satavahana Events" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Shamshabad, Hyderabad" },
      { name: "geo.position", content: "17.221;78.396" },
      { name: "ICBM", content: "17.221, 78.396" },
      { property: "og:title", content: "Ammapalli Temple Weddings — Call +91 88855 52388 | Satavahana Events" },
      { property: "og:description", content: "Book Ammapalli Temple weddings with Satavahana Events. Complete temple wedding planning in Hyderabad. Call +91 88855 52388." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ammapalli Temple Weddings" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ammapalli Temple Weddings — Call +91 88855 52388 | Satavahana Events" },
      { name: "twitter:description", content: "Sacred Ammapalli Temple weddings by Satavahana Events. Call +91 88855 52388." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/IiD9z4h4zTRB6OOyABaelEWJUFP2/social-images/social-1778866079141-AMMAPALLI_TEMPLE_WEDDINGS.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/IiD9z4h4zTRB6OOyABaelEWJUFP2/social-images/social-1778866079141-AMMAPALLI_TEMPLE_WEDDINGS.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "EventPlanner"],
          "@id": "https://ammapallitempleweddings.com/#business",
          name: "Ammapalli Temple Weddings",
          alternateName: ["Ammapalli Weddings", "Ammapalli Temple Wedding", "Ammapalli Wedding by Satavahana Events"],
          description: "Official wedding planners for Ammapalli Sri Sita Ramachandra Swamy Temple, Shamshabad, Hyderabad. Complete temple wedding planning, mandap décor, Telugu catering, photography, priest arrangements and guest management by Satavahana Events.",
          url: "https://ammapallitempleweddings.com",
          logo: "https://ammapallitempleweddings.com/favicon.ico",
          image: "https://storage.googleapis.com/gpt-engineer-file-uploads/IiD9z4h4zTRB6OOyABaelEWJUFP2/social-images/social-1778866079141-AMMAPALLI_TEMPLE_WEDDINGS.webp",
          telephone: "+918885552388",
          email: "hello@ammapalliweddings.com",
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ammapalli Temple Road, Shamshabad",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "501218",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 17.221, longitude: 78.396 },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
          ],
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "08:00", closes: "21:00",
          }],
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+918885552388",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en","te","hi"],
          }],
          parentOrganization: {
            "@type": "Organization",
            name: "Satavahana Events",
            url: "https://ammapallitempleweddings.com",
          },
          sameAs: [
            "https://instagram.com/",
            "https://facebook.com/",
            "https://youtube.com/",
            "https://maps.google.com/?q=Ammapalli+Temple+Shamshabad+Hyderabad",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ammapalli Temple Weddings",
          url: "https://ammapallitempleweddings.com",
          publisher: { "@type": "Organization", name: "Satavahana Events" },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://ammapallitempleweddings.com/services?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
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
                text: "The official contact number for Ammapalli Temple Weddings (by Satavahana Events) is +91 88855 52388. Call or WhatsApp this number to book an Ammapalli Temple wedding, check muhurtam dates, or get a free consultation.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book an Ammapalli Temple wedding?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call or WhatsApp Ammapalli Temple Weddings on +91 88855 52388 (Satavahana Events, Shamshabad, Hyderabad). They handle the temple muhurtam booking, priest coordination, mandap décor, Telugu catering, photography and guest management end-to-end.",
              },
            },
            {
              "@type": "Question",
              name: "Who are the official wedding planners at Ammapalli Temple?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Satavahana Events — operating as Ammapalli Temple Weddings — are the trusted wedding planners at Ammapalli Sri Sita Ramachandra Swamy Temple, Shamshabad, Hyderabad. 500+ weddings, 12+ years. Contact: +91 88855 52388.",
              },
            },
            {
              "@type": "Question",
              name: "Where is Ammapalli Temple located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ammapalli Sri Sita Ramachandra Swamy Temple is on Ammapalli Temple Road, Shamshabad, Hyderabad, Telangana 501218 — about 12 km from Rajiv Gandhi International Airport. For wedding bookings call +91 88855 52388.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SpeakableSpecification",
          xpath: [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <EnquiryProvider>
        <SiteHeader />
        <main className="pt-20">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingActions />
        <Toaster />
      </EnquiryProvider>
    </QueryClientProvider>
  );
}
