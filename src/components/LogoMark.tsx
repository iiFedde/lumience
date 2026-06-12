export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className="text-white"
      aria-hidden
      focusable={false}
    >
      <circle
        cx="64"
        cy="64"
        r="58"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
      <path
        d="M64 18 L78 52 L64 44 L50 52 Z"
        fill="currentColor"
      />
      <path
        d="M38 92 L64 56 L90 92 H38 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="64" cy="22" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
