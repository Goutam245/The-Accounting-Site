import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Shield, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";

const values = [
  { icon: Zap, t: "Speed", d: "Fast, accurate, and reliable every month — no excuses, no surprises." },
  { icon: Target, t: "Accuracy", d: "Every return is prepared carefully and submitted for your review before filing." },
  { icon: Shield, t: "Reliability", d: "Always on time. Always responsive. Predictable, stress-free service." },
  { icon: BarChart3, t: "Clarity", d: "Plain language reports. No jargon. Just the numbers that matter." },
];

const team = [
  { name: "Ankit B, CPA, CA (Ontario & Quebec)", role:"Partner / Founder, CEO", img: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/Ankit-1-Profile-Pic.png?resize=768%2C768&ssl=1" },
  { name: "Mahendra B, CA (India)", role: "Partner, CGO", img: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/1581103984852.jpg?w=375&ssl=1" },
  { name: "Ashok K, CPA, CA, CPA (Co)", role: "Partner", img: "https://i0.wp.com/thecfo.site/wp-content/uploads/2023/04/Ashok-Profile-Pic-400x400-1.jpg?w=400&ssl=1" },
];

const compare = [
  {
    label: "Approach",
    us: "100% cloud-based",
    trad: "Paper-based processes",
    diy: "Low cost",
  },
  {
    label: "Technology",
    us: "Modern tech stack (Xero, QuickBooks Online, Dext)",
    trad: "Don't use modern accounting platforms",
    diy: "Time-consuming",
  },
  {
    label: "Tax Expertise",
    us: "In-house tax experts (personal + corporate)",
    trad: "Limited tax planning expertise",
    diy: "Risk of errors",
  },
  {
    label: "Planning",
    us: "Proactive tax planning",
    trad: "Reactive, not proactive",
    diy: "No tax planning",
  },
  {
    label: "Team",
    us: "Collaborative team approach",
    trad: "—",
    diy: "—",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
        eyebrow="About Us"
        title={<>Your <span className="accent-word">Accounting</span> Specialists</>}
        subtitle="Built by CPAs for small business owners across multiple industries."
      />

      {/* Story */}
      <section className="bg-peach py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="label-eyebrow mb-3">Our Story</p>
            <h2 className="h2 mb-6">Built by <span className="accent-word">CPAs</span> for small business Owners</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-body text-[16px] leading-[1.8]">
            <p>The Accounting Site was founded in Burlington to solve one problem: small businesses kept getting hit with CRA penalties because their bookkeepers were behind, their HST was filed late, and their payroll was a mess. We saw it again and again.</p>
            <p>So we built a firm specifically for growing small businesses. Cloud-first technology. Predictable pricing. Fast, accurate, and reliable service every month.</p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy py-24 text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-eyebrow mb-3">Our Mission</p>
            <p className="font-serif text-2xl md:text-[32px] leading-snug text-white">"To make HST compliance, bookkeeping, and payroll completely effortless — so owners can focus on growth, not paperwork."</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12"><p className="label-eyebrow mb-3">Our Values</p><h2 className="h2">What We <span className="accent-word">Stand For</span></h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <div className="grid md:grid-cols-3 gap-5">
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

      {/* COMPARE */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12"><p className="label-eyebrow mb-3">Why Us</p><h2 className="h2">How We <span className="accent-word">Compare</span></h2></Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left bg-white min-w-[640px]">
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
                    <tr key={i} className="border-t border-border align-top">
                      <td className="px-6 py-4 font-semibold text-foreground">{row.label}</td>
                      <td className="px-6 py-4 text-accent font-semibold">✓ {row.us}</td>
                      <td className="px-6 py-4 text-body">{row.trad === "—" ? "—" : <>✗ {row.trad}</>}</td>
                      <td className="px-6 py-4 text-body">{row.diy === "—" ? "—" : row.label === "Approach" ? <>✓ {row.diy}</> : <>✗ {row.diy}</>}</td>
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
