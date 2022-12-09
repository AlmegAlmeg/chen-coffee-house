import axios from "axios";
import { useEffect, useState } from "react";
import "./Products.scss";

export default function ProductPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(undefined);

    let url = `https://fakestoreapi.com/products`;

    axios.get(url).then((res) => {
      if (!res || res.status !== 200) return;
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="products">
      {products &&
        products.map((prod: any, i: number) => {
          return (
            <div className="single-product" key={i}>
              <h3>{prod.title}</h3>
              <img
                src={prod.image}
                style={{
                  height: "200px",
                  aspectRatio: 1 / 1,
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
}
