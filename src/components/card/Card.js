import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, text, imgSrc, linksConnection, linksDetail }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="cardDescription">
        <div>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
        <div className="card-links">
          {linksConnection.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
        <div>
          <Link to={`/DetailNas?idNas=${linksDetail}`}>Voir le détail</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;