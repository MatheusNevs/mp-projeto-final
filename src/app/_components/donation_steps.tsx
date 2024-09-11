import React from "react";
import { LuScanFace, LuPencilLine, LuQrCode } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { FiCamera } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";
import Image from "next/image";

const steps = [
  { icon: <LuScanFace />, text: "Faça login no sistema" },
  { icon: <GoGift />, text: "Inicie uma doação" },
  { icon: <FiCamera />, text: "Insira uma foto com os produtos que vai doar" },
  { icon: <LuPencilLine />, text: "Digite uma mensagem de carinho" },
  { icon: <LuQrCode />, text: "Acompanhe sua doação via QRCode" },
  {
    icon: <SlPicture />,
    text: "Receba uma foto quando sua doação for entregue",
  },
];

const DonationSteps: React.FC = () => {
  return (
    <div className="bg-MarromClarinho relative mx-auto mt-4 flex max-w-xl flex-col items-center justify-center rounded-2xl p-4 md:p-8">
      <ol className="space-y-2 pl-2 text-center md:space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className="text-Cinza flex items-center text-xs sm:text-sm md:text-lg"
          >
            {React.cloneElement(step.icon, {
              className: "text-Verde mr-2 md:mr-4 md:text-2xl",
            })}
            {step.text}
          </li>
        ))}
      </ol>
      <Image
        width={500}
        height={500}
        src="/image.svg"
        alt="Guirlanda Esquerda"
        className="absolute bottom-0 left-0 size-10 -translate-x-1/2 translate-y-1/2 transform sm:h-12 sm:w-12 md:h-20 md:w-20"
      />
      <Image
        width={500}
        height={500}
        src="/image.svg"
        alt="Guirlanda Direita"
        className="absolute bottom-0 right-0 size-10 translate-x-1/2 translate-y-1/2 transform sm:h-12 sm:w-12 md:h-20 md:w-20"
      />
    </div>
  );
};

export default DonationSteps;
