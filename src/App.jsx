import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="main-content-area">
        <Sidebar />
        <div className="product-display-area">
          <ProductList />
        </div>
      </main>
    </>
  );
}

export default App;