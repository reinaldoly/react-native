//Import
import React from 'react';
import { Text, View, Image, TouchableOpacity, AppRegistry, Alert } from 'react-native';

//Formatações
const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    txtBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarFrases = () => {
    const numeroAleatorio = Math.floor(Math.random() * 5);

    //Frases
    var frases = Array();
    frases[0] = 'Pra cima deles';
    frases[1] = 'Salve maravilindo';
    frases[2] = 'Reginaldo nãaaoooo';
    frases[3] = 'SHow das ppkas';
    frases[4] = 'Aqui não';

    var fraseEscolhida = frases[numeroAleatorio];
    Alert.alert(fraseEscolhida);
};

//Criar o componente
const App = () => {
    const { principal, botao, txtBotao } = Estilos;
    return (
        <View style={principal}>
            <Image source={ require('./imagem/logo.png') } />
            <TouchableOpacity style={botao} onPress={gerarFrases}>
                <Text style={txtBotao}>Frases do dia</Text>
            </TouchableOpacity>    
        </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
