import SectionMonogram from "@/components/ui/SectionMonogram";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f0e8] py-28 text-[#171512]"
    >
      <SectionMonogram letter="C" />

      <div className="site-container relative z-10">
        <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#7c746b]">
          <span>05</span>
          <span>Contact</span>
        </div>

        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
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
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
