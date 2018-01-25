import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    //hidden
                    backgroundColor="#19D1C8"
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#19D1C8" />

                <View style={styles.cabecalho}>
                    <Image source={detalheServicos} />
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>
                <View style={styles.subTexto}>
                    <Text style={styles.txtSub}>- Consultoria</Text>
                    <Text style={styles.txtSub}>- Processos</Text>
                    <Text style={styles.txtSub}>- Acompanhamento de projetos</Text>
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
        color: '#19D1C8',
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
