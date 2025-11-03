import React from 'react';
import './ImageAndText.css';

export default function ImageAndText({ image, alt = '', children }) {
  return (
    <div className="image-text-container">
      <div className="image-half">
        <img src={image} alt={alt} />
      </div>
      <div className="text-half">{children}</div>
    </div>
  );
}
