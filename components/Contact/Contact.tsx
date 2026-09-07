import SectionMonogram from "@/components/ui/SectionMonogram";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
    >
      <SectionMonogram letter="C" />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b]">
          <span>05</span>
          <span>Contact</span>
        </div>

        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Gauche */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#8b7455]">
              Votre soirée commence ici
            </p>

            <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Une table
              <br />
              vous attend.
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-6 text-[#6f675f]">
              Une demande particulière, un dîner en groupe ou simplement
              l&apos;envie de réserver ? Écrivez-nous.
            </p>

            <div className="mt-12 border-t border-[#171512]/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
                Réservation directe
              </p>

              <a
                href="tel:+33100000000"
                className="mt-3 block font-display text-2xl transition-opacity hover:opacity-60"
              >
                01 00 00 00 00
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]"
                >
                  Nom
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  className="mt-3 w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.fr"
                  className="mt-3 w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
                />
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]"
                >
                  Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  className="mt-3 w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors focus:border-[#171512]"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]"
                >
                  Convives
                </label>

                <select
                  id="guests"
                  name="guests"
                  defaultValue=""
                  className="mt-3 w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors focus:border-[#171512]"
                >
                  <option value="" disabled>
                    Nombre de personnes
                  </option>
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes</option>
                  <option value="7+">7 personnes ou plus</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[9px] uppercase tracking-[0.25em] text-[#8b7455]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Une demande particulière ?"
                className="mt-3 w-full resize-none border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-5 text-[10px] uppercase tracking-[0.25em]"
            >
              <span className="border-b border-[#171512] pb-2">
                Envoyer la demande
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
