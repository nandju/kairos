import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-primary text-white p-6 gap-8">
      <div className="flex flex-row justify-stretch md:justify-between gap-12 border-b border-gray-700 px-6 pb-8">
        {/* Section Logo et Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="text-lg md:text-3xl font-bold">
            <Link href="/" className="hover:text-gray-300 dark:text-gray-800 transition-colors">
              KAIROS Cars
            </Link>
          </div>
          <div className="text-gray-300 dark:text-gray-800 text-sm leading-relaxed">
            L&apos;Art du Voyage, L&apos;Excellence à Chaque Trajet
          </div>
        </div>

        {/* Section Services */}
        <div className="hidden md:flex md:flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Menu</h3>
          <Link
            href="/"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/voyages"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Mes voyages
          </Link>
        </div>

        {/* Section Contact */}
        <div className="hidden md:flex md:flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Contact</h3>
          <div className="flex flex-col gap-3 text-gray-300 dark:text-gray-800">
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Téléphone :</span>
              <span>(+225) 22 22 22 22 22</span>
              <span>(+225) 22 22 22 22 22</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Adresse :</span>
              <span>Dakar, Singapour Senegal</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Adresse postale :</span>
              <span>21 BP 2241 Dakar 21</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Email :</span>
              <span>info@kairos-sen.com</span>
            </div>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Suivez-nous</h3>
          <div className="flex flex-wrap md:flex-col gap-4 items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </Link>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </Link>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center text-gray-300 dark:text-gray-800 pt-4 border-t border-gray-700">
        &copy; 2024 KAIROS cars. Tous droits réservés
      </div>
    </div>
  );
}