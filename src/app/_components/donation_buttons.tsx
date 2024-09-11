import React from 'react';

const DonationButtons: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <button className="w-full px-8 py-4 text-sm font-medium text-white bg-Verde rounded-full shadow-lg ">
        Fazer Doação
      </button>
      <button className="w-full px-8 py-4 text-sm font-medium text-white bg-Vermelho rounded-full shadow-lg">
        Minhas Doações
      </button>
    </div>
  );
};

export default DonationButtons;

