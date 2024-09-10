import React from 'react';
import { LuScanFace, LuPencilLine, LuQrCode } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { FiCamera } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";

const steps = [
  { icon: <LuScanFace />, text: "Faça login no sistema" },
  { icon: <GoGift />, text: "Inicie uma doação" },
  { icon: <FiCamera />, text: "Insira uma foto com os produtos que vai doar" },
  { icon: <LuPencilLine />, text: "Digite uma mensagem de carinho" },
  { icon: <LuQrCode />, text: "Acompanhe sua doação via QRCode" },
  { icon: <SlPicture />, text: "Receba uma foto quando sua doação for entregue" }
];

const DonationSteps: React.FC = () => {
  return (
    <div className="p-4 md:p-8 mt-4 bg-MarromClarinho rounded-2xl relative flex flex-col items-center justify-center max-w-xl mx-auto">
      <ol className="pl-2 space-y-2 md:space-y-4 text-center">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center text-xs font-irish-grover sm:text-sm md:text-lg text-Cinza">
            {React.cloneElement(step.icon, { className: "text-Verde mr-2 md:mr-4 md:text-2xl" })}
            {step.text}
          </li>
        ))}
      </ol>
      <img src="/image.svg" alt="Guirlanda Esquerda" className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 transform translate-y-1/2 -translate-x-1/2" />
      <img src="/image.svg" alt="Guirlanda Direita" className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 transform translate-y-1/2 translate-x-1/2" />
    </div>
  );
};

export default DonationSteps;
