import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const articles = [
  { title: "Ontario HST: Complete Guide for Small Business Owners (2025)", cat: "HST", read: "8 min", date: "Apr 12, 2025", author: "Ankit Kapoor, CPA", authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=85", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85", excerpt: "Everything Ontario business owners need to know about HST in 2025 — registration thresholds, filing frequencies, ITCs, and the most common mistakes we see at audit. A no-jargon walkthrough." },
  { title: "When Do You Need More Than a Bookkeeper?", cat: "Growth", read: "5 min", date: "Apr 5, 2025", author: "Priya Sharma, CPA", authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=85", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=85", excerpt: "There's a moment in every growing business when bookkeeping alone stops being enough. We unpack the four signals that tell you it's time to bring in a controller or fractional CFO." },
  { title: "How to Handle 5,000+ Monthly Transactions Without Losing Your Mind", cat: "Bookkeeping", read: "7 min", date: "Mar 28, 2025", author: "Marcus Williams", authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=85", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85", excerpt: "Volume kills DIY bookkeeping. We share the exact stack — Xero, Dext, A2X — and rules engine we use to process 5,000+ monthly transactions for retail clients with zero errors." },
  { title: "The CRA Audit Red Flags Ontario Business Owners Must Avoid", cat: "Compliance", read: "6 min", date: "Mar 20, 2025", author: "Ankit Kapoor, CPA", authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=85", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85", excerpt: "Round numbers, missing receipts, large home-office claims — the CRA's audit triggers are predictable. Here are the seven red flags every Ontario owner should know and how to stay clear." },
  { title: "Xero vs QuickBooks: Which Works Better for Ontario Retail?", cat: "Software", read: "9 min", date: "Mar 12, 2025", author: "Priya Sharma, CPA", authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=85", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85", excerpt: "We've migrated hundreds of Ontario retail businesses between platforms. This is the head-to-head comparison: bank feeds, sales tax, multi-location, app ecosystem, and total cost." },
  { title: "Payroll Compliance Checklist for Ontario Employers", cat: "Payroll", read: "6 min", date: "Mar 4, 2025", author: "Marcus Williams", authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=85", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85", excerpt: "Source deductions, WSIB, EHT, ROEs, vacation accrual — the Ontario payroll checklist most owners overlook until the CRA calls. Print this and stick it on the wall." },
];

const catColors: Record<string, string> = {
  HST: "bg-accent/10 text-accent",
  Growth: "bg-emerald-100 text-emerald-700",
  Bookkeeping: "bg-blue-100 text-blue-700",
  Compliance: "bg-rose-100 text-rose-700",
  Software: "bg-purple-100 text-purple-700",
  Payroll: "bg-amber-100 text-amber-700",
};

const guides = [
  { title: "Ontario Tax Deadline Calendar 2025 (PDF)", desc: "Every CRA deadline you need to know — printable wall version included." },
  { title: "HST Registration Guide for Ontario Small Business", desc: "Step-by-step walkthrough for registering, filing, and remitting." },
  { title: "Cloud Accounting Migration Checklist", desc: "From desktop to Xero/QBO without losing a transaction." },
];

const faqs = [
  ["When do I need to register for HST?", "Once your taxable revenue crosses $30,000 in any 12-month period (calendar year or rolling), you must register. We can register for you the same day."],
  ["How often do I need to file HST?", "It depends on your revenue. Under $1.5M annually = annual filing, $1.5M–$6M = quarterly, $6M+ = monthly. We handle whichever cadence applies."],
  ["What's the difference between GST and HST in Ontario?", "Ontario participates in HST (13%), which combines federal GST and provincial PST into a single tax. Most Ontario sales charge HST, not GST."],
  ["How much does bookkeeping cost for my size of business?", "Solo: from $400/mo. Small business: from $650/mo. Growing: from $1,550/mo. Use our calculator for an exact starting price."],
  ["Can you handle my Shopify/Amazon sales tax?", "Yes — we specialize in e-commerce sales tax. We pull data from Shopify, Amazon, Square, and Stripe directly into your books."],
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
                      <a className="text-accent font-semibold text-sm inline-flex items-center gap-1" href="#">Read <ArrowRight size={14} /></a>
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
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="bg-peach rounded-2xl p-7 border border-border h-full flex flex-col">
                  <Download className="text-accent mb-4" />
                  <h3 className="font-serif text-xl mb-3 text-foreground">{g.title}</h3>
                  <p className="text-body text-[14px] leading-[1.7] mb-5 flex-1">{g.desc}</p>
                  <form className="flex gap-2" onSubmit={e => { e.preventDefault(); alert("Sent! Check your email."); }}>
                    <input required type="email" placeholder="you@email.com" className="flex-1 px-3 py-2 text-sm rounded-md border border-border focus:outline-none focus:border-accent" />
                    <button className="btn-primary !px-4 !py-2 text-xs">Get</button>
                  </form>
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
