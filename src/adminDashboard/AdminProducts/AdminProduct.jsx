import { adminProductsList } from "./AdminProductFn";
import Spinner from "../Spinner";
import "./AdminProducts.css";

function AdminProduct() {
  const { products, isLoading } = adminProductsList();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1>All PRoduct</h1>

      <div className="admin-products">
        {products.map((product) => (
          <div>
            <img src={product.thumbnail} alt={product.title} />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>{" "}
          </div>
        ))}
      </div>

      {/*  <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p> */}
    </div>
  );
}

export default AdminProduct;
