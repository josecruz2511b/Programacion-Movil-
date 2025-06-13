import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Texto = (props) => {
  const {children}=props
  return (
    <Text>{children}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Texto>"Hola"</Texto>
      <Texto>"Mundo"</Texto>
      <Texto>React native</Texto>
      
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
