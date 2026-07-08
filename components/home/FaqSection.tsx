"use client";

import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-[26px] grid grid-cols-1 lg:grid-cols-[minmax(280px,380px)_1fr] gap-14 items-start">
        <div>
          <h2 className="font-extrabold text-[clamp(38px,4.6vw,64px)] leading-[.98] tracking-[-0.02em] m-0">
            Questions
            <br />
            and answers
          </h2>
          <p className="text-[#5A5A66] text-base leading-[1.55] mt-5 mb-0 max-w-[320px]">
            We have answers to your questions about our services and approach.
          </p>
          <p className="font-bold text-[19px] mt-10 mb-1">Got more questions?</p>
          <p className="text-[#5A5A66] text-base mt-0 mb-[22px]">
            Contact us for more information.
          </p>
          <Link
            href="/contact"
            className="cs-btn-dark inline-flex items-center gap-2.5 bg-ink text-white font-bold text-[15px] px-[26px] py-[13px] rounded-full no-underline"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-1.5">
          {faqs.map((f, i) => {
            const open = !!openMap[i];
            return (
              <div
                key={f.q}
                className="rounded-[14px] transition-colors duration-200"
                style={{ background: open ? "#F4F4F7" : "transparent" }}
              >
                <button
                  onClick={() =>
                    setOpenMap((m) => ({ ...m, [i]: !m[i] }))
                  }
                  aria-expanded={open}
                  className="w-full flex justify-between items-center gap-[18px] p-[22px] bg-transparent border-none cursor-pointer text-left font-semibold text-[clamp(17px,1.8vw,22px)] text-ink font-[inherit]"
                >
                  <span>{f.q}</span>
                  <span
                    className="flex-none inline-flex items-center justify-center transition-transform duration-[250ms]"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="#0B0B0F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {open && (
                  <div className="px-[22px] pb-6 max-w-[760px] text-[#5A5A66] text-base leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
