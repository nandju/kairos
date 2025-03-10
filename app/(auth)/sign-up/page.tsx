"use client";

// import { Register } from "@/actions/register";
import { Button } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat 
       sm:bg-[url('/assets/images/backgrounds/2.png')] 
        bg-[url('/assets/images/illustrations/auth/bg-auth.png')]">
      <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-8 bg-[#1A1A1A]/80 rounded-2xl p-8">
        {/* Section gauche avec l'image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="/assets/images/illustrations/auth/bg-auth.png"
            alt="picture-left"
            className="w-full h-full max-w-md rounded-2xl object-cover lg:object-contain"
          />
        </div>

        {/* Section droite avec le formulaire */}
        <div className="bg-[#222] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Inscription</h2>

          <form
            id="signupForm"
            className="space-y-4"
            
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Numéro de téléphone</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">+221</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{9}"
                  placeholder="77 XXX XX XX"
                  className="w-full pl-14 pr-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Format: 77 XXX XX XX</p>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Mot de passe</label>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-400 mt-1">Minimum 8 caractères</p>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                required
                minLength={8}
                className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-2 px-4 bg-secondary text-white rounded-lg transition-colors"
            >
              Créer un compte
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#222] text-gray-400">ou continuez avec</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
            <button
                type="button"
                className="flex items-center justify-center p-2 border border-gray-600 rounded-lg hover:bg-[#333]"
            >
                <Linkedin className="w-5 h-5 text-blue-500" />
            </button>
            <button
                type="button"
                className="flex items-center justify-center p-2 border border-gray-600 rounded-lg hover:bg-[#333]"
            >
                <Instagram className="w-5 h-5 text-red-500" />
            </button>
            <button
                type="button"
                className="flex items-center justify-center p-2 border border-gray-600 rounded-lg hover:bg-[#333]"
            >
                <Facebook className="w-5 h-5 text-blue-500" />
            </button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-secondary hover:text-red-300">
                Se connecter
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
