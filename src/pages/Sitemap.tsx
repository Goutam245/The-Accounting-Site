import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const groups: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Main pages",
    links: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Who We Help", to: "/who-we-help" },
      { label: "Pricing", to: "/pricing" },
      { label: "Software & Tools", to: "/software" },
      { label: "Resources", to: "/resources" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Bookkeeping & Reconciliation", to: "/services#bookkeeping" },
      { label: "HST/GST Filing", to: "/services#hst" },
      { label: "Payroll Services", to: "/services#payroll" },
      { label: "Accounts Receivable & Payable", to: "/services#ar-ap" },
      { label: "Corporate Tax Return", to: "/services#corporate" },
      { label: "Cloud Accounting Setup", to: "/services#cloud" },
      { label: "Financial Reporting", to: "/services#reporting" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=85"
        eyebrow="Sitemap"
        title={<>Every page, <span className="accent-word">one list</span></>}
        subtitle="Find anything on The Accounting Site in a single click."
      />
      <section className="bg-peach py-20 md:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-border p-6 h-full">
                <h2 className="font-serif text-[20px] mb-4">{g.title}</h2>
                <ul className="space-y-1">
                  {g.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link
                        to={l.to}
                        className="group flex items-center gap-2 py-2 min-h-[44px] text-[15px] text-body hover:text-accent transition-colors"
                      >
                        <ArrowRight size={14} className="text-accent shrink-0" />
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
