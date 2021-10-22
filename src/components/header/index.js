import { useContext } from "react";
import Cart from "../cart";
import { CartContext } from "../contexts/cartContext";

export default function Header() {
  const { items } = useContext(CartContext);

  return (
    <header>
      <div className="container">
        <div className="brand">CartShow</div>
        <nav>
          <ul>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li className="btn-cart">
              <a href="#">
                Cart <span>{items.length}</span>
              </a>
              <Cart />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
