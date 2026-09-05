"use client";

import Image from "next/image";
import { useState } from "react";
import SectionMonogram from "@/components/ui/SectionMonogram";
import DishLightbox from "@/components/DishCarousel/DishLightbox";
import { restaurantImages } from "./restauImages";

export default function RestaurantInfo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="restaurant"
        className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
      >
        <SectionMonogram letter="R" />

        <div className="site-container relative z-10">
          <div className="mb-14 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b]">
            <span>04</span>
            <span>Le restaurant</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative pb-20 sm:pr-20">
              <button
                onClick={() => setSelectedImage(restaurantImages[0].src)}
                className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden"
              >
                <Image
                  src={restaurantImages[0].src}
                  alt={restaurantImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />

                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/70">
                  01
                </span>
              </button>

              {/* Petite photo gauche */}
              <button
                onClick={() => setSelectedImage(restaurantImages[1].src)}
                className="group absolute -bottom-2 left-6 z-20 h-32 w-28 cursor-zoom-in overflow-hidden border-4 border-[#f4f0e8] sm:h-40 sm:w-36"
              >
                <Image
                  src={restaurantImages[1].src}
                  alt={restaurantImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="150px"
                />
              </button>

              {/* Petite photo centrale */}
              <button
                onClick={() => setSelectedImage(restaurantImages[2].src)}
                className="group absolute -bottom-10 left-1/2 z-30 h-28 w-36 -translate-x-1/2 cursor-zoom-in overflow-hidden border-4 border-[#f4f0e8] sm:h-36 sm:w-48"
              >
                <Image
                  src={restaurantImages[2].src}
                  alt={restaurantImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="200px"
                />
              </button>

              {/* Petite photo droite */}
              <button
                onClick={() => setSelectedImage(restaurantImages[3].src)}
                className="group absolute -bottom-1 right-0 z-20 h-36 w-28 cursor-zoom-in overflow-hidden border-4 border-[#f4f0e8] sm:h-44 sm:w-36"
              >
                <Image
                  src={restaurantImages[3].src}
                  alt={restaurantImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="150px"
                />
              </button>
            </div>

            {/* Texte */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#8b7455]">
                L&apos;expérience
              </p>

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

              <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-[#8b7455]">
                Cliquez sur les images pour explorer
              </p>
            </div>
          </div>

          {/* Informations */}
          <div className="mt-24 grid gap-10 border-t border-[#171512]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
                Adresse
              </p>

              <p className="mt-3 font-display text-xl">Paris</p>

              <p className="mt-1 text-sm text-[#6f675f]">
                11 rue de Medusa, 75006
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
                Horaires
              </p>

              <p className="mt-3 font-display text-xl">19h — 01h</p>

              <p className="mt-1 text-sm text-[#6f675f]">
                Du mardi au dimanche
              </p>
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

              <p className="mt-3 font-display text-xl">01 00 00 00 00</p>

              <p className="mt-1 text-sm text-[#6f675f]">medusa@contact.fr</p>

              <a
                href="#reservation"
                className="mb-6 mt-3 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
              >
                Réserver une table
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative mt-12 h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              src="TON_URL_GOOGLE_MAPS"
              title="Localisation du restaurant MEDUSA"
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <DishLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
