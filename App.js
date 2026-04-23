import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BuscaScreen from './screens/BuscaScreen';
import ClimaScreen from './screens/ClimaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Busca">
        <Stack.Screen 
          name="Busca" 
          component={BuscaScreen} 
          options={{ title: 'Buscar Cidade', headerStyle: { backgroundColor: '#2196F3' }, headerTintColor: '#fff' }} 
        />
        <Stack.Screen 
          name="Clima" 
          component={ClimaScreen} 
          options={{ title: 'Previsão do Tempo', headerStyle: { backgroundColor: '#2196F3' }, headerTintColor: '#fff' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

