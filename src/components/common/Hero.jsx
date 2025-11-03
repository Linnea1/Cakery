import React from "react";
import "./Hero.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Hero({
  title = "Freshly Baked, With Love",
  subtitle = "Discover our delightful cakes and pastries, made daily using only the finest ingredients.",
  showButton = true,
  buttonText = "Order here",
  buttonLink = "/products",
  bgImage,
}) {
  const style = { backgroundImage: `url(${bgImage})` };
  const navigate = useNavigate();

  return (
    <section className="hero" style={style}>
      <div className="hero-overlay" />
      <div className="hero-inner content">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle ? <h3 className="hero-subtitle">{subtitle}</h3> : null}
          {showButton ? <Button onClick={() => navigate(buttonLink)}>{buttonText}</Button> : null}
        </div>
      </div>
    </section>
  );
}
