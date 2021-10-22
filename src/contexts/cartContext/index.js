import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [produtos, setProdutos] = useState();
  const [items, setItems] = useState([]);

  function handleAddItem(title, image, price) {
    const itemObject = { title, image, price };
    setItems([...items, itemObject]);
  }

  function handleRemoveItem(clickedItem) {
    const filteredItems = items.filter(
      (item) => items.indexOf(item) !== clickedItem
    );
    setItems(filteredItems);
  }

  useEffect(() => {
    fetch("http://localhost:3000/acima-10-reais.json")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <CartContext.Provider
      value={{ produtos, items, handleAddItem, handleRemoveItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
