import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function HomeScreen() {
  const data = [
    { id: '1', title: 'RPCM №1', url: 'http://185.83.243.4' },
    { id: '2', title: 'RPCM №2', url: 'http://185.83.243.5' },
  ];

  const handlePress = async (url) => {
    // Проверка доступности URL перед открытием
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      alert(`Cannot open this URL: ${url}`);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item.url)}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of equipment</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#008CBA', // Бирюзовый фон для элементов списка
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
