type SectionMonogramProps = {
  letter?: string;
};

export default function SectionMonogram({
  letter = "M",
}: SectionMonogramProps) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-6 top-16 font-display text-[220px] leading-none text-[#171512]/[0.025] md:text-[320px]"
    >
      {letter}
    </span>
  );
}
