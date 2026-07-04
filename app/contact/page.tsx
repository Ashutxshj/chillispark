import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and get ideas, a timeline and a clear quote for your new website. Call, WhatsApp or email ChilliSpark.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-[150px] pb-10 [background:radial-gradient(1000px_460px_at_80%_10%,rgba(255,255,255,.55),transparent_60%),linear-gradient(175deg,#6E62F6,#9089F3_70%,#C8C3F2)]">
        <div className="max-w-[1000px] mx-auto px-[26px]">
          <h1 className="font-extrabold text-white text-[clamp(40px,7vw,90px)] leading-[.95] tracking-[-0.025em] m-0">
            Let&apos;s build
            <br />
            something.
          </h1>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
