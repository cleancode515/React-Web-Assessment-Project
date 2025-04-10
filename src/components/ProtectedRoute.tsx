import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserRole } from "../types/authTypes";

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles: UserRole[];
};

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user && !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  return <>{children}</>;
};
