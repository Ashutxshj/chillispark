import { Oswald } from "next/font/google";
import { why } from "@/lib/data";

const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"] });

const icons = [
  // Modern Design — browser with check
  <>
    <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
    <path d="M2.5 8h19" />
    <path d="M5 6.2h.01M7 6.2h.01M9 6.2h.01" />
    <path d="M9 20h6M12 17v3" />
    <path d="M9.5 12.8l1.8 1.8 3.2-3.6" />
  </>,
  // Mobile Friendly — phone with signal
  <>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path d="M10.5 5.2h3" />
    <path d="M11 18.6h2" />
    <path d="M3 9.5a5.5 5.5 0 0 1 3-1M3.2 12.5a3 3 0 0 1 2-1" />
    <path d="M21 9.5a5.5 5.5 0 0 0-3-1M20.8 12.5a3 3 0 0 0-2-1" />
  </>,
  // Fast Performance — speedometer
  <>
    <path d="M3.5 17a9 9 0 1 1 17 0" />
    <path d="M12 17l4-4.5" />
    <circle cx="12" cy="17" r="1.4" />
    <path d="M6.2 12.2h.01M8.4 8.6h.01M12 7.2h.01M15.6 8.6h.01" />
  </>,
  // SEO Ready — search with bars
  <>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.2 15.2 21 21" />
    <path d="M7.5 11.5v-1M10.5 11.5v-3M13.5 11.5v-2" />
  </>,
  // Affordable — price tag
  <>
    <path d="M3.5 12.5 12 4h6.5a1.5 1.5 0 0 1 1.5 1.5V12l-8.5 8.5a1.4 1.4 0 0 1-2 0L3.5 14.5a1.4 1.4 0 0 1 0-2z" />
    <circle cx="16" cy="8" r="1.2" />
    <path d="M11.6 9.4c-.9-.6-2-.3-2 .7 0 1.4 2.4.9 2.4 2.3 0 1-1.2 1.3-2.1.7M10.6 8.6v.7M10.6 13v.7" />
  </>,
  // Ongoing Support — headset
  <>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2.5" y="12.5" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="12.5" width="4" height="6" rx="1.5" />
    <path d="M20 18.5v.5a3 3 0 0 1-3 3h-2.5" />
    <circle cx="12" cy="21.5" r="1.1" />
  </>,
];

export default function WhyChoose() {
  return (
    <section className="py-6">
      <div className="max-w-[1200px] mx-auto px-[26px]">
        <div className="relative overflow-hidden rounded-[34px] p-[clamp(32px,4.5vw,64px)] [background:radial-gradient(120%_130%_at_88%_6%,#cfc6fb_0%,#a99ef4_22%,#8a7bee_50%,#7264e8_74%,#6555df_100%)]">
          <div
            className="absolute inset-0 pointer-events-none bg-[length:52px_52px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.10) 1px,transparent 1px)",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 20% 20%,#000 30%,transparent 78%)",
              maskImage:
                "radial-gradient(120% 120% at 20% 20%,#000 30%,transparent 78%)",
            }}
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            <div className="sm:col-span-2 flex flex-col justify-start pt-2 pr-2 pl-1">
              <h2
                className={`${oswald.className} font-bold uppercase text-white text-[clamp(38px,5vw,62px)] leading-[.96] tracking-[.5px] m-0 text-balance`}
              >
                Why choose ChilliSpark?
              </h2>
              <p className="text-white/80 text-[clamp(15px,1.5vw,18px)] leading-[1.6] mt-[22px] mb-0 max-w-[440px]">
                Benefits your customers feel, not features you have to
                understand.
              </p>
            </div>
            {why.map((w, i) => (
              <div
                key={w.title}
                className={`group relative flex flex-col p-[26px_24px] rounded-[14px] bg-white/[.09] border border-white/[.18] backdrop-blur-[2px] transition-colors duration-300 hover:bg-white hover:border-white ${
                  i < 2
                    ? "min-h-[clamp(210px,26vw,280px)]"
                    : "min-h-[clamp(200px,22vw,230px)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`${oswald.className} font-semibold text-[clamp(34px,4vw,42px)] leading-none text-white/55 transition-colors duration-300 group-hover:text-accent`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white transition-colors duration-300 group-hover:text-accent"
                  >
                    {icons[i]}
                  </svg>
                </div>
                <div className="mt-auto">
                  <h3
                    className={`${oswald.className} font-semibold uppercase tracking-[1px] text-[17px] text-white m-0 transition-colors duration-300 group-hover:text-ink`}
                  >
                    {w.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-[1.55] mt-3 mb-0 transition-colors duration-300 group-hover:text-[#5A5A66]">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
