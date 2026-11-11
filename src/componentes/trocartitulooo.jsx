import { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Stack } from 'expo-router';

export default function AlterarTitulo() {

  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log(`Olá, ${nome}!`);
  }, [nome]);

  return (
    <View>
      <Stack.Screen
        options={{
          title: nome ? `Olá, ${nome}!` : 'Digite seu nome'
        }}
      />

      <Text>Digite seu nome:</Text>

      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

    </View>
  );
}