import Image from "next/image";
import { api, HydrateClient } from "~/trpc/server";
import { ItemDoacao } from "../_components/item_doacoes";

export default async function MinhasDacoes() {
  const donates = await api.donate.getDonates();

  return (
    <HydrateClient>
      <main className="flex h-svh w-screen flex-col items-center justify-center gap-2 bg-[url('/fundologin.png')] bg-contain bg-center bg-repeat">
        <Image
          src={"/frame.png"}
          className="size-[350px]"
          alt="frame"
          width={1000}
          height={1000}
        />
        <h1 className="font-irish-grover text-4xl text-white drop-shadow-[0_0_3px_rgba(0,0,0,1)]">
          Minhas Doações
        </h1>
        <ul className="no-scrollbar mb-5 flex h-full w-screen flex-col items-center overflow-y-scroll">
          {donates.map((item, index) => (
            <li key={index}>
              <ItemDoacao doacao={item} />
            </li>
          ))}
        </ul>
      </main>
    </HydrateClient>
  );
}
