// app/_layout.js
import React from 'react';
import { Slot } from 'expo-router';
import { AuthProvider } from './authContext'; // Импортируйте AuthProvider

export default function Layout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
