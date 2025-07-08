// pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="border p-4 mb-4 rounded hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content.slice(0, 120)}...</p>
            <Link
              to={`/posts/${post._id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
        ))
      )}
    </div>
  );
}