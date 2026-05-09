import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Target, Calendar, BarChart3, BookOpen, Receipt, Users, Building2, Cloud, FileText, ChevronRight, Star, Shield, Lock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import StatsTicker from "@/components/site/StatsTicker";
import TimeWasteCalculator from "@/components/site/TimeWasteCalculator";
import IndustrySwitcher from "@/components/site/IndustrySwitcher";

const industries = ["Retail", "Construction", "Healthcare", "Professional Services", "Restaurants", "E-Commerce", "Real Estate", "Manufacturing"];

const features = [
  { icon: Zap, title: "Speed", body: "48-hour turnaround on monthly bookkeeping. We process high transaction volumes without errors or delays." },
  { icon: Target, title: "Accuracy", body: "Zero HST penalties across all our clients in 2024. Precision is our standard, not our exception." },
  { icon: Calendar, title: "Never Miss a Deadline", body: "Every HST, payroll, and corporate tax deadline tracked and filed automatically. You'll never get a CRA late-filing notice." },
  { icon: BarChart3, title: "Real-Time Visibility", body: "Monthly reports in plain language. Know exactly where your money is going and what's coming next." },
];

const stages = [
  { icon: "👤", title: "Solo & Freelancers", revenue: "Under $100K", body: "Simple, affordable bookkeeping and HST filing. No more receipts in a shoebox. No more missed deadlines.", price: "$400/month" },
  { icon: "🏪", title: "Small Business", revenue: "$100K – $1M", body: "Monthly bookkeeping, HST/GST filing, payroll for up to 15 employees, and annual corporate tax return.", price: "$650/month" },
  { icon: "🏢", title: "Growing Business", revenue: "$1M – $5M", body: "High-volume transaction processing, bi-weekly reporting, multi-location support, and proactive tax planning.", price: "$1,550/month" },
];

const steps = [
  { day: "Day 1", title: "Free Consultation", body: "30 minutes. We review your current situation and tell you exactly what we can do for your business." },
  { day: "Day 2-3", title: "Onboarding", body: "We connect to your bank, set up your cloud accounting software, and organize your records." },
  { day: "Day 4-5", title: "First Reconciliation", body: "We process your first month of transactions and deliver a clean financial snapshot." },
  { day: "Ongoing", title: "Monthly Cycle", body: "Books done. HST filed. Reports sent. Every single month. You just approve." },
];

