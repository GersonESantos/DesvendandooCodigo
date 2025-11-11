export default function Card({ title, content }) {

    const estiloCard = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
    maxWidth: '300px',
    margin: '16px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  };    
  return (
    <div style={estiloCard}     className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// export default Card;

//