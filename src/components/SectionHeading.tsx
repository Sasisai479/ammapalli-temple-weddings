export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <div className={`text-xs tracking-[0.4em] uppercase text-gold ${align === "center" ? "ornament" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
        {title} {highlight && <span className="gold-gradient italic">{highlight}</span>}
      </h2>
      {intro && <p className="text-muted-foreground mt-6 leading-relaxed">{intro}</p>}
    </div>
  );
}
