import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BuscaScreen() {
  const [cidade, setCidade] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigation = useNavigation();

  const buscarClima = async () => {
    if (!cidade.trim()) {
      Alert.alert('Erro', 'Digite o nome da cidade');
      return;
    }

    setLoading(true);
    setErro('');

    try {
      const API_KEY = 'YOUR_API_KEY_HERE'; // Substitua pela sua chave da OpenWeatherMap
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${API_KEY}&units=metric&lang=pt_br`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }

      const data = await response.json();
      navigation.navigate('Clima', { climaData: data });
    } catch (error) {
      setErro(error.message || 'Erro na busca');
      Alert.alert('Erro', error.message || 'Erro ao buscar clima');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌤️ Clima App</Text>
      <Text style={styles.subtitulo}>Digite o nome da cidade</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ex: São Paulo, Rio de Janeiro"
        value={cidade}
        onChangeText={setCidade}
        editable={!loading}
      />
      
      <TouchableOpacity 
        style={[styles.botao, loading && styles.botaoDisabled]} 
        onPress={buscarClima}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.botaoTexto}>🔍 Buscar Clima</Text>
        )}
      </TouchableOpacity>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1565C0',
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#424242',
  },
  input: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoDisabled: {
    backgroundColor: '#90CAF9',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  erro: {
    color: '#f44336',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

