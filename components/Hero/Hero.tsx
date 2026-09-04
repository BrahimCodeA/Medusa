import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/hero.jpeg"
        alt="Intérieur du restaurant MEDUSA"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenu */}
      <div className="site-container relative z-10 flex flex-col items-center text-center text-[#f4f0e8]">
        {/* Logo */}
        <div className="w-full max-w-4xl">
          <Image
            src="/medusa-logo-hero.png"
            alt="Logo MEDUSA"
            width={1200}
            height={420}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* CTA */}
        <a
          href="#reservation"
          className="group mt-8 flex items-center gap-10 border border-[#f4f0e8]/70 px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-[#f4f0e8] hover:text-[#171512]"
        >
          Réserver une table
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Informations */}
        <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#f4f0e8]/65">
          <span>Paris</span>
          <span>·</span>
          <span>19h — 01h</span>
        </div>
      </div>
    </section>
  );
}
