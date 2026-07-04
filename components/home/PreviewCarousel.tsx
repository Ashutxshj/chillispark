"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

/**
 * Auto-playing slideshow: slides one image at a time to the left,
 * then reverses and comes back (ping-pong), pausing on hover.
 */
export default function PreviewCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const dirRef = useRef(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => {
      setIndex((i) => {
        let next = i + dirRef.current;
        if (next >= slides.length) {
          dirRef.current = -1;
          next = i - 1;
        } else if (next < 0) {
          dirRef.current = 1;
          next = i + 1;
        }
        return next;
      });
    }, 3200);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.src} className="relative flex-none w-full h-full">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 1120px) 100vw, 1068px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-colors ${
              i === index ? "bg-ink" : "bg-ink/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
