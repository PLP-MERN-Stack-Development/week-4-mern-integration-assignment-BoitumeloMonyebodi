import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      setLoading(true);
      await axios.post("/api/posts", { title, content });
      setLoading(false);
      navigate("/"); // Redirect to home or posts list page
    } catch (error) {
      setLoading(false);
      alert("Failed to create post, please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter post title"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block mb-2 font-semibold" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          placeholder="Enter post content"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          disabled={!title || !content || loading}
          className={`w-full bg-blue-600 text-white py-2 rounded ${
            !title || !content || loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}