"use client";

import { useEffect, useRef, useState } from "react";
import { menuItems } from "./menuItems";

export default function Menu() {
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
      className="relative overflow-hidden px-6 py-24 md:px-20 site-container"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-6 top-16 font-display text-[220px] leading-none text-[#171512]/[0.025] transition-all duration-1000 md:text-[320px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        S
      </span>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-2 font-sans text-sm tracking-widest text-neutral-500">
          04 · La carte
        </p>

        <h2 className="mb-16 text-4xl text-neutral-900 md:text-5xl">
          Une carte guidée
          <br />
          par les saisons.
        </h2>

        <div className="space-y-20">
          {menuItems.map((section) => (
            <div key={section.category}>
              <div className="mb-8 flex items-baseline gap-4 border-b border-neutral-300 pb-4">
                <span className="font-sans text-sm text-neutral-500">
                  {section.number}
                </span>

                <h3 className="text-2xl tracking-wide text-neutral-900">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-start justify-between gap-6"
                  >
                    <div className="max-w-lg">
                      <h4 className="text-lg text-neutral-900 transition-colors group-hover:text-neutral-600">
                        {item.name}
                      </h4>

                      <p className="mt-1 font-sans text-sm italic text-neutral-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-neutral-600">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
