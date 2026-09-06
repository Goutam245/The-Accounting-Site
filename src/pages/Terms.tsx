import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const sections: { h: string; p: string[] }[] = [
  {
    h: "About these terms",
    p: [
      "These terms cover your use of theaccounting.site. Engagements for bookkeeping, sales tax, payroll or reporting work are governed by the separate engagement letter we sign with each client.",
    ],
  },
  {
    h: "Information on this site",
    p: [
      "Content here is general information about our services, not accounting, tax or legal advice. Rules change and every business is different, so please speak with us before acting on anything you read.",
      "Pricing shown is indicative. Final fees depend on transaction volume, the number of accounts and the services included in your engagement letter.",
    ],
  },
  {
    h: "Your responsibilities as a client",
    p: [
      "Timely, accurate records are what make timely filings possible. Clients agree to provide source documents, bank feeds and payroll details on the schedule set out in their engagement letter.",
    ],
  },
  {
    h: "Third-party tools and links",
    p: [
      "We link to and work with third-party platforms such as Xero, QuickBooks Online, Hubdoc, Dext, Wagepoint and Plooto. Their own terms apply to your use of those tools.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there.",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85"
        eyebrow="Legal"
        title={<>Terms of <span className="accent-word">Service</span></>}
        subtitle="The ground rules for using this website and working with our team."
      />
      <section className="bg-peach py-20 md:py-24">
        <div className="container-x max-w-[820px]">
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-10 space-y-8">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 0.05}>
                <h2 className="font-serif text-[22px] md:text-[26px] mb-3">{s.h}</h2>
                <div className="space-y-3">
                  {s.p.map((p) => (
                    <p key={p} className="text-body text-[15px] md:text-[16px] leading-[1.75]">{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
            <p className="text-muted-foreground text-[13px] pt-2 border-t border-border">
              Questions? Email info@theaccounting.site or call 289-812-0152.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
