import SectionMonogram from "../ui/SectionMonogram";
import { menuItems } from "./menuItems";

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden px-6 py-24 md:px-20 site-container"
    >
      <SectionMonogram letter="S" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-2 font-sans text-sm tracking-widest text-neutral-500">
          03 · La carte
        </p>

        <h2 className="mb-16 text-4xl text-neutral-900 md:text-5xl">
          Une carte guidée
          <br />
          par les saisons.
        </h2>

        <div className="space-y-20">
          {menuItems.map((section) => (
            <div key={section.category}>
              <div className="mb-8 flex items-baseline gap-4 border-b border-neutral-300 pb-4">
                <span className="font-sans text-sm text-neutral-500">
                  {section.number}
                </span>

                <h3 className="text-2xl tracking-wide text-neutral-900">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-start justify-between gap-6"
                  >
                    <div className="max-w-lg">
                      <h4 className="text-lg text-neutral-900 transition-colors group-hover:text-neutral-600">
                        {item.name}
                      </h4>

                      <p className="mt-1 font-sans text-sm italic text-neutral-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-neutral-600">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 border-t border-neutral-300 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b7455]">
                Et bien plus encore
              </p>

              <p className="mt-2 font-sans text-sm text-neutral-500">
                Découvrez l&apos;ensemble de nos plats et de nos créations.
              </p>
            </div>

            <a
              href="/menu-medusa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-[#171512]"
            >
              <span className="border-b border-[#171512] pb-1">
                Voir la carte complète
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
