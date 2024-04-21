import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import ESTILOS from '../styles';


const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

const KEY_GPT = 'SUA_CHAVE';

export function Musica() {

  const [load, defLoad] = useState(false);
  const [receita, defReceita] = useState("");

  const [ingr1, defIngr1] = useState("");
  const [ingr2, defIngr2] = useState("");
  const [ingr3, defIngr3] = useState("");
  const [ingr4, defIngr4] = useState("");
  const [ocasiao, defOcasiao] = useState("");

  async function gerarReceita() {
    if (ingr1 === "" || ingr2 === "" || ingr3 === "" || ingr4 === "" || ocasiao === "") {
      Alert.alert("Atenção", "Informe todos os ingredientes!", [{ text: "Beleza!" }])
      return;
    }
    defReceita("");
    defLoad(true);
    Keyboard.dismiss();

    const prompt = `Sugira uma receita para o ${ocasiao} usando os ingredientes: ${ingr1}, ${ingr2}, ${ingr3} e ${ingr4} e pesquise a receita no YouTube. Caso encontre, informe o link.`;



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
      defReceita(data.choices[0].message.content)
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
      <Text style={ESTILOS.header}>Criar música</Text>
      <View style={ESTILOS.form}>
        <Text style={ESTILOS.label}>Descreva as características da música:</Text>
        <TextInput
          placeholder="Ingrediente 1"
          style={ESTILOS.input}
          value={ingr1}
          onChangeText={(texto) => defIngr1(texto)}
        />
        <TextInput
          placeholder="Ingrediente 2"
          style={ESTILOS.input}
          value={ingr2}
          onChangeText={(texto) => defIngr2(texto)}
        />
        <TextInput
          placeholder="Ingrediente 3"
          style={ESTILOS.input}
          value={ingr3}
          onChangeText={(texto) => defIngr3(texto)}
        />
        <TextInput
          placeholder="Ingrediente 4"
          style={ESTILOS.input}
          value={ingr4}
          onChangeText={(texto) => defIngr4(texto)}
        />
        <TextInput
          placeholder="Almoço ou Jantar"
          style={ESTILOS.input}
          value={ocasiao}
          onChangeText={(texto) => defOcasiao(texto)}
        />
      </View>

      <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]} onPress={gerarReceita}>
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

        {receita && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Sua receita 👇</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}