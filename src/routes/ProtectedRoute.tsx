
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth/AuthContext";

interface ProtectedRouteProps {
  element: React.ReactElement;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  roles = [],
}) => {
  const { isAuthenticated, roles: userRoles } = useAuth();
  const location = useLocation();  
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  } 

  if (roles.length > 0 && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to="/not-authorized" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
