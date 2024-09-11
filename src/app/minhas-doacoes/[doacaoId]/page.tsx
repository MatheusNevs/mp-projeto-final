import { MapComponent } from "~/app/_components/map";

export default function DoacaoPage({
  params: { doacaoId },
}: {
  params: { doacaoId: string | string[] };
}) {
  console.log(doacaoId);
  return (
    <main className="flex w-screen flex-col items-center justify-center pt-16">
      <h1>Pagina de doacao</h1>
      <div className="size-96">
        <MapComponent />
      </div>
    </main>
  );
}
