import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getProductCategories,
  getProductCategoriesList,
} from "../../services/ProductApi";

export function categoryApiFunction() {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => getProductCategories(categoryName),
  });

  return { data, isLoading, error };
}

export function categoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: getProductCategoriesList,
  });

  return { data, isLoading, error };
}
