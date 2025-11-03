import React from 'react';
import cakes from '../../data/cakes.json';
import cupcakes from '../../data/cupcakes.json';
import ProductCard from '../../components/common/ProductCard';

export default function PopularProducts() {
  return (
    <section className="products-section">
      <h2>Popular products</h2>
      <div className="desicription">
        <h3>Beautifully crafted cakes for every celebration</h3>
      </div>
      <div className="products-grid">
        {cupcakes.map((cupcake) => (
          <ProductCard
            key={cupcake.id}
            image={cupcake.img}
            title={cupcake.title}
            price={cupcake.price}
          />
        ))}
      </div>
    </section>
  );
}
