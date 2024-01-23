import React from 'react';
import './Card.css';

function Card({ title, text, imgSrc, links }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="cardDescription">
        <div>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
        <div className="card-links">
          {links.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;