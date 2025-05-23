import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://tjvireqkggaqqgudcxah.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdmlyZXFrZ2dhcXFndWRjeGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDU3NjEsImV4cCI6MjA2MDQ4MTc2MX0.m6A8KgXefDwY17a9Jhmxai1eWSMW4RnDX3IY0HnT08Q";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
