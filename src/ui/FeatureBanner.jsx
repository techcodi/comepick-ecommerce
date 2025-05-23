import React from "react";
import "./FeatureBanner.css";

const features = [
  {
    icon: "🚚",
    title: "Free shipping",
    subtitle: "On orders over €50",
  },
  {
    icon: "⏱️",
    title: "Easy returns",
    subtitle: "Free within 30 days",
  },
  {
    icon: "🎁",
    title: "Special gifts",
    subtitle: "Free with select orders.",
  },
  {
    icon: "🕑",
    title: "Support 24/7",
    subtitle: "Help when you need it",
  },
  {
    icon: "💳",
    title: "Secured payment",
    subtitle: "100% safe",
  },
];

const FeatureBanner = () => {
  return (
    <div className="feature-banner">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <span className="feature-icon">{feature.icon}</span>
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBanner;
