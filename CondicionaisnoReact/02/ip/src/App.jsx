import CondicionalSimples from "./contonents/condicionalSimples"
import Separador from "./contonents/Separador"
import CondicionalComposta from "./contonents/CondicionalComposta"

function App() {  
  return (
    <div style={{padding:"20px"}}>
      <h2>Exemplos de Condicionais no React</h2>
      <CondicionalSimples />
      <Separador />
      <CondicionalComposta />
      <Separador />
      {/* <CondicionalTernaria />
      <Separador />
      <CondicionalSwitch />
      <Separador />
      <CondicionalInline />                            */}
    </div>
  )
}

export default App