import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import ESTILOS from '../styles';


const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

const KEY_GPT = 'SUA_CHAVE';

export function Traducao() {

  const [load, defLoad] = useState(false);
  const [traducao, defTraducao] = useState("");

  const [text, defText] = useState("");
  const [lingua, defLingua] = useState("");

  async function traduzirText() {
    if (text === "" || lingua === "") {
      Alert.alert("Atenção", "preencha todas as informações!", [{ text: "Beleza!" }])
      return;
    }
    defTraducao("");
    defLoad(true);
    Keyboard.dismiss();

    const prompt = `Traduza o texto à seguir para ${lingua}: ${text}`;



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
      defTraducao(data.choices[0].message.content)
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
      <Text style={ESTILOS.header}>Translate AI</Text>
      <View style={ESTILOS.form}>
        <Text style={ESTILOS.label}>Insira o que você deseja traduzir:</Text>
        <TextInput
          placeholder="Texto que será Traduzido"
          style={ESTILOS.input}
          value={text}
          onChangeText={(texto) => defText(texto)}
        />
        <TextInput
          placeholder="Linguagem da Tradução"
          style={ESTILOS.input}
          value={lingua}
          onChangeText={(texto) => defLingua(texto)}
        />
      </View>

      <TouchableOpacity  style={[ESTILOS.button, { height: alturaTela * 0.1 }]} onPress={traduzirText}>
        <Text style={ESTILOS.buttonText}>Traduzir texto</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4, }} style={ESTILOS.containerScroll} showsVerticalScrollIndicator={false} >
        {load && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Traduzindo texto...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}

        {traducao && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Sua receita 👇</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}