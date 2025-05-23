import supabase from "../../userAuth/supabase";

export async function addToCart(product) {
  const { data: authUser, error: authError } = await supabase.auth.getUser();

  if (authError || !authUser?.user?.id) {
    console.error("Authentication error:", authError);
    throw new Error("User not authenticated");
  }

  const userId = authUser.user.id;

  const { data: existing, error: fetchError } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId)
    .eq("product_id", Number(product.id))
    .maybeSingle();

  if (fetchError) {
    console.error("Error checking cart:", fetchError);
    throw new Error("Failed to check cart");
  }

  const newQuantity = existing ? existing.product_quantity + 1 : 1;

  const { data, error: upsertError } = await supabase
    .from("cart")
    .upsert(
      [
        {
          user_id: userId,
          product_id: product.id,
          product_title: product.title,
          product_price: product.price,
          product_image: product.thumbnail,
          product_quantity: newQuantity,
        },
      ],
      { onConflict: ["user_id", "product_id"] }
    )
    .select();

  if (upsertError) {
    console.error("Error inserting/updating cart item:", upsertError);
    throw new Error("Failed to add product to cart");
  }

  console.log("Cart item added/updated:", data);
}

export async function deleteItemApi(id) {
  const { error } = await supabase.from("cart").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }
}
