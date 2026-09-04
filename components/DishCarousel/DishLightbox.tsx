"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface DishLightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function DishLightbox({ image, onClose }: DishLightboxProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-6 top-6 z-10 flex size-11 cursor-pointer items-center justify-center border border-white/30 text-white transition-colors duration-300 hover:bg-white hover:text-black"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      <div
        className="relative h-[75vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image}
          alt="Plat MEDUSA agrandi"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
