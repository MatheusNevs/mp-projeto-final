export function ItemDoacao({doacao}:{doacao: {status:string, status_cor:string, criacao_hora:string, criacao_data:string, descricao:string}}) {

    return (
        <div className="flex bg-white my-2 w-[330px] h-fit rounded-lg p-2 mb-4 drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]">
            <div className="pl-2">
                <h2 className="font-irish-grover text-md">Status</h2>
                <h2 className={`font-irish-grover text-md text-[${doacao.status_cor}] mb-2`}>{doacao.status}</h2>
                <h2 className="font-irish-grover text-md">Momento da Criação</h2>
                <h2 className="font-irish-grover text-md text-[#348140] mb-2">{doacao.criacao_hora} do dia {doacao.criacao_data}</h2>
                <h2 className="font-irish-grover text-md">Descrição da Doação</h2>
                <p className="font-irish-grover text-md text-[rgba(0,0,0,0.5)] mb-3">{doacao.descricao}</p>
                <div className="w-full flex justify-end"><button><img src="/qrcode_button.svg"/></button></div>
            </div>
            
        </div>
    )
}