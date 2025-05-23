import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./userDashboard/context/AuthProvider";
import AnimatedRoutes from "./AnimateRoutes";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
