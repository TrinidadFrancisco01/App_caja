import { StyleSheet, Text, TextInput, View ,Image, Pressable  } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import { LinearGradient } from 'expo-linear-gradient';

export const Estadistica=()=>{
    const tableHead = ['Componentes', 'Estado'];
    const tableData = [
      ['Puerta', 'Cerrada'],
      ['Temperatura', '15C'],
      ['Camara', 'Activa'],
      ['Huella', 'Activa']
    ];

    const widthArr = [100, 100, 100, 100]; // Ajusta los anchos de las columnas aquí
    return(
        <LinearGradient
        colors={['#212F3C', '#515A5A']}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
            <Text style={styles.titulo}>Caja Fuerte</Text>
            <Text style={styles.textoCajas}>Estadisticas del dispositivo</Text>
            <Image source={require('../assets/caja.png')}
            style={styles.logo}></Image>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{ width: '90%' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} textStyle={styles.text} style={styles.data}/>
            </Table>
            <Boton></Boton>
            <Botonera></Botonera>
     
        </View>
        </LinearGradient>

    )
}
const Boton=()=>{
    return(
        <View  style={styles.botonera2}>
            <Pressable style={styles.botonVerde}>
                <Text style={styles.textoBoton}>Abrir Caja</Text>
            </Pressable>
            <Pressable style={styles.botonRojo}>
                <Text style={styles.textoBoton}>Cerar Caja</Text>
            </Pressable>
        </View>

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
        
      },
      innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#2ecc71',
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
      botonVerde: {
        width: '30%',
        height: 30,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      botonRojo: {
        width: '30%',
        height: 30,
        backgroundColor: '#922B21',
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
      botonera2: {
        textAlign:'center',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position:'absolute',
        bottom:'20%',
        left:2,
        right:2,
        height:'5%',
        margin:5
      },
      boton2:{
        width: '30%',
        height: 30,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      head: { height: 40,backgroundColor:'#2C3E50'},
      text: { margin: 6 ,color:'#f1f8ff',alignItems:'center',textAlign:'center'},
   

  })

  export default Estadistica