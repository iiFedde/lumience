import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./LogoMark";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Diensten" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50">
        <nav
          className={`transition-all duration-500 ${scrolled ? "glass py-4" : "py-6"}`}
        >
          <div className="container flex items-center justify-between px-6">
            <Link to="/" className="group flex items-center gap-3">
              <LogoMark size={36} />
              <span className="display text-lg uppercase tracking-tight text-foreground">
                Astro
                <span className="text-muted-foreground"> Visuals</span>
              </span>
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm transition-colors duration-300 hover:text-foreground ${
                    pathname === item.to
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/offerte"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Start project
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="relative z-50 text-foreground md:hidden"
              aria-label="Menu openen"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center gap-2 px-10">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`display py-3 text-4xl uppercase transition-all duration-500 sm:text-5xl ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${
                pathname === item.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              style={{ transitionDelay: open ? `${i * 75}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
