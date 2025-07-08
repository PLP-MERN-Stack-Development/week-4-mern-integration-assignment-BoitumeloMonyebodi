import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { AuthContext } from "../context/AuthContext";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => {
        setError("Failed to load post.");
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/posts/${id}`, { title, content });
      navigate('/posts/${id}'); // Redirect to the updated post page
    } catch (err) {
      setError("Failed to update post.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full border border-gray-300 p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}