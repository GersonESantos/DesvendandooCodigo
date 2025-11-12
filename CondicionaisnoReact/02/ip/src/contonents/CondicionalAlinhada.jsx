import { useState } from "react";
function CondicionalAlinhada() {
    const [idade, setIdade] = useState(0);
    const [mensagem, setMensagem] = useState("");       
    function verificarIdade(e) {
        const valorIdade = parseInt(e.target.value);
        setIdade(valorIdade);
        if (valorIdade === 0) {
            setMensagem("Por favor, digite sua idade.");
         } else if (valorIdade < 12) {
            setMensagem("Você é criança. ");    
        } else if (valorIdade < 18) {
            setMensagem("Você é menor de idade.");

        } else if (valorIdade < 60) {
            setMensagem("Você é aduto.");
        }
        else {
            setMensagem("Você é idoso.");
        }
    }
    return (
        <div>
            <h3>Condicional Alinhada</h3>
            <input
                type="number"
                placeholder="Digite sua idade"
                value={idade}
                onChange={verificarIdade}
            />
            <p>{mensagem}</p>
        </div>
    );
}
export default CondicionalAlinhada; 