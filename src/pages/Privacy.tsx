import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const sections: { h: string; p: string[] }[] = [
  {
    h: "Information we collect",
    p: [
      "We collect the information you give us directly — your name, business name, email address, phone number and any details you share when you request a quote, book a consultation or download a guide.",
      "When you become a client, we also handle the financial records you provide so we can deliver bookkeeping, sales tax, payroll and reporting services.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "Your information is used to respond to enquiries, prepare quotes, deliver the services you engage us for, and meet our record-keeping obligations under Canadian law.",
      "We do not sell your information, and we do not share it with third parties for marketing purposes.",
    ],
  },
  {
    h: "Service providers",
    p: [
      "We use trusted cloud accounting and communication platforms to run our practice. These providers process data on our behalf under their own security and confidentiality commitments.",
    ],
  },
  {
    h: "Security and retention",
    p: [
      "Client records are stored in access-controlled cloud systems and kept for the periods required by the Canada Revenue Agency and applicable Ontario legislation, then securely disposed of.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You can ask us at any time what personal information we hold, request a correction, or ask to be removed from our mailing list. Email info@theaccounting.site and we will action it.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85"
        eyebrow="Legal"
        title={<>Privacy <span className="accent-word">Policy</span></>}
        subtitle="How The Accounting Site collects, uses and protects your information."
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
              Questions about this policy? Email info@theaccounting.site or call 289-812-0152.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
