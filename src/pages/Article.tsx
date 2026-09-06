import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { getArticle, catColors } from "@/data/articles";

const BOOKING_URL = "https://api.autogrow.app/widget/booking/6Z8wYlO6tWN8pGl0tV2O";

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/resources" replace />;

  return (
    <>
      <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(360px, 52vh, 480px)" }}>
        <img
          src={article.img}
          alt=""
          aria-hidden="true"
          loading="eager"
          width={1400}
          height={480}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(45,55,72,0.85) 100%)" }}
        />
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-32 pb-14 md:pt-36 md:pb-16"
          style={{ minHeight: "clamp(360px, 52vh, 480px)" }}
        >
          <Reveal className="max-w-3xl mx-auto w-full">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white">
                {article.cat}
              </span>
              <span className="text-xs text-white/75">{article.read} read</span>
            </div>
            <h1 className="font-serif font-bold text-[26px] sm:text-[34px] md:text-[44px] leading-[1.15] text-white">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-3 mt-6">
              <img src={article.authorImg} alt={article.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-[13px] font-semibold text-white leading-tight">{article.author}</p>
                <p className="text-[12px] text-white/70">{article.date}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl mx-auto">
          <Reveal>
            <Link to="/resources#blog" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mb-8">
              <ArrowLeft size={16} /> Back to Resources
            </Link>
            <p className="text-body text-[17px] leading-[1.8] font-medium text-foreground mb-6">{article.excerpt}</p>
            {article.body.map((p, i) => (
              <p key={i} className="text-body text-[16px] leading-[1.85] mb-5">{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12 bg-navy text-white rounded-2xl p-8 text-center">
              <span className={`inline-flex text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${catColors[article.cat] || "bg-accent/10 text-accent"}`}>
                {article.cat}
              </span>
              <h2 className="font-serif text-[24px] md:text-[28px] mb-3">Want this handled for you?</h2>
              <p className="text-white/85 text-[15px] leading-[1.7] mb-6 max-w-xl mx-auto">
                Book a free 20-minute call and we'll walk through your books, your filings, and what a clean monthly cycle would look like for your business.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <CalendarCheck size={16} /> Book a Call <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 pt-8 border-t border-border">
              <Link to="/resources#blog" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm">
                <ArrowLeft size={16} /> Back to Resources
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
