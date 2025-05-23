import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../userDashboard/services/ProductApi";

export function adminProductsList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });

  return { products, isLoading };
}
