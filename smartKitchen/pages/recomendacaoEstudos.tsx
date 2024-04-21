import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import ESTILOS from '../styles';


const alturaStatusBar = StatusBar.currentHeight;
const alturaTela = Dimensions.get('window').height;

const KEY_GPT = 'SUA_CHAVE';

export function RecomendacaoEstudos() {

  const [load, defLoad] = useState(false);
  const [planoEstudos, defPlanoEstudos] = useState("");

  const [conteudo, defConteudo] = useState("");
  const [materia, defMateria] = useState("");
  const [tempo, defTempo] = useState("");

  async function gerarPlanoEstudos() {
    if (conteudo === "" || materia === "" || tempo === "") {
      Alert.alert("Atenção", "Informe todos os ingredientes!", [{ text: "Beleza!" }])
      return;
    }
    defPlanoEstudos("");
    defLoad(true);
    Keyboard.dismiss();

    const prompt = `Elabore um plano de estudos sobre o conteúdo ${conteudo}, na matéria ${materia} enm um período de ${tempo}`;



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
      defPlanoEstudos(data.choices[0].message.content)
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
      <Text style={ESTILOS.header}>Study Smart</Text>
      <View style={ESTILOS.form}>
        <Text style={ESTILOS.label}>Descreva como você pretende estudar:</Text>
        <TextInput
          placeholder="Conteúdo à ser Estudado"
          style={ESTILOS.input}
          value={conteudo}
          onChangeText={(texto) => defConteudo(texto)}
        />
        <TextInput
          placeholder="Matéria EX: (Matemática, Inglês...)"
          style={ESTILOS.input}
          value={materia}
          onChangeText={(texto) => defMateria(texto)}
        />
        <TextInput
          placeholder="Tempo de Estudos EX: (6, 24...) Meses"
          style={ESTILOS.input}
          value={tempo}
          onChangeText={(texto) => defTempo(texto)}
        />
      </View>

      <TouchableOpacity style={[ESTILOS.button, { height: alturaTela * 0.1 }]} onPress={gerarPlanoEstudos}>
        <Text style={ESTILOS.buttonText}>Gerar plano de estudos</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4, }} style={ESTILOS.containerScroll} showsVerticalScrollIndicator={false} >
        {load && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Produzindo plano de estudos...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}

        {planoEstudos && (
          <View style={ESTILOS.content}>
            <Text style={ESTILOS.title}>Seu Plano de Estudos 👇</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}
