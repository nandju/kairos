"use client";

import Image from "next/image";
import { Button, Input, DateInput, Checkbox } from "@nextui-org/react";
import { Calendar, MapPin, Briefcase, User} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-10px)]">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/hero.png"
        alt="hero section"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute w-full h-full bg-black/25 px-4"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32 mb-4">
        <div className="relative flex items-start text-start justify-between p-10 mt-8 gap-20 max-w-5xl w-full ">
          {/* Partie gauche : Texte et formulaire */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-4xl font-bold text-white">Voyagez en toute sérénité</h2>
            <p className="text-gray-300 mt-3 text-lg">
              Réservez un chauffeur professionnel en quelques clics et profitez d’un trajet confortable et sécurisé.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <Input color="default" type="text" label="Nombre de passagers" className="w-full" startContent={<User className="w-5 h-5 text-gray-500" />}/>
              <Input color="default" type="text" label="Nombre de valises" className="w-full" startContent={<Briefcase className="w-5 h-5 text-gray-500" />}/>
              <DateInput granularity="second" label="Temps de reservation"  startContent={<Calendar className="w-5 h-5 text-gray-500" />}/>
              <Input color="default" type="text" label="Lieu de prise en charge" className="w-full" startContent={<MapPin className="w-5 h-5 text-gray-500" />} />
              <Checkbox className="text-white" defaultSelected>Paiement liquide</Checkbox>
            </div>

            <Button color="secondary" radius="full" className="mt-6 w-1/2 text-white p-6">
              Valider ma reservation
            </Button>
          </div>

          {/* Partie droite : Image */}
          <div className="w-1/2 hidden md:flex items-center justify-center">
            <Image
              src="/assets/images/illustrations/no-background/picture_1-removebg-preview.png"
              alt="Voiture Kairos"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
