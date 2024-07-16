import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductUploadForm from "./components/ProductUploadForm";
import Products from "./components/Products";
import Analytics from "./components/Analytics";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ProductUploadForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
