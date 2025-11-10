import CondicionalSimples from "./contonents/condicionalSimples"
import Separador from "./contonents/Separador"
import CondicionalComposta from "./contonents/CondicionalComposta"
import CondicionalTernaria from "./contonents/CondicionalTernaria"
import CondicionalComInput from "./contonents/CondicionalInput"
import CondicionalComEstado from "./contonents/CondicionalComEstado"
import CondicionalSwitch from "./contonents/CondicionalSwitch"
import CondicionalInline from "./contonents/CondicionalInline"
function App() {  
  return (
    <div style={{padding:"20px"}}>
      <h2>Exemplos de Condicionais no React</h2>
      <CondicionalSimples />
      <Separador />
      <CondicionalComposta />
      <Separador />
      <CondicionalTernaria />
      <Separador />
      <CondicionalComInput />
      <Separador />
      <CondicionalComEstado />
      <Separador />
      <CondicionalSwitch />
      <Separador />
      <CondicionalInline /> 
      <Separador />
    </div>
  )
}

export default App