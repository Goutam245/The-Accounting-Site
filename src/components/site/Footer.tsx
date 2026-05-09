import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Award, CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";

const services = [
  { label: "Bookkeeping & Reconciliation", to: "/services#bookkeeping" },
  { label: "HST/GST Filing", to: "/services#hst" },
  { label: "Payroll Services", to: "/services#payroll" },
  { label: "Corporate Tax Return", to: "/services#corporate" },
  { label: "Cloud Accounting Setup", to: "/services#cloud" },
  { label: "Financial Reporting", to: "/services#reporting" },
  { label: "Accounts Receivable & Payable", to: "/services#ar-ap" },
];

const company = [
  { label: "About Us", to: "/about" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Software & Tools", to: "/software" },
  { label: "Resources", to: "/resources" },
  { label: "Careers", to: "/about#careers" },
  { label: "Contact Us", to: "/contact" },
];

const socials: { Icon: any; href: string; label: string }[] = [
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#1B2A4A] text-white" style={{ borderTop: "3px solid #E07B39" }}>
      {/* TOP: 4 column grid */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-20 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* COL 1 - Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-baseline">
              <span className="text-[14px] text-[#94A3B8] mr-1.5">The</span>
              <span className="text-white font-bold text-[20px] font-serif">Accounting Site</span>
            </Link>
            <p className="text-[#94A3B8] text-[15px] leading-[1.6] mt-4 mb-6 max-w-sm">
              Ontario's High-Volume Accounting Compliance Specialists.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Award size={12} className="text-[#E07B39]" /> Xero Certified
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <CheckCircle2 size={12} className="text-[#E07B39]" /> CPA Ontario
              </span>
            </div>

            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#E07B39"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                >
                  <Icon size={18} className="text-[#94A3B8] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 - Services */}
          <div className="lg:col-span-3">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-1">
              {services.map((s) => (
                <FooterLink key={s.to + s.label} to={s.to}>{s.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* COL 3 - Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-1">
              {company.map((c) => (
                <FooterLink key={c.to + c.label} to={c.to}>{c.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* COL 4 - Contact */}
          <div className="lg:col-span-3">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E07B39] shrink-0 mt-1" />
                <div className="text-[#94A3B8] text-[14px] leading-[1.55]">
                  <p className="text-white/90 font-semibold text-[13px] mb-0.5">Burlington Office</p>
                  901 Guelph Line<br />Burlington, ON L7R 3N8
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E07B39] shrink-0 mt-1" />
                <div className="text-[#94A3B8] text-[14px] leading-[1.55]">
                  <p className="text-white/90 font-semibold text-[13px] mb-0.5">Hamilton Office</p>
                  236 Pritchard Rd<br />Hamilton, ON L8W 3P7
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E07B39] shrink-0 mt-1" />
                <div className="text-[#94A3B8] text-[14px] leading-[1.55]">
                  <p className="text-white/90 font-semibold text-[13px] mb-0.5">Montreal Office</p>
                  #1700 – 2001 Blvd Robert-Bourassa<br />Montreal, QC H3A 2A6
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E07B39] shrink-0" />
                <a href="tel:+16476992997" className="text-[#94A3B8] text-[14px] hover:text-white transition-colors">+1-647-699-2997</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#E07B39] shrink-0" />
                <a href="mailto:info@theaccounting.site" className="text-[#94A3B8] text-[14px] hover:text-white transition-colors break-all">info@theaccounting.site</a>
              </li>
            </ul>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#E07B39]" style={{ background: "rgba(224,123,57,0.1)", border: "1px solid rgba(224,123,57,0.3)" }}>
              <Zap size={13} /> Response within 4 hours
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER STRIP */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-20 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-white text-[16px] font-semibold">📬 Ontario Tax Tips — Free Monthly Digest</p>
            <p className="text-[#94A3B8] text-[14px] mt-1">CRA updates, tax deadlines & accounting tips for Ontario businesses</p>
          </div>
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <p className="text-[#E07B39] text-[14px] font-semibold">✓ Thanks — you're subscribed.</p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 sm:gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="w-full sm:w-[280px] px-4 py-3 text-[14px] text-white placeholder:text-[#64748B] rounded-lg sm:rounded-r-none focus:outline-none focus:border-[#E07B39]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-[14px] font-semibold text-white rounded-lg sm:rounded-l-none transition-colors"
                  style={{ background: "#E07B39" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C4622A"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#E07B39"; }}
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[#64748B] text-[12px] mt-2">Join 1,200+ Ontario business owners</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[#64748B] text-[13px]">© 2026 The Accounting Site. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px]">
            <Link to="/privacy" className="text-[#64748B] hover:text-[#E07B39] transition-colors">Privacy Policy</Link>
            <span className="text-[#374151]">|</span>
            <Link to="/terms" className="text-[#64748B] hover:text-[#E07B39] transition-colors">Terms of Service</Link>
            <span className="text-[#374151]">|</span>
            <Link to="/sitemap" className="text-[#64748B] hover:text-[#E07B39] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="text-[11px] font-semibold uppercase text-[#E07B39] mb-5 pb-2.5 font-sans"
      style={{ letterSpacing: "2px", borderBottom: "1px solid rgba(224,123,57,0.3)" }}
    >
      {children}
    </h4>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 text-[14px] text-[#94A3B8] py-1.5 min-h-[32px] hover:text-[#E07B39] hover:pl-1 transition-all duration-200"
      >
        <span className="w-1 h-1 rounded-full bg-[#E07B39] opacity-60 group-hover:opacity-100" />
        <span>{children}</span>
      </Link>
    </li>
  );
}
