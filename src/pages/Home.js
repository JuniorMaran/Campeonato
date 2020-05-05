import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import api from '../service/get';

const Home = ({ navigation }) => {
  const [campeonatos, setCampeonatos] = useState([])

  const getCampeonatos = () => {
    api.get()
        .then((retorno) => {
          setCampeonatos(retorno.data)
        })
        .catch((erro) => {
          console.log(erro)
        })
  }
 
  const goToCampeonato = (campeonato_id) => {
    const url = 'https://api.api-futebol.com.br/v1/campeonatos/' + campeonato_id

     api.get(url)
        .then((response) => {
           navigation.navigate('Campeonato', { campeonato: response.data })
         })
         .catch((erro) => {
           console.log(erro)
         })
    }

  useEffect(
    () => {
        getCampeonatos()
    }, []
  )

  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={item => item.campeonato_id}
        data={campeonatos}
        renderItem={({ item }) =>
            <TouchableOpacity onPress={() => goToCampeonato(item.campeonato_id)}>
              <Text style={styles.item}>
              {item.nome}
              </Text>
            </TouchableOpacity>
        }
      /> 

    </View>
    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  }, 
  item: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    marginLeft: "5%",
    marginTop: 5,
    padding: 3,
    textAlign: 'center'
  }, 
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: 200
  }, 
  containerFoto: {
    width: "100%",
    alignItems: "center"
  }
});