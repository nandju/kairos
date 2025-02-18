import Image from "next/image";
import { Headset, Clock, MapPin } from "lucide-react";

export default function Speciality() {
  return (
    <div className="bg-gray-100">
    <div className=" p-5 mt-5 mx-auto lg:max-w-6xl xl:max-w-7xl">
      {/* Titre */}
      <div className="max-w-2xl mx-auto text-center py-5 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <h2 className="text-lg font-bold text-primary">
          Meilleurs services et voitures de luxe
        </h2>
        <p className="text-2xl mt-2 text-secondary">
          Profitez d&apos;une expérience de réservation rapide et efficace avec des véhicules haut de gamme et un service client dédié.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="max-w-2xl mx-auto flex flex-col md:max-w-3xl lg:max-w-5xl lg:grid lg:grid-cols-3 xl:max-w-6xl">
        {/* Image à gauche */}
        <div className="h-full lg:col-span-2">
          <Image
            src="/assets/images/illustrations/no-background/picture_8-removebg-preview.png"
            alt="Voiture de luxe"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Services à droite */}
        <div className="col-span-1">
          <ul className="flex flex-col justify-between gap-y-6 py-5 lg:my-16">
            {/* Service client */}
            <li>
              <div className="text-center lg:flex lg:text-start lg:gap-4 lg:items-start">
                <div className="bg-primary w-12 h-12 rounded-md flex items-center justify-center p-3 mx-auto lg:mx-0">
                  <Headset size={24} className="text-secondary" />
                </div>
                <div>
                  <h5 className="text-[14.5px] font-semibold text-primary">Support client</h5>
                  <p className="text-xs text-secondary">
                    Assistance 24/7 pour répondre à toutes vos questions et garantir une expérience fluide.
                  </p>
                </div>
              </div>
            </li>

            {/* Réservation rapide */}
            <li>
              <div className="text-center lg:flex lg:text-start lg:gap-4 lg:items-start">
                <div className="bg-primary w-12 h-12 rounded-md flex items-center justify-center p-3 mx-auto lg:mx-0">
                  <Clock size={24} className="text-secondary" />
                </div>
                <div>
                  <h5 className="text-[14.5px] font-semibold text-primary">Réservation rapide</h5>
                  <p className="text-xs text-secondary">
                    Réservez votre voiture en quelques clics et profitez d’un service instantané.
                  </p>
                </div>
              </div>
            </li>

            {/* Large couverture géographique */}
            <li>
              <div className="text-center lg:flex lg:text-start lg:gap-4 lg:items-start">
                <div className="bg-primary w-12 h-12 rounded-md flex items-center justify-center p-3 mx-auto lg:mx-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h5 className="text-[14.5px] font-semibold text-primary">Présence nationale</h5>
                  <p className="text-xs text-secondary">
                    Nous couvrons plusieurs villes pour vous offrir un service accessible partout.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
