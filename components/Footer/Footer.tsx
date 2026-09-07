import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-[#11100e] text-[#f4f0e8]"
    >
      <div className="site-container pt-20 md:pt-28">
        <a
          href="/"
          className="justify-self-center font-display text-3xl tracking-[0.16em]"
        >
          <Image
            src="/logoMedusa.png"
            alt="Logo MEDUSA"
            width={420}
            height={40}
            className="h-auto w-full object-contain"
            priority
          />
        </a>
        {/* Intro */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.28em] text-[#9b8568]">
              MEDUSA · Paris
            </p>

            <p className="font-display text-3xl leading-tight sm:text-4xl">
              Une table. Une lumière.
              <br />
              Une nuit à Paris.
            </p>
          </div>

          <a
            href="#reservation"
            className="group flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.25em]"
          >
            <span className="border-b border-[#f4f0e8]/50 pb-2 transition-colors group-hover:border-[#f4f0e8]">
              Réserver une table
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Informations */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#9b8568]">
              Navigation
            </p>

            <nav className="flex flex-col items-start gap-3 text-sm text-[#b9b1a7]">
              <a
                href="#manifesto"
                className="transition-colors hover:text-white"
              >
                Manifesto
              </a>

              <a href="#menu" className="transition-colors hover:text-white">
                La carte
              </a>

              <a
                href="#restaurant"
                className="transition-colors hover:text-white"
              >
                Le restaurant
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#9b8568]">
              Restaurant
            </p>

            <div className="space-y-1 text-sm leading-6 text-[#b9b1a7]">
              <p>11 rue de Medusa</p>
              <p>75006 Paris</p>
            </div>
          </div>

          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#9b8568]">
              Horaires
            </p>

            <div className="space-y-1 text-sm leading-6 text-[#b9b1a7]">
              <p>Mardi — Dimanche</p>
              <p>19h — 01h</p>
            </div>
          </div>

          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#9b8568]">
              Contact
            </p>

            <div className="flex flex-col items-start gap-2 text-sm text-[#b9b1a7]">
              <a
                href="tel:+33100000000"
                className="transition-colors hover:text-white"
              >
                01 00 00 00 00
              </a>

              <a
                href="mailto:medusa@contact.fr"
                className="transition-colors hover:text-white"
              >
                medusa@contact.fr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 text-[9px] uppercase tracking-[0.2em] text-[#756e66] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/"
              className="transition-colors hover:text-[#f4f0e8]"
              target="_blank"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.tiktok.com/"
              className="transition-colors hover:text-[#f4f0e8]"
              target="_blank"
            >
              TikTok ↗
            </a>
          </div>

          <p>© 2026 MEDUSA</p>

          <p>Paris · France</p>
        </div>
      </div>
    </footer>
  );
}
