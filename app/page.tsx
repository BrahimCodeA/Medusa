import Hero from "@/components/Hero/Hero";
import Manifesto from "@/components/Manifesto/Manifesto";
import DishCarousel from "@/components/DishCarousel/DishCarousel";
import RestaurantInfo from "@/components/RestaurantInfo/RestaurantInfo";
import Menu from "@/components/Menu/Menu";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <DishCarousel />
      <Menu />
      <RestaurantInfo />
      <Contact />
    </>
  );
}
