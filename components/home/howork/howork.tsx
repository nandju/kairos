"use client";

import { Calendar, MapPin, Car } from "lucide-react";

export default function HowWork() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-col gap-6 py-20 items-center text-center">
        <div className="text-primary text-lg font-bold">PROCESSUS DE RÉSERVATION</div>
        <div className="text-secondary text-2xl font-black pb-10">COMMENT ÇA MARCHE ?</div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 w-full">
          
          {/* Choisissez l'emplacement */}
          <div className="flex flex-col gap-4 items-center text-center max-w-sm">
            <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-0 md:rotate-[-10deg]">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-lg font-semibold">Choisissez l'emplacement</div>
            <p className="text-gray-600 text-sm hidden md:block">
              Sélectionnez votre lieu de prise en charge pour que notre chauffeur puisse vous rejoindre rapidement.
            </p>
          </div>

          {/* Date de prise en charge */}
          <div className="flex flex-col gap-4 items-center text-center max-w-sm">
            <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-0 md:rotate-[5deg]">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="text-lg font-semibold">Date de prise en charge</div>
            <p className="text-gray-600 text-sm hidden md:block">
              Indiquez la date et l'heure souhaitées pour organiser votre trajet en toute sérénité.
            </p>
          </div>

          {/* Réservez votre voiture */}
          <div className="flex flex-col gap-4 items-center text-center max-w-sm">
            <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-0 md:rotate-[-10deg]">
              <Car className="w-8 h-8" />
            </div>
            <div className="text-lg font-semibold">Réservez votre voiture</div>
            <p className="text-gray-600 text-sm hidden md:block">
              Confirmez votre réservation et profitez d’un transport fiable et confortable avec nos chauffeurs professionnels.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
