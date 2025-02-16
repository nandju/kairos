import { Marquee } from "@/components/magicui/marquee";
import { Avatar } from "@nextui-org/react";


const reviews = [
    {
      name: "Aminata Diallo",
      username: "@aminata",
      body: "Un service exceptionnel ! Les chauffeurs sont professionnels et les véhicules toujours impeccables.",
      img: "https://i.pravatar.cc/150?u=aminata.diallo",
    },
    {
      name: "Karim Traoré",
      username: "@karim",
      body: "Réserver une voiture n’a jamais été aussi simple. Kairos est devenu mon premier choix pour mes déplacements.",
      img: "https://i.pravatar.cc/150?u=karim.traore",
    },
    {
      name: "Sophie N’Guessan",
      username: "@sophie",
      body: "J’adore la ponctualité des chauffeurs et la qualité du service. Toujours un trajet agréable avec Kairos !",
      img: "https://i.pravatar.cc/150?u=sophie.nguessan",
    },
    {
      name: "Moussa Konaté",
      username: "@moussa",
      body: "Des voitures de luxe à des prix abordables, c'est exactement ce qu'il me fallait pour mes déplacements professionnels.",
      img: "https://i.pravatar.cc/150?u=moussa.konate",
    },
    {
      name: "Fatoumata Sidibé",
      username: "@fatoumata",
      body: "Service client au top ! En cas de besoin, l’équipe Kairos est toujours disponible et réactive.",
      img: "https://i.pravatar.cc/150?u=fatoumata.sidibe",
    },
    {
      name: "Jean-Baptiste Kouakou",
      username: "@jeanbaptiste",
      body: "Voyager avec Kairos, c’est l’assurance d’un trajet confortable et sécurisé. Je recommande à 100% !",
      img: "https://i.pravatar.cc/150?u=jeanbaptiste.kouakou",
    },
  ];
  


const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="shadow-lg rounded-xl p-6 bg-white dark:bg-gray-700">
        <p className="text-center text-gray-600 dark:text-white text-sm">
          {body}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Avatar src={img} className="mb-2" />
        <p className="text-black dark:text-white">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{username}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="bg-gray-100 relative flex flex-col items-center justify-center w-full overflow-hidden py-20 px-4 md:px-10 lg:px-20">
  {/* Titre et sous-titre */}
  <div className="flex flex-col items-center justify-center text-center gap-6 mb-8">
    <h2 className="text-lg font-bold text-primary">
      Témoignages
    </h2>
    <p className="text-2xl mt-2 text-secondary">
      voici ce que nos clients pensent de nous
    </p>
  </div>

  {/* Témoignages */}
  <div className="w-full">
    <Marquee pauseOnHover className="[--duration:20s]">
      {firstRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
  </div>

  {/* Suppression des effets de gradient */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
</div>

  );
}