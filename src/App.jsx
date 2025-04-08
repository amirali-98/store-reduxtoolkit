import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<h1>Home</h1>} />
          <Route
            path="/products/:productId"
            element={<h1>Product Detail</h1>}
          />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}
