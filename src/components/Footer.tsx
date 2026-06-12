import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { brand } from "../data/brand";

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Diensten", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container px-6 pt-24 pb-20 md:pt-32">
        <div className="mb-20 grid items-start gap-8 md:mb-28 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-9">
            <div className="mb-8 flex items-center gap-4">
              <span className="block h-px w-12 bg-foreground/40" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Manifest — 00
              </span>
            </div>
            <p
              className="display max-w-4xl text-balance uppercase leading-[1.02]"
              style={{ fontSize: "clamp(1.875rem, 5.2vw, 4.25rem)" }}
            >
              Liever één sterk{" "}
              <span className="accent-serif text-muted-foreground normal-case italic">
                visueel verhaal
              </span>
              <br className="hidden sm:block" /> dan tien{" "}
              <span className="accent-serif text-muted-foreground normal-case italic">
                generieke templates.
              </span>
            </p>
          </div>
          <div className="flex md:col-span-3 md:justify-end md:text-right">
            <div className="inline-flex flex-col gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>Studio</span>
              <span className="text-foreground">Sinds {brand.since}</span>
              <span>{brand.location}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-t border-border/60 pt-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <LogoMark size={36} />
              <span className="display text-lg uppercase tracking-tight text-foreground">
                {brand.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Visuele studio van {brand.designer} — videoclips, logo&apos;s en
              album covers voor artiesten en creatieve merken.
            </p>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Navigatie</h2>
            <div className="flex flex-col gap-2">
              {siteLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="w-fit text-sm text-foreground transition-colors hover:text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Contact</h2>
            <p className="text-sm text-foreground">
              E-mail:{" "}
              <a
                href={`mailto:${brand.email}`}
                className="hover:text-muted-foreground"
              >
                {brand.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Reactie binnen 24 uur
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand.name} · {brand.tagline}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
            <Link to="/voorwaarden" className="hover:text-foreground">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
