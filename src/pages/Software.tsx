// import { Reveal } from "@/components/site/Reveal";
// import PageHero from "@/components/site/PageHero";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import xeroLogo from "@/assets/brand/xero.svg";
// import quickbooksLogo from "@/assets/brand/quickbooks.png";
// import hubdocLogo from "@/assets/brand/hubdoc.png";
// import dextLogo from "@/assets/brand/dext.png";
// import wagepointLogo from "@/assets/brand/wagepoint.png";
// import plootoLogo from "@/assets/brand/plooto.webp";


// const tools = [
//   { id: "xero", name: "Xero", logo: xeroLogo, tag: "Primary cloud platform", desc: "Our primary cloud accounting platform — used daily across most of our client base. Real-time bank feeds, automated reconciliation, and beautiful reports make Xero the backbone of how we deliver clean, timely books.", benefits: ["Live bank feeds for all major Canadian banks", "Automated reconciliation rules", "Beautiful management reports", "Best-in-class app integrations"] },
//   { id: "quickbooks", name: "QuickBooks Online", logo: quickbooksLogo, tag: "Full QuickBooks Online support", desc: "We fully support QuickBooks Online clients and can migrate to Xero if preferred. A familiar choice for many Canadian small businesses with strong invoicing, payroll, and sales tax tools.", benefits: ["Full QuickBooks Online bookkeeping support", "QuickBooks Online Payroll integration", "Migration to Xero if needed", "Sales tax automation"] },
//   { id: "hubdoc", name: "Hubdoc", logo: hubdocLogo, tag: "Document capture", desc: "Hubdoc automatically fetches and stores your bank statements, bills, and receipts in one place. Emails, photo snaps, and bank documents flow straight into Xero — no manual filing required.", benefits: ["Auto-fetch bank statements", "Receipt photo capture", "Email-in for invoices", "Direct sync to Xero"] },
//   { id: "dext", name: "Dext", logo: dextLogo, tag: "AI receipt OCR", desc: "Dext uses AI-powered OCR to extract data from receipts and bills with industry-leading accuracy. Snap a photo, forward an email, or bulk-upload — and Dext does the data entry for you.", benefits: ["Industry-leading OCR accuracy", "Auto-category suggestions", "Multi-currency support", "Bulk upload tools"] },
//   { id: "wagepoint", name: "Wagepoint", logo: wagepointLogo, tag: "Canadian payroll", desc: "Wagepoint is purpose-built Canadian payroll for small business. T4s, ROEs, and CRA remittances are filed automatically so you stay compliant without lifting a finger.", benefits: ["CRA-compliant remittances", "Direct deposit", "T4/ROE generation", "Employee self-serve portal"] },
//   { id: "plooto", name: "Plooto", logo: plootoLogo, tag: "AP automation", desc: "Plooto automates vendor payments and approval workflows — pay anyone in Canada (and USD) in just a couple of clicks. Every payment syncs cleanly back to Xero or QuickBooks Online.", benefits: ["Approval workflows", "Bulk vendor payments", "USD/CAD payments", "Sync to Xero and QuickBooks Online"] },
  
// ];

// export default function Software() {
//   return (
//     <>
//       <PageHero
//         image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
//         eyebrow="Software & Tools"
//         title={<>The Tools Behind <span className="accent-word">Your Perfect Books</span></>}
//         subtitle="We work with the best cloud accounting stack on the market — purpose-built for Ontario businesses."
//       >
//         <div className="flex flex-wrap justify-center gap-2">
//           {tools.map(t => <a key={t.id} href={`#${t.id}`} className="pill text-sm">{t.name}</a>)}
//         </div>
//       </PageHero>

