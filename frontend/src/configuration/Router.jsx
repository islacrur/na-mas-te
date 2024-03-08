import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Home from '../Pages/Home';
import AllProducts from '../Pages/AllProducts';
import Product from '../Pages/Product';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default Router