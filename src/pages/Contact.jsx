import React from 'react';
import Hero from '../components/common/Hero';
import ImageAndText from '../components/common/ImageAndText';

import customHeroImage from '../assets/images/hero-contact.jpg';
import customImageAndTextImage from '../assets/images/contact.jpg';

export default function About() {
  return (
    <>
      <Hero
        title="Contact us"
        subtitle="Every conversation starts with a spark of inspiration. Whether it’s a wedding cake, a corporate event, our team is here to bring your ideas to life."
        showButton={false}
        bgImage={customHeroImage}
      />
      <div className="content">
        <ImageAndText image={customImageAndTextImage} alt="Baking history">
          <h2>Reach out to us</h2>
          <p>
            Whether you’re planning a celebration, craving something special, or simply want to say
            bonjour, we’re always happy to connect. Our team is here to help with custom cake
            orders, catering inquiries, and any questions about our menu or bakery.
          </p>
          <h3>Visit us</h3>
          <p>27 Floral Street, Covent Garden London, WC2E 9DP</p>
          <h3>Phone</h3>
          <p>+45 00 137 300</p>
          <h3>Email</h3>
          <p>contact@munamii.uk</p>
          <h3>Opening Hours</h3>
          <p>
            Weekdays: 10am - 7pm <br></br>Weekends: 11am - 5pm
          </p>
        </ImageAndText>
      </div>
    </>
  );
}
