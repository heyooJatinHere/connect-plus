import { useState, useContext } from "react";
import { signupUser, loginUser } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // first create the user
      await signupUser({ username, email, password });

      // now login automatically
      const res = await loginUser({ email, password });

      // save user in context
      login(res.data.user, res.data.token);

      // redirect to interests page
      navigate("/interests");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white p-2 rounded cursor-pointer"
        >
          Create Account
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-blue-600 text-center mt-4 cursor-pointer"
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
