import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ClimaCard from '../components/ClimaCard';

export default function ClimaScreen({ route }) {
  const { climaData } = route.params;

  const cidade = climaData.name;
  const pais = climaData.sys.country;
  const temp = climaData.main.temp.toFixed(1);
  const sensacao = climaData.main.feels_like.toFixed(1);
  const umidade = climaData.main.humidity;
  const vento = climaData.wind.speed.toFixed(1);
  const descricao = climaData.weather[0].description;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cidade}>{cidade}, {pais}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.descricao}>{descricao.toUpperCase()}</Text>
      </View>

      <View style={styles.cardsContainer}>
        <ClimaCard titulo="Sensação Térmica" valor={sensacao + '°C'} icone="🌡️" />
        <ClimaCard titulo="Umidade" valor={umidade + '%'} icone="💧" />
        <ClimaCard titulo="Vento" valor={vento + ' m/s'} icone="💨" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    alignItems: 'center',
  },
  cidade: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  cardsContainer: {
    padding: 20,
  },
});

