import { Link } from "react-router-dom";
import Navbar from "../../ui/Navbar";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <Navbar />

      {/* Hero Text */}
      <div className="hero-content">
        <div className="text-box">
          <h1>
            Introducing the
            <br />
            Next Generation of Sound
          </h1>
          <p>Experience pure, immersive sound like never before</p>
          <Link className="cta" to="/items-search">
            Discover more
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        {[
          "Computer",
          "Smart phone",
          "TV",
          "Kitchen",
          "Gaming",
          "Smart watch",
          "Headphones",
          "Household",
          "Accessories",
          "Camera",
          "Deals",
        ].map((item) => (
          <div className="cat-item" key={item}>
            <div className="cat-icon">📦</div>
            <div className="cat-label">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
