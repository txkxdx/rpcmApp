import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = (username, password) => {
    if (username === "temik" && password === "12345") {
      setIsAuthenticated(true); // Меняем состояние после успешного входа
      router.push('/homeScreen'); // Переходим на главный экран
    }
  };

  const logout = () => {
    setIsAuthenticated(false); // Меняем состояние на неаутентифицированного пользователя
    router.push('/authScreen'); // Возвращаемся на экран аутентификации
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
