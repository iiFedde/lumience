import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
const TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00"];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = (first.getDay() + 6) % 7;
  const days: (number | null)[] = Array(startPad).fill(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  return days;
}

export function BookingCalendar({
  onConfirm,
}: {
  onConfirm?: (date: string, time: string) => void;
}) {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [step, setStep] = useState<"day" | "time" | "details">("day");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const monthLabel = new Date(year, month).toLocaleDateString("nl-NL", {
    month: "long",
    year: "numeric",
  });

  const days = useMemo(() => getDaysInMonth(year, month), [year, month]);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  };

  if (step === "details" && selectedDay && selectedTime) {
    return (
      <div className="space-y-6">
        <div className="flex gap-2 text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
          <span className="text-white">01 Dag</span>
          <span>02 Tijd</span>
          <span className="text-white">03 Gegevens</span>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {selectedDay} {monthLabel} · {selectedTime}
        </p>
        <input
          type="text"
          placeholder="Naam *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-lg outline-none focus:border-white/40"
        />
        <input
          type="email"
          placeholder="E-mail *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-lg outline-none focus:border-white/40"
        />
        <button
          type="button"
          onClick={() =>
            onConfirm?.(
              `${selectedDay}-${month + 1}-${year}`,
              selectedTime,
            )
          }
          disabled={!name || !email}
          className="pill-light disabled:opacity-40"
        >
          Bevestig afspraak
        </button>
        <p className="text-xs text-[hsl(var(--muted-foreground))]">
          Voor je gesprek wordt 120 minuten gereserveerd · vrijblijvend
        </p>
      </div>
    );
  }

  if (step === "time" && selectedDay) {
    return (
      <div className="space-y-6">
        <div className="flex gap-2 text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
          <span>01 Dag</span>
          <span className="text-white">02 Tijd</span>
          <span>03 Gegevens</span>
        </div>
        <p className="text-sm">
          {selectedDay} {monthLabel}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {TIMES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setSelectedTime(t);
                setStep("details");
              }}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm transition hover:border-white/30 hover:bg-white/5"
            >
              {t}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStep("day")}
          className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white"
        >
          ← Andere dag
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
        <span className="text-white">01 Dag</span>
        <span>02 Tijd</span>
        <span>03 Gegevens</span>
      </div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={prevMonth} aria-label="Vorige maand">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm font-medium capitalize">{monthLabel}</span>
        <button type="button" onClick={nextMonth} aria-label="Volgende maand">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-[hsl(var(--muted-foreground))]">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
        {days.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} />
          ) : (
            <button
              key={day}
              type="button"
              onClick={() => {
                setSelectedDay(day);
                setStep("time");
              }}
              className="rounded-lg py-2 text-sm text-white transition hover:bg-white/10"
            >
              {day}
            </button>
          ),
        )}
      </div>
      <p className="text-xs text-[hsl(var(--muted-foreground))]">
        Voor je gesprek wordt 120 minuten gereserveerd · vrijblijvend
      </p>
    </div>
  );
}
