"use client";

import { useEffect, useRef, useState } from "react";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
    >
      <div className="site-container relative">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-6 top-16 font-display text-[220px] leading-none text-[#171512]/[0.025] transition-all duration-1000 md:text-[320px] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          M
        </span>

        <div className="relative z-10">
          <div
            className={`mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b] transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span>MEDUSA</span>
            <span>01</span>
          </div>

          <div className="max-w-3xl">
            <h2
              className={`font-display text-5xl leading-[0.95] tracking-[-0.02em] transition-all delay-150 duration-1000 sm:text-6xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Une cuisine guidée
              <br />
              par le produit,
              <br />
              le feu et les saisons.
            </h2>

            <p
              className={`mt-10 max-w-md text-sm leading-6 text-[#6f675f] transition-all delay-300 duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Une expérience pensée autour de produits choisis avec exigence,
              travaillés avec précision et servis dans une atmosphère intime.
            </p>
          </div>

          <div
            className={`mt-24 flex items-center justify-between border-t border-[#171512]/10 pt-5 transition-all delay-500 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7c746b]">
              Découvrir
            </span>

            <span className="font-display text-3xl text-[#7c746b]">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
