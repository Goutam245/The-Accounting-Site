import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { motion, AnimatePresence } from "framer-motion";

const PACKAGES = [
  {
    id: "tier1",
    name: "Tier 1",
    tagline: "Under $200K revenue",
    price: "Starting from $400/month",
    features: [
      "Monthly bookkeeping",
      "GST annual filing",
      "Corporate basic",
      "Financial email support",
    ],
  },
  {
    id: "tier2",
    name: "Tier 2",
    tagline: "$200K – $2M revenue",
    price: "$500 to $1,500/month",
    featured: true,
    features: [
      "Everything in Tier 1",
      "HST/GST filings",
      "Payroll",
      "Annual corporate tax",
      "Periodic management reports",
    ],
  },
  {
    id: "tier3",
    name: "Tier 3",
    tagline: "$2M+ revenue",
    price: "Starting from $1,500+/month",
    features: [
      "Everything in Tier 2",
      "Unlimited payroll",
      "Strategic tax planning",
      "Dedicated account manager",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setUnlocked(true);
    setShowModal(false);
  };

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85"
        eyebrow="Pricing"
        title={<>Simple, <span className="accent-word">Transparent Pricing</span></>}
        subtitle="Three tiered packages built for Ontario businesses at every stage. Choose the one that fits — or talk to us for a custom quote."
      />

      <section className="bg-peach py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <div className={`relative bg-white rounded-2xl border ${p.featured ? "border-accent shadow-xl md:scale-[1.03]" : "border-border"} p-7 md:p-8 h-full flex flex-col card-hover`}>
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider">Most Popular</span>
                  )}
                  <h3 className="font-serif text-2xl text-foreground mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{p.tagline}</p>

                  <div className="mb-6 min-h-[72px]">
                    {unlocked ? (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="font-serif text-2xl text-accent leading-snug">{p.price}</p>
                      </motion.div>
                    ) : (
                      <div className="font-serif text-2xl text-muted-foreground tracking-wider">$ • • •</div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-body">
                        <Check size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {unlocked ? (
                    <Link to="/contact" className="btn-primary w-full">Get Started <ArrowRight size={16} /></Link>
                  ) : (
                    <button onClick={() => setShowModal(true)} className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] font-semibold text-[15px] transition-all min-h-[48px] ${p.featured ? "bg-accent text-white hover:bg-[hsl(var(--accent-dark))]" : "bg-foreground text-white hover:bg-foreground/90"}`}>
                      Show Pricing <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Prices shown are estimates only. Final pricing based on your specific transaction volume and requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EMAIL GATE MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
            <motion.div
              initial={{ y: 16, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 16, opacity: 0 }}
              className="relative bg-white rounded-2xl p-7 md:p-8 max-w-md w-full shadow-2xl"
            >
              <button onClick={() => setShowModal(false)} aria-label="Close" className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X size={20} /></button>
              <p className="label-eyebrow mb-3">Almost there</p>
              <h3 className="font-serif text-2xl mb-2 text-foreground">Enter your email to see pricing</h3>
              <p className="text-body text-sm mb-6">We'll unlock all three package prices instantly.</p>
              <form onSubmit={submit} className="space-y-3">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.ca"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-accent"
                />
                <button className="btn-primary w-full">Show My Pricing <ArrowRight size={16} /></button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">No spam. We'll only email you about your quote.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
