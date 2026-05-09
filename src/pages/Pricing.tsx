import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { motion, AnimatePresence } from "framer-motion";

type Step = { key: string; q: string; options: string[]; multi?: boolean };
const STEPS: Step[] = [
  { key: "revenue", q: "What is your annual revenue?", options: ["Under $100K", "$100K – $500K", "$500K – $1M", "$1M – $3M", "Over $3M"] },
  { key: "services", q: "Which services do you need?", multi: true, options: ["Monthly Bookkeeping", "HST/GST Filing", "Payroll Services", "Corporate Tax Return", "Cloud Accounting Setup", "Financial Reporting"] },
  { key: "tx", q: "How many transactions per month?", options: ["Under 100", "100 – 500", "500 – 1,500", "1,500 – 5,000", "5,000+"] },
  { key: "emp", q: "How many employees need payroll?", options: ["None (just me)", "1 – 5", "6 – 15", "16 – 50", "50+"] },
];

function calc(answers: Record<string, any>) {
  const txMap: Record<string, number> = { "Under 100": 300, "100 – 500": 500, "500 – 1,500": 750, "1,500 – 5,000": 1100, "5,000+": 1600 };
  const empMap: Record<string, number> = { "None (just me)": 0, "1 – 5": 150, "6 – 15": 250, "16 – 50": 450, "50+": 750 };
  const services: string[] = answers.services || [];
  const lines: { label: string; value: number }[] = [];
  if (services.includes("Monthly Bookkeeping")) lines.push({ label: "Bookkeeping", value: txMap[answers.tx] ?? 500 });
  if (services.includes("HST/GST Filing")) lines.push({ label: "HST Filing", value: 150 });
  if (services.includes("Payroll Services")) lines.push({ label: `Payroll (${answers.emp})`, value: empMap[answers.emp] ?? 200 });
  if (services.includes("Corporate Tax Return")) lines.push({ label: "Corporate Tax (annualized)", value: 100 });
  if (services.includes("Cloud Accounting Setup")) lines.push({ label: "Cloud Setup (one-time amortized)", value: 65 });
  if (services.includes("Financial Reporting")) lines.push({ label: "Financial Reporting", value: 100 });
  const total = lines.reduce((s, l) => s + l.value, 0);
  return { lines, total };
}

export default function Pricing() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Record<string, any>>({ services: [] });
  const result = useMemo(() => calc(answers), [answers]);
  const cur = STEPS[step];
  const canNext = cur.multi ? (answers[cur.key]?.length ?? 0) > 0 : !!answers[cur.key];

  const next = () => { if (step < STEPS.length - 1) setStep(step + 1); else setDone(true); };
  const prev = () => { if (done) setDone(false); else if (step > 0) setStep(step - 1); };

  const toggle = (opt: string) => {
    if (cur.multi) {
      const arr: string[] = answers[cur.key] || [];
      setAnswers({ ...answers, [cur.key]: arr.includes(opt) ? arr.filter(x => x !== opt) : [...arr, opt] });
    } else {
      setAnswers({ ...answers, [cur.key]: opt });
    }
  };

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85"
        eyebrow="Pricing Calculator"
        title={<>Get Your <span className="accent-word">Instant Price Estimate</span></>}
        subtitle="4 questions. 90 seconds. Your personalized starting price — no sales call required."
      />

      <section className="bg-peach py-20 md:py-24">
        <div className="container-x max-w-2xl">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-border">
            {!done ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="label-eyebrow">Step {step + 1} of {STEPS.length}</span>
                  <span className="text-xs text-muted-foreground">{Math.round(((step + 1) / STEPS.length) * 100)}% complete</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden mb-8">
                  <motion.div className="h-full bg-accent" animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={cur.key} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                    <h2 className="font-serif text-2xl md:text-3xl mb-6 text-foreground">{cur.q}</h2>
                    <div className="space-y-2.5">
                      {cur.options.map((o) => {
                        const selected = cur.multi ? (answers[cur.key] || []).includes(o) : answers[cur.key] === o;
                        return (
                          <button key={o} onClick={() => toggle(o)} className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"}`}>
                            <span className="text-foreground font-medium">{o}</span>
                            {selected && <Check className="text-accent" size={18} />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-8">
                  <button onClick={prev} disabled={step === 0} className="inline-flex items-center gap-2 text-muted-foreground disabled:opacity-30 hover:text-accent"><ArrowLeft size={16} /> Back</button>
                  <button onClick={next} disabled={!canNext} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">{step === STEPS.length - 1 ? "See My Estimate" : "Next"} <ArrowRight size={16} /></button>
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <p className="label-eyebrow mb-3">Your Estimate</p>
                <h2 className="font-serif text-3xl mb-6">Your Estimated Starting Price:</h2>
                <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white mb-6">
                  <p className="font-serif text-5xl md:text-6xl">${result.total.toLocaleString()}<span className="text-2xl text-white/70"> /month</span></p>
                </div>
                <div className="border border-border rounded-xl overflow-hidden mb-6">
                  {result.lines.length === 0 ? (
                    <p className="p-5 text-muted-foreground text-sm">Select at least one service in step 2 to see a breakdown.</p>
                  ) : (
                    <table className="w-full text-sm">
                      <tbody>
                        {result.lines.map((l) => (
                          <tr key={l.label} className="border-b border-border last:border-0">
                            <td className="px-5 py-3 text-body">{l.label}</td>
                            <td className="px-5 py-3 text-right text-foreground font-semibold">${l.value}/mo</td>
                          </tr>
                        ))}
                        <tr className="bg-peach">
                          <td className="px-5 py-3 font-semibold text-foreground">Total Starting From</td>
                          <td className="px-5 py-3 text-right font-bold text-accent">${result.total}/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-6">Final pricing based on actual transaction volume. No hidden fees.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link to="/contact" className="btn-primary w-full">Book a Free Consultation <ArrowRight size={16} /></Link>
                  <button className="btn-secondary w-full" onClick={() => alert("Estimate emailed (demo)")}>Email Me This Estimate</button>
                </div>
                <button onClick={() => { setStep(0); setDone(false); setAnswers({ services: [] }); }} className="mt-5 text-sm text-accent hover:underline">← Start over</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
