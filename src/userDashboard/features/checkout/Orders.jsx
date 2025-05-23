import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthProvider";
import { getOrders } from "./checkoutApi";
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import supabase from "../../userAuth/supabase";
import Navbar from "../../../ui/Navbar";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDeleteItem } from "../cart/useDeleteItem";

function Orders() {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data: cartItems,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () => getOrders(user.id),
    enabled: !!user?.id,
  });

  const { deleteItem, isDeleting } = useDeleteItem();

  if (isLoading) return <Loader />;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const TotalPrice = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.product_quantity,
    0
  );

  const handleCheckout = async (data) => {
    try {
      //Tis is to save the order in the database
      const { error } = await supabase.from("orders").insert([
        {
          user_id: user.id,
          total_price: TotalPrice,
          delivery_name: data.name,
          delivery_address: data.address,
          delivery_phone: data.phone,
          order_items: cartItems.map((item) => ({
            product_id: item.product_id,
            quantity: item.product_quantity,
            image: item.product_image,
            title: item.product_title,
            price: item.product_price,
          })),
        },
      ]);

      if (error) {
        console.error("Checkout error:", error);
        throw new Error("Failed to place order");
      }

      toast.success("Order placed successfully!");
      setShowForm(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="checkout">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <button onClick={() => navigate(-1)} className="back">
            &#11013;Back
          </button>

          <div className="checkout-container">
            <div>
              <h2>Checkout</h2>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.product_image} alt={item.product_title} />

                    <div className="checkout-detail">
                      <div>
                        {item.product_title} x {item.product_quantity} = $
                        {item.product_price * item.product_quantity}
                      </div>
                      <button
                        onClick={() => deleteItem(item.id)}
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="checkout-cal">
                <div>
                  <strong>Subtotal</strong>
                  <small> ${TotalPrice}</small>
                </div>
                <div>
                  <strong>Shipping cost</strong>
                  <small> Free </small>
                </div>
                <div style={{ color: "red" }}>
                  <strong>Discount</strong>
                  <small>-</small>
                </div>
                <div>
                  <h3>Total: ${TotalPrice}</h3>
                </div>
                <button onClick={() => setShowForm(true)}>Confirm Order</button>
              </div>
              {showForm && (
                <form
                  onSubmit={handleSubmit(handleCheckout)}
                  className="order-form"
                >
                  <h3 style={{ color: "#0070f3" }}>Delivery information</h3>
                  <div>
                    <label>Full Name:</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div>
                    <label>Address:</label>
                    <input {...register("address", { required: true })} />
                    {errors.address && <span>This field is required</span>}
                  </div>
                  <div>
                    <label>Phone:</label>
                    <input
                      {...register("phone", { required: true })}
                      type="number"
                    />
                    {errors.phone && <span>This field is required</span>}
                  </div>
                  <button type="submit" disabled={isLoading}>
                    Submit Order
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Orders;
