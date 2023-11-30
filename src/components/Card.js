import React from 'react';
import './card.css';

function Card({ title, text, imgSrc, links }) {
 return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="card-links">
        {links.map((link, index) => (
          <a key={index} href={link.url}>{link.text}</a>
        ))}
      </div>
    </div>
 );
}

export default Card;