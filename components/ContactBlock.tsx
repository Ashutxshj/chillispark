"use client";

import { useState } from "react";
import {
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full px-[15px] py-[13px] border border-[#E4E4EB] rounded-[11px] text-[15px] font-[inherit] mb-4 outline-none focus:border-accent";
const labelCls = "block font-semibold text-[13px] text-ink mb-1.5";

export default function ContactBlock() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="bg-ink py-[90px]">
      <div className="max-w-[1120px] mx-auto px-[26px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="text-accent font-bold text-sm tracking-[.06em] uppercase">
            Get started
          </span>
          <h2 className="font-extrabold text-white text-[clamp(34px,4.6vw,58px)] leading-none tracking-[-0.02em] mt-3.5 mb-0">
            Tell us about
            <br />
            your business.
          </h2>
          <p className="text-white/70 text-[17px] leading-relaxed mt-[22px] mb-[34px] max-w-[420px]">
            A quick message and we&apos;ll get back with ideas, timeline and a
            clear quote. No pressure, no jargon.
          </p>
          <div className="flex flex-col gap-3.5">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3.5 bg-[#16161C] border border-[#24242C] rounded-[14px] px-5 py-4 no-underline"
            >
              <span className="w-10 h-10 rounded-[10px] bg-accent flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5c0 8 7 15 15 15l2.5-3.5-4.5-2-1.5 2c-3-1.2-5.8-4-7-7l2-1.5-2-4.5L4 5z"
                    stroke="#fff"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-[#8A8A96] text-[13px]">Call us</span>
                <span className="text-white font-semibold text-base">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <a
              href={WHATSAPP_URL}
              className="flex items-center gap-3.5 bg-[#16161C] border border-[#24242C] rounded-[14px] px-5 py-4 no-underline"
            >
              <span className="w-10 h-10 rounded-[10px] bg-[#25D366] flex items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.4-.3.5l-.5.5c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.9.3.1.4.2.5.3 0 .1 0 .6-.3 1.2z" />
                </svg>
              </span>
              <span>
                <span className="block text-[#8A8A96] text-[13px]">WhatsApp</span>
                <span className="text-white font-semibold text-base">
                  Chat with us
                </span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3.5 bg-[#16161C] border border-[#24242C] rounded-[14px] px-5 py-4 no-underline"
            >
              <span className="w-10 h-10 rounded-[10px] bg-[#24242C] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#fff"
                    strokeWidth="1.7"
                  />
                  <path d="m4 7 8 6 8-6" stroke="#fff" strokeWidth="1.7" />
                </svg>
              </span>
              <span>
                <span className="block text-[#8A8A96] text-[13px]">Email</span>
                <span className="text-white font-semibold text-base">{EMAIL}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[22px] p-[34px]">
          {status === "sent" ? (
            <div className="text-center py-10 px-2.5">
              <div className="w-16 h-16 rounded-full bg-[#EAF7EF] flex items-center justify-center mx-auto mb-5">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m5 12 4 4 10-10"
                    stroke="#16B981"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mt-0 mb-2">
                Thanks, message sent!
              </h3>
              <p className="text-[#5A5A66] text-[15.5px] m-0">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label className={labelCls} htmlFor="cf-name">
                Your name
              </label>
              <input
                id="cf-name"
                name="name"
                required
                placeholder="Jane Sharma"
                className={inputCls}
              />
              <label className={labelCls} htmlFor="cf-business">
                Business name
              </label>
              <input
                id="cf-business"
                name="business"
                placeholder="Bright Smile Dental"
                className={inputCls}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls} htmlFor="cf-email">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="cf-phone">
                    Phone
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    placeholder="+91 ..."
                    className={inputCls}
                  />
                </div>
              </div>
              <label className={labelCls} htmlFor="cf-message">
                What do you need?
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={3}
                placeholder="I run a dental clinic and need a modern website..."
                className={`${inputCls} mb-5 resize-y`}
              />
              {status === "error" && (
                <p className="text-[#D2372F] text-sm mt-0 mb-4">{error}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="cs-btn-dark w-full inline-flex items-center justify-center gap-2.5 bg-ink text-white font-bold text-base py-[15px] rounded-full border-none cursor-pointer disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <span className="w-6 h-6 rounded-full bg-accent inline-flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17 17 7M8 7h9v9"
                      stroke="#fff"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
