import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image, Pressable} from 'react-native';
import  Login  from './Componentes/Login';
import Registro from './Componentes/Registro';
import Estadistica from './Componentes/Estadisticas';

export default function App() {
  return (
    <Estadistica></Estadistica>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273746',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:5,
    borderColor:'#2ecc71',
    
  },
  

});
