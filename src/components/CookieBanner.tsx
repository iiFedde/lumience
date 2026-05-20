import { useState } from "react";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("cookies-accepted"),
  );

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border border-white/10 bg-[hsl(var(--card))] p-4 shadow-2xl md:bottom-6 md:left-6 md:right-auto">
      <p className="text-sm text-[hsl(var(--muted-foreground))]">
        Deze site gebruikt alleen functionele cookies om goed te werken — geen
        tracking of advertenties.
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("cookies-accepted", "1");
            setVisible(false);
          }}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
        >
          Accepteren
        </button>
        <Link
          to="/cookies"
          className="px-2 py-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-white"
        >
          Meer info
        </Link>
      </div>
    </div>
  );
}
