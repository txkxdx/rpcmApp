import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzK0bszbNmfIV_STcQVuYV-v2KGVGORC0",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "rpcmproject",
  storageBucket: "rpcmproject.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:809871522182:android:d65a525e11b5661aa35407",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      router.push("/homeScreen");
    } catch (error) {
      console.error("Ошибка авторизации: ", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      router.push("/authScreen"); // Переход на экран аутентификации
    } catch (error) {
      console.error("Ошибка выхода: ", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
