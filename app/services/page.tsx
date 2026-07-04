import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, landing pages, redesigns, e-commerce, maintenance and SEO. Everything your website needs to win more customers.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="Services"
        title={
          <>
            Everything your
            <br />
            website needs.
          </>
        }
        text="Outcomes, not jargon. Here's how we help you get found, build trust, and win more customers."
      />
      <section className="bg-white pt-20 pb-24">
        <div className="max-w-[1000px] mx-auto px-[26px]">
          {services.map((sv) => (
            <div
              key={sv.num}
              className="grid grid-cols-[52px_1fr] sm:grid-cols-[80px_1fr] gap-[22px] py-[34px] border-b border-[#EEE]"
            >
              <div className="font-extrabold text-[28px] sm:text-[40px] text-[#E6E3FB] tracking-[-0.03em]">
                {sv.num}
              </div>
              <div>
                <h3 className="font-bold text-[clamp(24px,3vw,32px)] tracking-[-0.01em] mt-0 mb-2.5">
                  {sv.title}
                </h3>
                <p className="text-[#5A5A66] text-[16.5px] leading-relaxed m-0 max-w-[640px]">
                  {sv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