//       {tools.map((t, i) => (
//         <section key={t.id} id={t.id} className={i % 2 === 0 ? "bg-white py-20" : "bg-peach py-20"}>
//           <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
//             <Reveal>
//               <img
//                 src={t.logo}
//                 alt={`${t.name} logo`}
//                 className="w-[140px] h-[60px] object-contain mb-5 bg-transparent"
//                 loading="lazy"
//               />
//               <p className="label-eyebrow mb-3">{t.tag}</p>
//               <h2 className="h2 mb-5">{t.name}</h2>
//               {t.id === "xero" && (
//                 <div className="inline-flex items-center px-3 py-1.5 rounded-[6px] h-[32px] text-white text-[14px] font-semibold mb-6" style={{ backgroundColor: 'rgb(92,91,90)' }}>
//                   Xero Platinum Partner
//                 </div>
//               )}
//               {t.id === "quickbooks" ? (
//                 <div className="space-y-5">
//                   <p className="text-body text-[16px] leading-[1.75]">{t.desc}</p>
//                   <div>
//                     <h3 className="font-serif text-[20px] text-foreground mb-2">Send Invoices & Get Paid Fast</h3>
//                     <p className="text-body text-[16px] leading-[1.75]">Quickly and easily send professional invoices with a personal touch, like your logo and brand colours. You can even add a Pay Now button to let your customers pay by credit card or Apple Pay in just a few clicks.</p>
//                   </div>
//                   <div>
//                     <h3 className="font-serif text-[20px] text-foreground mb-2">See Your Whole Business</h3>
//                     <p className="text-body text-[16px] leading-[1.75]">QuickBooks Online simplifies how you track your business finances, so you can focus on the bigger picture. From money in, to money out, to managing your team, get a clear view of your business in one easy-to-use solution.</p>
//                   </div>
//                 </div>
//               ) : t.id === "xero" ? (
//                 <div className="space-y-5">
//                   <p className="text-body text-[16px] leading-[1.75]">{t.desc}</p>
//                   <div>
//                     <h3 className="font-serif text-[20px] text-foreground mb-2">Streamlined Bookkeeping & Automation</h3>
//                     <p className="text-body text-[16px] leading-[1.75]">For bookkeeping-focused clients, Xero simplifies day-to-day accounting by automating many of the repetitive processes that traditionally consume valuable time. Features such as automated bank feeds, receipt capture, recurring invoices, and intelligent reconciliation tools help maintain clean and accurate financial records while reducing manual data entry and minimizing errors.</p>
//                   </div>
//                   <div>
//                     <h3 className="font-serif text-[20px] text-foreground mb-2">Real-Time Financial Visibility & Collaboration</h3>
//                     <p className="text-body text-[16px] leading-[1.75]">Xero also provides business owners with clear, easy-to-understand financial insights that support better ongoing cash flow management and financial oversight. With secure cloud access, real-time reporting, and direct collaboration between clients and their accounting team, bookkeeping becomes more proactive, organized, and efficient — allowing business owners to focus more on running and growing their business.</p>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <p className="text-body text-[16px] leading-[1.75] mb-6">{t.desc}</p>
//                   <ul className="space-y-2 text-body text-[15px]">
//                     {t.benefits.map(b => <li key={b} className="flex gap-3"><span className="text-accent">▸</span> {b}</li>)}
//                   </ul>
//                 </>
//               )}
//             </Reveal>
//             <Reveal delay={0.1}>
//               <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white shadow-xl">
//                 <div className="font-serif text-5xl mb-3">{t.name}</div>
//                 <div className="label-eyebrow !text-white/60 mb-6">Integration partner</div>
//                 <div className="h-px bg-white/20 my-6" />
//                 <p className="text-white/80 text-sm">Fully integrated into our standard workflow.</p>
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       ))}

//       {/* MIGRATION SERVICE */}
//       <section className="bg-peach py-20 md:py-24">
//         <div className="container-x">
//           <Reveal className="text-center max-w-2xl mx-auto mb-12">
//             <p className="label-eyebrow mb-3">Migration Service</p>
//             <h2 className="h2">Already on a <span className="accent-word">Different Platform?</span></h2>
//             <p className="text-body text-[16px] leading-[1.7] mt-5">We migrate your data from any accounting platform to Xero or QuickBooks Online with zero data loss and zero downtime.</p>
//           </Reveal>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
//             {[
//               { n: 1, t: "Audit", d: "Review current system" },
//               { n: 2, t: "Export", d: "Export & clean data" },
//               { n: 3, t: "Import", d: "Import to new platform" },
//               { n: 4, t: "Parallel", d: "Run both systems 2 weeks" },
//               { n: 5, t: "Cutover", d: "Full cutover + training" },
//             ].map((s, i) => (
//               <Reveal key={s.n} delay={i * 0.06}>
//                 <div className="bg-white rounded-2xl p-5 border border-border h-full text-center card-hover">
//                   <div className="w-10 h-10 rounded-full bg-accent text-white font-serif flex items-center justify-center mx-auto mb-3">{s.n}</div>
//                   <h3 className="font-serif text-[17px] text-foreground mb-1">{s.t}</h3>
//                   <p className="text-body text-xs">{s.d}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//           <div className="text-center">
//             <Link to="/contact" className="btn-primary">Book Migration Consultation <ArrowRight size={16} /></Link>
//           </div>
//         </div>
//       </section>

