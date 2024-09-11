import Link from "next/link";
import React from "react";

const DonationButtons: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link
        href={"/doar"}
        className="w-full rounded-full bg-Verde px-8 py-4 text-sm font-medium text-white shadow-lg"
      >
        Fazer Doação
      </Link>
      <Link
        href={"/minhas-doacoes"}
        className="w-full rounded-full bg-Vermelho px-8 py-4 text-sm font-medium text-white shadow-lg"
      >
        Minhas Doações
      </Link>
    </div>
  );
};

export default DonationButtons;
