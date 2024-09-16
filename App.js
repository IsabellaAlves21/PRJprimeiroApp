import react,{Component} from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text style={{
         color:'red',//cor
         fontSize:25,//tamanho
         margin:15,
         fontWeight:'bold',//Negrito
         fontStyle:'italic',//italico
         fontFamily:'Arial',//fonte
         textAlign:'center',//centralizar
         lineHeight:35,//define a altura
         letterSpacing:2,//espaçamento entre as letras,
         textDecorationLine:'underline',//sublinhado
         textDecorationStyle:'dotted',//estilo do sublinhado
         textTransform:'uppercase',//letra maiuscula
        }}>Aula de Mobile</Text>
        <Image source={{uri:'https://sujeitoprogramador.com/steve.png'}}
        style={{width:300, height:300, marginBottom:20}}></Image>

        <Image source={require('./assets/bill.jpg')}
        style={{width:300, height:300}}></Image>
      </View>
    );
  }
}
export default App;