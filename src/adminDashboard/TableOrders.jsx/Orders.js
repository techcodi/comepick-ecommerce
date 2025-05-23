import supabase from "../../userDashboard/userAuth/supabase";

export async function displayOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("id , created_at");

  console.log("Fetched orders:", data);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
