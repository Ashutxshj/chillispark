import Image from "next/image";
import { industries } from "@/lib/data";

export default function Hero() {
  return (
    <section className="cs-hero-bg relative overflow-hidden pt-[170px] pb-[90px]">
      <div
        className="cs-grid-overlay"
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg,transparent,#000 22%,#000 78%,transparent)",
          maskImage:
            "linear-gradient(180deg,transparent,#000 22%,#000 78%,transparent)",
        }}
      />
      <div className="relative z-[2] max-w-[1200px] mx-auto px-[26px]">
        <p className="text-white/90 font-medium text-[clamp(18px,2.2vw,28px)] tracking-[.01em] m-0 mb-4">
          We build you
        </p>
        <h1 className="font-extrabold text-white uppercase leading-[.88] tracking-[-0.025em] text-[clamp(38px,9.6vw,148px)] m-0">
          <span className="block">Websites that</span>
          <span className="block text-right">win customers</span>
        </h1>
        <div className="flex justify-between items-end flex-wrap gap-10 mt-[54px]">
          <div className="max-w-[540px]">
            <p className="text-white/90 text-[clamp(17px,1.5vw,20px)] leading-normal m-0">
              Fast, modern, affordable websites that help local businesses
              build trust, rank on Google, and turn visitors into paying
              customers.
            </p>
            <div className="flex items-center gap-4 mt-[34px]">
              <div className="flex">
                {["avatar-17", "avatar-21", "avatar-19"].map((a, i) => (
                  <span
                    key={a}
                    className={`relative w-[42px] h-[42px] rounded-full border-[3px] border-white overflow-hidden bg-[#DDEEFF] ${i > 0 ? "-ml-3.5" : ""}`}
                  >
                    <Image
                      src={`/testimonials/${a}.png`}
                      alt="Happy Chillispark client"
                      fill
                      sizes="42px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <span className="text-white text-[15.5px] font-medium">
                Trusted by local businesses
                <br />
                across <strong className="font-bold">Delhi NCR</strong>
              </span>
            </div>
          </div>
        </div>

        <p className="text-white/80 font-semibold text-sm mt-[70px] mb-[22px]">
          Industries we build for
        </p>
        <div className="flex flex-wrap gap-y-3.5 gap-x-[34px] items-center">
          {industries.map((ind) => (
            <span
              key={ind}
              className="text-white font-semibold text-[clamp(16px,1.6vw,21px)] opacity-80"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
