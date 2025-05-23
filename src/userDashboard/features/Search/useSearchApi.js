export async function searchProducts(query) {
  const baseUrl = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : `https://dummyjson.com/products`;

  const res = await fetch(baseUrl);

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}
