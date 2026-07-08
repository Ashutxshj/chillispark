import Link from "next/link";
import {
  EMAIL,
  EMAIL_2,
  PHONE,
  PHONE_2,
  PHONE_2_DISPLAY,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-[#EEE]">
      <div className="max-w-[1120px] mx-auto px-[26px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <span className="font-bold text-[21px]">ChilliSpark</span>
          <p className="text-[#6B6B76] text-[15px] leading-relaxed mt-[18px] mb-0 max-w-[280px]">
            Fast, modern, affordable websites that help local businesses in
            Delhi grow.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-base mt-0 mb-4">Company</h4>
          {[
            ["About", "/about"],
            ["Services", "/services"],
            ["Our Work", "/work"],
            ["Get Started", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block pb-3 text-[#6B6B76] text-[15px] no-underline hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-base mt-0 mb-4">Services</h4>
          {[
            "Business Websites",
            "Landing Pages",
            "Website Redesign",
            "E-commerce",
          ].map((s) => (
            <p key={s} className="text-[#6B6B76] text-[15px] mt-0 mb-3 last:mb-0">
              {s}
            </p>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-base mt-0 mb-4">Get in touch</h4>
          <a
            href={`tel:${PHONE}`}
            className="block text-[#6B6B76] text-[15px] mb-3 no-underline hover:text-ink"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE_2}`}
            className="block text-[#6B6B76] text-[15px] mb-3 no-underline hover:text-ink"
          >
            {PHONE_2_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="block text-[#6B6B76] text-[15px] mb-3 no-underline hover:text-ink"
          >
            {EMAIL}
          </a>
          <a
            href={`mailto:${EMAIL_2}`}
            className="block text-[#6B6B76] text-[15px] mb-3 no-underline hover:text-ink"
          >
            {EMAIL_2}
          </a>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 text-accent font-semibold text-[15px] no-underline"
          >
            WhatsApp us →
          </a>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto mt-14 px-[26px] py-[22px] border-t border-[#EEE] flex justify-between items-center flex-wrap gap-3.5">
        <div className="flex gap-[22px]">
          <a
            href={WHATSAPP_URL}
            className="text-[#6B6B76] text-sm no-underline hover:text-ink"
          >
            WhatsApp
          </a>
        </div>
        <span className="text-[#9A9AA4] text-sm">
          ChilliSpark © {new Date().getFullYear()} · Delhi, India
        </span>
      </div>
      <div className="overflow-hidden leading-none mt-5">
        <div className="font-extrabold text-[clamp(70px,18vw,280px)] text-[#F4F3FB] text-center tracking-[-0.03em] select-none">
          ChilliSpark
        </div>
      </div>
    </footer>
  );
}
