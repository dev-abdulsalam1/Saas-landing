import { useSupabase } from "@/lib/supabase/SupabaseProvider";
import { useAuth } from "@clerk/nextjs";

// Add todo
export async function addTodo(supabase: any, userId: string, title: string, description?: string) {
  return await supabase.from("todos").insert([{ user_id: userId, title, description }]);
}

// Fetch todos
export async function getTodos(supabase: any, userId: string) {
  return await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
}

// Toggle complete
export async function toggleTodo(supabase: any, id: string, is_completed: boolean) {
  return await supabase.from("todos").update({ is_completed }).eq("id", id);
}
