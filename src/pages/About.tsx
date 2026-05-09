import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Shield, BarChart3, Award } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";

const values = [
  { icon: Zap, t: "Speed", d: "48-hour turnaround standard on monthly bookkeeping cycles." },
  { icon: Target, t: "Accuracy", d: "Zero penalty guarantee. 100% on-time filing rate across all clients." },
  { icon: Shield, t: "Reliability", d: "Always on time. Always responsive. Predictable, stress-free." },
  { icon: BarChart3, t: "Clarity", d: "Plain language reports. No jargon. Just numbers that matter." },
];

const team = [
  { name: "Ankit Kapoor", role: "CPA, CA · Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85" },
  { name: "Priya Sharma", role: "CPA · Bookkeeping Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85" },
  { name: "Marcus Williams", role: "Payroll & HST Specialist", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85" },
];

const compare = [
  ["Speed", "48 hours", "2–4 weeks", "Whenever"],
  ["Accuracy", "100%", "Varies", "Risk"],
  ["Cost", "From $400/mo", "From $800/mo", "Your time"],
  ["Technology", "Cloud-first", "Legacy", "Basic"],
];

export default function About() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
        eyebrow="About Us"
        title={<>Ontario's <span className="accent-word">High-Volume Accounting</span> Specialists</>}
        subtitle="Built by Ontario CPAs for Ontario business owners — 300+ clients across 8 industries."
      />

      {/* Story */}
      <section className="bg-peach py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="label-eyebrow mb-3">Our Story</p>
            <h2 className="h2 mb-6">Built by <span className="accent-word">Ontario CPAs</span> for Ontario Owners</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-body text-[16px] leading-[1.8]">
            <p>The Accounting Site was founded in Oakville to solve one problem: Ontario small businesses kept getting hit with CRA penalties because their bookkeepers were behind, their HST was filed late, and their payroll was a mess. We saw it again and again.</p>
            <p>So we built a firm specifically for high-volume Ontario businesses. Cloud-first technology. Predictable pricing. 48-hour turnaround as the standard, not the exception. Today we serve 300+ Ontario businesses across retail, construction, healthcare, e-commerce, and professional services.</p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy py-24 text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-eyebrow mb-3">Our Mission</p>
            <p className="font-serif text-2xl md:text-[32px] leading-snug text-white">"To make HST compliance, bookkeeping, and payroll completely effortless for Ontario businesses — so owners can focus on growth, not paperwork."</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12"><p className="label-eyebrow mb-3">Our Values</p><h2 className="h2">What We <span className="accent-word">Stand For</span></h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="bg-peach rounded-2xl p-7 border border-border h-full card-hover">
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-5"><v.icon size={22} /></div>
                  <h3 className="h3 mb-2">{v.t}</h3>
                  <p className="text-body text-[15px] leading-[1.7]">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-peach py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12"><p className="label-eyebrow mb-3">Our Team</p><h2 className="h2">Real <span className="accent-word">CPAs</span>. Real Experts.</h2></Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-border card-hover">
                  <img src={m.img} alt={m.name} className="w-full h-72 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground">{m.name}</h3>
                    <p className="text-accent font-semibold text-sm">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="label-eyebrow mb-3">Our Journey</p>
            <h2 className="h2">From One Office to <span className="accent-word">Three</span></h2>
          </Reveal>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                ["2018", "Founded in Oakville"],
                ["2019", "First 50 clients"],
                ["2021", "Expanded to Hamilton"],
                ["2022", "Cloud-first model"],
                ["2023", "200+ clients milestone"],
                ["2024", "Multi-location expansion"],
                ["2025", "300+ clients, 3 offices"],
              ].map(([year, evt], i) => (
                <Reveal key={year} delay={i * 0.05}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white font-serif flex items-center justify-center mx-auto mb-3 relative z-10 text-sm shadow-lg">●</div>
                    <p className="font-serif text-xl text-foreground">{year}</p>
                    <p className="text-body text-xs leading-snug mt-1">{evt}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-peach py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="label-eyebrow mb-3">Credentials</p>
            <h2 className="h2"><span className="accent-word">Certified</span> Where It Counts</h2>
            <p className="text-body text-[16px] mt-5">All our accountants hold CPA designations from recognized Canadian institutions.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { t: "Xero Certified Partner", d: "Advisor + Migration Certified team", icon: "✦" },
              { t: "QuickBooks ProAdvisor", d: "Elite-tier QBO ProAdvisor firm", icon: "◆" },
              { t: "CPA Ontario Member", d: "All accountants licensed and insured", icon: "★" },
            ].map(c => (
              <Reveal key={c.t}>
                <div className="bg-white rounded-2xl p-7 border border-border text-center card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-2xl">
                    <Award size={26} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{c.t}</h3>
                  <p className="text-body text-sm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12"><p className="label-eyebrow mb-3">Why Us</p><h2 className="h2">How We <span className="accent-word">Compare</span></h2></Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left bg-white">
                <thead className="bg-peach">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground"></th>
                    <th className="px-6 py-4 text-sm font-semibold text-accent">The Accounting Site</th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">Traditional Firm</th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">DIY</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-6 py-4 font-semibold text-foreground">{row[0]}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{row[1]}</td>
                      <td className="px-6 py-4 text-body">{row[2]}</td>
                      <td className="px-6 py-4 text-body">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="text-center mt-10"><Link to="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}
