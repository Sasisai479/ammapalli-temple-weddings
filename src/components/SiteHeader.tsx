import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/catering", label: "Catering" },
  { to: "/gallery", label: "Gallery" },
  { to: "/real-weddings", label: "Real Weddings" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none shrink-0">
          <span className="font-display text-xl md:text-2xl tracking-wide text-gold">Ammapalli</span>
          <span className="text-[9px] md:text-[10px] tracking-[0.28em] text-muted-foreground uppercase">Temple Weddings</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mr-6 xl:mr-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="hidden md:inline-flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-gold border border-gold/40 rounded-full px-3.5 py-1.5 hover:bg-gold/10 transition-colors whitespace-nowrap ml-auto lg:ml-0"
        >
          <Phone className="size-2.5" /> {SITE.phone}
        </a>
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground text-center"
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-gold tracking-[0.2em] uppercase mt-2">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
