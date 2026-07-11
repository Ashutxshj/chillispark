export default function PageHero({
  badge,
  title,
  text,
  wide,
}: {
  badge?: string;
  title: React.ReactNode;
  text?: string;
  wide?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 [background:radial-gradient(1000px_460px_at_80%_10%,rgba(255,255,255,.72),transparent_60%),linear-gradient(175deg,#1877F2,#5AA3FF_70%,#DDEEFF)]">
      <div
        className={`${wide ? "max-w-[1120px]" : "max-w-[1000px]"} mx-auto px-[26px] relative`}
      >
        {badge && (
          <span className="inline-block bg-white/18 border border-white/35 text-white font-semibold text-[13.5px] px-[15px] py-2 rounded-full">
            {badge}
          </span>
        )}
        <h1 className="font-extrabold text-white text-[clamp(40px,7vw,96px)] leading-[.95] tracking-[-0.025em] mt-6 mb-0">
          {title}
        </h1>
        {text && (
          <p className="text-white/90 text-[clamp(17px,1.6vw,21px)] leading-normal max-w-[640px] mt-6 mb-0">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
