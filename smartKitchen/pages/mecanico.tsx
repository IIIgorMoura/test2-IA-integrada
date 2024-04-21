import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react'

import ESTILOS from '../styles';


const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

const KEY_GPT = 'SUA_CHAVE';

export function Mecanico() {

  const [load, defLoad] = useState(false);
  const [diagnostico, defDiagnostico] = useState("");

  const [carro, defCarro] = useState("");
  const [problemaCarro, defProblemaCarro] = useState("");

  async function gerarDiagnostico() {
    if (carro === "" || problemaCarro === "") {
      Alert.alert("Atenção", "Informe todos os ingredientes!", [{ text: "Beleza!" }])
      return;
    }
    defDiagnostico("");
    defLoad(true);
    Keyboard.dismiss();

    const prompt = `Dê o diagnóstico de qual pode ser o problema ${problemaCarro}. No veículo ${carro}`;



    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_GPT}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
        top_p: 1,
      })
    })

    .then(response => response.json())
    .then((data) => {
      console.log(data.choices[0].message.content);
      defDiagnostico(data.choices[0].message.content)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      defLoad(false);
    })
  }

  return (
    <View style={ESTILOS.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />
      <Text style={ESTILOS.header}>Diagnóstico Automotivo</Text>
      <View style={ESTILOS.form}>
        <Text style={ESTILOS.label}>Descreva o problema do seu veículo:</Text>
        <TextInput
          placeholder="Informações do Veículo"
          style={ESTILOS.input}
          value={carro}
          onChangeText={(texto) => defCarro(texto)}
        />
        <TextInput
          placeholder="Problema Percebido no Veículo"
          style={ESTILOS.input}
          value={problemaCarro}
          onChangeText={(texto) => defProblemaCarro(texto)}
        />
      </View>

      <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]} onPress={gerarDiagnostico}>
        <Text style={ESTILOS.buttonText}>Encontrar diagnóstico</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4, }} style={ESTILOS.containerScroll} showsVerticalScrollIndicator={false} >
        {load && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Analizando diagnósticos...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}

        {diagnostico && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Diagnóstico do problema no Veículo</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
};

export default Mecanico