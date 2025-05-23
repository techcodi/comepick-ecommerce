import { useQuery } from "@tanstack/react-query";
import { adminProductsList } from "../AdminProducts/AdminProductFn";
import Spinner from "../Spinner";
import AllOrders from "../TableOrders.jsx/AllOrders";
import { displayOrders } from "../TableOrders.jsx/Orders";
import "./Overview.css";
function Overview() {
  const { products, isLoading } = adminProductsList();

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: displayOrders,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1>Overview</h1>

      <div className="overview-grid">
        <div className="overview-grid-1">
          <h4>Total Products:</h4> <p>{products.length}</p>
        </div>

        <div className="overview-grid-2">
          <h4>Total Orders:</h4> <p>{orders.length}</p>
        </div>

        <div className="overview-grid-3">
          <h4>Total Revenue:</h4>
          <div className="overview-spinner">
            <Spinner />
          </div>
        </div>
      </div>
      <AllOrders />
    </div>
  );
}

export default Overview;
