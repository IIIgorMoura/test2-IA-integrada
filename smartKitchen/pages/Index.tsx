import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons/';
import ESTILOS from '../styles';

const alturaTela = Dimensions.get('window').height;

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={ESTILOS.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />
      <Image style={ESTILOS.imgHeader} source={require('../assets/IA-logo.png')} />
      <Text style={ESTILOS.header}>Smart AI</Text>

      <View style={ESTILOS.containerBotoes}>
        <Text style={ESTILOS.title}>Escolha para que deseja utilizar o poder da IA no momento:</Text>
        
        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Mecanica')}
        >
          <Text style={ESTILOS.buttonText}>Encontrar problemas no carro</Text>
          <Ionicons size={30} color={"#fff"} name="car-sport-outline" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Musica')}
        >
          <Text style={ESTILOS.buttonText}>Criar música</Text>
          <Ionicons size={30} color={"#fff"} name="musical-notes-outline" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Planejador de Estudos')}
        >
          <Text style={ESTILOS.buttonText}>Criar plano de estudos</Text>
          <Ionicons size={30} color={"#fff"} name="book-outline" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Tradutor de Textos')}
        >
          <Text style={ESTILOS.buttonText}>Traduzir texto</Text>
          <Ionicons size={30} color={"#fff"} name="earth-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;