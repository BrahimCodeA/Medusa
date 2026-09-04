"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY >= window.innerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          isPastHero
            ? "bg-gradient-to-b from-[#12110f]/80 via-[#12110f]/60 to-transparent backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="grid grid-cols-3 items-center px-5 py-5 text-[#f4f0e8]">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex w-fit cursor-pointer flex-col gap-1.5"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          <a
            href="/"
            className="justify-self-center font-display text-3xl tracking-[0.16em]"
          >
            <Image
              src="/logoMedusa.png"
              alt="Logo MEDUSA"
              width={120}
              height={40}
              className="h-auto w-full object-contain"
              priority
            />
          </a>

          <a
            href="#reservation"
            className="justify-self-end border border-[#f4f0e8]/70 px-3 py-2 text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-[#f4f0e8] hover:text-[#171512]"
          >
            Réserver
          </a>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
