import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador foi alterado!");
  }, [contador]);

  return (
    <View>
      <Text>Contador: {contador}</Text>

      <Button
        title="Aumentar"
        onPress={() => setContador(contador + 1)}
      />

      <Button
        title="Diminuir"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
}