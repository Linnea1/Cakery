import React from 'react';
import Hero from '../components/common/Hero';
import ProductCard from '../components/common/ProductCard';
import customHeroImage from '../assets/images/hero-products.jpg';
import cakes from '../data/cakes.json';
import cupcakes from '../data/cupcakes.json';

export default function Products() {
  return (
    <>
      <Hero
        title="Delight in Every Bite"
        subtitle="Handcrafted cakes and cupcakes made with love, flavor, and a touch of magic."
        showButton={false}
        bgImage={customHeroImage}
      />
      <div className="content">
        <section className="products-section">
          <h2>Cakes</h2>
          <div className="desicription">
            <h3>Beautifully crafted cakes for every celebration</h3>
          </div>
          <div className="products-grid">
            {cakes.map((cake) => (
              <ProductCard key={cake.id} image={cake.img} title={cake.title} price={cake.price} />
            ))}
          </div>
        </section>

        <section className="products-section">
          <h2>Cupcakes</h2>
          <div className="desicription">
            <h3>Delicate flavors in every swirl of frosting</h3>
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
      </div>
    </>
  );
}
