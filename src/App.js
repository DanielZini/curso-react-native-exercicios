import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'

// Para importar um arquivo com vários componentes é necessário
// informar os componentes a serem importados através de chaves e
// separados por virgula. Chaves são utilizadas quando não se tem
// um componente default. A mesma não pode ser usada quando só há
// um componente default

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto='Flexível!' />
                <ParImpar numero={30} />
                <Inverter texto='React Native!' />
                <MegaSena numeros={6} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})