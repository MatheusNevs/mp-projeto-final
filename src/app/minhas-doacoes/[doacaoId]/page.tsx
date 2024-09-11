import { redirect } from "next/navigation";
import { MapComponent } from "~/app/_components/map";
import { api, HydrateClient } from "~/trpc/server";

export default async function DoacaoPage({
  params: { doacaoId },
}: {
  params: { doacaoId: string };
}) {
  const donate = await api.donate.getDonate({ id: doacaoId });

  if (!donate) return redirect("/minhas-doacoes");

  const lastLocationIndex = donate.Location.length - 1;
  // const lastLocationIndex = donate ? donate?.Location.length - 1 : 0;

  return (
    <HydrateClient>
      <main className="flex w-screen flex-col items-center justify-center pt-16">
        <h1>Pagina de doacao</h1>
        <ul>
          <li>Descricao: {donate?.description}</li>
        </ul>
        <div className="size-96">
          <MapComponent
            lat={donate?.Location[lastLocationIndex]?.lat ?? undefined}
            lng={donate?.Location[lastLocationIndex]?.lng ?? undefined}
          />
        </div>
      </main>
    </HydrateClient>
  );
}
