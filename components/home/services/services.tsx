import React from "react";
import Image from "next/image";

// Interface pour les services
interface ServiceProps {
  title: string;
  description: string;
  price: string;
  details?: string;
  features: string[];
  image: string;
  color: string;
}

// Composant de carte de service
const ServiceCard = ({ title, description, price, details, features, image, color }: ServiceProps) => (
  <div className="rounded-lg border p-6 flex flex-col h-full">
    <div className="mb-4">
    <div className={`w-auto h-48 flex items-center justify-center rounded-full ${color}`}>
      <Image
        src={image}
        alt={title}
        width={192} // Ajuste selon tes besoins
        height={192} // Ajuste selon tes besoins
        className="w-full h-full object-contain rounded-full"
      />
    </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="font-bold">{price}</div>
        {details && <div className="text-sm text-gray-500">{details}</div>}
      </div>
    </div>
    <div className="mt-auto">
      <div className="text-sm font-medium mb-3">Pourquoi choisir ce service ?</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-green-500 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Composant principal affichant tous les services
export default function Service() {
  const services: ServiceProps[] = [
    {
      title: "Transferts Aéroport",
      description: "Pour vos déplacements sans stress vers ou depuis l'AIBD.",
      price: "Transfert Simple : 25 000 FCFA",
      details: "Aller-Retour : 40 000 FCFA",
      features: [
        "Confort et Sécurité : Véhicules entretenus et chauffeurs qualifiés.",
        "Fiabilité : Ponctualité garantie pour ne pas manquer vos vols.",
        "Sérénité : Que ce soit une arrivée ou un départ, nous nous occupons de tout pour vous !",
      ],
      color: "bg-transparent",
      image: "/assets/images/illustrations/reservations/1.png", // Remplace avec l'image appropriée
    },
    {
      title: "Mise À Disposition À Dakar",
      description: "La flexibilité pour tous vos besoins dans la capitale !",
      price: "Tarif Horaire : 10 000 FCFA",
      details: "À partir de 3 heures : 8 000 FCFA / heure",
      features: [
        "Flexibilité : Idéal pour des rendez-vous successifs ou des déplacements spontanés.",
        "Confort Optimal : Chauffeur dédié pour la durée souhaitée.",
        "Découverte de Dakar : Partez à la découverte de la ville avec l'aide d'un guide local.",
      ],
      color: "bg-transparent",
      image: "/assets/images/illustrations/reservations/2.png", // Remplace avec l'image appropriée
    },
    {
      title: "Mise À Disposition en Région",
      description: "Pour vos trajets vers les régions du Sénégal avec confort et sécurité.",
      price: "Demi-journée ou journée complète sur mesure (nous contacter)",
      details: "Carburant : À la charge du client",
      features: [
        "Flexibilité : Parfait pour des voyages d'affaires ou des excursions.",
        "Connaissance des Routes : Nos chauffeurs connaissent les meilleures routes et destinations.",
        "Personnalisation : Possibilité d'organiser des trajets selon vos besoins.",
      ],
      color: "bg-transparent",
      image: "/assets/images/illustrations/reservations/3.png", // Remplace avec l'image appropriée
    },
  ];

  return (
    <div id="service" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-lg font-bold text-center mb-4 text-primary py-2">
        Reservations & Services Disponibles
      </h2>
      <div className="text-secondary text-center text-2xl font-black mb-8">Réservez votre service en un clic et profitez d&apos;une expérience fluide et rapide !</div>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="my-8">
      </div>
    </div>
  );
}
