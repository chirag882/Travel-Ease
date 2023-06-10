import React, {  useEffect, useState } from "react";
import {message} from 'antd';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const validateToken = async () => {
    try {
      const tok = localStorage.getItem("token");

      const response = await axios.post(
        "/api/users/get-user-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        }
      );
      if (response.data.success) {
        setLoading(false);
      } else {
        setLoading(false);
        localStorage.removeItem("token");
        message.error(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("token");
      message.error(error.message);
      setLoading(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  });

  return <div>{loading ? <div>loading...</div> : <>{children}</>}</div>;
};

export default ProtectedRoute;
