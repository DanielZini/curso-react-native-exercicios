export default props => {
    if(props.test){
        // Caso True retorna todos elementos filhos do componente If
        return props.children
    } else{
        return false
    }
}