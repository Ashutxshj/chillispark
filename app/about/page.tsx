import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "ChilliSpark is a Delhi-based web design and development studio helping local businesses win online with fast, modern, affordable websites.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="About ChilliSpark"
        title={
          <>
            We help local
            <br />
            businesses win online.
          </>
        }
        text="ChilliSpark is a Delhi-based web design and development studio. We build fast, modern, affordable websites that give small businesses a professional presence they own, not just another social profile."
      />
      <section className="bg-white py-[90px]">
        <div className="max-w-[1000px] mx-auto px-[26px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12">
          <div>
            <h2 className="font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-0.02em] mt-0 mb-[18px]">
              Our story
            </h2>
            <p className="text-[#5A5A66] text-[16.5px] leading-[1.65] mt-0 mb-4">
              We started ChilliSpark because too many great local businesses,
              like dentists, clinics, restaurants and salons, were losing
              customers to competitors with better websites, or to marketplaces
              that own the relationship.
            </p>
            <p className="text-[#5A5A66] text-[16.5px] leading-[1.65] m-0">
              Our job isn&apos;t to sell you a website. It&apos;s to help you
              get more customers, build trust, and control your own brand,
              with a site that loads fast, works perfectly on mobile, and turns
              visitors into inquiries.
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-0.02em] mt-0 mb-[18px]">
              What we value
            </h2>
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-3.5 py-4 border-b border-[#EEE]"
              >
                <span className="flex-none w-3 h-3 rounded bg-accent mt-[5px]" />
                <div>
                  <strong className="font-bold text-lg">{v.title}</strong>
                  <p className="text-[#5A5A66] text-[15px] mt-1 mb-0">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
