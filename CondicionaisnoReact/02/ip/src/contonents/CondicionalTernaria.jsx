function CondicionalTernaria(){
    const numero = -10;
    const mensagem = numero > 0 ? "O número é positivo." : numero < 0 ? "O número é negativo." : "O número é zero.";
    const logado = false;

    return (
        <div>
            <h3>Condicional Ternária</h3>
            <p>
                O número informado é: {numero}. {mensagem}
            </p>
            <p>
                {logado ? "Você está logado." : "Você não está logado."}
            </p>
        </div>
    );
}
export default CondicionalTernaria;