const tools = ["Xero", "QuickBooks Online", "Hubdoc", "Wagepoint", "Dext", "Plooto"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85"
          alt=""
          aria-hidden="true"
          loading="eager"
          width={1400}
          height={900}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(45,55,72,0.86) 60%, rgba(27,42,74,0.92) 100%)" }} />
        <div className="absolute inset-0 hero-grid-bg opacity-60" />
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <Reveal className="lg:col-span-7 text-white">
            <p className="label-eyebrow mb-5">Ontario's High-Volume Compliance Specialists</p>
            <h1 className="h1 text-white mb-6">
              Bookkeeping. Sales Tax.<br />
              <span className="accent-word">Done Right.</span> Every Time.
            </h1>
            <p className="text-[18px] leading-[1.7] text-white/85 max-w-xl mb-8">
              We handle high-volume bookkeeping, HST/GST filing, and payroll for Ontario businesses that need accuracy, speed, and reliability — month after month, without exception.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-primary text-base">Get a Free Quote <ArrowRight size={18} /></Link>
              <a href="#how-it-works" className="btn-ghost-light">See How It Works</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["300+", "Clients Served"],
                ["$0", "Tax Penalties for Clients"],
                ["48hr", "Average Turnaround"],
                ["100%", "On-Time Filing Rate"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-3xl md:text-4xl text-white">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-[#0F1B33] border border-accent/40 rounded-2xl p-7 shadow-[0_20px_60px_-15px_rgba(224,123,57,0.4)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-white/60">Live Compliance</span>
                </div>
                <span className="text-xs text-white/50">April 2025</span>
              </div>
              <ul className="space-y-3">
                {[
                  ["HST Filed", "Q1 2025", true],
                  ["Payroll Processed", "Bi-weekly", true],
                  ["Books Reconciled", "March", true],
                ].map(([t, s]) => (
                  <li key={t as string} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><Check size={14} /></div>
                      <div>
                        <div className="text-white text-sm font-medium">{t}</div>
                        <div className="text-white/50 text-xs">{s}</div>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-xs font-semibold">DONE</span>
                  </li>
                ))}
                <li className="flex items-center justify-between bg-accent/10 border border-accent/30 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center"><Calendar size={14} /></div>
                    <div>
                      <div className="text-white text-sm font-medium">Next Filing</div>
                      <div className="text-white/50 text-xs">Corporate tax instalment</div>
                    </div>
                  </div>
                  <span className="text-accent text-xs font-bold">APR 30</span>
                </li>
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <StatsTicker />

      {/* TRUST STRIP */}
      <section className="bg-white py-14 border-b border-border">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-6">Trusted by Ontario businesses in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((i) => <span key={i} className="pill">{i}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US — horizontal scroll */}
      <section className="bg-peach py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-3">Why The Accounting Site</p>
            <h2 className="h2"><span className="accent-word">High-Volume Compliance</span>, Built for Ontario Businesses</h2>
          </Reveal>
        </div>
        <div className="overflow-x-auto pb-6 -mx-2 scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-6 px-6 md:px-10 max-w-[1280px] mx-auto">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="snap-start shrink-0 w-[300px] md:w-[340px]">
                <div className="h-full bg-white rounded-2xl p-7 border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <f.icon size={22} />
                  </div>
                  <h3 className="h3 mb-3">{f.title}</h3>
                  <p className="text-body text-[15px] leading-[1.7]">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — asymmetric */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-3">What We Do</p>
            <h2 className="h2">Complete Accounting Services for <span className="accent-word">Ontario Businesses</span></h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <Link to="/services#bookkeeping" className="group block h-full bg-gradient-hero rounded-2xl p-10 text-white card-hover relative overflow-hidden">
                <BookOpen size={36} className="text-accent mb-6" />
                <h3 className="font-serif text-3xl mb-4 text-white">Bookkeeping & Reconciliation</h3>
                <p className="text-white/80 text-[15px] leading-[1.7] mb-6">Full-cycle monthly bookkeeping for businesses with 50–5,000+ monthly transactions. We handle the volume, you handle the business.</p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-[15px]">Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Receipt, title: "HST/GST Filing", to: "/services#hst" },
                { icon: Users, title: "Payroll Services", to: "/services#payroll" },
                { icon: Building2, title: "Corporate Tax", to: "/services#corporate" },
                { icon: Cloud, title: "Cloud Accounting", to: "/services#cloud" },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <Link to={s.to} className="block h-full bg-peach rounded-2xl p-6 border border-border card-hover">
                    <div className="w-11 h-11 rounded-lg bg-white text-accent flex items-center justify-center mb-4"><s.icon size={20} /></div>
                    <h3 className="h3 mb-2">{s.title}</h3>
                    <span className="text-accent text-sm font-semibold">Learn more →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <Link to="/services#reporting" className="mt-6 block bg-peach-mid rounded-2xl p-8 border border-border card-hover">
              <div className="flex items-start gap-5 flex-col md:flex-row">
                <div className="w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center shrink-0"><FileText size={24} /></div>
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-foreground">Financial Reporting</h3>
                  <p className="text-body text-[15px] leading-[1.7]">Monthly management reports with clear visuals. No jargon. Just the numbers that matter.</p>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="bg-peach-mid py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-3">Who We Serve</p>
            <h2 className="h2">Built for Every Stage of Your <span className="accent-word">Ontario Business</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-border card-hover h-full flex flex-col">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">{s.title}</h3>
                  <p className="label-eyebrow !text-muted-foreground mb-4">Revenue: {s.revenue}</p>
                  <p className="text-body text-[15px] leading-[1.7] mb-6 flex-1">{s.body}</p>
                  <div className="border-t border-border pt-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting from</p>
                    <p className="font-serif text-2xl text-accent mb-4">{s.price}</p>
                    <Link to="/contact" className="btn-primary w-full">Get a Quote <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="label-eyebrow mb-3">Our Process</p>
            <h2 className="h2">From Signup to Sorted in <span className="accent-word">Under a Week</span></h2>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="text-center lg:text-left">
                    <div className="w-16 h-16 rounded-full bg-accent text-white font-serif text-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 relative z-10 shadow-lg">{i + 1}</div>
                    <p className="label-eyebrow mb-2">{s.day}</p>
                    <h3 className="h3 mb-3">{s.title}</h3>
                    <p className="text-body text-[15px] leading-[1.7]">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <TimeWasteCalculator />

      {/* PRICING TEASER */}
      <section className="bg-navy py-24 text-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow mb-3">Instant Pricing</p>
            <h2 className="h2 text-white mb-5">Get Your Personalized Price Estimate in <span className="accent-word">90 Seconds</span></h2>
            <p className="text-white/80 text-[17px] leading-[1.7] mb-8">Answer 4 quick questions about your business and get an instant starting price — no sales call required.</p>
            <ul className="space-y-3 mb-8">
              {["Based on your actual transaction volume", "Includes all services you select", "Starting price shown immediately", "No email required to see results"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/90"><Check size={18} className="text-accent" /> {t}</li>
              ))}
            </ul>
            <Link to="/pricing" className="btn-primary text-base w-full md:w-auto">Calculate My Price <ArrowRight size={18} /></Link>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-xs uppercase tracking-wider text-white/60">Small Business from</p>
                <p className="font-serif text-2xl text-white">$650/mo</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-xs uppercase tracking-wider text-white/60">Growing Business from</p>
                <p className="font-serif text-2xl text-white">$1,550/mo</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white text-foreground rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="label-eyebrow">Step 1 of 4</span>
                <span className="text-xs text-muted-foreground">25% complete</span>
              </div>
              <div className="h-1.5 bg-border rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-accent w-1/4" />
              </div>
              <h3 className="font-serif text-2xl mb-5">What is your annual revenue?</h3>
              <div className="space-y-2">
                {["Under $100K", "$100K – $500K", "$500K – $1M", "$1M – $3M", "Over $3M"].map((o, i) => (
                  <div key={o} className={`px-4 py-3 rounded-lg border-2 ${i === 1 ? "border-accent bg-accent/5" : "border-border"} text-sm`}>
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HST COMPLIANCE */}
      <section className="bg-peach py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow mb-3">Ontario HST Specialists</p>
            <h2 className="h2 mb-5">Never Pay a <span className="accent-word">CRA Penalty</span> Again</h2>
            <p className="text-body text-[17px] leading-[1.7] mb-8">HST compliance is one of the most common sources of CRA penalties for Ontario small businesses. We handle every aspect — registration, filing, remittances, and audits.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                ["$0", "Penalties incurred"],
                ["100%", "On-time HST filing"],
                ["300+", "Ontario clients"],
              ].map(([n, l]) => (
                <div key={l} className="bg-white rounded-xl p-5 border border-border text-center">
                  <div className="font-serif text-3xl text-accent">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-xl">2025 HST Filing Calendar</h3>
                <Calendar className="text-accent" />
              </div>
              <ul className="divide-y divide-border">
                {[
                  ["Q4 2024 Annual Filer", "April 30, 2025"],
                  ["Q1 2025 Quarterly", "April 30, 2025"],
                  ["Q2 2025 Quarterly", "July 31, 2025"],
                  ["Q3 2025 Quarterly", "Oct 31, 2025"],
                  ["Monthly Filers", "End of next month"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-body">{k}</span>
                    <span className="font-semibold text-foreground">{v}</span>
                  </li>
                ))}
              </ul>
              <Link to="/resources#guides" className="btn-primary w-full mt-5">Download Full Tax Calendar <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-3">Client Stories</p>
            <h2 className="h2">Trusted by <span className="accent-word">Ontario Owners</span></h2>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal className="lg:col-span-2">
              <div className="bg-gradient-to-br from-peach to-peach-mid rounded-2xl p-10 border border-border h-full">
                <div className="flex gap-1 mb-5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} className="fill-accent text-accent" />)}</div>
                <p className="font-serif text-2xl md:text-[28px] leading-snug text-foreground mb-8">"We were filing HST late every quarter and paying penalties constantly. Since switching to The Accounting Site, we've had zero penalties in 18 months. They handle everything — bookkeeping, payroll, HST — and our books are always clean."</p>
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85" alt="David Park" className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-foreground">David Park, Owner</p>
                    <p className="text-sm text-muted-foreground">Park Construction Group, Mississauga ON</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {[
                { name: "Lisa Chen", role: "E-Commerce Business Owner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=85", q: "Fastest bookkeeping turnaround I've ever experienced. 300 transactions processed and reconciled in 2 days." },
                { name: "Marcus Williams", role: "Retail Chain Owner", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=85", q: "Finally an accountant that understands high-volume retail. Our Shopify and Square data synced perfectly into Xero." },
              ].map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-border h-full">
                    <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}</div>
                    <p className="text-body text-[15px] leading-[1.65] mb-5">"{t.q}"</p>
                    <div className="flex items-center gap-3">
                      <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE GUARANTEE */}
      <section className="bg-navy py-24 text-white">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="label-eyebrow mb-3">Our Promise</p>
            <h2 className="h2 text-white mb-5">Our <span className="accent-word">Zero-Penalty</span> Guarantee</h2>
            <p className="text-white/85 text-[17px] leading-[1.7]">We have maintained a 100% on-time filing rate across all our clients in Ontario. If we ever cause a CRA penalty due to our error, we cover the cost — no questions asked.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", t: "Zero HST Penalties", d: "Every HST return filed accurately and on time — guaranteed." },
              { icon: "⚡", t: "48-Hour Turnaround", d: "Monthly bookkeeping completed within 48 hours of month-end, every month." },
              { icon: "📞", t: "Always Reachable", d: "Dedicated account manager. Same-day response on all queries." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-accent/40 transition-colors">
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="font-serif text-xl text-white mb-3">{c.t}</h3>
                  <p className="text-white/75 text-[15px] leading-[1.7]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-peach-mid py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="label-eyebrow mb-3">Our Tech Stack</p>
            <h2 className="h2">Modern Tools for <span className="accent-word">Modern Ontario Businesses</span></h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((t) => (
                <div key={t} className="bg-white rounded-xl border border-border p-6 flex items-center justify-center text-center font-serif text-[18px] text-foreground card-hover">
                  {t}
                </div>
              ))}
            </div>
            <p className="text-center text-body mt-8 max-w-xl mx-auto">We work with the tools you already use — or help you upgrade to better ones.</p>
            <div className="text-center mt-6"><Link to="/software" className="btn-primary">See Full Tech Stack <ArrowRight size={16} /></Link></div>
          </Reveal>
        </div>
      </section>

      <IndustrySwitcher />

      <section className="py-24 text-white" style={{ background: "linear-gradient(135deg, #E07B39 0%, #C4622A 100%)" }}>
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="h2 text-white mb-5">Ready for Stress-Free Accounting?</h2>
            <p className="text-[18px] text-white/90 mb-8 leading-relaxed">Join 300+ Ontario businesses who never worry about HST, payroll, or bookkeeping anymore.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">Get a Free Quote <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-ghost-light">Book a 30-Min Call</Link>
            </div>
            <p className="text-white/80 text-sm mt-6 flex items-center justify-center gap-2"><Lock size={14} /> No commitment required. Free 30-minute consultation.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
