import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Texto = () => {
  return (
    <Text>Hola  desde ReacNative</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text>Probando ReacNative</Text>
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
