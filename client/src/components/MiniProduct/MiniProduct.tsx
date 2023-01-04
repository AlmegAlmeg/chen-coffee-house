import { useCart } from "../../context/CartContext";
import { CiCoffeeBean } from "react-icons/ci";
import { Product } from "../../model/Product";

type MiniProductProps = {
  product: Product;
};

export default function MiniProduct({
  product,
}: MiniProductProps): JSX.Element {
  const { getItemQuantity, updateCart } = useCart();

  return (
    <div className="single-product">
      <h3>{product.title}</h3>
      <img
        className="product-img"
        src={product.imageUrl}
        style={{
          height: "200px",
          aspectRatio: 1 / 1,
          objectFit: "contain",
        }}
        alt=""
      />

      <p className="intensity">
        <CiCoffeeBean />
        {product.intensity}
      </p>
      <br></br>
      <p className="price">₪{product.price}</p>

      <div className="add-to-cart">
        <button onClick={() => updateCart(product.id, true)}>Add</button>
        <span>{getItemQuantity(product.id)}</span>
        <button onClick={() => updateCart(product.id, false)}>Remove</button>
      </div>
    </div>
  );
}
