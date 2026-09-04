"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RestaurantInfo() {
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
      id="restaurant"
      className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-6 top-16 font-display text-[220px] leading-none text-[#171512]/[0.025] transition-all duration-1000 md:text-[320px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        R
      </span>

      <div className="site-container relative z-10">
        <div className="mb-14 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b]">
          <span>03</span>
          <span>Le restaurant</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
            <Image
              src="/hero.jpeg"
              alt="Salle du restaurant MEDUSA"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>

          <div>
            <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Une table,
              <br />
              une lumière,
              <br />
              une atmosphère.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-6 text-[#6f675f]">
              MEDUSA accueille ses convives dans un cadre intime et
              contemporain, pensé pour les dîners, les rendez-vous et les
              longues soirées.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[#171512]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
              Adresse
            </p>
            <p className="mt-3 font-display text-xl">Paris</p>
            <p className="mt-1 text-sm text-[#6f675f]">
              11 rue de Medusa, 75015
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
              Horaires
            </p>
            <p className="mt-3 font-display text-xl">19h — 01h</p>
            <p className="mt-1 text-sm text-[#6f675f]">Du mardi au dimanche</p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
              Réservation
            </p>
            <p className="mt-3 font-display text-xl">Recommandée</p>
            <p className="mt-1 text-sm text-[#6f675f]">
              En ligne ou par téléphone
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
              Contact
            </p>

            <p className="mt-3 font-display text-xl">
              01 00 00 00 00 - medusa@contact.fr
            </p>

            <a
              href="#reservation"
              className="mb-6 mt-3 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
            >
              Réserver une table
            </a>
          </div>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            src="TON_URL_GOOGLE_MAPS_ICI"
            title="Localisation du restaurant MEDUSA"
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
