import { useQuery } from "@tanstack/react-query";
import { displayOrders } from "./Orders";

export function getOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: displayOrders,
  });
}
