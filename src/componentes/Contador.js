import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    // props ou propriedades servem para somente leitura
    // Objeto de estado ( state ) é utilizado para manipulação de dados
    state = {
        numero: this.props.numeroInicial
    }

    constructor(props){
        super(props)

        //Aponta o 'this' da função 'maisUm' sempre para a instância principal
        //Necessário caso utilizar função normal
        this.maisUm = this.maisUm.bind(this)
    }

    /**
    * Utilizando uma função normal, o 'this' apontará para a instância que o
    * chamar, no caso, para o componente 'TouchableHighlight'
    */
    maisUm(){
        // setState vem de herança a partir do Component
        this.setState({numero: this.state.numero + 1 })
    }

    /**
     * Utilizando função Arrow o 'this' aponta sempre
     * para a instância atual, mp caso, para classe 'Contador' * 
     */
    limpar = () => {
        // setState vem de herança a partir do Component
        this.setState({ numero: this.props.numeroInicial })
    }

    render(){
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>

                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>

{/* 
    Outra solução para a função comum é chamar uma função Arrow
    que execute a função principal
    <TouchableHighlight
        onPress={() => this.maisUm()}
        onLongPress={this.limpar}>
        <Text>Incrementar/Zerar</Text>
    </TouchableHighlight>
*/}
            </View>
        )
    }
}