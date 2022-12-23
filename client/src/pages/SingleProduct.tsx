import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://squid-app-c8djx.ondigitalocean.app/products/${slug}`)
      .then((res) => setProduct(res.data.data));
  }, []);

  return <div className="single-product">Single Product</div>;
};

export default SingleProduct;
