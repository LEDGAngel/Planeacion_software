import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const login = (token) => {
    setAuth(token);
    setIsLogin(true);
  };

  const logout = () => {
    setAuth("");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ auth, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}