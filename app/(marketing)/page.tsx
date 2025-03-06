import Cars from "@/components/home/cars/cars";
import Hero from "@/components/home/hero/hero";
import Howork from "@/components/home/howork/howork";
import Service from "@/components/home/services/services";
import Speciality from "@/components/home/speciality/speciality";
import Testimonials from "@/components/home/testimonials/testimonials";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Howork/>
      <Service/>
      <Speciality/>
      <Testimonials/>
      <Cars/>
    </div>
  );
}

