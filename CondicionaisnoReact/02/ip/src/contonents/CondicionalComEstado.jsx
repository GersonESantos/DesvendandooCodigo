import { useState } from "react";
function CondicionalComEstado() {
    const [valor, setValor] = useState(0);
    const [resultado, setResultado]= useState("");
    function calcular(){
        const preco = Number(valor);
        if(preco === 0){
            setResultado("O valor é zero.");
        } else if(preco < 50){
            setResultado("Sem desconto");
        } else if(preco <= 100){
            
            setResultado("Desconto de 10 porcento");
        } else {
            
            setResultado("Desconto de 20 porcento");
        }
    }       

    
    return(
        <div>
            <h3>Condicional com Estado</h3>
            <input 
                type="number" 
                placeholder="Digite o valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button onClick={calcular}>Calcular</button>
            <p>{resultado}</p>
        </div>
    );}
export default CondicionalComEstado;