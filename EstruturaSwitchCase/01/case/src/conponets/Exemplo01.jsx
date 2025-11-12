import { useState } from "react";

function Exemplo01() {
    const [diaSemana, setDiaSemana] = useState("");
    let mensagem;
    switch (diaSemana) {
        case "segunda":
            mensagem = "Hoje é segunda-feira. Início da semana!";
            break;
        case "terca":
            mensagem = "Hoje é terça-feira. Vamos continuar!";
            break;
        case "quarta":
            mensagem = "Hoje é quarta-feira. Metade da semana!";
            break;  
        case "quinta":
            mensagem = "Hoje é quinta-feira. Continuando!";
            break;
        case "sexta":
            mensagem = "Hoje é sexta-feira. Final da semana!";
            break;              
        default:
            mensagem = "Escolha um dia da semana.";
    }       
    return (
        <div>
            <h3>Exemplo 01 - Switch Case</h3>
            <select onChange={(e) => setDiaSemana(e.target.value)}>
                <option value="">Selecione um dia</option>      
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
            </select>
            <p>{mensagem}</p>
        </div>
    );
}
export default Exemplo01;







