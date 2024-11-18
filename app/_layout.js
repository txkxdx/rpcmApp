import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import { AuthProvider } from './authContext';
import { useAuth } from './authContext';
import { useRouter } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <AuthenticatedLayout />
    </AuthProvider>
  );
}

function AuthenticatedLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/authScreen");
    }
  }, [isAuthenticated]);

  return <Slot />;
}

