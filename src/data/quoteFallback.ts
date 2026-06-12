export type QuoteCategory = {
  id: string;
  name: string;
  description: string | null;
  step_type: "single" | "multi" | "text" | "number" | "contact";
  required: boolean;
};

export type QuoteOption = {
  id: string;
  category_id: string;
  label: string;
  description: string | null;
};

export const quoteCategories: QuoteCategory[] = [
  {
    id: "type",
    name: "Wat zoek je?",
    description: "Selecteer alles wat van toepassing is — combinaties zijn welkom.",
    step_type: "multi",
    required: true,
  },
  {
    id: "brief",
    name: "Jouw project",
    description: "Vertel over je track, merk, stijl of referenties.",
    step_type: "text",
    required: true,
  },
  {
    id: "contact",
    name: "Contact",
    description: "Waar kan Astro je bereiken voor een offerte?",
    step_type: "contact",
    required: true,
  },
];

export const quoteOptions: QuoteOption[] = [
  {
    id: "video",
    category_id: "type",
    label: "Videoclip",
    description: "Music video of performance clip",
  },
  {
    id: "logo",
    category_id: "type",
    label: "Logo",
    description: "Monogram, wordmark of volledige identity",
  },
  {
    id: "cover",
    category_id: "type",
    label: "Album cover",
    description: "Artwork voor single, EP of album",
  },
  {
    id: "motion",
    category_id: "type",
    label: "Motion / promo",
    description: "Teasers, lyric video of social assets",
  },
  {
    id: "combo",
    category_id: "type",
    label: "Combinatie",
    description: "Meerdere deliverables in één project",
  },
];
