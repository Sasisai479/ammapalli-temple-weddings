import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.073 0-.158-.014-.245-.115-.187-2.15-1.146-2.493-1.36zm-2.78 9.146c-1.832 0-3.563-.515-5.05-1.476L4 27l2.207-6.117a10.6 10.6 0 0 1-1.633-5.7c0-5.876 4.785-10.65 10.66-10.65 5.876 0 10.665 4.774 10.665 10.65 0 5.876-4.79 10.65-10.665 10.65zm0-19.108c-4.66 0-8.45 3.78-8.45 8.45 0 1.85.612 3.6 1.72 5.013L9.55 24.5l3.06-.71c1.45 1.146 3.158 1.748 4.92 1.748 4.658 0 8.45-3.78 8.45-8.45 0-2.255-.882-4.376-2.475-5.97a8.42 8.42 0 0 0-5.978-2.476z"/>
    </svg>
  );
}

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
        <WhatsAppIcon className="size-7" />
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
