import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductUploadForm from "./components/ProductUploadForm";
import Products from "./components/Products";
import Analytics from "./components/Analytics";
import Home from "./components/Home";
import MockupZone from "./components/MockupZone";
import RecentWork from "./components/RecentWork";
import Greeting from "./components/Greeting";
import Testimonium from "./components/Testimonium";
import BlogSubmission from "./components/BlogSubmission";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ProductUploadForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/mockup-zone" element={<MockupZone />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/testimonium" element={<Testimonium />} />
          <Route path="/blog-submission" element={<BlogSubmission />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
