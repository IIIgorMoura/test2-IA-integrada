import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import ESTILOS from '../styles';

import { Mecanico } from './mecanico';
import { Musica } from './musica'
import { RecomendacaoEstudos } from './recomendacaoEstudos'
import { Traducao } from './traducao'

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
          onPress={() => navigation.navigate('Mecanico')}
        >
          <Text style={ESTILOS.buttonText}>Encontrar problemas no carro</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Musica')}
        >
          <Text style={ESTILOS.buttonText}>Criar música</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('RecomendacaoEstudos')}
        >
          <Text style={ESTILOS.buttonText}>Criar plano de estudos</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ESTILOS.button, { height: alturaTela * 0.1 }]}
          onPress={() => navigation.navigate('Traducao')}
        >
          <Text style={ESTILOS.buttonText}>Traduzir texto</Text>
          <MaterialIcons name="travel-explore" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;