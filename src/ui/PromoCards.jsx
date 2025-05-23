import { Link } from "react-router-dom";

import "./PromoCards.css";

const promos = [
  {
    image:
      "https://images.unsplash.com/photo-1651746817904-abc832733480?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "MacBook Pro",
    description:
      "Now with the Apple M1 chip redefining speed, efficiency, and performance.",
    button: "Buy now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Speakers",
    description: "The ultimate listening experience.",
    button: "Buy now",
  },
];

const PromoCards = () => {
  return (
    <div className="promo-container">
      {promos.map((promo, index) => (
        <div className="promo-card" key={index}>
          <img src={promo.image} alt={promo.title} className="promo-image" />
          <div className="promo-content">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <Link to="/items-search">{promo.button}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
