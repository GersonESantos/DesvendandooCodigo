import { useState, useEffect } from "react";

function CondicionalSwitchCaseNota() {
  const [nota, setNota] = useState(0);
  const [conceito, setConceito] = useState("");

  const avaliarNota = (n) => {
    const value = Number(n);
    if (Number.isNaN(value)) {
      setConceito("");
      return;
    }

    switch (true) {
      case value >= 9:
        setConceito("A");
        break;
      case value >= 7:
        setConceito("B");
        break;
      case value >= 5:
        setConceito("C");
        break;
      case value >= 3:
        setConceito("D");
        break;
      default:
        setConceito("E");
    }
  };

  useEffect(() => {
    avaliarNota(nota);
  }, [nota]);

  return (
    <div>
      <h2>Nota: {nota}</h2>
      <label>
        Informe a nota:
        <input
          type="number"
          min={0}
          max={10}
          step="0.1"
          value={nota}
          onChange={(e) => {
            const v = e.target.value === "" ? "" : Number(e.target.value);
            setNota(v === "" ? 0 : v);
          }}
        />
      </label>
      <p>Conceito: {conceito}</p>
    </div>
  );
}

export default CondicionalSwitchCaseNota;