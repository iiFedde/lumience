import { brand } from "../data/brand";

type AstroLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeClass = {
  sm: "h-8 w-auto",
  md: "h-12 w-auto",
  lg: "h-16 w-auto",
  hero: "h-auto w-full max-w-[min(320px,85vw)]",
};

export function AstroLogo({ className = "", size = "md" }: AstroLogoProps) {
  return (
    <img
      src={brand.logo}
      alt={brand.name}
      className={`object-contain ${sizeClass[size]} ${className}`}
      draggable={false}
    />
  );
}
