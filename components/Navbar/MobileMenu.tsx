"use client";

import { navLinks } from "./nav-links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] flex min-h-screen flex-col bg-[#171512] px-6 py-6 text-[#f4f0e8] transition-all duration-300 ease-out ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-3"
        }`}
      >
        <span className="font-display text-3xl tracking-[0.16em]">MEDUSA</span>

        <button
          onClick={onClose}
          className="cursor-pointer text-sm uppercase tracking-[0.16em]"
        >
          Fermer
        </button>
      </div>

      <div
        className={`flex flex-1 flex-col justify-center transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-[#a9a298]">
          Navigation
        </p>

        <div className="flex flex-col">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline justify-between border-b border-[#3a3732] py-5 font-display text-4xl transition-opacity duration-300 hover:opacity-60"
            >
              <span>{link.label}</span>
              <span className="font-sans text-xs text-[#a9a298]">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`flex items-end justify-between border-t border-[#3a3732] pt-5 text-xs uppercase tracking-[0.14em] text-[#a9a298] transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <span>Paris</span>

        <a href="#reservation" onClick={onClose}>
          Réserver une table
        </a>
      </div>
    </div>
  );
}
