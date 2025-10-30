import { Button } from "../ui/button";

export function ButtonDetail() {
  return (
    <Button className="rounded-full bg-[#567471] hover:bg-[#567471] px-8 py-8 font-manrope text-[22px] hover:scale-105 transition-all duration-300">
      Selengkapnya
      <img src="/image/button-arrow.png" alt="Logo" loading="lazy" />
    </Button>
  );
}
