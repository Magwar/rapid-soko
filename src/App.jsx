import React from 'react'
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCArd";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="main-content-area">
        <Sidebar />
        <div className="product-display-area">
          <h2>Shop Our Latest Gadgets</h2>
        </div>
      </main>
    </>
  );
}

export default App;
