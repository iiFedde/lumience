import { brand } from "../data/brand";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialIcons() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <a
        href={brand.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition hover:scale-105 hover:border-white/30 hover:text-foreground"
      >
        <YoutubeIcon className="h-5 w-5" />
      </a>
      <a
        href={brand.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition hover:scale-105 hover:border-white/30 hover:text-foreground"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
