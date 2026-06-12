import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      className={`fixed right-5 bottom-5 z-[55] inline-flex items-center gap-2 rounded-full bg-foreground py-3 pr-3 pl-4 text-sm font-semibold text-background shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
      </span>
      Bespreek je project
      <ArrowUpRight size={16} />
    </Link>
  );
}
