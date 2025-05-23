import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import "../../userApp/Hero.css";
import { searchProducts } from "./useSearchApi";
import { motion } from "framer-motion";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const {
    data: searchItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", query],
    queryFn: () => searchProducts(query),
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ q: search });
  }

  {
    error && <p>Error fetching products.</p>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="navbar">
        <div className="logo">
          <span style={{ color: "#0077FF" }}>N</span>EXT
          <span style={{ color: "orange" }}>PICK</span>{" "}
        </div>
        <div className="search-section">
          <button className="all-products">☰ All products</button>
          <input
            type="text"
            placeholder="I'm searching for..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-icon" onClick={handleSubmit}>
            🔍
          </button>
        </div>
        <div className="icons">🌐 EN ▼ &nbsp; ❤️ &nbsp; 👤 &nbsp; 🛒</div>
      </div>

      <div className="search">
        {isLoading && <Loader />}

        <ul className="search-ul">
          {searchItems?.products?.length ? (
            searchItems.products.map((product) => (
              <li
                key={product.id}
                style={{
                  border: "1px solid #eee",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    width="100"
                  />
                  <h4 style={{ color: "#333", fontWeight: "400" }}>
                    {product.title}
                  </h4>
                  <p style={{ color: "#333", fontWeight: "600" }}>
                    ${product.price}
                  </p>
                </Link>
              </li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      </div>

      <Footer />
    </motion.div>
  );
}

export default Search;
