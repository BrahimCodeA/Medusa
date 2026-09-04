import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Manifesto from "@/components/Manifesto/Manifesto";
import DishCarousel from "@/components/DishCarousel/DishCarousel";
import RestaurantInfo from "@/components/RestaurantInfo/RestaurantInfo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <DishCarousel />
      <RestaurantInfo />
    </main>
  );
}
