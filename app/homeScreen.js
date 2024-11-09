import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from './authContext'; // Путь к AuthContext
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { isAuthenticated, logout } = useAuth(); // Используем useAuth
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('./authScreen'); // Если пользователь не аутентифицирован, редиректим на экран аутентификации
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать на домашнюю страницу!</Text>
      <Button title="Выйти" onPress={logout} /> {/* Кнопка выхода */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
