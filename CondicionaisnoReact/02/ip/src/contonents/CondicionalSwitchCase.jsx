import { useState } from "react";

function CondicionalSwitchCase() {
    const [dia, setDia] = useState("Segunda");

    const mensagem = 
    ( () => 
      {
        switch (dia) 
        {
            case "Segunda":
                return "inicio da semana vamos la !!!!!!! 😊 ";
            case "Sexta":
                return "Sextou !!!!!!! ";
            case "Domingo":
                return "Domingou, dia de descanso !";
            default:
                return "Dia de estudo no React !!!!!!!";
        }
     }
    )(); // <-- invoca a função imediatamente para obter a string

    return (
        <div>
            <h3>Condicional com Switch case </h3>
            <p>Hoje é: <strong>{dia}</strong></p>
            <p>{mensagem}</p>
            <button onClick={() => setDia("Segunda")}>Segunda</button>
            <button onClick={() => setDia("Sexta")}>Sexta</button>
            <button onClick={() => setDia("Domingo")}>Domingo</button>
        </div>
    );
}

export default CondicionalSwitchCase;