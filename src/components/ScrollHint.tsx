import { ChevronDown } from "lucide-react";

export function ScrollHint({ targetId = "preview" }: { targetId?: string }) {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTo}
      aria-label="Scroll naar voorproefje"
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition hover:text-foreground"
    >
      <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
      <ChevronDown size={22} className="scroll-hint-bounce" strokeWidth={1.75} />
    </button>
  );
}
