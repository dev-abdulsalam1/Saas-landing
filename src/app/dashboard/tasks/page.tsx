"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import supabase from "@/lib/supabase/supabaseClient";

type TaskStatus = "Not Started" | "In Progress" | "Done";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  due_date?: string;
};

export default function TodaysTasks() {
  const { user } = useUser();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch tasks
  useEffect(() => {
    if (!user) return;

    const fetchTasks = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("todos")
        .select("id, title, description, status, due_date")
        .eq("user_id", user.id)
        .order("due_date", { ascending: true });

      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data || []);

      setLoading(false);
    };

    fetchTasks();
  }, [user]);

  // Update task status
  const updateStatus = async (id: string, newStatus: TaskStatus) => {
    const { data, error } = await supabase
      .from("todos")
      .update({ status: newStatus })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating status:", error);
    } else if (data) {
      setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    }
  };

  // Add task
  const addTask = async () => {
    if (!newTitle || !user) return;

    const { data, error } = await supabase
      .from("todos")
      .insert([{
        user_id: user.id,
        title: newTitle,
        description: newDescription,
        status: "Not Started",
        due_date: new Date().toISOString()
      }])
      .select() // Important to select after insert to get the new row
      .single();

    if (error) {
      console.error("Error adding task:", error);
    } else if (data) {
      setTasks([...tasks, data]);
      setNewTitle("");
      setNewDescription("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' })}
      </h1>

      {/* Add Task */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Task title..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          className="flex-1 p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Description..."
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          className="flex-1 p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Tasks Table */}
      {loading ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-100 dark:bg-gray-900">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr
                  key={task.id}
                  className={`border-t border-gray-200 dark:border-gray-700 ${idx % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"} hover:bg-gray-100 dark:hover:bg-gray-800 transition`}
                >
                  <td className={`px-4 py-2 ${task.status === "Done" ? "line-through text-gray-400" : ""}`}>
                    {task.title}
                  </td>
                  <td className="px-4 py-2">{task.description}</td>
                  <td className="px-4 py-2">
                    <select
                      value={task.status}
                      onChange={e => updateStatus(task.id, e.target.value as TaskStatus)}
                      className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700"
                    >
                      <option>Not Started</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">{task.due_date ? new Date(task.due_date).toLocaleString() : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
