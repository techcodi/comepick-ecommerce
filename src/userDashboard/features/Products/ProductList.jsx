import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ product }) {
  return (
    <li className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
    </li>
  );
}

export default ProductList;
