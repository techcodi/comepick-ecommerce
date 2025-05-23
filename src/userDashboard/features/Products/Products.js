import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../services/ProductApi";

export function productsList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });

  return { products, isLoading };
}
