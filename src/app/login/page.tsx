"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/fundologin.png')" }}
    >
      {/* Imagem "Doações Natalinas" posicionada no topo esquerdo */}
      <div className="absolute left-4 top-4 w-24 md:w-48">
        <Image
          src="/frame.png"
          alt="Doações Natalinas"
          width={300}
          height={100}
          className="h-auto w-full"
        />
      </div>

      {/* Container principal */}
      <div className="w-full max-w-xs space-y-4 rounded-xl bg-white p-6 text-center shadow-lg md:max-w-md md:space-y-6 md:p-8">
        {/* Imagem de "Login e Faça doações" */}
        <Image
          src="/login.png"
          alt="Login e Faça doações"
          width={300}
          height={80}
          className="mx-auto h-auto w-full max-w-[180px] md:max-w-[250px]" // Diminui ainda mais para telas menores
        />

        {/* Botão de login com Google */}
        <button
          className="mb-2 flex w-full items-center rounded-lg bg-gray-200 p-3 transition-colors duration-300 hover:bg-gray-300 md:p-4"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src="/google.png" width={24} height={24} alt="Google" />
          <span className="-ml-4 flex-grow text-center text-sm text-gray-700 md:text-lg">
            Google
          </span>
        </button>

        {/* Divisor */}
        <div className="relative my-4 flex items-center md:my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-xs text-gray-500 md:text-base">
            entre com sua conta
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
