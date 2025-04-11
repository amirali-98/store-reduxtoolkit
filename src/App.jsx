import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}
