import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Texto = (props) => {
  const {contenido}=props
  return (
    <Text>{contenido}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Texto contenido="hola"></Texto>
      <Texto contenido="mundo"></Texto>
      <Texto contenido="Probando ReacNative"></Texto>
      <Texto></Texto>
      <Button title="presioname"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
