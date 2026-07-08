import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";
import { BrowserDots } from "@/components/BrowserFrame";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected projects by ChilliSpark: Ekosight, an agritech platform for farmers built to make farming easy and profitable.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        wide
        badge="Our Work"
        title={
          <>
            Websites that
            <br />
            get results.
          </>
        }
        text="Selected projects, built to load fast, look premium, and turn visitors into customers."
      />
      <section className="bg-white pt-20 pb-24">
        <div className="max-w-[1120px] mx-auto px-[26px] flex flex-col gap-24">
          {portfolio.map((pf, idx) => (
            <article key={pf.slug}>
              {/* case-study header */}
              <div className="flex justify-between items-end flex-wrap gap-5 mb-8">
                <div>
                  <span className="text-accent font-bold text-sm tracking-[.06em] uppercase">
                    {idx === 0 ? "Featured project" : "Project"} · {pf.type}
                  </span>
                  <h2 className="font-extrabold text-[clamp(30px,4vw,48px)] leading-none tracking-[-0.02em] mt-3 mb-0">
                    {pf.name}
                  </h2>
                </div>
                <p className="text-[#5A5A66] text-[16.5px] leading-relaxed m-0 max-w-[440px]">
                  {pf.result}
                </p>
              </div>

              {/* main screenshot */}
              <div className="cs-card border border-[#E9E9F0] rounded-[22px] overflow-hidden bg-white shadow-[0_24px_60px_rgba(15,15,30,.1)]">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-ink">
                  <BrowserDots size={10} />
                  <span className="ml-3 text-[#8A8A96] text-[13px] bg-[#1C1C22] px-4 py-1.5 rounded-lg">
                    {pf.domain}
                  </span>
                </div>
                <div className="relative w-full aspect-[16/8] bg-[#F1F1F6]">
                  <Image
                    src={pf.image}
                    alt={`${pf.name} website`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1120px) 100vw, 1068px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* gallery */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 mt-6">
                {pf.shots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="cs-card m-0 border border-[#E9E9F0] rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,15,30,.05)]"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F6F6F9] border-b border-[#EEE]">
                      <BrowserDots size={8} />
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-[#F1F1F6]">
                      <Image
                        src={shot.src}
                        alt={`${pf.name}: ${shot.label}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-[#5A5A66] text-[13.5px] font-medium">
                      {shot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}

          {/* your project next */}
          <div className="rounded-[22px] border border-dashed border-[#C9C4F3] bg-[#FAFAFE] p-10 text-center">
            <h3 className="font-extrabold text-[clamp(24px,3vw,34px)] tracking-[-0.02em] mt-0 mb-2">
              Your website could be next.
            </h3>
            <p className="text-[#5A5A66] text-base mt-0 mb-6 max-w-[480px] mx-auto">
              Tell us about your business and we&apos;ll show you what a modern,
              fast website can do for it.
            </p>
            <Link
              href="/contact"
              className="cs-btn-dark inline-flex items-center gap-2.5 bg-ink text-white font-bold text-[15px] px-6 py-[13px] rounded-full no-underline"
            >
              Start your project
              <span className="w-[22px] h-[22px] rounded-full bg-accent inline-flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17 17 7M8 7h9v9"
                    stroke="#fff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
