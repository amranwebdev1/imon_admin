import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "../../Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checking, setChecking] = useState(true);  // token checking state
  const [valid, setValid] = useState(false);       // token valid?
  const [redirect, setRedirect] = useState(false); // login success?

  // ✅ Step–1: Token Valid কিনা চেক করো
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setChecking(false); // no token → show login page
        return;
      }

      try {
        const res = await api.get("/user/pro", {
          headers: { Authorization: `Bearer ${token}` }
        });

        // token valid
        setValid(true);
      } catch (err) {
        // ❌ token invalid → remove it
        localStorage.removeItem("token");
      }

      setChecking(false);
    };

    verifyToken();
  }, []);

  // ⛔ Still checking token
  if (checking) {
    return <h1 className="text-center mt-20 text-xl">Checking...</h1>;
  }

  // ✔ token valid → redirect to Home
  if (valid) {
    return <Navigate to="/" replace />;
  }

  // ✔ Login successful → redirect home
  if (redirect) {
    return <Navigate to="/" replace />;
  }

  // -----------------------
  // Login Form UI
  // -----------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.jwt_token);
      setRedirect(true);
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <section className="h-[100vh] flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input-numor"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-numor mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-numor mt-3">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;