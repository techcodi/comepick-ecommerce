import { getOrders } from "./getOrders";
import "./AllOrders.css";
import OrderId from "./OrderId";
import { useState } from "react";
import Spinner from "../Spinner";
function AllOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { data: orders, isLoading, error } = getOrders();

  if (isLoading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  console.log(orders);

  return (
    <div className="orders-container">
      <h1>Client Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table_grid">
          {" "}
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User Name</th>
                <th>Status</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{order.id}</td>
                  <td>{order.delivery_name}</td>
                  <td
                    style={{ backgroundColor: "#ffed90", width: "fit-content" }}
                  >
                    Pending
                  </td>
                  <td>${order.total_price}</td>
                  <td>{new Date(order.created_at).toLocaleString()}</td>
                  <td>{order.order_items?.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="orderId">
            {" "}
            {selectedOrder && <OrderId order={selectedOrder} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllOrders;
