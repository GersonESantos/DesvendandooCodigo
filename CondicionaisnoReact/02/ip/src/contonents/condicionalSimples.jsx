function CondicionalSimples() {
    const idade = 18;
    let mensagem = "";
    if (idade >= 18) {
        mensagem = "Você é maior de idade.";
    } else {
        mensagem = "Você é menor de idade.";
    }   


    return (
        <div>
           <h3>Condicional Simples</h3>
            <p>Sua idade é: {idade} anos.</p>
            <p>{mensagem}</p>

        </div>
    );
}

export default CondicionalSimples;