"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-4" style={{ backgroundImage: "url('/fundologin.png')" }}>
      {/* Imagem "Doações Natalinas" posicionada no topo esquerdo */}
      <div className="absolute top-4 left-4 w-24 md:w-48">
        <Image
          src="/frame.png"
          alt="Doações Natalinas"
          width={300}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Container principal */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-xs md:max-w-md w-full text-center space-y-4 md:space-y-6">
        {/* Imagem de "Login e Faça doações" */}
        <Image
          src="/login.png"
          alt="Login e Faça doações"
          width={300}
          height={80}
          className="mx-auto w-full h-auto max-w-[180px] md:max-w-[250px]" // Diminui ainda mais para telas menores
        />

        {/* Botão de login com Google */}
        <button
          className="flex w-full items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-lg p-3 md:p-4 mb-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src="/google.png" width={24} height={24} alt="Google" className="mr-2 md:mr-4" />
          <span className="flex-grow text-sm md:text-lg text-gray-700 text-center">Google</span>
        </button>

        {/* Divisor */}
        <div className="relative flex items-center my-4 md:my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-xs md:text-base text-gray-500">ou continue como</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Botão de login com GitHub */}
        <button
          className="flex w-full items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-lg p-3 md:p-4"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          <Image src="/git.png" width={24} height={24} alt="GitHub" className="mr-2 md:mr-4" />
          <span className="flex-grow text-sm md:text-lg text-gray-700 text-center">Sign in with Github</span>
        </button>
      </div>
    </div>
  );
}
