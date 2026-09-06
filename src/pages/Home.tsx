import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar, BookOpen, Receipt, Users, Building2, Cloud, FileText, Lock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const industries = ["Retail", "Construction", "Healthcare", "Professional Services", "Restaurants", "E-Commerce", "Real Estate", "Manufacturing", "Trades", "Hospitality", "Logistics", "Agencies"];

const steps = [
  { title: "Onboarding" },
  { title: "First Reconciliation" },
  { title: "Monthly Cycle" },
  { title: "Ongoing" },
];

const now = new Date();
const monthYear = now.toLocaleDateString("en-CA", { month: "long", year: "numeric" });
const quarter = Math.ceil((now.getMonth() + 1) / 3);
const qLabel = `Q${quarter} ${now.getFullYear()}`;
const reconcileMonth = now.toLocaleDateString("en-CA", { month: "long" });

export default function Home() {
  const tickerSectors = [...industries, ...industries];
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
            <h1 className="h1 text-white mb-6">
              Bookkeeping. <span className="accent-word">Sales Tax.</span><br />
              Payroll. Corporate Tax.
            </h1>
            <p className="text-[18px] leading-[1.7] text-white/85 max-w-xl mb-8">
              We handle bookkeeping, HST/GST filing, payroll, and corporate tax for businesses that need accuracy, speed, and reliability — month after month, without exception.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base">Get a Free Quote <ArrowRight size={18} /></Link>
              <a href="#how-it-works" className="btn-ghost-light">See How It Works</a>
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
                <span className="text-xs text-white/50">{monthYear}</span>
              </div>
              <ul className="space-y-3">
                {[
                  ["HST Filed", qLabel, true],
                  ["Payroll Processed", "Bi-weekly", true],
                  ["Books Reconciled", reconcileMonth, true],
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
                  <span className="text-accent text-xs font-bold">UPCOMING</span>
                </li>
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TICKER */}
      <section className="bg-[#1B2A4A] py-6 overflow-hidden border-y border-white/10">
        <p className="text-center text-white text-[15px] md:text-[16px] font-semibold px-5 mb-4">
          Providing accounting services to businesses from $100K to $10 million in annual revenue
        </p>
        <div className="relative">
          <div
            className="flex gap-10 whitespace-nowrap"
            style={{ width: "max-content", animation: "ticker 35s linear infinite" }}
          >
            {tickerSectors.map((s, i) => (
              <span key={i} className="text-[14px] font-semibold flex items-center gap-3">
                <span className="text-[#E07B39]">✓</span>
                <span className="text-white">{s}</span>
                <span className="text-white/30 ml-6">·</span>
              </span>
            ))}
          </div>
          <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-16 border-b border-border">
        <div className="container-x">
          <Reveal>
            <p className="text-center font-serif text-2xl md:text-[28px] leading-snug text-foreground max-w-3xl mx-auto">
              Join our clients who never worry about <span className="accent-word">HST, payroll or bookkeeping</span> anymore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-3">What We Do</p>
            <h2 className="h2">Complete Accounting Services for <span className="accent-word">Growing Businesses</span></h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-5">
            <Reveal>
              <Link to="/services#bookkeeping" className="group block h-full bg-gradient-hero rounded-2xl p-10 text-white card-hover relative overflow-hidden">
                <BookOpen size={36} className="text-accent mb-6" />
                <h3 className="font-serif text-3xl mb-4 text-white">Bookkeeping & Reconciliation</h3>
                <p className="text-white/80 text-[15px] leading-[1.7] mb-6">Full-cycle monthly bookkeeping for businesses with 50–5,000+ monthly transactions. We handle the volume, you handle the business.</p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-[15px]">Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
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
            <Link to="/services#reporting" className="mt-5 block bg-peach-mid rounded-2xl p-8 border border-border card-hover">
              <div className="flex items-start gap-5 flex-col md:flex-row">
                <div className="w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center shrink-0"><FileText size={24} /></div>
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-foreground">Financial Reporting</h3>
                  <p className="text-body text-[15px] leading-[1.7]">Periodic management reports with clear visuals. No jargon. Just the numbers that matter.</p>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DIVIDER */}
      <div aria-hidden="true" className="bg-white">
        <div className="container-x">
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-border" />
            <div className="w-2 h-2 rounded-full bg-[#E07B39]" />
            <div className="h-px w-24 bg-[#E07B39]" />
            <div className="w-2 h-2 rounded-full bg-[#E07B39]" />
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="label-eyebrow mb-3">Our Process</p>
            <h2 className="h2">From Sign Up to Sorted — <span className="accent-word">with a clear, swift plan</span></h2>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="text-center lg:text-left">
                    <div className="w-16 h-16 rounded-full bg-accent text-white font-serif text-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 relative z-10 shadow-lg">{i + 1}</div>
                    <h3 className="h3">{s.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-peach-mid py-20 md:py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-eyebrow mb-3">Pricing</p>
            <h2 className="h2 mb-5">Simple, <span className="accent-word">Predictable</span> Pricing</h2>
            <p className="text-body text-[16px] leading-[1.7] mb-8">No hourly billing. No surprises. Flat monthly fee based on your business size and transaction volume.</p>
            <Link to="/pricing" className="btn-primary">See Our Plans <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 text-white" style={{ background: "linear-gradient(135deg, #E07B39 0%, #C4622A 100%)" }}>
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="h2 text-white mb-5">Ready for Stress-Free Accounting?</h2>
            <p className="text-[18px] text-white/90 mb-8 leading-relaxed">Join our clients who never worry about HST, payroll, or bookkeeping anymore.</p>
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
