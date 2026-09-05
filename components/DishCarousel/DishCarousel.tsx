"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DishLightbox from "./DishLightbox";
import { dishes } from "./dishes";
import SectionMonogram from "../ui/SectionMonogram";

export default function DishCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dishes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [selectedImage]);

  return (
    <>
      <section
        id="dishes"
        className="relative overflow-hidden bg-[#f4f0e8] py-20 md:py-28"
      >
        <SectionMonogram letter="R" />

        <div className="site-container relative z-10">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b7455]">
                02 · Signature
              </p>

              <h2 className="mt-3 text-4xl leading-none text-[#171512] md:text-5xl">
                Les assiettes MEDUSA
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#7c746b] md:block">
              Sélection du chef
            </span>
          </div>

          <div className="mx-auto max-w-3xl">
            <button
              onClick={() => setSelectedImage(dishes[current].src)}
              className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#12110f]"
            >
              <div className="relative h-[360px] w-full sm:h-[430px] md:h-[500px]">
                {dishes.map((dish, index) => (
                  <Image
                    key={dish.src}
                    src={dish.src}
                    alt={dish.alt}
                    fill
                    className={`absolute inset-0 object-cover transition-all duration-1000 ${
                      current === index
                        ? "scale-100 opacity-100"
                        : "scale-[1.02] opacity-0"
                    }`}
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                ))}
              </div>
            </button>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7c746b]">
                  0{current + 1} / 0{dishes.length}
                </p>

                <p className="mt-1 font-display text-xl text-[#171512]">
                  {dishes[current].alt}
                </p>
              </div>

              <div className="flex gap-2">
                {dishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Afficher la photo ${index + 1}`}
                    className={`h-[2px] cursor-pointer transition-all duration-500 ${
                      current === index
                        ? "w-8 bg-[#171512]"
                        : "w-4 bg-[#171512]/20"
                    }`}
                  />
                ))}
              </div>
            </div>
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
