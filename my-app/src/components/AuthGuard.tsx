import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: JSX.Element;       //children is a special React prop that represents the content inside a component.
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = !!localStorage.getItem("token");    // Check if token exists (A token is a unique string (usually a JWT - JSON Web Token) that is used to verify a user's authentication status.)

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthGuard;
