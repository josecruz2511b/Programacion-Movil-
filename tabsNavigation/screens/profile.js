import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Detalles"
          onPress={() => navigation.navigate('UserDetail')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000000ff', 
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#e0f23bff',
    borderColor: '#06080bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000ff',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonProfile: {
    backgroundColor: '#010101ff', // Azul
  },
  buttonSettings: {
    backgroundColor: '#FF8800', // Naranja
  },
  buttonText: {
    color: '#010101ff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonHome: {
    backgroundColor: '#28A745', // Verde
  },
});