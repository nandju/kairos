"use client";
// import { LoginFun } from "@/actions/login";
import { Button } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat 
        sm:bg-[url('/assets/images/backgrounds/Kairos_Plan_travail.png')] 
        bg-[url('/assets/images/illustrations/auth/3.png')]"
    >
      <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-8 bg-[#1A1A1A]/80 rounded-2xl p-8">
        <div className="hidden md:flex items-center justify-center">
          <img
            src="/assets/images/illustrations/auth/2.png"
            alt="picture-left"
            className="w-full h-[500px] max-w-md rounded-2xl object-contain"
          />
        </div>

        <div className="bg-[#222] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Connexion</h2>

          <form id="loginForm" method="POST" className="space-y-4">
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
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <a href="/forgot-password" className="text-xs text-secondary hover:text-red-300 mt-1 block text-right">
                Mot de passe oublié ?
              </a>
            </div>

            <Button type="submit" className="w-full py-2 px-4 bg-secondary text-white rounded-lg transition-colors">
              Se connecter
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
              Vous n&apos;avez pas encore de compte ? {" "}
              <a href="/sign-up" className="text-secondary hover:text-red-300">
                Créer un compte gratuitement
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
