import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Loader from "../components/Loader";
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  return user ? children : <Navigate to="/auth-login" />;
}

export default ProtectedRoute;
