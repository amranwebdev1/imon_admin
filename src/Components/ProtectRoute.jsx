import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../Api";

const ProtectRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setChecking(false);
        return;
      }

      try {
        await api.get("/user/pro", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setValid(true);
      } catch {
        localStorage.removeItem("token");
      }

      setChecking(false);
    };

    verify();
  }, []);

  if (checking) return <h1 className="text-center mt-20">Checking...</h1>;

  if (!valid) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectRoute;