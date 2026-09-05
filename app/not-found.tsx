import Link from "next/link";
import SectionMonogram from "@/components/ui/SectionMonogram";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#11100e] px-6 py-20 text-[#f4f0e8]">
      <SectionMonogram letter="L" />

      <div className="site-container relative z-10 mx-auto w-full">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#a58d6d]">
              Erreur 404
            </p>

            <h1 className="max-w-3xl text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl">
              Cette table
              <br />
              n&apos;existe pas.
            </h1>

            <p className="mt-8 max-w-md font-sans text-sm leading-6 text-[#aaa197]">
              La page que vous recherchez semble avoir quitté la carte. Revenez
              à l&apos;accueil et poursuivez l&apos;expérience MEDUSA.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 border border-[#f4f0e8]/30 px-6 py-4 text-[10px] uppercase tracking-[0.24em] transition-all duration-300 hover:bg-[#f4f0e8] hover:text-[#171512]"
              >
                Retour à l&apos;accueil
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/#menu"
                className="text-[10px] uppercase tracking-[0.22em] text-[#a58d6d] underline underline-offset-4"
              >
                Voir la carte
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[520px]">
            <span
              aria-hidden="true"
              className="font-display select-none text-[150px] leading-none text-[#f4f0e8]/[0.05] sm:text-[220px] lg:text-[320px]"
            >
              404
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-px w-36 bg-[#a58d6d]/40 sm:w-52" />
            </div>

            <p className="absolute bottom-6 right-0 text-[9px] uppercase tracking-[0.28em] text-[#7c746b]">
              MEDUSA · Paris
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.24em] text-[#6f675f]">
          <span>Page introuvable</span>
          <span>404</span>
        </div>
      </div>
    </main>
  );
}
