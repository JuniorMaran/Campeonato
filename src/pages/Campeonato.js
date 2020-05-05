import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import api from '../service/get';

const Campeonato = (props) => {
    const { navigation } = props
    let { campeonato } = props.route.params

    const status = {
        'aguardando-resultados': 'Fase aguardando resultados',
        'andamento': 'Fase em andamento',
        'finalizado': 'Fase finalizada',
    };
    const goToFases = (item) => {
        if (item.status !== "aguardando-resultados") {
            const url = "https://api.api-futebol.com.br" + item._link
            api.get(url)
                .then((response) => {
                    navigation.navigate('Fases', { fase: response.data })
                })
        }
    }

    return (
        <View>
            <Text style={styles.campName}>
                {campeonato.nome}
            </Text>
            {
                campeonato.fases.length === 0 &&
                <Text style={styles.pag_404} >Campeonato não iniciado</Text>
            }
            <FlatList
                data={campeonato.fases}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => goToFases(item)}>
                        <View>
                            <View style={styles.container}>
                                <Text style={styles.textName}>
                                    {item.nome}
                                </Text>
                                <Text>{status[item.status]}</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    campName: {
        textAlign: "center",
        fontSize: 18,
        backgroundColor: '#004C8F',
        color: "#fff",
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
    },
    textName: {
        flex: 1,

    },
    pag_404: {
        padding: 30,
        fontSize: 18

    }

})
export default Campeonato;