import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";
import { AuthContext } from "../../Pages/Context/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading } = useContext(AuthContext);

  if (loading){
        return <Loading></Loading>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/log-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
