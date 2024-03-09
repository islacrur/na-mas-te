import Navbar from '../components/molecules/navbar/Navbar';
import Footer from '../components/molecules/footer/Footer';
import ProductCard from '../components/molecules/cards/productCard/ProductCard';
import React from 'react'

const AllProducts = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Aquí se muestran todos los productos de una categoría específica</h1>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <Footer></Footer>
   </>
  )
}

export default AllProducts