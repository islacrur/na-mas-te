import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Home from '../Pages/Home';
import AllProducts from '../Pages/AllProducts';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import CreateProduct from '../Pages/CreateProduct';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/createproduct" element={<CreateProduct/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default Router