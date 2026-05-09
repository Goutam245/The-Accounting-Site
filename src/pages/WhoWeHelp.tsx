import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";

const stages = [
  {
    id: "solo",
    icon: "👤",
    title: "Solo & Freelancers",
    range: "Under $100K revenue",
    challenge: "CRA deadlines, HST registration, keeping track of expenses.",
    desc: "You're running everything yourself. Receipts pile up. HST deadlines sneak past. Year-end is a panic. We take all of that off your plate with simple, affordable bookkeeping and HST filing.",
    deliverables: ["Monthly bookkeeping", "Quarterly HST filing", "Expense tracking", "Year-end personal/business tax", "CRA correspondence handling", "Mileage & home-office tracking", "Receipt capture via Dext", "Annual tax-savings review"],
    price: "$400/month",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=85",
    miniFaq: [
      ["Do I need to incorporate?", "Not until you're consistently making over $80K. We'll tell you when it makes sense, and help you do it."],
      ["What about my home-office expenses?", "We track them automatically — utilities, internet, rent percentage. Maximum legal deduction, every year."],
      ["I'm behind on filings, can you help?", "Yes — catch-up bookkeeping and back HST filings are part of what we do every week."],
    ],
    quote: { text: "I went from a shoebox of receipts to clean books in 3 weeks. HST is filed without me thinking about it.", name: "Rachel B.", role: "Freelance Designer, Toronto ON" },
  },
  {
    id: "small",
    icon: "🏪",
    title: "Small Business",
    range: "$100K – $1M revenue",
    challenge: "Growing fast, transactions piling up, payroll getting complicated.",
    desc: "You've outgrown DIY but aren't ready for a full finance team. We give you full bookkeeping, HST, payroll for up to 15 employees, and annual corporate tax — for one predictable monthly fee.",
    deliverables: ["Full-cycle bookkeeping", "HST/GST filing", "Payroll up to 15 employees", "Annual T2 corporate tax", "Monthly management reports", "Vendor payments via Plooto"],
    price: "$650/month",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    monthly: [
      { week: "Week 1", what: "Transaction processing & categorization" },
      { week: "Week 2", what: "Bank & credit card reconciliation complete" },
      { week: "Week 3", what: "HST calculated, payroll runs as scheduled" },
      { week: "Week 4", what: "Reports delivered + filings submitted" },
    ],
    quote: { text: "Predictable monthly fee, predictable monthly delivery. We finally know what 'closed books' feels like.", name: "Jeff M.", role: "Owner, GTA Plumbing Co." },
  },
  {
    id: "growing",
    icon: "🏢",
    title: "Growing Business",
    range: "$1M – $5M revenue",
    challenge: "Multiple revenue streams, multi-location, need real-time reporting.",
    desc: "High-volume retail, multi-location services, complex payroll. We scale with you — bi-weekly close, custom reporting, proactive tax planning, and a dedicated account team.",
    deliverables: ["High-volume bookkeeping (5,000+ tx/mo)", "Bi-weekly close & reporting", "Multi-location consolidation", "Strategic tax planning", "Dedicated account manager", "Custom KPI dashboards"],
    price: "$1,550/month",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85",
    compare: [
      ["Time owner spends on books", "10 hrs/week", "<1 hr/week"],
      ["Bookkeeping errors", "Frequent", "Zero"],
      ["Missed CRA deadlines", "Multiple/year", "Zero"],
      ["Reporting cadence", "Quarterly (late)", "Bi-weekly (on time)"],
      ["Tax planning", "Reactive", "Proactive"],
    ],
    quote: { text: "We scaled from $1.2M to $4.1M in two years without ever hiring an internal accountant.", name: "Priya S.", role: "Founder, Multi-Location Café Group" },
  },
];

export default function WhoWeHelp() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85"
        eyebrow="Who We Help"
        title={<>Accounting Built Around <span className="accent-word">Your Business Stage</span></>}
        subtitle="Whether you're solo or scaling past $5M, we tailor our service mix to where you are right now."
      />

      {stages.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "bg-peach py-20 md:py-24" : "bg-white py-20 md:py-24"}>
          <div className="container-x grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <Reveal className={i % 2 === 0 ? "" : "lg:order-2"}>
              <div className="text-5xl mb-4">{s.icon}</div>
              <p className="label-eyebrow mb-3">{s.range}</p>
              <h2 className="h2 mb-5">{s.title}</h2>
              <p className="text-body italic mb-4 text-[15px]">Challenge: {s.challenge}</p>
              <p className="text-body text-[16px] leading-[1.75] mb-6">{s.desc}</p>

              <p className="label-eyebrow mb-3">What's included at this level</p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                {s.deliverables.map(d => <li key={d} className="flex items-start gap-2 text-body text-[14px]"><Check className="text-accent shrink-0 mt-1" size={16} /> {d}</li>)}
              </ul>

              <div className="flex flex-wrap items-center gap-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
                  <p className="font-serif text-3xl text-accent">{s.price}</p>
                </div>
                <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className={i % 2 === 0 ? "" : "lg:order-1"}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl mb-6">
                <img src={s.img} alt={s.title} width={900} height={420} className="w-full h-[280px] md:h-[360px] object-cover" loading="lazy" />
              </div>

              {s.miniFaq && (
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <p className="label-eyebrow mb-4">Common questions from freelancers</p>
                  <ul className="space-y-4">
                    {s.miniFaq.map(([q, a]) => (
                      <li key={q}>
                        <p className="font-semibold text-foreground text-[14px] mb-1">{q}</p>
                        <p className="text-body text-[14px] leading-[1.65]">{a}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.monthly && (
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <p className="label-eyebrow mb-4">A typical month with us</p>
                  <ol className="space-y-3 border-l-2 border-accent/30 pl-4">
                    {s.monthly.map(m => (
                      <li key={m.week}>
                        <p className="font-semibold text-accent text-xs uppercase tracking-wider">{m.week}</p>
                        <p className="text-body text-[14px]">{m.what}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {s.compare && (
                <div className="bg-white rounded-2xl p-6 border border-border overflow-x-auto">
                  <p className="label-eyebrow mb-4">Before vs After</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 text-left text-xs uppercase tracking-wider text-muted-foreground"></th>
                        <th className="py-2 text-left text-xs uppercase tracking-wider text-muted-foreground">Before</th>
                        <th className="py-2 text-left text-xs uppercase tracking-wider text-accent">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.compare.map(([k, b, a]) => (
                        <tr key={k} className="border-b border-border last:border-0">
                          <td className="py-2.5 text-foreground font-medium text-[13px]">{k}</td>
                          <td className="py-2.5 text-muted-foreground text-[13px] flex items-center gap-1"><X size={14} className="text-destructive" />{b}</td>
                          <td className="py-2.5 text-accent font-semibold text-[13px]">{a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Reveal>
          </div>

          <div className="container-x mt-10">
            <Reveal>
              <blockquote className="bg-white rounded-2xl p-6 md:p-8 border border-border max-w-4xl mx-auto">
                <p className="font-serif text-xl md:text-[22px] text-foreground leading-snug mb-3">"{s.quote.text}"</p>
                <footer className="text-sm text-muted-foreground">— {s.quote.name}, {s.quote.role}</footer>
              </blockquote>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
