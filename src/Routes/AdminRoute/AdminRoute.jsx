import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Pages/Shared/Loading/Loading";
import { AuthContext } from "../../Pages/Context/UserContext";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading } = useContext(AuthContext);
  const [isAdmin,isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading){
        return <Loading></Loading>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/log-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
