import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { CiCoffeeBean } from "react-icons/ci";
import "./Products.scss";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState<Array<any> | undefined>([]);

  /**
   * This is our custom cart hook. As you can
   * see, we can take any function or state
   * stored in our context and distruct it here.
   */
  const { getItemQuantity, items } = useCart();

  useEffect(() => {
    setProducts(undefined);

    let url = `https://king-prawn-app-zovdf.ondigitalocean.app/products`;

    axios.get(url).then((res) => {
      if (!res || res.status !== 200) return;
      console.log(res);
      setProducts(res.data.data);
    });
  }, []);

  return (
    <>
      <img className="banner" src="./assets/banner.png" alt="chen" />

      <div className="products">
        {products &&
          products.map((prod: any, i: number) => {
            return (
              <div className="single-product" key={i}>
                <h3>{prod.title}</h3>
                <img
                  className="product-img"
                  src={prod.imageUrl}
                  style={{
                    height: "200px",
                    aspectRatio: 1 / 1,
                    objectFit: "contain",
                  }}
                  alt=""
                />

                <p className="intensity">
                  <CiCoffeeBean />
                  {prod.intensity}
                </p>
                <br></br>
                <p className="price">₪{prod.price}</p>
                <Link to="./SingelProduct" className="product-btn">
                  עוד מידע
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
