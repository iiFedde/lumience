import { useState } from "react";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { BookingCalendar } from "../components/BookingCalendar";
import { brand } from "../data/brand";

const labels = {
  name: "Naam",
  email: "E-mail",
  phone: "Telefoonnummer (optioneel)",
  message: "Vertel over je project",
};

export function Contact() {
  const [mode, setMode] = useState<"booking" | "message">("booking");
  const [sent, setSent] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-md text-center">
          <Mail className="mx-auto mb-8 h-8 w-8 text-white" strokeWidth={1.2} />
          <h2 className="display mb-4 text-4xl uppercase md:text-5xl">
            Bericht{" "}
            <span className="accent-serif normal-case text-muted-foreground">
              onderweg.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Bedankt — Astro leest je bericht persoonlijk en komt meestal binnen
            een dag bij je terug.
          </p>
        </div>
      </div>
    );
  }

  if (bookingDone) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-md text-center">
          <Calendar className="mx-auto mb-8 h-8 w-8 text-white" strokeWidth={1.2} />
          <h2 className="display mb-4 text-4xl uppercase md:text-5xl">
            Afspraak{" "}
            <span className="accent-serif normal-case text-muted-foreground">
              aangevraagd.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Bedankt — Astro bevestigt je afspraak zo snel mogelijk per e-mail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden pb-32 pt-32 md:pt-40">
      <div className="container relative px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </span>
            <h1 className="display mt-6 mb-8 text-balance text-3xl uppercase leading-[1.05] sm:text-4xl md:text-5xl">
              <SplitText splitBy="word" stagger={70}>
                Laten we
              </SplitText>{" "}
              <SplitText
                splitBy="char"
                stagger={40}
                delay={250}
                className="accent-serif normal-case text-muted-foreground"
              >
                kennismaken.
              </SplitText>
            </h1>
            <p className="mb-12 max-w-md leading-relaxed text-muted-foreground">
              Een clip, cover, logo of combinatie — stuur een bericht met je
              idee, referenties of release datum. Astro reageert persoonlijk.
            </p>
            <div className="space-y-4 text-sm">
              {[
                ["E-mail", brand.email],
                ["Reactie", "binnen 24 uur"],
                ["Gesprek", "altijd vrijblijvend"],
                ["Focus", brand.tagline],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4">
                  <span className="w-24 shrink-0 text-muted-foreground">
                    {k}
                  </span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <div className="mb-10 inline-flex items-center gap-1 rounded-full border border-white/10 bg-card/40 p-1">
              <button
                type="button"
                onClick={() => setMode("booking")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  mode === "booking"
                    ? "bg-white text-black"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <Calendar size={14} />
                Plan een call
              </button>
              <button
                type="button"
                onClick={() => setMode("message")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  mode === "message"
                    ? "bg-white text-black"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <Mail size={14} />
                Stuur bericht
              </button>
            </div>

            {mode === "booking" ? (
              <BookingCalendar onConfirm={() => setBookingDone(true)} />
            ) : (
              <form
                className="space-y-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setTimeout(() => {
                    setSending(false);
                    setSent(true);
                  }, 800);
                }}
              >
                {(["name", "email", "phone", "message"] as const).map((key) => (
                  <div key={key}>
                    <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                      {labels[key]}
                    </label>
                    {key === "message" ? (
                      <textarea
                        rows={4}
                        value={form[key]}
                        onChange={(e) =>
                          setForm({ ...form, [key]: e.target.value })
                        }
                        placeholder="Bijv. videoclip voor nieuwe single, stijl referenties, deadline…"
                        className="w-full resize-none border-0 border-b border-white/15 bg-transparent pb-3 text-lg outline-none focus:border-white/40"
                      />
                    ) : (
                      <input
                        type={
                          key === "email"
                            ? "email"
                            : key === "phone"
                              ? "tel"
                              : "text"
                        }
                        value={form[key]}
                        onChange={(e) =>
                          setForm({ ...form, [key]: e.target.value })
                        }
                        className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-lg outline-none focus:border-white/40"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={sending}
                  className="pill-light disabled:opacity-60"
                >
                  {sending ? "Versturen…" : "Verstuur bericht"}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
