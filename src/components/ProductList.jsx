import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Portable Bluetooth Speaker",
      price: "197.00",
      image: "/images/soundbox.jpg", // Image path from public folder
    },
    {
      id: 2,
      name: "Advanced VR Headset Pro",
      price: "300.00",
      image: "/images/vr-headset.jpg",
    },
    {
      id: 3,
      name: "Ultra-Thin Laptop (2025 Model)",
      price: "1250.00",
      image: "/images/laptop.jpg",
    },
    {
      id: 4,
      name: "High-Resolution Gaming Monitor",
      price: "450.00",
      image: "/images/monitor.jpg",
    },
    {
      id: 5,
      name: "Noise-Cancelling Over-Ear Headphones",
      price: "180.00",
      image: "/images/headphone.jpg",
    },
    {
      id: 6,
      name: "Compact Digital Camera 4K",
      price: "550.00",
      image: "/images/camera.jpg",
    },
    {
      id: 7,
      name: "Smartwatch with Health Tracking",
      price: "150.00",
      image: "/images/smartwatch.jpg",
    },
    {
      id: 8,
      name: "Ergonomic Wireless Mouse",
      price: "45.00",
      image: "/images/mouse.jpg",
    },
    {
      id: 9,
      name: "Professional Studio Microphone",
      price: "99.00",
      image: "/images/microphone.jpg",
    },
    {
      id: 10,
      name: "Mini Projector Portable",
      price: "250.00",
      image: "/images/projector.jpg",
    },
    {
      id: 11,
      name: "Mechanical Gaming Keyboard RGB",
      price: "120.00",
      image: "/images/keyboard.jpg",
    },
    {
      id: 12,
      name: "AI-Powered Home Security Camera",
      price: "85.00",
      image: "/images/security-camera.jpg",
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          productData={product}
        />
      ))}
    </div>
  );
}

export default ProductList;