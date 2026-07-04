import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="relative overflow-hidden pt-[90px] pb-24 [background:radial-gradient(900px_420px_at_88%_6%,rgba(255,255,255,.3),transparent_60%),linear-gradient(158deg,#5B46F0_0%,#6E62F6_60%,#7C71EC_100%)]">
      <div
        className="cs-grid-overlay !bg-[length:56px_56px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
          WebkitMaskImage: "linear-gradient(180deg,transparent,#000 30%)",
          maskImage: "linear-gradient(180deg,transparent,#000 30%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-[26px]">
        <h2 className="font-extrabold text-white text-[clamp(34px,5vw,60px)] leading-none tracking-[-0.02em] mt-0 mb-11">
          Real people, real stories
        </h2>
      </div>
      <div
        className="relative overflow-hidden pt-1.5 pb-6"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent)",
          maskImage:
            "linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent)",
        }}
      >
        <div
          className="cs-marquee flex gap-5 w-max px-[26px]"
          style={{ animationDuration: "52s" }}
        >
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-none w-[360px] max-w-[82vw] bg-white rounded-2xl p-6 shadow-[0_24px_60px_rgba(20,14,70,.24)]"
            >
              <div className="flex items-start gap-3">
                <span className="relative flex-none w-11 h-11 rounded-full overflow-hidden bg-accent">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[15px] text-ink">{t.name}</div>
                  <div className="text-[13px] text-[#8A8A96]">{t.role}</div>
                </div>
                <span className="flex-none w-[22px] h-[22px] rounded-[5px] bg-[#0A66C2] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
                  </svg>
                </span>
              </div>
              <p className="text-[#3A3A44] text-[14.5px] leading-relaxed mt-4 mb-0">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
