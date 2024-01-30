import React from 'react';
import { TbCurrencyTenge } from "react-icons/tb";
import './App.css';

const ServiceCard = ({ title, image, originalPrice, discountedPrice, features }) => {

  return (
  <div className="flip-card">
    <div className="flip-card-inner">

      <div className="flip-card-front">
        <h2>{title}</h2>
        <img src={image} alt={title} width="250px" />
        <p className="price">
          <del className='origin-price'>{originalPrice}</del>
          <ins className='discount-price'>{discountedPrice}<span className='tenge'><TbCurrencyTenge/></span></ins>
        </p>
      </div>

      <div className="flip-card-back">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="item">
              {feature}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
  );
}

export { ServiceCard };