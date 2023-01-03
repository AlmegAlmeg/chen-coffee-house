import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CiCoffeeBean } from "react-icons/ci";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://king-prawn-app-zovdf.ondigitalocean.app/products/${slug}`)
      .then((res) => setProduct(res.data));
  }, []);

  return <div className="single-product"></div>;
};

export default SingleProduct;
