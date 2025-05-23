import supabase from "../../userAuth/supabase";

export async function getOrders(userId) {
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching cart items:", error);
    throw new Error("Could not fetch cart items");
  }

  return data;
}
