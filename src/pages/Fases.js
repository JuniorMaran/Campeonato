import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const Fases = (props) => {
    let { fase } = props.route.params
    const [partidas] = useState(fase.chaves)

    const jogoVolta = (item) => {

        if (item.volta) {
            return (
                <View style={styles.containerVolta}>
                    <Text style={styles.stylePlacar}>
                        {item.volta[0].placar}
                    </Text>
                    <Text style={styles.styleRealizacao}>
                        {item.volta[0].data_realizacao} - {item.volta[0].hora_realizacao}
                    </Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.faseName}>
                {fase.nome}
            </Text>
            <ScrollView style={styles.ScrollView}>
            <FlatList
                data={Object.values(partidas)}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item }) => (
                    <View style={styles.containerIda}>
                        <Text style={styles.stylePlacar}>
                            {item.ida[0].placar}
                        </Text>
                        <Text style={styles.styleRealizacao}>
                            {item.ida[0].data_realizacao} - {item.ida[0].hora_realizacao}
                        </Text>
                        {jogoVolta(item)}
                    </View>
                )}
            />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 30
    },
    containerIda: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1
    },
    containerVolta: {
        paddingTop: 10
    },
    stylePlacar: {
        flex: 1,
        textAlign: "center",
        fontWeight: 'bold'
    },
    styleRealizacao:{
        flex: 1,
        textAlign: "center"
    },

    faseName:{
        textAlign: "center",
        fontSize: 18,
        backgroundColor: '#004C8F',
        color: "#fff",
        fontWeight: "bold"
    },
    ScrollView:{
        paddingBottom: 50
    }

})
export default Fases;

