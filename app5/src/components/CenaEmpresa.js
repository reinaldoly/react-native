import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    //hidden
                    backgroundColor="#EC7148"
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#EC7148" />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>
                <View style={styles.subTexto}>
                    <Text style={styles.txtSub}>
                        A ATM consultoria está no mercado a mais de 20 anos...
                    </Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    subTexto: {
        padding: 20,
        marginTop: 10
    },
    txtSub: {
        fontSize: 18,
        marginLeft: 20
    }
});
