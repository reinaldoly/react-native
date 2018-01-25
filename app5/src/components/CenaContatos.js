import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    //hidden
                    backgroundColor="#61BD8C"
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#61BD8C" />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalhesContatos}>
                    <Text style={styles.txtSub}>Tel: (00)000-0000</Text>
                    <Text style={styles.txtSub}>Cel: (00)000-0000</Text>
                    <Text style={styles.txtSub}>E-mail: reinaldo@email.com.br</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesContatos: {
        marginTop: 20,
        padding: 20
    },
    txtSub: {
        fontSize: 18
    }
});
