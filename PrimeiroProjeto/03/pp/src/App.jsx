import Contador from "./contador";
import Card from "./Card";

function Cabecalho() {
  return (
    <header style={{backgroundColor:'#20232a', color:'white', padding:'10px'}}>
      <h1>Meu Primeiro Projeto React Exemplo1(JSX)</h1>
      <p>Usando Vite  </p>
    </header>
  );
}

function ListaCards() {
  const styleSetion= {
    borderBotom: '2px solid #ccc',
    pedding: '20px',
    margin: '20px',
    textAlign: 'center'
  };
  return (
    <div style={styleSetion}>
      <h2>Exemplo 3 Lista de Cards</h2>
      <Card titulo="Card 1" content="Este é o conteúdo do Card 1."/>
      <Card titulo="Card 2" content="Este é o conteúdo do Card 2."/>  
      <Card titulo="Card 3" content="Este é o conteúdo do Card 2."/>
      <Card titulo="Card 4" content="Este é o conteúdo do Card 3."/> 
    </div>
  );
} 
export default function App() {
  
  return (
    <div> 
      <Cabecalho/>
      <Contador/>  
      <ListaCards/>
      <footer style={{textAlign: 'center', padding: '20px', backgroundColor:'#eee', marginTop:'20px'}}>
        <p>Rodapé do meu primeiro projeto React</p>
      </footer> 

    </div>
  );
}


// export default Cabecalho; 
