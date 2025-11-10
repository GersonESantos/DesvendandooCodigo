function CondicionalInline() {
    const hora = new Date().getHours();
    return (
        <div>
            <h3>Condicional Inline</h3>
            <p>{hora < 12 && "Bom dia!"}</p>
            <p>{hora >= 12 && hora < 18 && "Boa tarde!"}</p>
            <p>{hora >= 18 && "Boa noite!"}</p>
        </div>
    );
}
export default CondicionalInline;   