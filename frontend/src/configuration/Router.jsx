import { BrowserRouter, Routes, Route } from "react-router-dom";

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