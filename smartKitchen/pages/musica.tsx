import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import ESTILOS from '../styles';


const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

const KEY_GPT = 'SUA_CHAVE';

export function Musica() {

  const [load, defLoad] = useState(false);
  const [musica, defMusica] = useState("");

  const [estiloMusica, defEstiloMusica] = useState("");
  const [numeroEstrofes, defNumeroEstrofes] = useState("");
  const [tema, defTema] = useState("");

  async function gerarMusica() {
    if (estiloMusica === "" || numeroEstrofes === "" || tema === "") {
      Alert.alert("Atenção", "Informe todos os ingredientes!", [{ text: "Beleza!" }])
      return;
    }
    defMusica("");
    defLoad(true);
    Keyboard.dismiss();

    const prompt = `Crie uma música do estilo ${estiloMusica}, com ${numeroEstrofes} estrofes sobre o tema ${tema}`;



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
      defMusica(data.choices[0].message.content)
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
      
      <img style={ESTILOS.imgHeader} src="../assets/IA-logo.png"/>
      <Text style={ESTILOS.header}>Criar música</Text>
      <View style={ESTILOS.form}>
        <Text style={ESTILOS.label}>Descreva as características da música:</Text>
        <TextInput
          placeholder="Estilo Musical"
          style={ESTILOS.input}
          value={estiloMusica}
          onChangeText={(texto) => defEstiloMusica(texto)}
        />
        <TextInput
          placeholder="Número de estrofes da Música"
          style={ESTILOS.input}
          value={numeroEstrofes}
          onChangeText={(texto) => defNumeroEstrofes(texto)}
        />
        <TextInput
          placeholder="Tema da Música"
          style={ESTILOS.input}
          value={tema}
          onChangeText={(texto) => defTema(texto)}
        />
      </View>

      <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]} onPress={gerarMusica}>
        <Text style={ESTILOS.buttonText}>Gerar música</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4, }} style={ESTILOS.containerScroll} showsVerticalScrollIndicator={false} >
        {load && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Produzindo música...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}

        {musica && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Sua música 👇</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}