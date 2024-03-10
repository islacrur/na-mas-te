import React from 'react'
import Navbar from '../components/molecules/navbar/Navbar'
import TheCart from '../components/molecules/cart/TheCart'
import Footer from '../components/molecules/footer/Footer'

const Cart = () => {
  return (
    <>
        <Navbar />
        <TheCart></TheCart>
        <Footer />
    </>
  )
}

export default Cart