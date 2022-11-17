import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Api from './Api';

const image = { uri: "https://i.pinimg.com/474x/18/f5/3c/18f53cfa9b65c7382c001efedbc43368.jpg" };


export default function Campinas() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Campinas')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  function limpar(){
    setDados("");
  } 
  return (
    <View style={styles.container}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>

      <View style={styles.header}>
        <Text style={styles.textoTitulo}>Previsão do Tempo para Campinas</Text>
                
    
     
      </View>
      <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />

      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>

      </View>
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo:{
    marginLeft: '10%',
    marginBottom: 20,
    color: '#FFF',
  },
  textoTitulo: {
    bottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
  },
  header: {
    margin: 40
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#fff'
  },
  btn: {
    width: 280,
    height: 45,
    backgroundColor: '#0294E8',
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
  },
  btnTexto: {
    fontSize: 24,
    color: '#FFF',
    top: 6

  },
});