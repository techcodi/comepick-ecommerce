import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./userDashboard/components/Home";
import UserLogin from "./userDashboard/components/UserLogin";
import UserSignup from "./userDashboard/components/UserSignup";
import ProtectedRoute from "./userDashboard/context/ProtectedRoute";
import CategoryList from "./userDashboard/features/Products/CategoryList";
import ProductID from "./userDashboard/features/Products/ProductID";
import UserApp from "./userDashboard/userApp/UserApp";
import Search from "./userDashboard/features/Search/Search";
import Orders from "./userDashboard/features/checkout/Orders";
import NotAuthorized from "./adminDashboard/NotAuthorized";
import Dashboard from "./adminDashboard/Dashboard";
import AdminProduct from "./adminDashboard/AdminProducts/AdminProduct";
import AllCustomers from "./adminDashboard/Customers/AllCustomers";
import Overview from "./adminDashboard/AdminOverview/Overview";
import AdminProtectedRoute from "./userDashboard/context/AdminProtectedRoute";
import AllOrders from "./adminDashboard/TableOrders.jsx/AllOrders";
import PageNotFound from "./ui/PageNotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/auth-login" element={<UserLogin />} />
        <Route path="/auth-sign-up" element={<UserSignup />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <UserApp />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<CategoryList />} />
        <Route path="/products/:id" element={<ProductID />} />
        <Route path="/items-search" element={<Search />} />
        <Route path="/order-checkout" element={<Orders />} />

        {/* Admin Dashboard Routes */}
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="all-overview" element={<Overview />} />
          <Route path="all-products" element={<AdminProduct />} />
          <Route path="all-customers" element={<AllCustomers />} />
          <Route path="all-orders" element={<AllOrders />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
