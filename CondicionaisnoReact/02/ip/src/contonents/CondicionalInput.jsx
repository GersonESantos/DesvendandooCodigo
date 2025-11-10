import { useState } from "react";

function CondicionalComInput() {
    const [idade, setIdade] = useState("");
    const [mensagem, setMensagem] = useState("");
    function verificar() {
        if (idade === "") {
            setMensagem("Por favor, idade vaida");
        } else if (idade >= 18) {                        
            setMensagem("Você é maior de idade.");
        } else {    
            setMensagem("Você é menor de idade.");
        }
    }
  return (
    <div>
        <h3>Condicional com Input</h3>
        <input 
        type="number" 
        placeholder="Digite sua idade"
        value={idade} 
        onChange={(e) => setIdade(e.target.value)}
        />
        <button onClick={verificar}>Verificar</button>
        <p>{mensagem}</p>
    </div>
  );
}
export default CondicionalComInput;