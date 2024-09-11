import { NextPage } from "next";
import DonationButtons from "../_components/donation_buttons";
import DonationSteps from "../_components/donation_steps";

const PaginaInicial: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-center relative overflow-x-hidden"
         style={{ 
           backgroundImage: "url('/natal.svg')", 
           backgroundPosition: 'center', 
           backgroundRepeat: 'no-repeat', 
           backgroundSize: 'cover', // Cobre a tela toda
         }}>
      <main className="flex flex-col items-center justify-center flex-grow mt-12 space-y-8">
        <h1 className="text-6xl text-center text-white mb-48 mt-40 font-irish-grover">
          Doações <br /> Natalinas
        </h1>
        <DonationButtons />
        <DonationSteps />
      </main>
      <footer className="p-6 text-center font-irish-grover text-sm text-white">
        Desenvolvido por &#123; Struct &#125;
      </footer>
    </div>
  );
};

export default PaginaInicial;

