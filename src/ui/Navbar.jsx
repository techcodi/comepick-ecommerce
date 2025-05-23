import { Link } from "react-router-dom";
import "../userDashboard/userApp/Hero.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        {" "}
        <span style={{ color: "#0077FF" }}>C</span>OME
        <span style={{ color: "orange" }}>PICK</span>{" "}
      </div>
      <div className="search-section">
        <button className="all-products">☰ All products</button>
        <Link to="/items-search">
          <input type="text" placeholder="I'm searching for..." />
        </Link>

        <button className="search-icon">🔍</button>
      </div>
      <div className="icons">
        🌐 EN ▼ &nbsp; ❤️ &nbsp; 👤 <Link to="/order-checkout">🛒</Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;
