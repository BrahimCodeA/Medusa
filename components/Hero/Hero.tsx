import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/hero.jpeg"
        alt="Intérieur du restaurant MEDUSA"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </section>
  );
}
