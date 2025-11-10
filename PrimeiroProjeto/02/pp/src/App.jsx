import  contador from './contador';

function Cabecalho() {
  return (
    <header style={{backgroundColor:'#20232a', color:'white', padding:'10px'}}>
      <h1>Meu Primeiro Projeto React Exemplo1(JSX)</h1>
      <p>Usando Vite  </p>

    </header>
  );
}

export default function App() {
  
  return (
    <div> 
      <Cabecalho/>
      <contador/>
      <footer style={{textAlign: 'center', padding: '20px', backgroundColor:'#eee', marginTop:'20px'}}>
        <p>Rodapé do meu primeiro projeto React</p>
      </footer> 

    </div>
  );
}


// export default Cabecalho; 
