import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import api from '../../Api'
const Login = () => {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const token = localStorage.getItem("token");

  // ✅ যদি token থাকে → Login page দেখা যাবে না
  if(token){
    return <Navigate to="/" replace />;
  }

  const handleLogin = async (e)=>{
    e.preventDefault();

    try{
      const res = await api.post("/user/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.jwt_token);

      setRedirect(true);   // ✅ redirect trigger
    }catch(err){
      alert("Login failed!");
    }
  };

  // ✅ login success → redirect
  if(redirect){
    return <Navigate to="/" replace />;
  }

  return (
    <section className="h-[100vh] flex justify-center items-center bg-gray-100">

      <form onSubmit={handleLogin} className="p-6 bg-white rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input-numor"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-numor mt-2"
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="btn-numor mt-3">
          Login
        </button>

      </form>
    </section>
  );
};

export default Login;