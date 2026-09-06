import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ image, eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(400px, 60vh, 560px)" }}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="eager"
        width={1400}
        height={560}
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(45,55,72,0.85) 100%)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-32 pb-16 md:pt-36 md:pb-20" style={{ minHeight: "clamp(400px, 60vh, 560px)" }}>
        <Reveal className="max-w-3xl mx-auto w-full">
          <p className="label-eyebrow mb-4 !text-[hsl(var(--accent))]">{eyebrow}</p>
          <h1 className="font-serif font-bold text-[28px] sm:text-[36px] md:text-[52px] leading-[1.1] text-white">{title}</h1>
          {subtitle && (
            <p className="text-white/85 text-[16px] md:text-[18px] mt-5 md:mt-6 leading-[1.7] max-w-2xl mx-auto">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
