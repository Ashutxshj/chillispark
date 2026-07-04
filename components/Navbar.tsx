"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EMAIL, PHONE, WHATSAPP_URL } from "@/lib/data";

const chevron = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function DropIcon() {
  return (
    <span className="flex-none w-8 h-8 rounded-lg bg-[#F0EFFB] flex items-center justify-center">
      <Image
        src="/icons/shuffle-circle.png"
        alt=""
        width={20}
        height={20}
        className="mix-blend-multiply"
      />
    </span>
  );
}

function PromoPanel({
  title,
  text,
  cta,
  href,
  big,
}: {
  title: string;
  text: string;
  cta: string;
  href: string;
  big?: boolean;
}) {
  return (
    <div className="p-[22px] flex flex-col justify-between text-white [background:radial-gradient(120%_120%_at_100%_0,rgba(255,255,255,.28),transparent),linear-gradient(160deg,#6E62F6,#8E86F3)]">
      <div>
        <div
          className={
            big
              ? "font-extrabold text-[30px] leading-none"
              : "font-bold text-lg leading-[1.15]"
          }
        >
          {title}
        </div>
        <p className="text-[12.5px] opacity-85 mt-[9px] mb-0 leading-[1.45]">{text}</p>
      </div>
      <Link
        href={href}
        className="mt-[18px] self-start inline-flex items-center gap-2 bg-white text-ink font-bold text-[13px] px-4 py-2.5 rounded-full no-underline"
      >
        {cta}
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;
  const linkCls = `cs-lnk inline-flex items-center gap-1.5 text-[#EDEDF2] font-medium text-[15.5px] px-4 py-2.5 rounded-full no-underline transition-colors duration-300 ${
    solid ? "bg-white/10" : ""
  }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[80]">
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-300 ${
          solid
            ? "my-3 mx-3 lg:mx-auto py-[11px] pr-[11px] pl-6 bg-ink rounded-[28px] lg:rounded-full shadow-[0_14px_40px_rgba(10,10,25,.22)] flex-wrap"
            : "py-5 px-[26px] bg-transparent flex-wrap"
        }`}
      >
        <Link href="/" className="flex items-center no-underline">
          <span className="font-bold text-[23px] text-white tracking-[-0.01em]">
            ChilliSpark
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {/* ABOUT */}
          <div className="cs-item">
            <Link
              href="/about"
              className={linkCls}
            >
              About {chevron}
            </Link>
            <div className="cs-drop cs-drop-l w-[540px]">
              <div className="bg-white rounded-[18px] shadow-[0_30px_70px_rgba(15,15,30,.22)] border border-[#EEE] overflow-hidden grid grid-cols-[200px_1fr]">
                <PromoPanel
                  title="A studio built for local growth"
                  text="Delhi-based web design & development."
                  cta="Book a Call"
                  href={`tel:${PHONE}`}
                />
                <div className="p-2.5">
                  {[
                    ["Our Story", "Who we are & why we build", "/about"],
                    ["What We Value", "Honest, results-driven work", "/about"],
                    ["How We Work", "A simple, proven process", "/services"],
                    ["Get a Quote", "Free, no-pressure estimate", "/contact"],
                  ].map(([t, d, href]) => (
                    <Link key={t} href={href} className="cs-drow">
                      <DropIcon />
                      <span>
                        <span className="block font-semibold text-[15px] text-ink">
                          {t}
                        </span>
                        <span className="block text-[12.5px] text-[#8A8A96]">
                          {d}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="cs-item">
            <Link
              href="/services"
              className={linkCls}
            >
              Services {chevron}
            </Link>
            <div className="cs-drop cs-drop-c w-[640px]">
              <div className="bg-white rounded-[18px] shadow-[0_30px_70px_rgba(15,15,30,.22)] border border-[#EEE] overflow-hidden grid grid-cols-[200px_1fr]">
                <PromoPanel
                  title="Everything your website needs"
                  text="Outcomes, not jargon."
                  cta="See all services"
                  href="/services"
                />
                <div className="p-2.5 grid grid-cols-2 gap-0.5">
                  {[
                    "Business Websites",
                    "Landing Pages",
                    "Website Redesign",
                    "E-commerce",
                    "Maintenance",
                    "SEO Foundation",
                  ].map((s) => (
                    <Link key={s} href="/services" className="cs-drow">
                      <DropIcon />
                      <span className="font-semibold text-[14.5px] text-ink">
                        {s}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* OUR WORK */}
          <div className="cs-item">
            <Link
              href="/work"
              className={linkCls}
            >
              Our Work {chevron}
            </Link>
            <div className="cs-drop cs-drop-c w-[540px]">
              <div className="bg-white rounded-[18px] shadow-[0_30px_70px_rgba(15,15,30,.22)] border border-[#EEE] overflow-hidden grid grid-cols-[200px_1fr]">
                <PromoPanel
                  big
                  title="20+"
                  text="projects delivered for local businesses."
                  cta="View all work"
                  href="/work"
                />
                <div className="p-2.5">
                  {[
                    ["Ekosight", "AgriTech platform for farmers"],
                    ["burnt?", "Email deliverability tool"],
                    ["All projects", "See every launch"],
                    ["Your project?", "Start a conversation"],
                  ].map(([t, d]) => (
                    <Link key={t} href="/work" className="cs-drow">
                      <DropIcon />
                      <span>
                        <span className="block font-semibold text-[15px] text-ink">
                          {t}
                        </span>
                        <span className="block text-[12.5px] text-[#8A8A96]">
                          {d}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* GET STARTED (desktop dropdown) */}
          <div className="cs-item hidden sm:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[9px] bg-white text-ink font-bold text-[15.5px] px-[22px] py-[11px] rounded-full no-underline"
            >
              Get Started
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="m6 9 6 6 6-6"
                  stroke="#0B0B0F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="cs-drop cs-drop-r w-[250px] hidden lg:block">
              <div className="bg-white rounded-2xl shadow-[0_30px_70px_rgba(15,15,30,.22)] border border-[#EEE] p-2">
                <Link href="/contact" className="cs-drow">
                  <span className="flex-none w-[30px] h-[30px] rounded-lg bg-[#F0EFFB] flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17 17 7M8 7h9v9"
                        stroke="#5B46F0"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-[15px] text-ink">
                    Get a Free Quote
                  </span>
                </Link>
                <a className="cs-drow" href={`tel:${PHONE}`}>
                  <span className="flex-none w-[30px] h-[30px] rounded-lg bg-[#F0EFFB] flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5c0 8 7 15 15 15l2.5-3.5-4.5-2-1.5 2c-3-1.2-5.8-4-7-7l2-1.5-2-4.5L4 5z"
                        stroke="#5B46F0"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-[15px] text-ink">
                    Book a Call
                  </span>
                </a>
                <a className="cs-drow" href={WHATSAPP_URL}>
                  <span className="flex-none w-[30px] h-[30px] rounded-lg bg-[#EAF9EF] flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2z" />
                    </svg>
                  </span>
                  <span className="font-semibold text-[15px] text-ink">
                    WhatsApp Us
                  </span>
                </a>
                <a className="cs-drow" href={`mailto:${EMAIL}`}>
                  <span className="flex-none w-[30px] h-[30px] rounded-lg bg-[#F0EFFB] flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="#5B46F0"
                        strokeWidth="1.6"
                      />
                      <path d="m4 7 8 6 8-6" stroke="#5B46F0" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <span className="font-semibold text-[15px] text-ink">
                    Email Us
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/15 border border-white/30 text-white cursor-pointer"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="lg:hidden w-full pt-4 pb-2 flex flex-col gap-1">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Our Work", "/work"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-white font-semibold text-lg px-3 py-3 rounded-xl hover:bg-white/10 no-underline"
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-3 px-3 pt-2 pb-1">
              <a
                href={`tel:${PHONE}`}
                className="text-[#C9C4F3] font-semibold text-sm no-underline"
              >
                Call us
              </a>
              <a
                href={WHATSAPP_URL}
                className="text-[#C9C4F3] font-semibold text-sm no-underline"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[#C9C4F3] font-semibold text-sm no-underline"
              >
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
