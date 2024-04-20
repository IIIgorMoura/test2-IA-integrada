import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

export function Home() {
  return (
    <View style={ESTILOS.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />
      <Text style={ESTILOS.header}>Smart AI</Text>


      <View style={ESTILOS.containerBotoes}>
        <Text style={ESTILOS.title}>Escolha para que deseja utilizar o poder da IA no momento:</Text>

        <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]}>
          <Text style={ESTILOS.buttonText}>Problemas no carro</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]}>
          <Text style={ESTILOS.buttonText}>Criar música</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]}>
          <Text style={ESTILOS.buttonText}>Criar plano de estudos</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]}>
          <Text style={ESTILOS.buttonText}>Traduzir texto</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ESTILOS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  containerBotoes: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? alturaStatusBar : 54
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
    color: '#fff',
  },
});

export default Home;