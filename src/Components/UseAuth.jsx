import { useEffect } from "react";
import api from "../Api";

const useAuthCheck = () => {
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("your token is not valid");
          return;
        }

        const res = await api.get("/user/pro", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("User:", res.data);
      } catch (err) {
        console.log(err);
      }
    };

    checkToken();
  }, []);
};

export default useAuthCheck;