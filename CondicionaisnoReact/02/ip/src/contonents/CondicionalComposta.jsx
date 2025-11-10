function CondicionalComposta() {
    const { numero } = { numero: -7 }; // Você pode alterar esse valor para testar diferentes condições
    let mensagem = "";
  
    if (numero > 0) {
      mensagem = "O número é positivo.";
    } else if (numero < 0) {
      mensagem = "O número é negativo.";                    
    } else {
        mensagem = "O número é zero.";
    }
    return (
        <div>
              <h3>Condicional Composta</h3> 
            <p>         
                O número informado é: {numero}. {mensagem}
            </p> 
        </div>
    );
    }
    export default CondicionalComposta;
