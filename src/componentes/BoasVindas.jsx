import { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

export default function BoasVindas() {

  useEffect(() => {
    Alert.alert("Bem-vindo ao sistema!");
  }, []);

  return (
    <View>
      <Text>Bem-vindo!</Text>
    </View>
  );
}