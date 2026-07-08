import Image from "next/image";
import { BrowserDots } from "@/components/BrowserFrame";

const shots = [
  { src: "/marquee/site-1.png", alt: "Aesthete: minimalist ecommerce storefront", key: "aesthete-hero" },
  { src: "/marquee/site-2.png", alt: "Rosebud: botanicals shop hero", key: "rosebud-hero" },
  { src: "/marquee/site-3.png", alt: "Rosebud: curated plant catalog", key: "rosebud-catalog" },
  { src: "/marquee/site-4.png", alt: "Aurum: luxury collection hero", key: "aurum-hero" },
  { src: "/marquee/site-5.png", alt: "Aurum: brand philosophy", key: "aurum-philosophy" },
  { src: "/marquee/site-6.png", alt: "Aurum: gifting experience", key: "aurum-gifting" },
  { src: "/marquee/site-7.png", alt: "Nocturne Atelier: brand story", key: "nocturne-story" },
  { src: "/marquee/site-8.png", alt: "Nocturne Atelier: streetwear hero", key: "nocturne-hero" },
  { src: "/marquee/site-9.png", alt: "Skincare boutique product grid", key: "skincare-grid" },
  { src: "/marquee/site-10.png", alt: "The Treasury: game store hero", key: "treasury-hero" },
  { src: "/marquee/site-11.png", alt: "The Treasury: games library", key: "treasury-library" },
];

export default function SitesMarquee() {
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
