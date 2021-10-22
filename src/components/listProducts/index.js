import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/cartContext";

import Product from "../product";

export default function Produtos() {
  const { produtos } = useContext(CartContext);

  const listProdutos = useMemo(() => {
    return produtos?.items || [];
  }, [produtos]);

  return (
    <div>
      <h1>Produtos</h1>
      <div className="list-produtos">
        {listProdutos.map((produto, index) => (
          <Product
            itemIndex={index}
            img={produto.imageUrl}
            title={produto.name}
            sold={produto.sellingPrice}
            price={produto.price}
          />
        ))}
      </div>
    </div>
  );
}
