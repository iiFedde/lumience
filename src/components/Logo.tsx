import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img src="/logo.svg" alt="" className="h-9 w-9" aria-hidden />
      <span className="text-sm font-bold uppercase tracking-wide">
        <span className="text-white">Stanic</span>
        <span className="text-[hsl(var(--muted-foreground))]">design</span>
      </span>
    </Link>
  );
}
