// src/App.tsx
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import TaskManager from "./TaskManager";
import PostList from "./components/PostList";

export default function App() {
  const [page, setPage] = useState<"tasks" | "posts">("tasks");

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <nav className="flex justify-center gap-4 p-4 bg-blue-600 text-white">
          <button
            onClick={() => setPage("tasks")}
            className={`px-4 py-2 rounded-lg ${
              page === "tasks" ? "bg-blue-800" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            🧾 Task Manager
          </button>
          <button
            onClick={() => setPage("posts")}
            className={`px-4 py-2 rounded-lg ${
              page === "posts" ? "bg-blue-800" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            📰 Post Viewer
          </button>
        </nav>

        {page === "tasks" ? <TaskManager /> : <PostList />}
      </div>
    </ThemeProvider>
  );
}
