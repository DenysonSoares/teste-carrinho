import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export default function ItemCart({ img, itemIndex, title, price }) {
  const { handleRemoveItem } = useContext(CartContext);
  return (
    <div className="card-cart">
      <img src={img} alt="" />
      <article>
        <button
          onClick={() => handleRemoveItem(itemIndex)}
          className="btn-remove"
        >
          remover
        </button>
        <h4>{title}</h4>
        <p>R$ {price}</p>
      </article>
    </div>
  );
}