//       <section className="bg-navy py-24 text-white">
//         <div className="container-x text-center max-w-3xl mx-auto">
//           <Reveal>
//             <p className="label-eyebrow mb-3">Data Flow</p>
//             <h2 className="h2 text-white mb-10">Everything Connects, <span className="accent-word">Automatically</span></h2>
//             <div className="grid md:grid-cols-3 gap-6 text-left">
//               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
//                 <p className="label-eyebrow mb-2">Capture</p>
//                 <p className="text-white/80 text-sm leading-[1.7]">Dext + Hubdoc capture every receipt, bill, and statement automatically.</p>
//               </div>
//               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
//                 <p className="label-eyebrow mb-2">Process</p>
//                 <p className="text-white/80 text-sm leading-[1.7]">Xero or QuickBooks Online reconciles and categorizes every transaction.</p>
//               </div>
//               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
//                 <p className="label-eyebrow mb-2">Pay & Report</p>
//                 <p className="text-white/80 text-sm leading-[1.7]">Wagepoint handles payroll, Plooto handles vendor payments, we deliver clean reports.</p>
//               </div>
//             </div>
//             <Link to="/contact" className="btn-primary mt-10">Talk to a Specialist <ArrowRight size={16} /></Link>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }



import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import xeroLogo from "@/assets/brand/xero.svg";
import quickbooksLogo from "@/assets/brand/quickbooks.png";
import hubdocLogo from "@/assets/brand/hubdoc.png";
import dextLogo from "@/assets/brand/dext.png";
import wagepointLogo from "@/assets/brand/wagepoint.png";
import plootoLogo from "@/assets/brand/plooto.webp";

const tools = [
  { id: "xero", name: "Xero", logo: xeroLogo, tag: "Primary cloud platform", desc: "Our primary cloud accounting platform — used daily across most of our client base. Real-time bank feeds, automated reconciliation, and beautiful reports make Xero the backbone of how we deliver clean, timely books.", benefits: ["Live bank feeds for all major Canadian banks", "Automated reconciliation rules", "Beautiful management reports", "Best-in-class app integrations"] },
  { id: "quickbooks", name: "QuickBooks Online", logo: quickbooksLogo, tag: "Full QuickBooks Online support", desc: "We fully support QuickBooks Online clients and can migrate to Xero if preferred. A familiar choice for many Canadian small businesses with strong invoicing, payroll, and sales tax tools.", benefits: ["Full QuickBooks Online bookkeeping support", "QuickBooks Online Payroll integration", "Migration to Xero if needed", "Sales tax automation"] },
  { id: "hubdoc", name: "Hubdoc", logo: hubdocLogo, tag: "Document capture", desc: "Hubdoc automatically fetches and stores your bank statements, bills, and receipts in one place. Emails, photo snaps, and bank documents flow straight into Xero — no manual filing required.", benefits: ["Auto-fetch bank statements", "Receipt photo capture", "Email-in for invoices", "Direct sync to Xero"] },
  { id: "dext", name: "Dext", logo: dextLogo, tag: "AI receipt OCR", desc: "Dext uses AI-powered OCR to extract data from receipts and bills with industry-leading accuracy. Snap a photo, forward an email, or bulk-upload — and Dext does the data entry for you.", benefits: ["Industry-leading OCR accuracy", "Auto-category suggestions", "Multi-currency support", "Bulk upload tools"] },
  { id: "wagepoint", name: "Wagepoint", logo: wagepointLogo, tag: "Canadian payroll", desc: "Wagepoint is purpose-built Canadian payroll for small business. T4s, ROEs, and CRA remittances are filed automatically so you stay compliant without lifting a finger.", benefits: ["CRA-compliant remittances", "Direct deposit", "T4/ROE generation", "Employee self-serve portal"] },
  { id: "plooto", name: "Plooto", logo: plootoLogo, tag: "AP automation", desc: "Plooto automates vendor payments and approval workflows — pay anyone in Canada (and USD) in just a couple of clicks. Every payment syncs cleanly back to Xero or QuickBooks Online.", benefits: ["Approval workflows", "Bulk vendor payments", "USD/CAD payments", "Sync to Xero and QuickBooks Online"] },
];

