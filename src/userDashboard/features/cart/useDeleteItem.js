import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteItemApi } from "./useCartApi";

export function useDeleteItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isLoading: isDeleting } = useMutation({
    mutationFn: deleteItemApi,
    onSuccess: () => {
      toast.success("Item successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message || "Error deleting item");
    },
  });

  return { deleteItem, isDeleting };
}
