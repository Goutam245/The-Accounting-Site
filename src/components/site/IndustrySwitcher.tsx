import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const industries = [
  {
    key: "Retail",
    pain: "Managing Shopify + Square + Stripe transactions manually?",
    stat: "We process 5,000+ retail transactions monthly",
    quote: "They synced all 3 of our payment platforms automatically.",
    by: "Marcus W., Retail Chain Owner",
  },
  {
    key: "Construction",
    pain: "HST on materials vs labour driving you crazy?",
    stat: "WSIB, union payroll, multi-site tracking — handled",
    quote: "Never missed a progress billing or CRA deadline since day one.",
    by: "David P., Park Construction Group",
  },
  {
    key: "Healthcare",
    pain: "Multi-practitioner billing and split fees getting messy?",
    stat: "Clinic-grade reconciliation across 12+ provider streams",
    quote: "Our clinic finally has clean monthly P&Ls per practitioner.",
    by: "Dr. Anita R., Family Wellness Clinic",
  },
  {
    key: "Restaurant",
    pain: "Tips, POS sync and food cost % impossible to track?",
    stat: "POS-to-Xero sync with daily cost-of-sales tracking",
    quote: "We finally see real food cost % every single week.",
    by: "Sofia L., Two-Location Italian Restaurant",
  },
  {
    key: "Professional Services",
    pain: "Time-based revenue and WIP not flowing into your books?",
    stat: "100% accurate WIP-to-revenue conversion every month",
    quote: "Our utilization and realization reports are now automated.",
    by: "James T., Boutique Law Firm",
  },
  {
    key: "E-Commerce",
    pain: "Refunds, chargebacks and multi-currency wrecking your books?",
    stat: "A2X + Xero stack handling 10,000+ orders monthly",
    quote: "Amazon, Shopify and Stripe all reconcile to the cent.",
    by: "Priya S., DTC Skincare Brand",
  },
  {
    key: "Real Estate",
    pain: "Trust accounts and commission splits a compliance risk?",
    stat: "RECO-ready trust reconciliations and broker reports",
    quote: "Trust accounting compliance went from stressful to silent.",
    by: "Mark V., Brokerage Owner",
  },
  {
    key: "Manufacturing",
    pain: "Inventory, COGS and job costing scattered across spreadsheets?",
    stat: "Standard costing + WIP tracking for SKUs & jobs",
    quote: "We finally know exact margin per SKU and per shift.",
    by: "Hannah K., Custom Metalworks",
  },
];

export default function IndustrySwitcher() {
  const [active, setActive] = useState(industries[0].key);
  const data = industries.find((i) => i.key === active)!;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-10">
          <p className="label-eyebrow mb-3">Industries We Specialize In</p>
          <h2 className="h2">Pick Your Industry — See <span className="accent-word">How We Help</span></h2>
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-8">
          {industries.map((i) => (
            <button
              key={i.key}
              onClick={() => setActive(i.key)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                active === i.key
                  ? "bg-accent text-white shadow-md"
                  : "bg-peach text-foreground hover:bg-peach-mid"
              }`}
            >
              {i.key}
            </button>
          ))}
        </div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-border rounded-2xl p-6 md:p-10 shadow-lg grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <p className="label-eyebrow mb-3">Common Pain Point</p>
                <h3 className="font-serif text-2xl md:text-[28px] text-foreground leading-snug mb-5">{data.pain}</h3>
                <div className="bg-peach rounded-xl p-5 mb-5 border border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">How we solve it</p>
                  <p className="font-serif text-xl text-accent">{data.stat}</p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                  See full service breakdown <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-peach to-peach-mid rounded-2xl p-6 md:p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-serif text-xl text-foreground leading-snug mb-4">"{data.quote}"</p>
                <p className="text-sm text-muted-foreground">— {data.by}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
