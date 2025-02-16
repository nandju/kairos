import Image from "next/image";

export default function Cars() {
  return (
    <div className="bg-gray-100 pb-10">
      {/* Conteneur principal */}
      <div className="container max-w-2xl mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5">
        {/* Section d'en-tête */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-primary mb-2">
            Louez des véhicules puissants <br /> pour toutes vos aventures
          </h2>
          <p className="text-2xl text-secondary">
            Avec Kairos, profitez de véhicules haut de gamme pour vos déplacements en ville ou vos escapades hors route.
            Confort, sécurité et performance sont au rendez-vous.
          </p>
        </div>

        {/* Section de texte */}
        <div className="text-center mt-10 mb-5 md:mb-8">
          <h1 className="text-5xl text-primary">VÉHICULES TOUT-TERRAIN</h1>
        </div>

        {/* Section d'image */}
        <div className="max-w-3xl mx-auto flex justify-center">
          <Image
            src="/assets/images/illustrations/no-background/Creative_Poster_Design-removebg-preview.png"
            alt="Véhicule tout-terrain"
            width={1000}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
