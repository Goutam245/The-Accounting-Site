import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { articles, catColors } from "@/data/articles";

const guides: { title: string; desc: string; url: string; icon: string }[] = [
  { title: "AutoCatch Checklist", desc: "A step-by-step PDF checklist for catching missed deductions, duplicate entries, and reconciliation gaps before month-end close.", icon: "🎯", url: "https://docs.google.com/document/d/1WM4PRsEAPY-ofUeY-tJBB-rX4jl4w73a/edit?usp=sharing" },
  { title: "Year-End Bookkeeping Checklist", desc: "The exact checklist we use to close books cleanly every December.", icon: "✅", url: "https://docs.google.com/document/d/17IwUQYYSG-4-UXWu1n3LTlY2lKP582uu/edit?usp=sharing" },
  { title: "HST Registration Card", desc: "One-page quick reference for HST registration, thresholds, and filing.", icon: "🧾", url: "https://docs.google.com/document/d/1VLCRqaXFNdA_Ux5pe3Bg1tdKQn0PePum/edit?usp=sharing" },
];


const faqs = [
  ["When do I need to register for HST?", "Once your taxable revenue crosses $30,000 in any 12-month period (calendar year or rolling), you must register. We can register for you the same day."],
  ["How often do I need to file HST?", "It depends on your revenue. Under $1.5M annually = annual filing, $1.5M–$6M = quarterly, $6M+ = monthly. We handle whichever cadence applies."],
  ["What's the difference between GST and HST in Ontario?", "Ontario participates in HST (13%), which combines federal GST and provincial PST into a single tax. Most Ontario sales charge HST, not GST."],
  ["How much does bookkeeping cost for my size of business?", "Solo: from $400/mo. Small business: from $650/mo. Growing: from $1,550/mo. Use our calculator for an exact starting price."],
  ["Can you handle my Shopify/Amazon sales tax?", "Likely no."],
  ["How quickly can you onboard me?", "Most clients are fully onboarded in under a week. First reconciliation delivered by day 5."],
  ["What software do you use?", "Primarily Xero, with full QuickBooks Online support. We use Wagepoint for payroll, Dext/Hubdoc for receipts, and Plooto for AP."],
  ["Do I need to change my bank?", "No. We connect to all major Canadian banks via secure read-only feeds."],
  ["What if I'm behind on my filings?", "We handle catch-up bookkeeping and back HST filings regularly. We'll get you back into CRA good standing — fast."],
  ["Do you handle CRA communications?", "Yes. We respond to CRA notices, reviews, and audits on your behalf as authorized representatives."],
];

