import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: "accepted", date: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      className={`fixed bottom-4 left-4 right-4 z-[60] rounded-2xl border border-border/60 bg-card/95 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out md:right-6 md:bottom-6 md:left-auto md:max-w-sm ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <p className="text-sm leading-relaxed text-foreground/90">
        Deze site gebruikt alleen functionele cookies om goed te werken — geen
        tracking of advertenties.
      </p>
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={accept}
          className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Accepteren
        </button>
        <Link
          to="/cookies"
          className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Meer info
        </Link>
      </div>
    </div>
  );
}
