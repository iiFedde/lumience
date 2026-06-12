import { Clapperboard, Disc3, Sparkles } from "lucide-react";

const items = [
  { icon: Clapperboard, label: "Videoclips op maat" },
  { icon: Sparkles, label: "Logo's met karakter" },
  { icon: Disc3, label: "Album covers die blijven hangen" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border/60 bg-foreground/[0.02]">
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs text-muted-foreground">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="inline-flex items-center gap-2">
            <Icon size={14} className="text-foreground" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
