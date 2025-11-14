import { useState } from "react";
function CondicionalSwitch() {
    const [dia, setDia] = useState("segunda"); // 0-Domingo, 1-Segunda, 2-Terça, 3-Quarta, 4-Quinta, 5-Sexta, 6-Sábado 
    let nomeDia;
    const mensagem = (()=>{
        switch (dia) {
        case "Segunda":
            return "inicio da semana vamos la "
        case "Sexta":
            return "Sextou !!!!!!! "    
        
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
export default CondicionalSwitchCase;