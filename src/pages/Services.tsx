import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";

type Service = {
  id: string;
  h2: JSX.Element;
  paras: string[];
  deliverables: string[];
  idealFor: string[];
  timeline: { week: string; what: string }[];
  quote: { text: string; name: string; role: string };
  price: string;
};

const services: Service[] = [
  {
    id: "bookkeeping",
    h2: <>Full-Cycle Bookkeeping for <span className="accent-word">High-Volume Ontario Businesses</span></>,
    paras: [
      "Whether you have 50 or 5,000 monthly transactions, we process, categorize, and reconcile every single one with precision. Our team handles Shopify, Square, Stripe, and all major payment platforms — pulling everything into one clean monthly view.",
      "We use Xero and QuickBooks Online to give you real-time visibility into your financials. Bank reconciliations are completed within 48 hours of month-end, so you're never waiting on your numbers when you need to make decisions.",
      "Every account reconciled. Every transaction categorized. Every month, without fail. You get clean books, you get them fast, and you get them in plain English.",
    ],
    deliverables: [
      "Monthly transaction processing (unlimited volume)",
      "Bank and credit card reconciliation",
      "Accounts receivable/payable tracking",
      "Integration with Shopify, Square, Stripe",
      "Month-end close within 48 hours",
      "Clean financial statements monthly",
    ],
    idealFor: ["Businesses with 100+ monthly transactions", "E-commerce, retail, and service operations", "Owners who want their evenings back"],
    timeline: [
      { week: "Week 1", what: "Onboarding + bank feeds connected" },
      { week: "Week 2", what: "Historical cleanup complete" },
      { week: "Week 3", what: "First monthly close delivered" },
      { week: "Ongoing", what: "Reports by the 5th of every month" },
    ],
    quote: { text: "We went from monthly chaos to clean books delivered on the 4th every month.", name: "Sarah K.", role: "Retail Owner, Hamilton ON" },
    price: "$400/month",
  },
  {
    id: "hst",
    h2: <>Zero Penalties. <span className="accent-word">100% On-Time</span>. Every Quarter.</>,
    paras: [
      "Ontario businesses face complex HST/GST filing rules. From the $30,000 threshold to quarterly remittances and place-of-supply rules, missing a single detail means CRA penalties and interest charges that compound quickly.",
      "We handle every aspect of HST compliance — registration, filing, ITC tracking, remittances, and audit support — so you never miss a deadline. Our 100% on-time filing rate isn't marketing; it's our standard.",
      "If you're already behind on HST, we can catch you up, work with the CRA on your behalf, and get you back into good standing without panic.",
    ],
    deliverables: ["HST/GST registration and setup", "Quarterly or monthly filings", "Input Tax Credit (ITC) maximization", "CRA correspondence handling", "Audit support and representation", "Late-filing recovery and back-filings"],
    idealFor: ["Anyone over $30K annual revenue", "Businesses behind on HST filings", "Multi-province sellers"],
    timeline: [
      { week: "Day 1", what: "Authorization + CRA representative setup" },
      { week: "Day 3", what: "Books reviewed for ITCs" },
      { week: "Filing day", what: "Return reviewed, signed, filed" },
      { week: "Quarterly", what: "Reminders 14 days before deadline" },
    ],
    quote: { text: "Two years of penalty-free HST filings. We forgot what late-filing letters look like.", name: "Tom R.", role: "Contractor, Burlington ON" },
    price: "$150/month add-on",
  },
  {
    id: "payroll",
    h2: <>Payroll That <span className="accent-word">Runs Itself</span> — Accurately, Every Time</>,
    paras: [
      "Payroll mistakes hurt employee trust and trigger CRA penalties. We run accurate, on-time payroll cycles using Wagepoint — Canada's leading small-business payroll platform.",
      "T4s, ROEs, source deductions, WSIB, EHT, and CRA remittances are all handled automatically. Direct deposits go out on schedule, and your employees can self-serve their pay stubs through a secure portal.",
      "Hire confidently. We'll keep payroll compliant and stress-free — even as you scale from 1 to 50+ employees.",
    ],
    deliverables: ["Bi-weekly or monthly payroll cycles", "Direct deposit and digital pay stubs", "T4s, T4As, and ROE generation", "CRA source deduction remittances", "WSIB and EHT calculations", "New-hire and termination paperwork"],
    idealFor: ["Employers with 1–50+ staff", "Bonus, commission, or tip operations", "Multi-province employers"],
    timeline: [
      { week: "Week 1", what: "Wagepoint setup + employee data import" },
      { week: "Week 2", what: "First parallel payroll run" },
      { week: "Week 3", what: "Live payroll cycle begins" },
      { week: "Ongoing", what: "T4s issued by Feb 28 every year" },
    ],
    quote: { text: "Our payroll has run flawlessly for 18 months. Not a single CRA notice.", name: "Anita P.", role: "Clinic Owner, Oakville ON" },
    price: "$200/month",
  },
  {
    id: "ap-ar",
    h2: <>Never Chase an Invoice <span className="accent-word">Again</span></>,
    paras: [
      "We manage your complete accounts receivable and payable process — sending invoices, following up on overdue payments, and processing vendor bills. Your cash flow stays healthy without you lifting a finger.",
      "Using Plooto and Dext, we automate vendor payment workflows, AP approvals, and receipt capture. You approve, we pay — securely and on time, every time.",
      "Faster collections, fewer late fees, healthier cash flow — and zero awkward follow-up calls from you to your customers.",
    ],
    deliverables: ["Customer invoicing on your schedule", "Automated payment reminders", "Overdue collection follow-ups", "Vendor bill capture (Dext)", "Approval-based vendor payments (Plooto)", "Weekly AR/AP aging reports"],
    idealFor: ["Businesses with 20+ invoices/month", "Anyone tired of chasing customers", "Owners who want clean cash-flow visibility"],
    timeline: [
      { week: "Week 1", what: "Plooto + Dext set up & connected" },
      { week: "Week 2", what: "Vendor list & AR cadence configured" },
      { week: "Week 3", what: "First payment + collection cycle" },
      { week: "Ongoing", what: "Weekly aging reports delivered" },
    ],
    quote: { text: "We collect 18 days faster. Our DSO dropped from 47 to 29.", name: "Jordan M.", role: "Agency Owner, Toronto ON" },
    price: "$250/month",
  },
  {
    id: "corporate",
    h2: <>Corporate Tax Returns That <span className="accent-word">Minimize Your Burden</span> Legally</>,
    paras: [
      "T2 corporate tax returns are more than a once-a-year obligation. With proactive planning, you can use the Small Business Deduction, capital cost allowance, and shareholder remuneration strategies to legally minimize tax owed.",
      "We prepare and file T2 returns annually and provide year-round tax planning so there are no April surprises. Every Ontario-specific credit is captured, and instalments are scheduled to protect your cash flow.",
      "Most clients save more on tax than they pay us in fees — that's the goal, every year.",
    ],
    deliverables: ["Annual T2 corporate tax return", "Year-end financial statements", "GIFI schedules and CRA filings", "Shareholder dividend planning", "Tax instalment scheduling", "Multi-year tax projections"],
    idealFor: ["Incorporated Ontario businesses", "Owner-operators paying themselves", "Anyone with recurring tax surprises"],
    timeline: [
      { week: "Q3", what: "Tax-planning strategy session" },
      { week: "Q4", what: "Year-end accruals and adjustments" },
      { week: "YE + 60", what: "Draft T2 ready for review" },
      { week: "YE + 90", what: "Filed and remitted" },
    ],
    quote: { text: "Our tax savings paid for the entire year of bookkeeping fees, twice.", name: "Karim L.", role: "Founder, SaaS Inc." },
    price: "From $1,200/year",
  },
  {
    id: "cloud",
    h2: <>Move to the Cloud in <span className="accent-word">Under a Week</span></>,
    paras: [
      "If you're still using desktop accounting software or spreadsheets, you're losing hours every week. Cloud accounting gives you real-time visibility, automated bank feeds, and access from anywhere.",
      "We migrate clients to Xero or QuickBooks Online with zero data loss. Bank feeds, historical transactions, chart of accounts, and integrations are all set up in under a week — with parallel running so you never lose a record.",
      "Then we train your team and provide ongoing support so you actually use the tools you're paying for.",
    ],
    deliverables: ["Xero or QBO setup and migration", "Historical data import (multi-year)", "Bank feed and credit card connections", "Chart of accounts customization", "App integrations (Shopify, Stripe, etc.)", "Team training and ongoing support"],
    idealFor: ["Sage, Wave, or desktop QB users", "Spreadsheet-based bookkeeping", "Multi-location operations"],
    timeline: [
      { week: "Day 1-2", what: "Audit + data export" },
      { week: "Day 3-4", what: "Import + chart of accounts mapping" },
      { week: "Day 5", what: "Bank feeds + parallel run" },
      { week: "Day 7", what: "Team training + go-live" },
    ],
    quote: { text: "Switched from desktop QB to Xero in 5 days. Zero data lost.", name: "Erin S.", role: "Studio Owner, Kitchener ON" },
    price: "From $750 one-time",
  },
  {
    id: "reporting",
    h2: <>Monthly Reports in <span className="accent-word">Plain Language</span> — No Accounting Degree Required</>,
    paras: [
      "Every month, we deliver clear, visual reports that show exactly how your business is performing — without the jargon. P&L, balance sheet, cash flow, and KPIs explained in plain English.",
      "We highlight what changed, what's trending, and what to watch. So you can make decisions based on data, not guesswork.",
      "Need a custom report for your bank, investor, or board? We build it — and we present it with you if needed.",
    ],
    deliverables: ["Monthly P&L and balance sheet", "Cash flow statements", "Custom KPI dashboards", "Year-over-year comparisons", "Variance and trend analysis", "Lender and investor reports"],
    idealFor: ["Owners who want clarity, not data dumps", "Businesses preparing for financing", "Anyone with a board or investor"],
    timeline: [
      { week: "Month 1", what: "KPIs + report templates defined" },
      { week: "Month 2", what: "First report delivered + reviewed" },
      { week: "Quarterly", what: "Strategic review call" },
      { week: "Annually", what: "Investor/lender package" },
    ],
    quote: { text: "Finally I understand my business numbers. No more accountant-speak.", name: "Mike D.", role: "Restaurant Group, GTA" },
    price: "Included with Bookkeeping",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85"
        eyebrow="Our Services"
        title={<>Accounting Services Built for Ontario's <span className="accent-word">High-Volume Businesses</span></>}
        subtitle="From bookkeeping to corporate tax — every service we offer is designed for Ontario businesses that need precision, speed, and reliability."
      />

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "bg-peach py-20 md:py-24" : "bg-white py-20 md:py-24"}>
          <div className="container-x grid lg:grid-cols-2 gap-10 md:gap-12">
            <Reveal>
              <p className="label-eyebrow mb-3">Service {String(i + 1).padStart(2, "0")}</p>
              <h2 className="h2 mb-6">{s.h2}</h2>
              <div className="space-y-4 mb-8">
                {s.paras.map((p, idx) => <p key={idx} className="text-body text-[16px] leading-[1.75]">{p}</p>)}
              </div>

              <div className="bg-white/60 rounded-xl p-5 border border-border mb-6">
                <p className="label-eyebrow mb-3">Ideal for</p>
                <ul className="space-y-2">
                  {s.idealFor.map(t => <li key={t} className="flex items-start gap-2 text-body text-[14px]"><span className="text-accent mt-1">▸</span>{t}</li>)}
                </ul>
              </div>

              <blockquote className="border-l-4 border-accent pl-4 italic text-body text-[15px]">
                "{s.quote.text}"
                <footer className="not-italic mt-2 text-xs text-muted-foreground">— {s.quote.name}, {s.quote.role}</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-border shadow-sm">
                <h3 className="font-serif text-2xl mb-5 text-foreground">What's included</h3>
                <ul className="space-y-3 mb-8">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-body text-[15px]"><Check className="text-accent shrink-0 mt-1" size={18} /> {d}</li>
                  ))}
                </ul>

                <h4 className="font-serif text-lg mb-4 text-foreground">What you can expect</h4>
                <ol className="space-y-2.5 mb-6 border-l-2 border-accent/30 pl-4">
                  {s.timeline.map(t => (
                    <li key={t.week} className="text-[14px]">
                      <p className="font-semibold text-accent text-xs uppercase tracking-wider">{t.week}</p>
                      <p className="text-body">{t.what}</p>
                    </li>
                  ))}
                </ol>

                <div className="border-t border-border pt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
                    <p className="font-serif text-2xl text-accent">{s.price}</p>
                  </div>
                  <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-24 bg-navy text-white text-center">
        <div className="container-x max-w-2xl mx-auto">
          <Reveal>
            <h2 className="h2 text-white mb-4">Not sure what you need?</h2>
            <p className="text-white/80 mb-8">Book a free 30-minute call. We'll review your business and recommend exactly what fits.</p>
            <Link to="/contact" className="btn-primary">Book a Free 30-Min Call <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
