import React from "react";
import Navbar from "../components/molecules/navbar/Navbar";
import ProductCardGroup from "../components/molecules/cards/productCard/ProductCardGroup";
import Footer from "../components/molecules/footer/Footer";

const AllProducts = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Aquí se muestran todos los productos de una categoría específica</h1>
      <ProductCardGroup />
      <Footer></Footer>
    </>
  );
};

export default AllProducts;
