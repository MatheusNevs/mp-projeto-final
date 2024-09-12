import { redirect } from "next/navigation";
import { CloudImage } from "~/app/_components/cloud-image";
import { MapComponent } from "~/app/_components/map";
import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";

export default async function DoacaoPage({
  params: { doacaoId },
}: {
  params: { doacaoId: string };
}) {
  const donate = await api.donate.getDonate({ id: doacaoId });

  if (!donate) return redirect("/minhas-doacoes");

  const lastLocationIndex = donate.Location.length - 1;

  return (
    <HydrateClient>
      <main className="flex w-screen flex-col items-center justify-center pt-16">
        <ul className="my-4 flex flex-col gap-2">
          <li>
            <span className="font-semibold">Descricao: </span>
            {donate.description}
          </li>
          <li>
            <span className="font-semibold">Momento de Criação: </span>
            {donate.createdAt.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Status: </span>
            {donate.status}
          </li>
        </ul>
        <div className="size-96">
          <MapComponent
            lat={donate.Location[lastLocationIndex]?.lat ?? undefined}
            lng={donate.Location[lastLocationIndex]?.lng ?? undefined}
          />
        </div>
        {donate.Image.map((image) => (
          <CloudImage
            key={image.id}
            alt="imagem da doacao"
            src={image.publicId}
          />
        ))}
        <form className="my-2">
          <Button>Atualizar para entregue</Button>
        </form>
      </main>
    </HydrateClient>
  );
}
