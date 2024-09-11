import { ItemDoacao } from "./item_doacoes";

export function ListaDoacoes() {
    //so pra fazer a lista mais facil
    const doacao = {
        status:"A Caminho",
        status_cor:"#FBBC05",
        criacao_hora:"11:59",
        criacao_data:"23/11",
        descricao:"Lorem ipsum dolor nao sei o que nao sei o que la"
    }

    //colocar integração com o back
    const doacoes = [doacao, doacao, doacao, doacao]

    return (
        <div>
            <ul>
                {doacoes.map((item, index)=>(<li key={index}><ItemDoacao doacao={item}></ItemDoacao></li>))}
            </ul>
        </div>
    )
}