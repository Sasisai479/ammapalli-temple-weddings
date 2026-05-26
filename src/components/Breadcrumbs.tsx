import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs tracking-widest uppercase text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="size-3" /> Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-2">
            <ChevronRight className="size-3 text-gold/60" />
            {item.to ? (
              <Link to={item.to} className="hover:text-gold transition-colors">{item.label}</Link>
            ) : (
              <span className="text-gold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
