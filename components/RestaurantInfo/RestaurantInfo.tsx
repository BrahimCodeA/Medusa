import Image from "next/image";

export default function RestaurantInfo() {
  return (
    <section id="restaurant" className="bg-[#f4f0e8] py-28 text-[#171512]">
      <div className="site-container">
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
            <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
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
              className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
