import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <LogoMark size={36} />
      <span className="display text-lg uppercase tracking-tight">
        Astro
        <span className="text-muted-foreground"> Visuals</span>
      </span>
    </Link>
  );
}
