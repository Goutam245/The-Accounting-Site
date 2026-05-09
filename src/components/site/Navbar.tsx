import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "Bookkeeping", to: "/services#bookkeeping" },
  { label: "Sales Tax (HST/GST)", to: "/services#hst" },
  { label: "Payroll Services", to: "/services#payroll" },
  { label: "Corporate Tax", to: "/services#corporate" },
  { label: "Cloud Accounting", to: "/services#cloud" },
  { label: "Financial Reporting", to: "/services#reporting" },
];
const whoWeHelp = [
  { label: "Solo & Freelancers", to: "/who-we-help#solo" },
  { label: "Small Business", to: "/who-we-help#small" },
  { label: "Growing Business", to: "/who-we-help#growing" },
];
const resources = [
  { label: "Blog", to: "/resources#blog" },
  { label: "Free Guides", to: "/resources#guides" },
  { label: "Tax Calculator", to: "/resources#calculator" },
  { label: "FAQ", to: "/resources#faq" },
];

const Dropdown = ({ label, items, scrolled }: { label: string; items: { label: string; to: string }[]; scrolled: boolean }) => (
  <div className="relative group">
    <button className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}>
      {label} <ChevronDown size={14} />
    </button>
    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-border py-2 min-w-[240px]">
        {items.map((it) => (
          <Link key={it.to} to={it.to} className="block px-5 py-2.5 text-[14px] text-foreground hover:bg-peach hover:text-accent transition-colors">
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const MobileAccordion = ({ label, items, onNavigate }: { label: string; items: { label: string; to: string }[]; onNavigate: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-white text-[18px] font-medium"
      >
        {label}
        <ChevronDown size={20} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-1">
          {items.map((it) => (
            <Link
              key={it.to + it.label}
              to={it.to}
              onClick={onNavigate}
              className="block py-3 px-3 text-white/80 text-[16px] hover:text-[#E07B39]"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar({ topOffset = 0 }: { topOffset?: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 30);
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinkCls = `text-[15px] font-medium transition-colors ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`;
  const close = () => setOpen(false);

  return (
    <header
      style={{ top: topOffset }}
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container-x flex items-center justify-between h-[68px] sm:h-[72px]">
        <Link to="/" className="flex items-center max-w-[180px] sm:max-w-none truncate" aria-label="The Accounting Site home">
          <span className={`font-serif text-[18px] sm:text-[22px] leading-none ${scrolled || open ? "text-muted-foreground" : "text-white/70"}`}>The </span>
          <span className={`font-serif font-bold text-[18px] sm:text-[22px] leading-none ml-1 ${scrolled || open ? "text-foreground" : "text-white"}`}>Accounting Site</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Dropdown label="Services" items={services} scrolled={scrolled} />
          <Dropdown label="Who We Help" items={whoWeHelp} scrolled={scrolled} />
          <NavLink to="/pricing" className={navLinkCls}>Pricing</NavLink>
          <NavLink to="/software" className={navLinkCls}>Software</NavLink>
          <Dropdown label="Resources" items={resources} scrolled={scrolled} />
          <NavLink to="/about" className={navLinkCls}>About</NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
        </div>

        <button
          className={`lg:hidden p-2 -mr-2 ${scrolled || open ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 z-40 overflow-y-auto"
          style={{ top: topOffset + 68, background: "rgba(27,42,74,0.97)", backdropFilter: "blur(8px)" }}
        >
          <div className="px-5 py-6 flex flex-col min-h-[calc(100vh-68px)]">
            <div className="flex-1">
              <MobileAccordion label="Services" items={services} onNavigate={close} />
              <MobileAccordion label="Who We Help" items={whoWeHelp} onNavigate={close} />
              <Link to="/pricing" onClick={close} className="block py-4 text-white text-[18px] font-medium border-b border-white/10">Pricing</Link>
              <Link to="/software" onClick={close} className="block py-4 text-white text-[18px] font-medium border-b border-white/10">Software</Link>
              <MobileAccordion label="Resources" items={resources} onNavigate={close} />
              <Link to="/about" onClick={close} className="block py-4 text-white text-[18px] font-medium border-b border-white/10">About</Link>
            </div>
            <Link to="/contact" onClick={close} className="btn-primary mt-8">Get a Free Quote →</Link>
          </div>
        </div>
      )}
    </header>
  );
}
