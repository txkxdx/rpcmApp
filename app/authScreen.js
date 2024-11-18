import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Image } from "react-native";
import { useAuth } from "./authContext";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={require('../assets/images/elephant.jpg')}
          style={styles.circleImage}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#008CBA', // Бирюзовый цвет фона
  },
  title: {
    fontSize: 27,
    marginBottom: 16,
    color: '#fff',  // Белый цвет текста для заголовка
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Делаем элемент кругом
    backgroundColor: '#fff', // Белый фон круга
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Отступ от круга до остальных элементов
    overflow: 'hidden', // Это обрезает изображение, если оно выходит за круг
  },

  circleImage: {
    width: '100%',  // Изображение будет растягиваться по ширине круга
    height: '100%', // Изображение будет растягиваться по высоте круга
  },

  circleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#40E0D0', // Цвет текста в кружке
  },

  input: {
    width: '50%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', // Белый фон для полей ввода
  },
});
