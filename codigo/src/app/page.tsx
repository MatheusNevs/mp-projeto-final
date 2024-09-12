import DonationButtons from "./_components/donation_buttons";
import DonationSteps from "./_components/donation_steps";

const PaginaInicial = () => {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/natal.svg')",
      }}
    >
      <section className="mt-12 flex flex-grow flex-col items-center justify-center space-y-8">
        <h1 className="mb-48 mt-40 text-center font-irish-grover text-6xl text-white">
          Doações <br /> Natalinas
        </h1>
        <DonationButtons />
        <DonationSteps />
      </section>
      <footer className="flex items-center justify-center pb-8 pt-20 text-center text-sm font-semibold text-white">
        <span>Desenvolvido por &#123; Struct &#125;</span>
      </footer>
    </main>
  );
};

export default PaginaInicial;
