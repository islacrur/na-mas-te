import Navbar from '../components/molecules/navbar/Navbar';
import Footer from '../components/molecules/footer/Footer';
import ProductCard from '../components/molecules/cards/productCard/ProductCard';
import React from 'react'

const Product = () => {
  return (
    <>
    <h1>Descripción de un producto</h1>
      <Navbar></Navbar>
      <ProductCard></ProductCard>
      <Footer></Footer>
   </>
  )
}

export default Product