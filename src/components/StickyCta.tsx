import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function StickyCta() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl transition hover:scale-[1.02]"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      Gratis intake plannen
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
