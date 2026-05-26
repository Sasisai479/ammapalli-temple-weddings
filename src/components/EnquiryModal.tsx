import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";

type Ctx = { open: (prefillService?: string) => void; close: () => void };
const EnquiryContext = createContext<Ctx | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}

const BUDGETS = ["10–15 Lakhs", "15–20 Lakhs", "20–25 Lakhs", "25–50 Lakhs", "50 Lakhs+"];

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | undefined>();

  const open = useCallback((prefillService?: string) => {
    setPrefill(prefillService);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <EnquiryContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <EnquiryDialog prefill={prefill} onClose={close} />}
    </EnquiryContext.Provider>
  );
}

function EnquiryDialog({ prefill, onClose }: { prefill?: string; onClose: () => void }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const email = (fd.get("email") as string) || "";
    const date = (fd.get("date") as string) || "";
    const guests = (fd.get("guests") as string) || "";
    const budget = (fd.get("budget") as string) || "";
    const message = (fd.get("message") as string) || "";
    const selectedServices = fd.getAll("services").join(", ");

    const lines = [
      "*New Wedding Enquiry — Ammapalli Temple Weddings*",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      email && `*Email:* ${email}`,
      date && `*Wedding Date:* ${date}`,
      guests && `*Estimated Guests:* ${guests}`,
      budget && `*Budget:* ${budget}`,
      selectedServices && `*Services of Interest:* ${selectedServices}`,
      message && "",
      message && `*Message:*\n${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const waNumber = SITE.whatsapp.replace(/\D/g, "");
    const url = `https://wa.me/${waNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md aspect-[4/5] max-h-[90vh] bg-card border border-border shadow-deep flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted-foreground hover:text-gold transition-colors z-10"
        >
          <X className="size-5" />
        </button>

        <div className="px-6 pt-6 pb-3 text-center border-b border-border shrink-0">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Instant Enquiry</div>
          <h2 className="font-display text-2xl mt-2">Wedding <span className="gold-gradient italic">enquiry</span></h2>
          <p className="text-xs text-muted-foreground mt-1.5">Fill in your details — we'll reply on WhatsApp within minutes.</p>
        </div>

        <form onSubmit={onSubmit} className="px-6 py-5 space-y-4 overflow-y-auto flex-1">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="Wedding Date" name="date" type="date" />
            <Field label="Estimated Guests" name="guests" type="number" />
          </div>

          <div className="space-y-3">
            <Label>Your Budget</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BUDGETS.map((b) => (
                <label
                  key={b}
                  className="flex items-center gap-2 border border-border bg-background px-3 py-2.5 cursor-pointer hover:border-gold transition-colors text-sm"
                >
                  <input type="radio" name="budget" value={b} className="accent-gold" />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>
              Service Interest <span className="normal-case tracking-normal text-muted-foreground/70">(select all that apply)</span>
            </Label>
            <div className="grid sm:grid-cols-2 gap-2 max-h-36 overflow-y-auto pr-1">
              {services.map((s) => (
                <label
                  key={s.slug}
                  className="flex items-center gap-2 border border-border bg-background px-2.5 py-2 cursor-pointer hover:border-gold transition-colors text-xs"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={s.title}
                    defaultChecked={prefill === s.title}
                    className="accent-gold size-3.5 shrink-0"
                  />
                  <span>{s.title}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tell us about your wedding</Label>
            <textarea
              name="message"
              rows={2}
              className="w-full bg-background border border-border px-3 py-2 text-foreground focus:border-gold outline-none text-sm"
              placeholder="Family traditions, vision, anything we should know…"
            />
          </div>

          <button
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground rounded-full px-6 py-3 text-xs tracking-[0.3em] uppercase shadow-gold hover:translate-y-[-2px] transition-transform disabled:opacity-50"
          >
            {loading ? "Opening WhatsApp…" : (<>Send via WhatsApp <Send className="size-4" /></>)}
          </button>
          <p className="text-[10px] text-center text-muted-foreground">
            Your details will be sent to {SITE.phone} on WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-3 py-2 text-foreground focus:border-gold outline-none text-sm"
      />
    </div>
  );
}

/** Convenience trigger button — drop-in replacement for the old <Link to="/contact"> CTAs. */
export function EnquireButton({
  className,
  children,
  prefillService,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { prefillService?: string }) {
  const { open } = useEnquiry();
  return (
    <button type="button" onClick={() => open(prefillService)} className={className} {...rest}>
      {children}
    </button>
  );
}
