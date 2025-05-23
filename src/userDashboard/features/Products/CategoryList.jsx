import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { getProductCategories } from "../../services/ProductApi";
import "./CategoryList.css";

function CategoryList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getProductCategories(categoryName);
        setItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [categoryName]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  if (!items.length) return <p>No products found in this category.</p>;

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="shop-container-item">
        {items.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
