import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { productId } from "../../services/ProductApi";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthProvider";
import { addToCart } from "../cart/useCartApi";
import toast from "react-hot-toast";
import { useState } from "react";
import Navbar from "../../../ui/Navbar";
import Footer from "../../components/Footer";
import "./ProductID.css";
function ProductID() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const {
    data: productDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => productId(id),
    enabled: !!id,
  });
  console.log(productDetails);
  if (isLoading) return <Loader />;

  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  if (!productDetails) return <p>No product found.</p>;

  // Handlellin add to cart
  const { user } = useAuth();

  const handleAddToCart = async () => {
    try {
      console.log("Product:", productDetails);
      console.log("User ID:", user?.id);
      await addToCart(productDetails, user.id, quantity);
      toast.success("Items successful  added to cart!");
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error(err.message);
    }
  };

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!user) {
    toast.error("You must be logged in to add to cart.");
    return;
  }

  return (
    <section>
      <Navbar />
      <div className="p-details-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <button className="back-btn" onClick={() => navigate(-1)}>
            &#11013;Back
          </button>
          <div className="product-details-container">
            <div className="product-images">
              <img
                src={productDetails.thumbnail}
                alt="product-image"
                className="main-image"
              />
              <div className="thumbnail-gallery">
                {Array.isArray(productDetails.images) &&
                productDetails.images.length > 0 ? (
                  <div>
                    {productDetails.images.map((img, idx) => (
                      <div key={idx}>
                        <img src={img} alt={`${productDetails.title} ${idx}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>
            <div className="product-info">
              <h2>{productDetails.title}</h2>
              <div className="rating">⭐ {productDetails.rating} (436)</div>
              <p>{productDetails.description}</p>
              <p className="price">
                <strong>Price:</strong> ${productDetails.price}
              </p>
              <p>
                <strong>Rating:</strong> {productDetails.rating}
              </p>
              <p>
                <strong>Brand:</strong> {productDetails.brand}
              </p>
              <p>
                <strong>Category:</strong> {productDetails.category}
              </p>
              <div className="quantity">
                <strong>Quantity:</strong>
                <button onClick={decreaseQty}>-</button>
                <span style={{ margin: "0 10px" }}>{quantity}</span>
                <button onClick={increaseQty}>+</button>
              </div>
              <div className="buttons">
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="buy-now"
                >
                  Add To cart
                </button>
                <Link to="/order-checkout" className="add-to-cart">
                  Checkout
                </Link>
                <button className="favorite">❤️</button>
              </div>
              <ul className="features">
                <li>✅ Order before 15:00 for same-day dispatch</li>
                <li>
                  ✅ Easy returns: {productDetails.returnPolicy} if you're not
                  satisfied
                </li>
                <li>✅ {productDetails.warrantyInformation}</li>
              </ul>
            </div>
          </div>

          <div className="reviews-container">
            <div className="summary-card">
              <h3>Customer reviews</h3>
              <div className="stars">★★★★★</div>

              <div className="ratings-breakdown">
                <div className="rating-bar">
                  <span>5 star</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <span>4 star</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "30%" }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <span>3 star</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "22%" }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <span>2 star</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "4%" }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <span>1 star</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </div>

              <p className="feedback-text">
                Share your feedback and create a better shopping experience for
                everyone. Thank you for taking the time to share your opinion.
              </p>
              <button className="write-review">Write a review</button>
            </div>

            <div className="reviews-list">
              {productDetails.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <div className="star-rating">
                      {"★".repeat(Math.round(review.rating))}
                      {review.rating.toFixed(2)}
                    </div>
                    <div className="review-info">
                      {review.date} • {review.reviewerName}
                    </div>
                  </div>
                  <p className="review-text">{review.comment}</p>
                  {/* <ul className="review-bullets">
                    {review.bullets.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul> */}
                  <div className="review-actions">
                    {/* <div>
                      <FaThumbsUp /> {review.likes}
                    </div>
                    <div>
                      <FaThumbsDown /> {review.dislikes}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductID;
