import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardList,
  Loader2,
  Mail,
  MessageCircle,
  Upload,
  X,
} from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { brand } from "../data/brand";
import {
  quoteCategories,
  quoteOptions,
  type QuoteCategory,
} from "../data/quoteFallback";

const WA_TEXT =
  "Hoi Astro! Ik ben geïnteresseerd in een offerte voor een visueel project.";

type StepState = {
  optionIds: string[];
  text?: string;
  numbers: Record<string, number>;
  contact?: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    source?: string;
  };
};

export function Offerte() {
  const [categories] = useState<QuoteCategory[]>(quoteCategories);
  const [optionsByCat] = useState(() => {
    const map: Record<string, typeof quoteOptions> = {};
    quoteOptions.forEach((o) => {
      if (!map[o.category_id]) map[o.category_id] = [];
      map[o.category_id].push(o);
    });
    return map;
  });
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, StepState>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);

  const current = categories[step];
  const progress = categories.length
    ? ((step + 1) / categories.length) * 100
    : 0;

  const getAnswer = (id: string): StepState =>
    answers[id] ?? { optionIds: [], numbers: {} };

  const setAnswer = (id: string, state: StepState) =>
    setAnswers((a) => ({ ...a, [id]: state }));

  const canNext = useMemo(() => {
    if (!current) return false;
    const a = getAnswer(current.id);
    if (current.step_type === "contact") {
      const c = a.contact;
      return !!(c?.name && c?.email && /\S+@\S+\.\S+/.test(c.email));
    }
    if (current.required) {
      if (current.step_type === "single" || current.step_type === "multi")
        return a.optionIds.length > 0;
      if (current.step_type === "text") return !!a.text?.trim();
      if (current.step_type === "number")
        return Object.values(a.numbers).some((n) => n > 0);
    }
    return true;
  }, [current, answers]);

  const toggleOption = (
    catId: string,
    optId: string,
    single: boolean,
  ) => {
    const a = getAnswer(catId);
    if (single) setAnswer(catId, { ...a, optionIds: [optId] });
    else {
      const has = a.optionIds.includes(optId);
      setAnswer(catId, {
        ...a,
        optionIds: has
          ? a.optionIds.filter((id) => id !== optId)
          : [...a.optionIds, optId],
      });
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="spotlight relative flex min-h-screen items-center justify-center px-6 pb-24 pt-32">
        <div className="relative z-10 max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-violet-400/20">
            <Check className="h-9 w-9 text-violet-400" />
          </div>
          <h1
            className="display mb-6 uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Bedankt!
          </h1>
          <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
            Je aanvraag is binnen. Binnen{" "}
            <span className="font-semibold text-white">24 uur</span> krijg je
            een persoonlijke offerte van Astro in je inbox.
          </p>
          <Link to="/" className="pill-light inline-flex">
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  if (!current) return null;

  const opts = optionsByCat[current.id] ?? [];
  const ans = getAnswer(current.id);

  return (
    <div className="relative min-h-screen pb-24 pt-32">
      <div className="container relative z-10 px-6">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <div className="eyebrow mb-6 flex items-center gap-2">
              <ClipboardList size={14} />
              Stappenplan
            </div>
            <h1
              className="display uppercase"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              <SplitText splitBy="char" stagger={20}>
                Vertel wat je zoekt.
              </SplitText>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Drie korte stappen — dan neemt Astro contact op om je project
              door te nemen. Geen eindeloze formulieren.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-10 max-w-3xl rounded-2xl border border-white/10 bg-card/30 p-5 backdrop-blur">
            <h3 className="font-semibold">Liever direct contact?</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Sla het stappenplan over — Astro neemt binnen 24u contact op.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(WA_TEXT)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-background/60 px-3 py-2.5 text-sm transition hover:border-emerald-400/50 hover:text-emerald-400"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent("Offerte aanvraag Astro Visuals")}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-background/60 px-3 py-2.5 text-sm transition hover:border-white/25"
              >
                <Mail size={14} /> Mail Astro
              </a>
              <button
                type="button"
                onClick={() => setShowQuickForm(true)}
                className="col-span-2 flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-black md:col-span-1"
              >
                <Mail size={14} /> Snel formulier
              </button>
            </div>
          </div>
        </Reveal>

        {showQuickForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="bento-card w-full max-w-md p-8">
              <h3 className="text-lg font-bold">Snel formulier</h3>
              <form
                className="mt-4 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowQuickForm(false);
                  setDone(true);
                }}
              >
                <input
                  required
                  placeholder="Naam *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Videoclip, cover, logo — wat heb je nodig?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                />
                <div className="flex gap-2">
                  <button type="submit" className="pill-light flex-1 justify-center">
                    Verstuur
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowQuickForm(false)}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm"
                  >
                    Sluiten
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p className="mb-6 max-w-3xl text-center text-xs text-muted-foreground">
          — of bouw je offerte stap-voor-stap hieronder ↓ —
        </p>

        <div className="mb-10 max-w-3xl">
          <div className="mb-3 flex justify-between text-xs text-muted-foreground">
            <span>
              Stap {step + 1} van {categories.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-white to-violet-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="max-w-3xl animate-in fade-in">
          <h2 className="display mb-2 text-3xl uppercase md:text-4xl">
            {current.name}
          </h2>
          {current.description && (
            <p className="mb-8 text-muted-foreground">{current.description}</p>
          )}

          {(current.step_type === "single" ||
            current.step_type === "multi") && (
            <div className="grid gap-3 sm:grid-cols-2">
              {opts.map((opt) => {
                const selected = ans.optionIds.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() =>
                      toggleOption(
                        current.id,
                        opt.id,
                        current.step_type === "single",
                      )
                    }
                    className={`rounded-2xl border p-5 text-left transition ${
                      selected
                        ? "border-white/40 bg-white/10 shadow-lg shadow-white/5"
                        : "border-white/10 bg-card/40 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{opt.label}</p>
                        {opt.description && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {opt.description}
                          </p>
                        )}
                      </div>
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          selected ? "border-white bg-white" : "border-white/20"
                        }`}
                      >
                        {selected && (
                          <Check size={14} className="text-black" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {current.step_type === "text" && (
            <div className="space-y-4">
              <textarea
                rows={6}
                placeholder="Beschrijf je project, stijl, referenties, deadline, artiest/merk…"
                value={ans.text ?? ""}
                onChange={(e) =>
                  setAnswer(current.id, { ...ans, text: e.target.value })
                }
                className="w-full resize-y rounded-2xl border border-white/10 bg-card/40 p-5 outline-none focus:border-white/30"
              />
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-white/15 p-5 transition hover:border-white/30">
                <Upload size={18} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Referenties / moodboard uploaden (optioneel)
                </span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    setFiles([...files, ...Array.from(e.target.files ?? [])])
                  }
                />
              </label>
              {files.length > 0 && (
                <ul className="space-y-1">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs text-muted-foreground"
                    >
                      <span className="truncate">{f.name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFiles(files.filter((_, j) => j !== i))
                        }
                      >
                        <X size={12} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {current.step_type === "contact" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  { k: "name", l: "Naam *", req: true },
                  { k: "company", l: "Artiest / merk" },
                  { k: "email", l: "E-mail *", t: "email", req: true },
                  { k: "phone", l: "Telefoon", t: "tel" },
                ] as const
              ).map((field) => (
                <div key={field.k}>
                  <label className="mb-1 block text-xs text-muted-foreground">
                    {field.l}
                  </label>
                  <input
                    type={"t" in field ? field.t : "text"}
                    value={ans.contact?.[field.k] ?? ""}
                    onChange={(e) =>
                      setAnswer(current.id, {
                        ...ans,
                        contact: {
                          name: ans.contact?.name ?? "",
                          email: ans.contact?.email ?? "",
                          ...ans.contact,
                          [field.k]: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-xl border border-white/10 bg-card/40 px-4 py-3 outline-none focus:border-white/30"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-muted-foreground">
                  Hoe heb je Astro gevonden? (optioneel)
                </label>
                <input
                  value={ans.contact?.source ?? ""}
                  onChange={(e) =>
                    setAnswer(current.id, {
                      ...ans,
                      contact: {
                        name: ans.contact?.name ?? "",
                        email: ans.contact?.email ?? "",
                        ...ans.contact,
                        source: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-card/40 px-4 py-3 outline-none focus:border-white/30"
                />
              </div>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white disabled:opacity-30"
            >
              <ArrowLeft size={16} /> Terug
            </button>
            {step < categories.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="pill-light disabled:opacity-40"
              >
                Volgende stap <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canNext || submitting}
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-40"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Versturen…
                  </>
                ) : (
                  <>
                    Verstuur aanvraag <ArrowRight size={16} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
