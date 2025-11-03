import React from 'react';
import Hero from '../components/common/Hero';
import customHeroImage from '../assets/images/hero.jpg';
import PopularProducts from '../components/common/PopularProducts';

export default function Home() {
  return (
    <>
      <Hero
        title="Freshly Baked, With Love"
        subtitle="Discover our delightful cakes and pastries, made daily using only the finest ingredients."
        showButton={true}
        bgImage={customHeroImage}
      />
      <div className="content">
        <PopularProducts></PopularProducts>
      </div>
    </>
  );
}
