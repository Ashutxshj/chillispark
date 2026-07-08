"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/data";

export default function GetStartedWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3.5">
      {open && (
        <div className="w-[330px] max-w-[calc(100vw-40px)] rounded-3xl overflow-hidden bg-white shadow-[0_24px_64px_rgba(15,15,30,.28)] border border-[#E9E9F0]">
          <div className="relative bg-[linear-gradient(160deg,#6E62F6_0%,#8B83F4_60%,#A79FEF_100%)] px-6 pt-6 pb-7">
            <div
              className="cs-grid-overlay"
              style={{ backgroundSize: "34px 34px" }}
            />
            <div className="relative flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="ChilliSpark"
                width={30}
                height={30}
                className="rounded-full bg-white p-0.5"
              />
              <span className="text-white font-extrabold text-lg tracking-tight">
                ChilliSpark
              </span>
            </div>
            <p className="relative text-white font-extrabold text-[22px] leading-tight mt-4 mb-0">
              Hi 👋 Ready to win more customers?
            </p>
            <p className="relative text-white/85 text-sm leading-snug mt-2 mb-0">
              Tell us about your business and we&apos;ll get your website
              moving. Fast, modern, and affordable.
            </p>
          </div>

          <div className="p-4 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2.5 bg-ink text-white font-bold text-[15px] py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17 17 7M8 7h9v9"
                  stroke="#fff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#E9E9F0] rounded-2xl px-4 py-3 no-underline hover:bg-[#F5F5F9] transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-[#E7F8EC] flex items-center justify-center text-[17px]">
                💬
              </span>
              <span>
                <span className="block text-ink font-bold text-sm">
                  WhatsApp us
                </span>
                <span className="block text-[#6B6B76] text-xs mt-0.5">
                  Quick replies, usually within the hour
                </span>
              </span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 border border-[#E9E9F0] rounded-2xl px-4 py-3 no-underline hover:bg-[#F5F5F9] transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-[#EEECFD] flex items-center justify-center text-[17px]">
                📞
              </span>
              <span>
                <span className="block text-ink font-bold text-sm">
                  Call us
                </span>
                <span className="block text-[#6B6B76] text-xs mt-0.5">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <Link
              href="/work"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border border-[#E9E9F0] rounded-2xl px-4 py-3 no-underline hover:bg-[#F5F5F9] transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-[#FDF0EC] flex items-center justify-center text-[17px]">
                ✨
              </span>
              <span>
                <span className="block text-ink font-bold text-sm">
                  See our work
                </span>
                <span className="block text-[#6B6B76] text-xs mt-0.5">
                  Websites we&apos;ve launched for local businesses
                </span>
              </span>
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close Get Started panel" : "Open Get Started panel"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 bg-white text-ink font-bold text-base py-3 pl-6 pr-3 rounded-full cursor-pointer border-none shadow-[0_14px_34px_rgba(15,15,30,.25)] hover:scale-[1.03] transition-transform"
      >
        Get Started
        <span className="w-[34px] h-[34px] rounded-full bg-ink inline-flex items-center justify-center">
          {open ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="#fff"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17 17 7M8 7h9v9"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
