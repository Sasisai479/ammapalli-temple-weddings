import { stats } from "@/lib/site";

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
      {stats.map((s) => (
        <div key={s.label} className="bg-background p-8 md:p-12 text-center">
          <div className="font-display text-5xl md:text-6xl gold-gradient">{s.value}</div>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-3">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
