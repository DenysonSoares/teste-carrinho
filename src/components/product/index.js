import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export default function Product({ itemIndex, img, title, sold, price }) {
  const { handleAddItem } = useContext(CartContext);

  return (
    <div className="card-produto" key={itemIndex}>
      <img src={img} alt="" />
      <article>
        <h4>{title}</h4>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sold)}
        </span>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </p>
        <button onClick={() => handleAddItem(title, img, price)}>
          Comprar
        </button>
      </article>
    </div>
  );
}
