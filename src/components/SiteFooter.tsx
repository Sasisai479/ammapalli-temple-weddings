import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="font-display text-3xl text-gold">Ammapalli</div>
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">
            Temple Weddings
          </div>
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed max-w-sm">
            Bespoke temple wedding planning at Ammapalli Sri Sita Ramachandra Swamy Temple — managed by Satavahana Events,
            Hyderabad's trusted name in luxury South Indian weddings.
          </p>
          <div className="flex gap-4 mt-8">
            <a href={SITE.instagram} aria-label="Instagram" className="size-10 grid place-items-center border border-border rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"><Instagram className="size-4" /></a>
            <a href={SITE.facebook} aria-label="Facebook" className="size-10 grid place-items-center border border-border rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"><Facebook className="size-4" /></a>
            <a href={SITE.youtube} aria-label="YouTube" className="size-10 grid place-items-center border border-border rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"><Youtube className="size-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">All Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/services/$slug" params={{ slug: "temple-wedding-planning" }} className="hover:text-gold">Temple Planning</Link></li>
            <li><Link to="/catering" className="hover:text-gold">Catering Services</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "floral-decoration" }} className="hover:text-gold">Floral Decoration</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "wedding-photography" }} className="hover:text-gold">Photography</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "wedding-videography" }} className="hover:text-gold">Videography</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "bridal-makeup" }} className="hover:text-gold">Bridal Makeup</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "reception-planning" }} className="hover:text-gold">Reception</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin className="size-4 text-gold mt-0.5 shrink-0" /><span>{SITE.address}</span></li>
            <li className="flex items-start gap-3"><Phone className="size-4 text-gold mt-0.5 shrink-0" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="size-4 text-gold mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[11px] tracking-[0.3em] uppercase text-muted-foreground px-4">
        © {new Date().getFullYear()} Ammapalli Temple Weddings · Managed by Satavahana Events · Hyderabad, Telangana
      </div>
    </footer>
  );
}
