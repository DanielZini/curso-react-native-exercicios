import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// function normal ---------
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

//Arrow funtion --------
// export default props => {
//     return (
//         <Text>Arrow: {props.texto}</Text>
//     )
// }

//Arrow funtion com return implicito --------
export default props => 
    <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>

// Retornar dois elementos com função Arrow ------
// Cria-se um Array de elementos -----
// export default props => [
//     <Text key={1}>Arrow 1: {props.texto}</Text>,
//     <Text key={2}>Arrow 2: {props.texto}</Text>
// ]

// ou
// Coloca os elementos retornados dentro de uma View // encapsula os elementos
// export default props =>
//     <View>
//         <Text>Arrow 1: {props.texto}</Text>
//         <Text>Arrow 2: {props.texto}</Text>
//     </View>