export default function Software() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
        eyebrow="Software & Tools"
        title={<>The Tools Behind <span className="accent-word">Your Perfect Books</span></>}
        subtitle="We work with the best cloud accounting stack on the market — purpose-built for Ontario businesses."
      >
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map(t => <a key={t.id} href={`#${t.id}`} className="pill text-sm">{t.name}</a>)}
        </div>
      </PageHero>

      {tools.map((t, i) => (
        <section key={t.id} id={t.id} className={i % 2 === 0 ? "bg-white py-20" : "bg-peach py-20"}>
          <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>

              {/* LOGO CARD — big, prominent, professional */}
              <div className="flex items-center gap-5 mb-7">
                <div className="w-24 h-24 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ padding: (t.id === "hubdoc" || t.id === "wagepoint") ? "0px" : "12px" }}>
                  <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    className="object-contain"
                    loading="lazy"
                    style={{
                      width: (t.id === "hubdoc" || t.id === "wagepoint") ? "140%" : "100%",
                      height: (t.id === "hubdoc" || t.id === "wagepoint") ? "140%" : "100%",
                    }}
                  />
                </div>
                <div>
                  <p className="label-eyebrow mb-1">{t.tag}</p>
                  <h2 className="h2 !mb-0">{t.name}</h2>
                  {t.id === "xero" && (
                    <div className="inline-flex items-center px-3 py-1 rounded-md text-white text-[13px] font-semibold mt-2" style={{ backgroundColor: '#13B5EA' }}>
                      Xero Platinum Partner
                    </div>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              {t.id === "quickbooks" ? (
                <div className="space-y-5">
                  <p className="text-body text-[16px] leading-[1.75]">{t.desc}</p>
                  <div>
                    <h3 className="font-serif text-[20px] text-foreground mb-2">Send Invoices & Get Paid Fast</h3>
                    <p className="text-body text-[16px] leading-[1.75]">Quickly and easily send professional invoices with a personal touch, like your logo and brand colours. You can even add a Pay Now button to let your customers pay by credit card or Apple Pay in just a few clicks.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] text-foreground mb-2">See Your Whole Business</h3>
                    <p className="text-body text-[16px] leading-[1.75]">QuickBooks Online simplifies how you track your business finances, so you can focus on the bigger picture. From money in, to money out, to managing your team, get a clear view of your business in one easy-to-use solution.</p>
                  </div>
                </div>
              ) : t.id === "xero" ? (
                <div className="space-y-5">
                  <p className="text-body text-[16px] leading-[1.75]">{t.desc}</p>
                  <div>
                    <h3 className="font-serif text-[20px] text-foreground mb-2">Streamlined Bookkeeping & Automation</h3>
                    <p className="text-body text-[16px] leading-[1.75]">For bookkeeping-focused clients, Xero simplifies day-to-day accounting by automating many of the repetitive processes that traditionally consume valuable time. Features such as automated bank feeds, receipt capture, recurring invoices, and intelligent reconciliation tools help maintain clean and accurate financial records while reducing manual data entry and minimizing errors.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] text-foreground mb-2">Real-Time Financial Visibility & Collaboration</h3>
                    <p className="text-body text-[16px] leading-[1.75]">Xero also provides business owners with clear, easy-to-understand financial insights that support better ongoing cash flow management and financial oversight. With secure cloud access, real-time reporting, and direct collaboration between clients and their accounting team, bookkeeping becomes more proactive, organized, and efficient — allowing business owners to focus more on running and growing their business.</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-body text-[16px] leading-[1.75] mb-6">{t.desc}</p>
                  <ul className="space-y-2 text-body text-[15px]">
                    {t.benefits.map(b => <li key={b} className="flex gap-3"><span className="text-accent">▸</span> {b}</li>)}
                  </ul>
                </>
              )}
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
            <p className="text-body text-[16px] leading-[1.7] mt-5">We migrate your data from any accounting platform to Xero or QuickBooks Online with zero data loss and zero downtime.</p>
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