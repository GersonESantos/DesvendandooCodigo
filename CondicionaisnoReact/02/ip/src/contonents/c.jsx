import { useState } from "react";
function CondicionalSwitch() {
    const [dia, setDia] = useState("segunda"); // 0-Domingo, 1-Segunda, 2-Terça, 3-Quarta, 4-Quinta, 5-Sexta, 6-Sábado 
    let nomeDia;
    const mensagem = (()=>{
        switch (dia) {
        case "Segunda":
            nomeDia = "Domingo";
            break;
        case 1:
            nomeDia = "Segunda-feira";
            break;  
        case 2:
            nomeDia = "Terça-feira";
            break;
        case 3:
            nomeDia = "Quarta-feira";
            break;
        case 4:
            nomeDia = "Quinta-feira";
            break;      
        case 5:
            nomeDia = "Sexta-feira";
            break;
        case 6:
            nomeDia = "Sábado";
            break;
        default:
            nomeDia = "Dia inválido";
    }
     })
       
    return (
        <div>
            <h3>Condicional com Switch</h3>
            <p>Hoje é: {nomeDia}</p>
        </div>
    )
}
export default CondicionalSwitch;