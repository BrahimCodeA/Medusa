import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpeg"
        alt="Intérieur du restaurant MEDUSA"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <Image
          src="/medusa-logo-hero.png"
          alt="Logo MEDUSA"
          width={1200}
          height={420}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </section>
  );
}
