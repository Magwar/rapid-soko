import React from "react";

function ProductCard(props) {
  const { image, name, price } = props;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">KES{parseFloat(price).toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;