import SectionMonogram from "@/components/ui/SectionMonogram";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
    >
      <div className="site-container relative">
        <SectionMonogram letter="M" />

        <div className="relative z-10">
          <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b]">
            <span>MEDUSA</span>
            <span>01</span>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
              Une cuisine guidée
              <br />
              par le produit,
              <br />
              le feu et les saisons.
            </h2>

            <p className="mt-10 max-w-md text-sm leading-6 text-[#6f675f]">
              Une expérience pensée autour de produits choisis avec exigence,
              travaillés avec précision et servis dans une atmosphère intime.
            </p>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-[#171512]/10 pt-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7c746b]">
              Découvrir
            </span>

            <span className="font-display text-3xl text-[#7c746b]">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
