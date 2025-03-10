import { Button } from "@nextui-org/react";

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat 
        sm:bg-[url('/assets/images/backgrounds/3.png')] 
        bg-[url('/assets/images/illustrations/auth/bg-auth.png')]">
        
            <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-8 bg-[#1A1A1A]/80 rounded-2xl p-8">
                {/* Section gauche avec l'image */}
                <div className="hidden md:flex items-center justify-center">
                    <img
                        src="/assets/images/illustrations/auth/bg-auth.png"
                        alt="picture-left"
                        className="w-full h-full max-w-md rounded-2xl object-cover"
                    />
                </div>

                {/* Section droite avec le formulaire */}
                <div className="bg-[#222] rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Mot de passe oublié</h2>

                    <form id="loginForm" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Entrez votre email"
                                required
                                className="w-full px-4 py-2 bg-[#333] text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <p className="text-end text-sm text-gray-400 mt-6">
                                Vous n&apos;avez pas encore de compte ? <a href="/sign-up" className="text-secondary hover:text-red-300">Créer un compte gratuitement</a>
                            </p>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-2 px-4 bg-secondary text-white rounded-lg transition-colors"
                        >
                            Réinitialiser mot de passe
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#222] text-gray-400">
                                    ou continuez avec
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-sm text-gray-400 mt-6">
                            Vous vous rappelez de votre mot de passe ?{" "}
                            <a
                                href="/login"
                                className="text-secondary hover:text-red-300"
                            >
                                Se connecter
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
