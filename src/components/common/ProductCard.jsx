import React from 'react';
import './ProductCard.css';

export default function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">£{price}</p>
      </div>
    </div>
  );
}
