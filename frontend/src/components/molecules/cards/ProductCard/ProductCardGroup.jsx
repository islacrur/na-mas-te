import React, { useEffect, useState } from "react";
import { useCard } from "../../../../clientSide/hooks/useCard";
import ProductCard from "../productCard/ProductCard";

const ProductCardGroup = () => {
  const { getProducts } = useCard();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("http://127.0.0.1:8000/api/")
      .then((data) => {
        console.log("Data from API:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log("Products:", products); // Aquí

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardGroup;
