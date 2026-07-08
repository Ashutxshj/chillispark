import { why } from "@/lib/data";

const icons = ["🎨", "📱", "⚡", "🔍", "💸", "🤝"];

export default function WhyChoose() {
  return (
    <section className="py-6">
      <div className="max-w-[1200px] mx-auto px-[26px]">
        <div className="relative overflow-hidden rounded-[34px] px-[26px] py-16 sm:px-12 [background:radial-gradient(900px_400px_at_85%_8%,rgba(255,255,255,.5),transparent_60%),linear-gradient(170deg,#6E62F6,#8E86F3_60%,#B3ACF1)]">
          <div
            className="cs-grid-overlay !bg-[length:54px_54px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
              WebkitMaskImage:
                "radial-gradient(80% 80% at 50% 40%,#000,transparent)",
              maskImage: "radial-gradient(80% 80% at 50% 40%,#000,transparent)",
            }}
          />
          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="md:col-span-2 flex flex-col justify-center pr-2 pb-4 xl:pb-0">
              <h2 className="font-extrabold text-white text-[clamp(32px,4.2vw,52px)] leading-[1.02] tracking-[-0.02em] m-0">
                Why choose ChilliSpark?
              </h2>
              <p className="text-white/90 text-lg mt-5 mb-0 max-w-[440px]">
                Benefits your customers feel, not features you have to
                understand.
              </p>
            </div>
            {why.map((w, i) => (
              <div
                key={w.title}
                className="group bg-white/10 border border-white/25 backdrop-blur-[2px] rounded-[20px] p-7 transition-colors duration-300 hover:bg-white hover:border-white"
              >
                <div className="flex items-start justify-between">
                  <span className="font-extrabold text-[26px] leading-none text-white/70 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[28px] leading-none grayscale brightness-[1.7] transition-[filter] duration-300 group-hover:grayscale-0 group-hover:brightness-100">
                    {icons[i]}
                  </span>
                </div>
                <h3 className="font-bold uppercase tracking-[.04em] text-white text-[17px] mt-9 mb-2 transition-colors duration-300 group-hover:text-ink">
                  {w.title}
                </h3>
                <p className="text-white/75 text-[14.5px] leading-[1.55] m-0 transition-colors duration-300 group-hover:text-[#5A5A66]">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
