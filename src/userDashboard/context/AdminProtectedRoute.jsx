import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "./AuthProvider";

function AdminProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const adminEmail = "joshuaonaolapo1@gmail.com";

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/auth-login" />;

  return user.email === adminEmail ? (
    children
  ) : (
    <Navigate to="/not-authorized" replace />
  );
}

export default AdminProtectedRoute;
