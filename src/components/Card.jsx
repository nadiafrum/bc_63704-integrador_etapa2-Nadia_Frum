import { useContext } from "react";
import "./Card.scss";
import CarritoContext from "../contexts/CarritoContext";

const Card = ({ producto }) => {
  // console.log(producto)
  const { agregarCarritoContext } = useContext(CarritoContext)

  const handleClick = (producto) => {
    //console.log(producto)
    agregarCarritoContext(producto)
  }
  
  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card_heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
          <button onClick={() => handleClick(producto)}>Agregar</button>
        </div>
      </article>
    </div>
  );
};

export default Card;