import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import ItemCart from "../itemCart";

export default function Cart() {
  const { items } = useContext(CartContext);
  const totalPrice = items.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="floot-cart">
      {items.map((item, index) => (
        <ItemCart
          key={index}
          itemIndex={index}
          img={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
      {items.length === 0 && (
        <p style={{ textAlign: "center" }}>Carrinho vazio</p>
      )}
      {totalPrice > 1000 && (
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            backgroundColor: "#c7ffa6",
            color: "#217c1a",
            borderRadius: 25,
            padding: 10,
          }}
        >
          Parabéns, sua compra tem frete grátis
        </p>
      )}
      {items.length > 0 && (
        <>
          <h3>Total: R$ {totalPrice}</h3>
          <a href="/compra-concluida">Finalizar compra</a>
        </>
      )}
    </div>
  );
}
