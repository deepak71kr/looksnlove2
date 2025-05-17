import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/check-auth", { 
          withCredentials: true 
        });
        
        if (response.data.success && response.data.user) {
          login(response.data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate, login]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
