import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// Multiplos componentes requer um export com nome especifico ----
// Só pode existir um único componete exportado como default -----

const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for (let i = 0; i < numeros.length; i++){
        let novo = 0

        // enquanto novo numero gerado randomicamente for igual
        // a algum numero dentro da array numeros, continua gerando
        while (numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }

        numeros[i] = novo
    }

    // ordena array de forma crescente em forma de numero
    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

export default Inverter
export { Inverter, MegaSena }