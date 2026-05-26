import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <div className="relative max-w-3xl mx-auto text-center">
      <Quote className="size-10 text-gold/40 mx-auto" />
      <p
        key={i}
        className="font-display text-2xl md:text-3xl mt-6 leading-relaxed text-foreground animate-[fadeUp_0.6s_ease-out]"
      >
        "{t.quote}"
      </p>
      <div className="mt-8">
        <div className="text-gold tracking-widest uppercase text-xs">{t.name}</div>
        <div className="text-muted-foreground text-xs mt-1">{t.location}</div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          aria-label="Previous testimonial"
          onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
          className="size-10 grid place-items-center border border-border rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 transition-all ${idx === i ? "w-8 bg-gold" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setI((p) => (p + 1) % testimonials.length)}
          className="size-10 grid place-items-center border border-border rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
