import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ClimaCard({ titulo, valor, icone }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icone}>{icone}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  icone: {
    fontSize: 40,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 5,
    textAlign: 'center',
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});

