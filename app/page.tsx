import Hero from "@/components/home/hero/hero";
import Howork from "@/components/home/howork/howork";
import Speciality from "@/components/home/speciality/speciality";
import Service from "@/components/services/services";



export default function Home() {
  return (
    <div>
      <Hero/>
      <Howork/>
      <Service/>
      <Speciality/>
    </div>
  );
}

