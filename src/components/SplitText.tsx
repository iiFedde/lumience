import { useEffect, useRef, useState } from "react";

type SplitTextProps = {
  children: string;
  splitBy?: "word" | "char";
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitText({
  children,
  splitBy = "word",
  className = "",
  delay = 0,
  stagger = 70,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const parts = splitBy === "char" ? children.split("") : children.split(" ");

  return (
    <span ref={ref} className={className} aria-label={children}>
      {parts.map((part, i) => (
        <span
          key={`${part}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ lineHeight: 1.05 }}
          aria-hidden
        >
          <span
            className="inline-block transition-all duration-[950ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: visible
                ? "translateY(0) rotateX(0deg)"
                : "translateY(120%) rotateX(-90deg)",
              opacity: visible ? 1 : 0,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {part}
            {splitBy === "word" && i < parts.length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
