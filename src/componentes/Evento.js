import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {

        /**
         * como a chave do objeto criado e o nome do parâmetro são iguais, não preciso
         * dizer que texto recebe texto, como no exemplo abaixo:
         */
        // this.setState({ texto: texto })

        // posso simplesmente passar 'texto'
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}