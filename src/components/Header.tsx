import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Diensten" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[hsl(var(--background))]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/offerte"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Vraag offerte
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20 md:hidden">
          <nav className="flex flex-col gap-2 px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/offerte"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-base font-semibold text-black"
            >
              Vraag offerte
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
