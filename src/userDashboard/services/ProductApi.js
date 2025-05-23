import { useParams } from "react-router-dom";

export async function productApi() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products;
}

export async function productId(id) {
  const url = `https://dummyjson.com/products/${id}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getProductCategories(categoryName) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${encodeURIComponent(
      categoryName
    )}`
  );
  if (!res.ok) throw new Error("Failed to get category products");
  const data = await res.json();
  return data.products;
}
export async function getProductCategoriesList() {
  const res = await fetch(`https://dummyjson.com/products/categories`);
  if (!res.ok) throw new Error("Failed to get items");
  return res.json();
}
