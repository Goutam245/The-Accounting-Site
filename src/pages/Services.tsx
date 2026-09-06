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
  timeline?: { week: string; what: string }[];
  quote: { text: string; name: string; role: string };
};

const services: Service[] = [
  {
    id: "bookkeeping",
    h2: <>Full-Cycle Bookkeeping for <span className="accent-word">Growing Businesses</span></>,
    paras: [
      "Whether you have 50 or 5,000 monthly transactions, we process, categorize, and reconcile every single one with precision. Our team handles Shopify, Square, Stripe, and all major payment platforms — pulling everything into one clean monthly view.",
      "We use Xero and QuickBooks Online to give you visibility into your financials. We prepare every reconciliation carefully and submit it for your review, so you're confident in the numbers when you need to make decisions.",
      "Every account reconciled. Every transaction categorized. Timely filings, every month.",
    ],
    deliverables: [
      "Periodic transaction processing (unlimited volume)",
      "Bank and credit card reconciliation",
      "Accounts receivable/payable tracking",
      "Integration with Shopify, Square, Stripe",
      "Reliable month-end close",
      "Clean financial statements monthly",
    ],
    idealFor: ["Businesses with 100+ monthly transactions", "E-commerce, retail, and service operations", "Owners who want their evenings back"],
    timeline: [
      { week: "Week 1", what: "Onboarding + bank feeds connected" },
      { week: "Week 2", what: "Historical cleanup complete" },
      { week: "Week 3", what: "First monthly close delivered" },
      { week: "Ongoing", what: "Reports by the 5th of every month" },
    ],
    quote: { text: "We went from monthly chaos to clean books delivered on the 4th every month.", name: "Sarah K.", role: "Retail Owner" },
  },
  {
    id: "hst",
    h2: <>Sales Tax — <span className="accent-word">HST and GST</span></>,
    paras: [
      "Businesses face complex HST/GST filing rules. From the $30,000 threshold to quarterly remittances and place-of-supply rules, missing a single detail means CRA penalties and interest charges that compound quickly.",
      "We handle every aspect of HST compliance — registration, filing, ITC tracking, remittances, and audit support — so you never miss a deadline. Timely tax filings are our standard.",
      "If you're already behind on HST, we can catch you up, work with the CRA on your behalf, and get you back into good standing without panic.",
    ],
    deliverables: ["HST/GST registration and setup", "Quarterly or monthly filings", "Input Tax Credit (ITC) maximization", "CRA correspondence handling", "Audit support and representation", "Late-filing recovery and back-filings"],
    idealFor: ["Anyone over $30K annual revenue", "Businesses behind on HST filings", "Multi-province sellers"],
    timeline: [
      { week: "Week 1", what: "Authorization + CRA representative setup" },
      { week: "Week 2", what: "Books reviewed for ITCs" },
      { week: "Return Reviewed and Filed", what: "Final review with you, then submitted to CRA" },
    ],
    quote: { text: "Two years of timely HST filings. We forgot what late-filing letters look like.", name: "Tom R.", role: "Contractor" },
  },
  {
    id: "payroll",
    h2: <>Hands-Off <span className="accent-word">Payroll Process</span></>,
    paras: [
      "Let us run your payroll accurately every time.",
      "Using Wagepoint, ADP, or Ceridian — Canada's leading small business payroll platforms. Employees can access their pay stubs through a secure portal. We'll keep you payroll compliant and stress-free, even as you scale from 1 to 50+ employees.",
    ],
    deliverables: ["Direct deposit and digital pay stubs", "T4s, T4As, and ROE generation", "CRA source deduction remittances", "WSIB and EHT calculations", "New-hire and termination paperwork", "Secure employee self-serve portal"],
    idealFor: ["Employers with 1–50+ staff", "Bonus, commission, or tip operations", "Multi-province employers"],
    quote: { text: "Our payroll has run flawlessly for 18 months. Not a single CRA notice.", name: "Anita P.", role: "Clinic Owner" },
  },
  {
    id: "ar-ap",
    h2: <>Accounts Receivable / <span className="accent-word">Payable</span></>,
    paras: [
      "Using platforms such as Plooto, Dext, and Hubdoc, we automate your AP process and receipt capture. You approve, we pay securely and on time, every time.",
      "Ideal for businesses who want to modernize their entire AR and AP workflows.",
    ],
    deliverables: ["Customer invoicing on your schedule", "Automated payment reminders", "Vendor bill capture (Dext / Hubdoc)", "Approval-based vendor payments (Plooto)", "Weekly AR/AP aging reports", "Receipt capture & document storage"],
    idealFor: ["Businesses with 20+ invoices/month", "Anyone tired of chasing customers", "Owners who want clean cash-flow visibility"],
    quote: { text: "We collect 18 days faster. Our DSO dropped from 47 to 29.", name: "Jordan M.", role: "Agency Owner" },
  },
  {
    id: "corporate",
    h2: <>Corporate Tax Returns for <span className="accent-word">small business</span></>,
    paras: [
      "We prepare and file taxes annually and provide our clients with no year-end surprises.",
      "Every small business credit is captured, instalments are scheduled to protect your cash flow, and shareholder remuneration is planned to legally minimize tax owed.",
    ],
    deliverables: ["Annual T2 corporate tax return", "Year-end financial statements", "GIFI schedules and CRA filings", "Shareholder dividend planning", "Tax instalment scheduling", "Multi-year tax projections"],
    idealFor: ["Incorporated small businesses", "Owner-operators paying themselves", "Anyone with recurring tax surprises"],
    quote: { text: "Our tax savings paid for the entire year of bookkeeping fees, twice.", name: "Karim L.", role: "Founder, SaaS Inc." },
  },
  {
    id: "cloud",
    h2: <>Move to cloud in <span className="accent-word">under a month</span></>,
    paras: [
      "If you're still using desktop accounting software or spreadsheets, you're losing hours every week. Cloud accounting gives you real-time visibility, automated bank feeds, and access from anywhere.",
      "We migrate clients from Sage, Wave, or QuickBooks Desktop to Xero or QuickBooks Online with zero data loss. Bank feeds, historical transactions, chart of accounts, and integrations are all set up — with parallel running so you never lose a record.",
      "Then we train your team and provide ongoing support so you actually use the tools you're paying for.",
    ],
    deliverables: ["Xero or QuickBooks Online setup and migration", "Historical data import (multi-year)", "Bank feed and credit card connections", "Chart of accounts customization", "App integrations (Shopify, Stripe, etc.)", "Team training and ongoing support"],
    idealFor: ["Sage, Wave, or QuickBooks Desktop users", "Spreadsheet-based bookkeeping", "Multi-location operations"],
    quote: { text: "Switched from QuickBooks Desktop to Xero in 5 days. Zero data lost.", name: "Erin S.", role: "Studio Owner" },
  },
  {
    id: "reporting",
    h2: <>Monthly Reports in <span className="accent-word">Plain Language</span></>,
    paras: [
      "Every month, we deliver clear, visual reports that show exactly how your business is performing — without the jargon.",
      "P&L, balance sheet and other financial metrics explained in plain English. We also include cash flow statements so you always know where the money is going.",
      "We highlight what changed, what's trending, and what to watch — so you can make decisions based on data, not guesswork.",
    ],
    deliverables: ["Monthly P&L and balance sheet", "Cash flow statements", "Year-over-year comparisons", "Variance and trend analysis", "Lender and investor reports"],
    idealFor: ["Owners who want clarity, not data dumps", "Businesses preparing for financing", "Anyone with a board or investor"],
    quote: { text: "Finally I understand my business numbers. No more accountant-speak.", name: "Mike D.", role: "Restaurant Group" },
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85"
        eyebrow="Our Services"
        title={<>Accounting Services Built for <span className="accent-word">Growing Businesses</span></>}
        subtitle="From bookkeeping to corporate tax — every service we offer is designed for businesses that need precision, speed, and reliability."
      />

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "bg-peach py-20 md:py-24" : "bg-white py-20 md:py-24"}>
          <div className="container-x grid lg:grid-cols-2 gap-10 md:gap-12">
            <Reveal>
              <p className="label-eyebrow mb-3">Our Services</p>
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

                {s.timeline && (
                  <>
                    <h4 className="font-serif text-lg mb-4 text-foreground">What you can expect</h4>
                    <ol className="space-y-2.5 mb-6 border-l-2 border-accent/30 pl-4">
                      {s.timeline.map(t => (
                        <li key={t.week} className="text-[14px]">
                          <p className="font-semibold text-accent text-xs uppercase tracking-wider">{t.week}</p>
                          <p className="text-body">{t.what}</p>
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                <div className="border-t border-border pt-5">
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
