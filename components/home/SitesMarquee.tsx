import Image from "next/image";
import { BrowserDots } from "@/components/BrowserFrame";
import { portfolio } from "@/lib/data";

export default function SitesMarquee() {
  const shots = portfolio.flatMap((pf) => [
    { src: pf.image, alt: `${pf.name} website`, key: `${pf.slug}-main` },
    ...pf.shots.map((s, i) => ({
      src: s.src,
      alt: `${pf.name}: ${s.label}`,
      key: `${pf.slug}-${i}`,
    })),
  ]);
  const loop = [...shots, ...shots];

  return (
    <section className="bg-[#F5F5F9] pt-[70px] pb-[90px] overflow-hidden">
      <p className="text-center text-[#6B6B76] font-semibold text-sm tracking-[.06em] uppercase mt-0 mb-10">
        Websites we&apos;ve launched
      </p>
      <div
        className="cs-marquee flex w-max gap-[26px]"
        style={{ animationDuration: "60s" }}
      >
        {loop.map((shot, i) => (
          <div
            key={`${shot.key}-${i}`}
            className="w-[360px] max-w-[82vw] flex-none border border-[#E9E9F0] rounded-2xl overflow-hidden bg-white shadow-[0_14px_34px_rgba(15,15,30,.06)]"
          >
            <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-ink">
              <BrowserDots size={8} />
            </div>
            <div className="relative w-full aspect-[16/10] bg-[#F1F1F6]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="360px"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
