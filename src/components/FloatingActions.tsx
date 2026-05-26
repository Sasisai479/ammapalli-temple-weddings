import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import whatsappLogo from "@/assets/whatsapp-logo.png";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Satavahana%20Events%2C%20I%27d%20like%20to%20enquire%20about%20an%20Ammapalli%20Temple%20wedding.`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp us"
        className="size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-deep hover:scale-110 transition-transform"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="size-7" />
      </a>
      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label="Call us"
        className="size-14 grid place-items-center rounded-full bg-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
