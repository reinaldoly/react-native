//Import
import React, { Component } from 'react';
import { Text, View, Button, AppRegistry, StyleSheet } from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

//Component
class app3 extends Component {
    constructor(props) {
        super(props);

        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }

    jokenpo(escolhaUsuario) {
        //Gera numero aleatorio ( 0, 1, 2 )
        const numAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch (numAleatorio) {
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
            default: escolhaComputador = '';
        }

        let resultado = '';

        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'papel') {
                resultado = 'Você Ganhou';
            }
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você Ganhou';
            }
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você ganhou';
            }
            if (escolhaUsuario === 'papel') {
                resultado = 'Você perdeu';
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }

    render() {
        return (
            <View>
                <Topo />

                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title='pedra' onPress={() => { this.jokenpo('pedra'); }} />
                    </View>    
                    <View style={styles.btnEscolha}>
                        <Button title='papel' onPress={() => { this.jokenpo('papel'); }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title='tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
                    </View>    
                </View>

                <View style={styles.palco}>
                    <Text style={styles.txtResultado}> {this.state.resultado}</Text>
                    <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                    <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
                </View>
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    btnEscolha: {
        width: 90        
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
});

//Renderizar para o dispositivo
AppRegistry.registerComponent('app3', () => app3);
