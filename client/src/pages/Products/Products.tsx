// import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { Product } from "../../model/Product";
import MiniProduct from "../../components/MiniProduct/MiniProduct";
import "./Products.scss";

export default function ProductPage() {
  const [products, setProducts] = useState<Array<Product>>([]);

  /**
   * This is our custom cart hook. As you can
   * see, we can take any function or state
   * stored in our context and distruct it here.
   */
  const { getItemQuantity, items } = useCart();

  return (
    <>
      <img className="banner" src="./assets/banner.png" alt="chen" />
    </>
  );
}
