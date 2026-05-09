import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=85"
        eyebrow="Contact"
        title={<>Let's <span className="accent-word">Sort Out</span> Your Books</>}
        subtitle="Free 30-minute consultation. No commitment required."
      />

      <section className="bg-peach py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="font-serif text-2xl mb-6">Get a Free Quote</h2>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent text-white text-2xl flex items-center justify-center mx-auto mb-4">✓</div>
                  <p className="font-serif text-xl text-foreground mb-2">Thanks — we'll be in touch within 4 business hours.</p>
                  <p className="text-muted-foreground text-sm">Check your inbox for a confirmation.</p>
                </div>
              ) : (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <Field label="Name" name="name" required />
                  <Field label="Business Name" name="business" required />
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" name="phone" />
                  <SelectField label="Monthly Revenue" name="revenue" options={["Under $10K", "$10K – $50K", "$50K – $100K", "$100K – $500K", "$500K+"]} />
                  <SelectField label="Main Service" name="service" options={["Bookkeeping", "HST/GST Filing", "Payroll", "Corporate Tax", "Cloud Accounting", "Everything"]} />
                  <SelectField label="Monthly Transactions" name="tx" options={["Under 100", "100 – 500", "500 – 1,500", "1,500 – 5,000", "5,000+"]} className="md:col-span-2" />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">Message</label>
                    <textarea name="message" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-accent" />
                  </div>
                  <button className="btn-primary md:col-span-2 w-full">Get My Free Quote <ArrowRight size={16} /></button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="bg-gradient-hero text-white rounded-2xl p-7">
                <h3 className="font-serif text-xl mb-5 text-white">Talk to us</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Phone className="text-accent shrink-0 mt-0.5" size={18} /><div><p className="text-white/60 text-xs uppercase tracking-wider">Phone</p><p className="text-white">+1-647-699-2997</p></div></li>
                  <li className="flex items-start gap-3"><Mail className="text-accent shrink-0 mt-0.5" size={18} /><div><p className="text-white/60 text-xs uppercase tracking-wider">Email</p><p className="text-white">info@theaccounting.site</p></div></li>
                  <li className="flex items-start gap-3"><MapPin className="text-accent shrink-0 mt-0.5" size={18} /><div><p className="text-white/60 text-xs uppercase tracking-wider">Office</p><p className="text-white">Unit 210 – 2030 Bristol Cir,<br/>Oakville, ON L6H 6P5</p></div></li>
                  <li className="flex items-start gap-3"><Clock className="text-accent shrink-0 mt-0.5" size={18} /><div><p className="text-white/60 text-xs uppercase tracking-wider">Response time</p><p className="text-white">Within 4 business hours</p></div></li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-border">
                <h3 className="font-serif text-xl mb-3">Book a Call</h3>
                <p className="text-body text-sm mb-5">Free 30-minute consultation. No commitment required.</p>
                <a href="https://app.usemotion.com/meet/ankit/discovery" target="_blank" rel="noreferrer" className="btn-primary w-full">Open Booking Page <ArrowRight size={16} /></a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border h-[360px]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=2030+Bristol+Cir,+Oakville,+ON&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, required, type = "text" }: { label: string; name: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5 text-foreground">{label}{required && <span className="text-accent"> *</span>}</label>
      <input required={required} type={type} name={name} className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-accent" />
    </div>
  );
}

function SelectField({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-1.5 text-foreground">{label}</label>
      <select name={name} className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:outline-none focus:border-accent">
        <option value="">Select…</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
