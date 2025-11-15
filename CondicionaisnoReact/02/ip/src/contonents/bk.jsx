import { useState } from "react";

function CondicionalSwitchCaseNota() {
    const [nota, setNota] = useState(0);
    const [conceito, setConceito] = useState("");

    const avaliarNota = (nota) => 
    {
        const valor = parseFloat(nota);
        let resultado;
        switch (true) 
        {
            case nota >= 9:
                setConceito("A");
                break;
            case nota >= 7:
                setConceito("B");
                break;
            case nota >= 5:
                setConceito("C");
                break;
            case nota >= 3:
                setConceito("D");
                break;
            default:
                setConceito("E");
        }
    };

    return (
        <div>
            <h2>Nota: {nota}</h2>
            <input
                type="number"
                value={nota}
                onChange={(e) => setNota(Number(e.target.value))}
            />
        </div>
    );
}

export default CondicionalSwitchCaseNota;