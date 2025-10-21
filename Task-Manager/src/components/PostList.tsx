import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const POSTS_PER_PAGE = 10;

  // ✨ Simple AI-like English content generator
  const generateEnglishPost = (id: number): Post => {
    const topics = [
      "React Development",
      "JavaScript Tips",
      "Tailwind CSS",
      "Web Performance",
      "Frontend Security",
      "APIs and REST",
      "TypeScript Essentials",
      "Modern UI Design",
      "State Management",
      "Debugging Techniques",
    ];

    const verbs = [
      "explores",
      "simplifies",
      "enhances",
      "boosts",
      "improves",
      "transforms",
      "empowers",
      "optimizes",
      "demystifies",
      "unlocks",
    ];

    const phrases = [
      "for better developer productivity.",
      "that every frontend engineer should know.",
      "to build faster and scalable apps.",
      "with real-world coding examples.",
      "using practical design principles.",
      "in 2025 and beyond.",
      "that simplify everyday tasks.",
      "through modern architecture patterns.",
      "for beginners and experts alike.",
      "that redefine the way we code.",
    ];

    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const title = `${random(topics)} ${random(verbs)}`;
    const body = `This post ${random(verbs)} the core concepts of ${random(
      topics
    )} ${random(phrases)} It provides practical guidance and hands-on examples to help developers understand how to apply these techniques effectively in real projects.`;

    return { id, title, body };
  };

  // Fetch posts (simulate API + AI generation)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();

        // Transform into English AI-like text
        const englishPosts = data.map((_: any, index: number) =>
          generateEnglishPost(index + 1)
        );

        setPosts(englishPosts);
        setFilteredPosts(englishPosts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Search filtering
  useEffect(() => {
    const results = posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(results);
    setPage(1);
  }, [search, posts]);

  // Pagination
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  if (loading)
    return (
      <div className="text-center mt-10 text-lg text-blue-500">
        Loading intelligent posts...
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        ⚠️ Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">AI-Generated Posts 🧠</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-3 py-1 rounded-lg ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        <span className="text-lg font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-3 py-1 rounded-lg ${
            page === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
