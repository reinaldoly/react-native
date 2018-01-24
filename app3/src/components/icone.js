//Import
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
    render() {
        //Props
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={pedra} />
                </View>
            );
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={papel} />
                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={tesoura} />
                </View>
            );
        }
        return false;
    }
}

//Styles
const styles = StyleSheet.create({
    txtIcone: {
        alignItems: 'center',
        marginTop: 20
    },
    txtJogador: {
        fontSize: 16
    }
});

export default Icone;
