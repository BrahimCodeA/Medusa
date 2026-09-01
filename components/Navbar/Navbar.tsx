"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[50]">
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
            MEDUSA
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
