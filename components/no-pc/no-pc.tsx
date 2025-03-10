import React from 'react';
import { Construction, HardHat, User, Users } from 'lucide-react';
import Image from 'next/image'; // Importation du composant Image de Next.js

export default function NoPc() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/backgrounds/horizontale-k-2.png" // Le chemin de l'image
          alt="Background Image"
          layout="fill" // Remplir toute la zone de l'élément parent
          objectFit="cover" // Le fond doit couvrir l'intégralité du conteneur
          quality={100} // Qualité maximale de l'image
        />
      </div>
    </div>
  );
}