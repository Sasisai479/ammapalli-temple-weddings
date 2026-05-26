import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQList({ items, className = "" }: { items: { q: string; a: string }[]; className?: string }) {
  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-lg md:text-xl text-foreground hover:text-gold py-6">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