export default function Resources() {
  const [revenue, setRevenue] = useState("");


  const [expenses, setExpenses] = useState("");
  const hst = revenue && expenses ? Math.max(0, (parseFloat(revenue) - parseFloat(expenses)) * 0.13) : 0;

  const [tvRevenue, setTvRevenue] = useState<string>("");
  const [tvHours, setTvHours] = useState<string>("");
  const { hourlyRate, monthlyCost, hoursNum } = useMemo(() => {
    const r = parseFloat(tvRevenue) || 0;
    const h = parseFloat(tvHours) || 0;
    const rate = r > 0 ? r / 2000 : 0;
    return { hourlyRate: rate, monthlyCost: rate * h, hoursNum: h };
  }, [tvRevenue, tvHours]);
  const tvReady = parseFloat(tvRevenue) > 0 && parseFloat(tvHours) > 0;
  const fmt = (n: number) => `$${n.toLocaleString("en-CA", { maximumFractionDigits: 0 })}`;

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85"
        eyebrow="Resources"
        title={<>Free Tools & Insights for <span className="accent-word">Ontario Business Owners</span></>}
        subtitle="Guides, calculators, and articles built specifically for Ontario small businesses."
      />

      {/* BLOG */}
      <section id="blog" className="bg-peach py-20 md:py-24">
        <div className="container-x">
          <Reveal className="mb-10"><p className="label-eyebrow mb-3">From the blog</p><h2 className="h2">Latest <span className="accent-word">Articles</span></h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <article className="bg-white rounded-2xl border border-border card-hover h-full flex flex-col overflow-hidden">
                  <img src={a.img} alt="" width={800} height={420} className="w-full h-44 object-cover" loading="lazy" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${catColors[a.cat] || "bg-accent/10 text-accent"}`}>{a.cat}</span>
                      <span className="text-xs text-muted-foreground">{a.read} read</span>
                    </div>
                    <h3 className="font-serif text-[19px] text-foreground mb-3 leading-snug">{a.title}</h3>
                    <p className="text-body text-[14px] leading-[1.65] mb-5 flex-1">{a.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <img src={a.authorImg} alt={a.author} width={32} height={32} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                        <div>
                          <p className="text-[12px] font-semibold text-foreground leading-tight">{a.author}</p>
                          <p className="text-[11px] text-muted-foreground">{a.date}</p>
                        </div>
                      </div>
                      <Link className="text-accent font-semibold text-sm inline-flex items-center gap-1 min-h-[44px] sm:min-h-0" to={`/resources/${a.slug}`}>Read <ArrowRight size={14} /></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy py-16 md:py-20 text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="label-eyebrow mb-3">Newsletter</p>
            <h2 className="h2 text-white mb-4">Get Ontario Tax Tips in <span className="accent-word">Your Inbox</span></h2>
            <p className="text-white/85 text-[16px] mb-8">Monthly digest of CRA updates, tax deadlines, and accounting tips for Ontario business owners.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); alert("Subscribed!"); }}>
              <input required type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent" />
              <button className="btn-primary">Subscribe <ArrowRight size={16} /></button>
            </form>
            <p className="text-white/60 text-xs mt-4">Join 1,200+ Ontario business owners</p>
          </Reveal>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" className="bg-white py-24">
        <div className="container-x">
          <Reveal className="mb-10"><p className="label-eyebrow mb-3">Free Guides</p><h2 className="h2">Download Our <span className="accent-word">Free PDFs</span></h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="bg-peach rounded-2xl p-7 border border-border h-full flex flex-col relative">
                  <div className="text-4xl mb-3">{g.icon}</div>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{g.title}</h3>
                  <p className="text-body text-[14px] leading-[1.7] mb-5 flex-1">{g.desc}</p>
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full !py-2.5 text-sm inline-flex items-center justify-center gap-1.5"
                  >
                    <Download size={14} /> Get
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* TAX CALCULATOR */}
      <section id="calculator" className="bg-peach-mid py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow mb-3">Free Tool</p>
            <h2 className="h2 mb-5">Quick <span className="accent-word">HST Calculator</span></h2>
            <p className="text-body text-[16px] leading-[1.75]">Estimate how much HST you'll owe this quarter. Enter your taxable revenue and HST-eligible expenses below.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-lg">
              <label className="block text-sm font-semibold text-foreground mb-2">Taxable Revenue (CAD)</label>
              <input value={revenue} onChange={e => setRevenue(e.target.value)} type="number" placeholder="50,000" className="w-full px-4 py-3 rounded-lg border border-border mb-4 focus:outline-none focus:border-accent" />
              <label className="block text-sm font-semibold text-foreground mb-2">HST-Eligible Expenses (CAD)</label>
              <input value={expenses} onChange={e => setExpenses(e.target.value)} type="number" placeholder="10,000" className="w-full px-4 py-3 rounded-lg border border-border mb-6 focus:outline-none focus:border-accent" />
              <div className="bg-peach rounded-xl p-5 mb-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Estimated HST payable</p>
                <p className="font-serif text-3xl text-accent">${hst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
              </div>
              <Link to="/contact" className="btn-primary w-full">Get Exact Filing Help <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIME VALUE CALCULATOR */}
      <section id="time-value" className="bg-peach py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow mb-3">Free Tool</p>
            <h2 className="h2 mb-5">Is Your Time Worth More Than Your <span className="accent-word">Bookkeeping Cost?</span></h2>
            <p className="text-body text-[16px] leading-[1.75]">Two quick numbers and we'll tell you what bookkeeping is really costing you each month in lost revenue time.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-lg">
              <label className="block text-sm font-semibold text-foreground mb-2">What is your annual revenue? (CAD)</label>
              <input
                value={tvRevenue} onChange={e => setTvRevenue(e.target.value)}
                type="number" min={0} placeholder="500,000"
                className="w-full px-4 py-3 rounded-lg border border-border mb-4 focus:outline-none focus:border-accent"
              />
              <label className="block text-sm font-semibold text-foreground mb-2">Hours per month spent on bookkeeping/accounting</label>
              <input
                value={tvHours} onChange={e => setTvHours(e.target.value)}
                type="number" min={0} placeholder="20"
                className="w-full px-4 py-3 rounded-lg border border-border mb-6 focus:outline-none focus:border-accent"
              />

              {tvReady ? (
                <div className="bg-navy text-white rounded-xl p-5 mb-5 space-y-3">
                  <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-wider font-semibold">
                    <Clock size={14} /> Your Result
                  </div>
                  <p className="text-white/90 text-[15px] leading-[1.7]">
                    You are spending <span className="text-accent font-bold">{hoursNum} hours</span>/month on bookkeeping.
                  </p>
                  <p className="text-white/90 text-[15px] leading-[1.7]">
                    Based on your revenue, your time is worth approximately <span className="text-accent font-bold">{fmt(hourlyRate)}/hour</span>.
                  </p>
                  <p className="text-white/90 text-[15px] leading-[1.7]">
                    That means bookkeeping is costing you <span className="text-accent font-bold">{fmt(monthlyCost)}/month</span> in lost revenue time.
                  </p>
                  <p className="text-white/85 text-[14px] leading-[1.7] pt-2 border-t border-white/10">
                    We could handle this for as low as <span className="text-accent font-bold">$650/month</span> — so you can focus on what grows your business.
                  </p>
                </div>
              ) : (
                <div className="bg-peach rounded-xl p-5 mb-5 text-center">
                  <p className="text-sm text-muted-foreground">Enter your revenue and hours to see your result.</p>
                </div>
              )}

              <Link to="/contact" className="btn-primary w-full">Book a Free Consultation <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="container-x max-w-3xl mx-auto">
          <Reveal className="mb-10 text-center"><p className="label-eyebrow mb-3">FAQ</p><h2 className="h2">Ontario Business <span className="accent-word">Questions, Answered</span></h2></Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={i} value={`i${i}`} className="bg-peach rounded-xl border border-border px-5">
                  <AccordionTrigger className="font-serif text-lg text-left text-foreground hover:no-underline py-5">{q}</AccordionTrigger>
                  <AccordionContent className="text-body text-[15px] leading-[1.75] pb-5">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
      
    </>
  );

}
