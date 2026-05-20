import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[hsl(0_0%_4%)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Manifest — 00
            </p>
            <p className="max-w-md text-2xl font-bold leading-snug md:text-3xl">
              Liever bouw ik één goede site
              <br />
              dan tien gehaaste.
            </p>
            <div className="mt-6 flex gap-6 text-sm text-[hsl(var(--muted-foreground))]">
              <span>Studio</span>
              <span>Sinds 2023</span>
              <span>Nederland</span>
            </div>
          </div>

          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Een soloontwerper uit Nederland die websites op maat bouwt — geen
              sjablonen, wel persoonlijke aandacht.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                Site
              </h2>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                Contact
              </h2>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                E-mail:{" "}
                <a
                  href="mailto:info@stanicdesign.nl"
                  className="hover:text-white"
                >
                  info@stanicdesign.nl
                </a>
                <br />
                Telefoon:{" "}
                <a href="tel:+31636408116" className="hover:text-white">
                  06 36408116
                </a>
              </p>
              <p className="mt-3 text-xs text-[hsl(var(--muted-foreground))]">
                Reactie binnen 24 uur
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-[hsl(var(--muted-foreground))] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Stanicdesign · BTW-vrijgesteld (KOR)</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link to="/voorwaarden" className="hover:text-white">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
