import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebPageScreen() {
  const ipUrl = 'https://my.rpcm.cloud'; // Замените на нужный IP-адрес

  return (
    <View style={styles.container}>
      <WebView source={{ uri: ipUrl }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
