import Image from "next/image";
import Link from "next/link";

export function ItemDoacao({
  doacao,
}: {
  doacao: {
    Location: {
      id: string;
      local: string;
      lat: number | null;
      lng: number | null;
      userId: string;
      donateId: string;
    }[];
  } & {
    id: string;
    createdAt: Date;
    status: string;
    description: string;
    userId: string;
  };
}) {
  return (
    <Link
      href={`/minhas-doacoes/${doacao.id}`}
      className="my-2 mb-4 flex h-fit w-[330px] rounded-lg bg-white p-2 drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]"
    >
      <div className="pl-2">
        <h2 className="text-md font-irish-grover">Status</h2>
        <h2 className={`text-md mb-2 font-irish-grover`}>{doacao.status}</h2>
        <h2 className="text-md font-irish-grover">Momento da Criação</h2>
        <h2 className="text-md mb-2 font-irish-grover text-[#348140]">
          {doacao.createdAt?.toLocaleString()}
        </h2>
        <h2 className="text-md font-irish-grover">Descrição da Doação</h2>
        <p className="text-md mb-3 font-irish-grover text-[rgba(0,0,0,0.5)]">
          {doacao.description}
        </p>
        <button className="flex w-full justify-end">
          <Image
            src="/qrcode_button.svg"
            alt="qr code button"
            width={1000}
            height={1000}
          />
        </button>
      </div>
    </Link>
  );
}
