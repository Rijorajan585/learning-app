import React, { createContext, ReactNode, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { login, logout } from "./authSlice";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  roles: string[];
  login: (credentials: { username: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, roles } = useAppSelector((state) => state.auth);

  //   useEffect(() => {
  //     // On app load, check if the user is authenticated
  //     const accessToken = localStorage.getItem('accessToken');
  //     if (accessToken) {
  //       // Here you might want to verify the token or make an API call
  //       dispatch(login({ username: '', password: '' })); // Dummy login to set state
  //     }
  //   }, [dispatch]);

  const loginUser = async (credentials: {
    username: string;
    password: string;
  }) => {
    try {
      await dispatch(login(credentials)).unwrap();
      console.log("Login successful"); // Optionally handle successful login, e.g., show a notification
    } catch (error) {
      // Optionally handle login error, e.g., show an error message
      console.error("Login failed:", error);
    }
  };

  const logoutUser = () => {
    console.log("Login out");
    dispatch(logout());
    navigate("/login"); // Optionally handle logout, e.g., redirect to login page
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, roles, login: loginUser, logout: logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
