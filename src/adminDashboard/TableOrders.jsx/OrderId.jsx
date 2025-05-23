function OrderId({ order }) {
  return (
    <div className="orderID-container">
      <h3>Order ID: #{order.id}</h3>
      <p style={{ textTransform: "capitalize" }}>
        <strong>Name:</strong> {order.delivery_name}
      </p>
      <p>
        <strong>Total:</strong> ${order.total_price}
      </p>
      <p>
        <strong>Created:</strong> {new Date(order.created_at).toLocaleString()}
      </p>
      <p>
        <strong>Address:</strong> {order.delivery_address}
      </p>
      <p>
        <strong>Contact:</strong> {order.delivery_phone}
      </p>
      <h4>Order Items:</h4>
      <ul className="items-list">
        {order.order_items?.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} width="50" />
            <div>
              <p>{item.title}</p>
              <p>Qty: {item.quantity}</p>
              <p>
                <strong>{item.price}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderId;
