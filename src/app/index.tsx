import { View, StyleSheet } from 'react-native';

import BoasVindas from '../componentes/BoasVindas';
import Contador from '../componentes/contador';
import AlterarTitulo from '../componentes/trocartitulooo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <BoasVindas />

      <Contador />

      <AlterarTitulo />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    gap: 20,
  },
});