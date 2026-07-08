import { BrowserDots } from "@/components/BrowserFrame";
import PreviewCarousel from "@/components/home/PreviewCarousel";
import { portfolio, stats } from "@/lib/data";

export default function WorkPreview() {
  const featured = portfolio[0];
  return (
    <section className="pb-20 [background:linear-gradient(180deg,#C8C3F2_0%,#F5F5F9_42%)]">
      <div className="max-w-[1120px] mx-auto px-[26px] relative">
        <div className="relative rounded-[22px] overflow-hidden border border-[#E6E6EE] bg-white shadow-[0_40px_90px_rgba(20,18,50,.18)] -translate-y-6">
          <div className="flex items-center gap-2 px-5 py-4 bg-ink">
            <BrowserDots size={11} />
            <span className="ml-4 text-[#8A8A96] text-[13px] bg-[#1C1C22] px-4 py-1.5 rounded-lg">
              {featured.domain}
            </span>
          </div>
          <div className="relative bg-[#F1F1F6] aspect-[16/8]">
            <PreviewCarousel
              slides={[
                { src: featured.image, alt: `${featured.name} website` },
                ...featured.shots.map((s) => ({
                  src: s.src,
                  alt: `${featured.name}: ${s.label}`,
                })),
              ]}
            />
          </div>
        </div>
        <div className="cs-float absolute -left-1.5 top-[38%] bg-white px-[18px] py-3 rounded-[14px] shadow-[0_14px_34px_rgba(20,18,50,.14)] font-semibold text-[15px] rotate-[-6deg]">
          2× more leads
        </div>
        <div className="cs-float-slow absolute -right-2 bottom-[16%] bg-white px-[18px] py-3 rounded-[14px] shadow-[0_14px_34px_rgba(20,18,50,.14)] font-semibold text-[15px] rotate-[7deg]">
          Loads in 1.4s
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto mt-5 px-[26px] flex flex-wrap items-center gap-10 justify-between">
        <h2 className="font-extrabold text-[clamp(34px,5vw,60px)] leading-[.98] tracking-[-0.02em] m-0 max-w-[440px]">
          Built for
          <br />
          local growth
        </h2>
        <div className="flex flex-wrap gap-y-10 gap-x-14">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-extrabold text-[clamp(30px,3.4vw,48px)] tracking-[-0.02em] text-ink">
                {s.value}
              </div>
              <div className="text-[#6B6B76] text-[15px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
