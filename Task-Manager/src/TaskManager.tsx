// src/components/TaskManager.tsx
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { useTheme } from "./context/ThemeContext";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [newTask, setNewTask] = useState("");
  const { theme, toggleTheme } = useTheme();

  // useEffect example (side effects)
  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = { id: Date.now(), text: newTask.trim(), completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-6 transition-colors ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Task Manager ✅</h1>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Input section */}
      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="border rounded-lg px-3 py-2 w-64 focus:ring focus:ring-blue-300 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-3 py-1 rounded-lg ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Task list */}
      <ul className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No tasks found
          </p>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
