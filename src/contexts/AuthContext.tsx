/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] =
    useState(() => {
      return localStorage.getItem("nesa_auth") === "true";
    });

  const login = (
    email: string,
    password: string
  ) => {
    // فعلاً Login آزمایشی است
    const isValid =
      email === "admin@nesa.com" &&
      password === "123456";

    if (!isValid) {
      return false;
    }

    localStorage.setItem("nesa_auth", "true");
    setIsAuthenticated(true);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("nesa_auth");
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}