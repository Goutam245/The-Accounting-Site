import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Reveal } from "./Reveal";

export default function TimeWasteCalculator() {
  const [tx, setTx] = useState(500);
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(75);

  const { monthlyCost, yearlyCost, ourPrice, savings, savingsPct } = useMemo(() => {
    const monthlyCost = hours * rate;
    const yearlyCost = monthlyCost * 12;
    const ourPrice = tx < 200 ? 400 : tx < 1000 ? 650 : tx < 2500 ? 1050 : 1550;
    const savings = Math.max(0, yearlyCost - ourPrice * 12);
    const savingsPct = yearlyCost > 0 ? Math.min(100, Math.round((savings / yearlyCost) * 100)) : 0;
    return { monthlyCost, yearlyCost, ourPrice, savings, savingsPct };
  }, [tx, hours, rate]);

  const fmt = (n: number) => `$${n.toLocaleString("en-CA")}`;

  return (
    <section className="bg-peach py-20 md:py-24">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="label-eyebrow mb-3">How Much Time Are You Wasting on Books?</p>
          <h2 className="h2">Find Out How Much Time Your Bookkeeping is <span className="accent-word">Costing You</span></h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-border space-y-8">
              {[
                { label: "Monthly transactions", value: tx, set: setTx, min: 50, max: 5000, step: 50, suffix: "" },
                { label: "Hours you spend monthly", value: hours, set: setHours, min: 2, max: 80, step: 1, suffix: " hrs" },
                { label: "Your time is worth", value: rate, set: setRate, min: 25, max: 500, step: 5, suffix: "/hr", prefix: "$" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[14px] font-semibold text-foreground">{s.label}</label>
                    <span className="font-serif text-2xl text-accent">
                      {s.prefix || ""}{s.value.toLocaleString()}{s.suffix}
                    </span>
                  </div>
                  <Slider value={[s.value]} min={s.min} max={s.max} step={s.step} onValueChange={(v) => s.set(v[0])} />
                  <div className="flex justify-between text-[11px] text-muted-foreground mt-1.5">
                    <span>{s.prefix || ""}{s.min}{s.suffix}</span>
                    <span>{s.prefix || ""}{s.max.toLocaleString()}{s.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-navy text-white rounded-2xl p-7 md:p-8 h-full flex flex-col">
              <p className="label-eyebrow mb-3">Your Result</p>
              <p className="text-white/85 text-[16px] leading-[1.7] mb-6">
                You're spending <span className="text-accent font-bold">{hours} hours</span> per month on bookkeeping worth{" "}
                <span className="text-accent font-bold">{fmt(monthlyCost)}</span>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">With The Accounting Site</p>
                <p className="font-serif text-3xl text-white mb-1">{fmt(ourPrice)}<span className="text-base text-white/60">/month</span></p>
                <p className="text-white/70 text-[14px]">We handle it all — books, HST, reports.</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">You save annually</span>
                  <span className="font-bold text-accent">{fmt(savings)}</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${savingsPct}%`, background: "linear-gradient(90deg,#E07B39,#F4A261)" }}
                  />
                </div>
                <p className="text-white/60 text-xs mt-2">{savingsPct}% savings vs doing it yourself</p>
              </div>

              <Link to="/contact" className="btn-primary mt-auto">Get This Price <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
