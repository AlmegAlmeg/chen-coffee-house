import axios from 'axios';
import { useEffect, useState } from 'react';
import './Products.scss';
import { TbTruckDelivery } from 'react-icons/tb';

export default function ProductPage() {
  const [products, setProducts] = useState<Array<any> | undefined>([]);

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
      <br></br>
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
                    height: '200px',
                    aspectRatio: 1 / 1,
                    objectFit: 'contain',
                  }}
                  alt=""
                />
                {/* <p className="description">{prod.description}</p> */}
                <p className="delivery-days">
                  <TbTruckDelivery />
                  &nbsp;
                  {prod.daysToDeliver}&nbsp; ימי עסקים
                </p>
                <p className="price">₪{prod.price}</p>
                <button className="product-btn">עוד מידע</button>
              </div>
            );
          })}
      </div>
    </>
  );
}
