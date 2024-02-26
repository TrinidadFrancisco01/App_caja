import {Button, StyleSheet, Text, TextInput, View ,Image, Pressable  } from "react-native";

export const Registro=()=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/icon-login.png')}
            style={styles.logo}></Image>
            <Text style={styles.titulo}>Registrarse</Text>
            <Text style={styles.textoCajas}>Usuario:</Text>
            <TextInput style={styles.cajas}></TextInput>
            <Text style={styles.textoCajas}>Correo Electronico:</Text>
            <TextInput style={styles.cajas}></TextInput>
            <Text style={styles.textoCajas}>Contraseña:</Text>
            <TextInput style={styles.cajas}></TextInput>
            <Text style={styles.textoCajas}>Confirmar Contraseña:</Text>
            <TextInput style={styles.cajas}></TextInput>
            <Boton></Boton>
            <Botonera></Botonera>
        </View>
    )
}
const Boton=()=>{
    return(
      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>Registrarse</Text>
      </Pressable>
    )
  }
  const Botonera=()=>{
    return(
      <View style={styles.botonera}>
        <Pressable style={styles.boton2}>
          <Text style={styles.textoBoton}>Inicio</Text>
        </Pressable >
        <Pressable style={styles.boton2}>
          <Text style={styles.textoBoton}>Configuración</Text>
        </Pressable>
        <Pressable style={styles.boton2}>
          <Text style={styles.textoBoton}>Notificaciones</Text>
        </Pressable>
      </View>
  
      
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273746',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:5,
        borderColor:'#2ecc71',
        height: '80%', // Cambia la altura del contenedor
      },
    textoCajas: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    
      },
      cajas:{
        padding: 8,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#ddd',
        backgroundColor: '#2f3640',
        color: '#fff',
        width:'60%',
        borderWidth: 1, // Ancho del borde
    
      },
      logo: {
        width:100,
        height: 100,
        marginBottom:20,
      },
      titulo:{
        fontSize: 40,
        fontWeight:'bold',
        marginBottom:20,
        color:'#F7F9F9',
      },
      boton: {
        width: '60%',
        height: 40,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      textoBoton: {
        color: 'white',
        fontWeight: 'bold',
      },
      botonera: {
        textAlign:'center',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'black',
        height:'5%'
      },
      boton2:{
        width: '30%',
        height: 30,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }
  })

  export default Registro