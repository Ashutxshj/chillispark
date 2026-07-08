import Image from "next/image";
import { PHONE, industries } from "@/lib/data";

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
                    className={`relative w-[42px] h-[42px] rounded-full border-[3px] border-white overflow-hidden bg-[#C9C4F3] ${i > 0 ? "-ml-3.5" : ""}`}
                  >
                    <Image
                      src={`/testimonials/${a}.png`}
                      alt="Happy ChilliSpark client"
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
          <div className="text-right">
            <div className="flex gap-3 justify-end flex-wrap">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2.5 bg-white/15 border border-white/35 text-white font-semibold text-base px-6 py-[13px] rounded-full no-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5c0 8 7 15 15 15l2.5-3.5-4.5-2-1.5 2c-3-1.2-5.8-4-7-7l2-1.5-2-4.5L4 5z"
                    stroke="#fff"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
                Call us
              </a>
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
