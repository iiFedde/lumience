export const brand = {
  name: "Astro Visuals",
  shortName: "Astro",
  logo: "/logo-astro.png",
  tagline: "Videoclips, logo's & album covers",
  email: "hello@astrovisuals.nl",
  designer: "Astro",
  location: "Amsterdam",
  since: "2026",
  /** Zet op false als de volledige site live mag. */
  comingSoon: true,
  social: {
    youtube: "https://www.youtube.com/@astrofso",
    instagram: "https://www.instagram.com/astrofso/",
  },
  /** Eén clip op de coming soon-pagina — geen volledig portfolio nodig. */
  featuredClip: {
    youtubeId: "DIsvkgHQCPI",
    spotifyTrackId: "0D9rHJbgFtKEvHn9XuMB9a",
    title: "wstxnks - 13 (Official music video)",
  },
} as const;
