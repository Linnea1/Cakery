import React from 'react';
import Hero from '../components/common/Hero';
import ImageAndText from '../components/common/ImageAndText';

import customHeroImage from '../assets/images/hero-about.jpg';
import customImageAndTextImage from '../assets/images/history.jpg';

export default function About() {
  return (
    <>
      <Hero
        title="About us"
        subtitle="From a small village in southern France to the heart of London, our story is one of passion, family, and the timeless art of French baking."
        showButton={false}
        bgImage={customHeroImage}
      />
      <div className="content">
        <ImageAndText image={customImageAndTextImage} alt="Baking history">
          <h2>Our Story</h2>
          <p>
            Born and raised in a quiet village in southern France, brothers Luc and Étienne Moreau
            grew up surrounded by the comforting scent of freshly baked brioche and the gentle
            crackle of their family’s old stone oven. In their home, baking wasn’t merely a craft,
            it was a cherished tradition, passed down through generations, shaped by patience,
            passion, and the love of sharing something beautiful.
          </p>
          <p>
            In 2015, with hearts full of ambition (and suitcases full of whisks), the brothers left
            their village for London, determined to bring a slice of French artistry to the city’s
            bustling food scene. What began as a dream quickly became a cozy little bakery, a place
            where every cake tells a story: rich in flavor, elegant in design, and made with the
            same care they learned back home.
          </p>
          <p>
            Today, their bakery stands as a sweet meeting of worlds, French tradition meets London
            creativity, where every handcrafted cake celebrates both their heritage and their new
            home.
          </p>
        </ImageAndText>
      </div>
    </>
  );
}
