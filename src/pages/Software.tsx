import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { id: "xero", name: "Xero", tag: "Primary cloud platform", desc: "Our primary cloud accounting platform. Real-time bank feeds, automated reconciliation, and beautiful reports.", benefits: ["Live bank feeds for all major Canadian banks", "Automated reconciliation rules", "Beautiful management reports", "Best-in-class app integrations"] },
  { id: "quickbooks", name: "QuickBooks Online", tag: "Full QBO support", desc: "We support QBO clients fully and offer Xero migration if preferred.", benefits: ["Full QBO bookkeeping support", "QBO Payroll integration", "Migration to Xero if needed", "Sales tax automation"] },
  { id: "hubdoc", name: "Hubdoc", tag: "Document capture", desc: "Automated document and receipt capture — emails, snaps, and bank statements all flow into Xero automatically.", benefits: ["Auto-fetch bank statements", "Receipt photo capture", "Email-in for invoices", "Direct sync to Xero"] },
  { id: "dext", name: "Dext", tag: "AI receipt OCR", desc: "AI-powered receipt scanning and categorization — perfect for high-volume Ontario businesses.", benefits: ["Industry-leading OCR accuracy", "Auto-category suggestions", "Multi-currency support", "Bulk upload tools"] },
  { id: "wagepoint", name: "Wagepoint", tag: "Canadian payroll", desc: "Canadian payroll built for small business. T4s, ROEs, and CRA remittances handled automatically.", benefits: ["CRA-compliant remittances", "Direct deposit", "T4/ROE generation", "Employee self-serve portal"] },
  { id: "plooto", name: "Plooto", tag: "AP automation", desc: "Automated vendor payment processing and AP automation — pay anyone in Canada with two clicks.", benefits: ["Approval workflows", "Bulk vendor payments", "USD/CAD payments", "Sync to Xero/QBO"] },
];

export default function Software() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
        eyebrow="Software & Tools"
        title={<>The Tools Behind <span className="accent-word">Your Perfect Books</span></>}
        subtitle="We work with the best cloud accounting stack on the market — purpose-built for Ontario's high-volume businesses."
      >
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map(t => <a key={t.id} href={`#${t.id}`} className="pill text-sm">{t.name}</a>)}
        </div>
      </PageHero>

      {tools.map((t, i) => (
        <section key={t.id} id={t.id} className={i % 2 === 0 ? "bg-white py-20" : "bg-peach py-20"}>
          <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="label-eyebrow mb-3">{t.tag}</p>
              <h2 className="h2 mb-5">{t.name}</h2>
              <p className="text-body text-[16px] leading-[1.75] mb-6">{t.desc}</p>
              <ul className="space-y-2 text-body text-[15px]">
                {t.benefits.map(b => <li key={b} className="flex gap-3"><span className="text-accent">▸</span> {b}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white shadow-xl">
                <div className="font-serif text-5xl mb-3">{t.name}</div>
                <div className="label-eyebrow !text-white/60 mb-6">Integration partner</div>
                <div className="h-px bg-white/20 my-6" />
                <p className="text-white/80 text-sm">Fully integrated into our standard workflow.</p>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* MIGRATION SERVICE */}
      <section className="bg-peach py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="label-eyebrow mb-3">Migration Service</p>
            <h2 className="h2">Already on a <span className="accent-word">Different Platform?</span></h2>
            <p className="text-body text-[16px] leading-[1.7] mt-5">We migrate your data from any accounting platform to Xero or QBO with zero data loss and zero downtime.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
            {[
              { n: 1, t: "Audit", d: "Review current system" },
              { n: 2, t: "Export", d: "Export & clean data" },
              { n: 3, t: "Import", d: "Import to new platform" },
              { n: 4, t: "Parallel", d: "Run both systems 2 weeks" },
              { n: 5, t: "Cutover", d: "Full cutover + training" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 border border-border h-full text-center card-hover">
                  <div className="w-10 h-10 rounded-full bg-accent text-white font-serif flex items-center justify-center mx-auto mb-3">{s.n}</div>
                  <h3 className="font-serif text-[17px] text-foreground mb-1">{s.t}</h3>
                  <p className="text-body text-xs">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Book Migration Consultation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-eyebrow mb-3">Data Flow</p>
            <h2 className="h2 text-white mb-10">Everything Connects, <span className="accent-word">Automatically</span></h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="label-eyebrow mb-2">Capture</p>
                <p className="text-white/80 text-sm leading-[1.7]">Dext + Hubdoc capture every receipt, bill, and statement automatically.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="label-eyebrow mb-2">Process</p>
                <p className="text-white/80 text-sm leading-[1.7]">Xero or QuickBooks Online reconciles and categorizes every transaction.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="label-eyebrow mb-2">Pay & Report</p>
                <p className="text-white/80 text-sm leading-[1.7]">Wagepoint handles payroll, Plooto handles vendor payments, we deliver clean reports.</p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary mt-10">Talk to a Specialist <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
