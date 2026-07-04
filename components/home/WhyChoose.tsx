import Image from "next/image";
import { why } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section className="py-6">
      <div className="max-w-[1200px] mx-auto px-[26px]">
        <div className="relative overflow-hidden rounded-[34px] px-[26px] pt-20 pb-[88px] [background:radial-gradient(900px_400px_at_85%_8%,rgba(255,255,255,.5),transparent_60%),linear-gradient(170deg,#6E62F6,#8E86F3_60%,#B3ACF1)]">
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
          <div className="relative text-center max-w-[760px] mx-auto mb-[52px]">
            <h2 className="font-extrabold text-white text-[clamp(32px,4.6vw,56px)] leading-none tracking-[-0.02em] m-0">
              Why choose ChilliSpark
            </h2>
            <p className="text-white/90 text-lg mt-[18px] mb-0">
              Benefits your customers feel, not features you have to
              understand.
            </p>
          </div>
          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 max-w-[1040px] mx-auto">
            {why.map((w) => (
              <div key={w.title} className="bg-white rounded-[20px] p-7">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-[18px]">
                  <Image
                    src="/icons/question-cube.png"
                    alt=""
                    width={26}
                    height={26}
                    className="mix-blend-multiply"
                  />
                </div>
                <h3 className="font-bold text-xl mt-0 mb-2">{w.title}</h3>
                <p className="text-[#5A5A66] text-[15px] leading-[1.55] m-0">
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
