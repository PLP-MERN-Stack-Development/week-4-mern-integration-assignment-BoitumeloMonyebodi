// pages/PostDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Error loading post:", err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        navigate("/");
      } catch (err) {
        console.error("Failed to delete post:", err);
      }
    }
  };

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Posted by <span className="font-medium">{post.user?.username}</span>
      </p>
      <p className="text-lg text-gray-800 mb-6 whitespace-pre-line">
        {post.content}
      </p>

      {user && user.username === post.user?.username && (
        <div className="flex gap-4">
          <Link
            to={`/edit/${post._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}