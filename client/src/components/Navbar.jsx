import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">MERN Blog</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span className="text-gray-700">Hello, {user.username}</span>
            <Link to="/posts/new" className="text-blue-500 hover:underline">Create Post</Link>
            <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}