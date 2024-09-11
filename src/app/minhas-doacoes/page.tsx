import { ListaDoacoes } from "../_components/lista_doacoes";

export default function MinhasDacoes() {
    return (
        <main className="flex flex-col gap-2 justify-center items-center h-svh w-screen bg-[url('/fundologin.png')] bg-center bg-contain bg-repeat">
            <div className="w-[350px] mt-2"><img src="/frame.png"/></div>
            <h1 className="font-irish-grover text-4xl text-white mt-3 drop-shadow-[0_0_3px_rgba(0,0,0,1)]">Minhas Doações</h1>
            <div className="flex flex-col items-center w-[350px] h-full mb-5 overflow-y-scroll no-scrollbar">
                <ListaDoacoes/>
            </div>
        </main>
    )
}