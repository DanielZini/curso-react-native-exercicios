import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(num){
    //exemplo solução 1 -----
    // if(num % 2 == 0){
    //     return <Text style={Padrao.ex}>Par</Text>
    // }else{
    //     return <Text style={Padrao.ex}>Impar</Text>
    // }

    //exemplo solução 2 ----
    const v = num % 2 == 0 ? 'Par' : 'Impar' //atrinuição de valor com condição
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props =>
    <View>
        {/* Passamdo valor com condição atraves de função --------- */}
        {/* {parOuImpar(props.numero)} */}

        {/* Passando valor com condição diretamente --------------- */}
        {/* {
            props.numero % 2 == 0 // expressão/operador ternario que retorna true ou false
            ? <Text style={Padrao.ex}>Par</Text> // true
            : <Text style={Padrao.ex}>Impar</Text> // false
        } */}

        {/* Condição como componente ------- */}
        {/* Componente If recebe valor boolean */}
        <If test={props.numero % 2 == 0}> 
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
    </View>