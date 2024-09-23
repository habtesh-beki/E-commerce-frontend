import React, { useEffect, useState } from "react";

const mockLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };
  const mockLogout = () => {
    localStorage.removeItem("user");
  };
  
  const AuthContext = React.createContext();
  
  const useAuth = () => {
    return React.useContext(AuthContext);
  }
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  
    const login = (userData) => {
      const loggedInUser = mockLogin(userData);
      setUser(loggedInUser);
    };
  
    const logout = () => {
      mockLogout();
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export { AuthProvider, useAuth };