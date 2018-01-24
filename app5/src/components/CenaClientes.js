import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const Cliente1 = require('../imgs/cliente1.png');
const Cliente2 = require('../imgs/cliente2.png');


export default class CenaClientes extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar 
                //hidden
                backgroundColor="#CCC"
            />
            <BarraNavegacao />

            <View style={styles.cabecalho}>
                <Image source={detalheClientes} />
                <Text style={styles.txtTitulo}>Nossos Clientes</Text>
            </View>  
            <View style={styles.subTexto}>
                <Image source={Cliente1} />
                <Text style={styles.txtSub}>Lorem ipsum dolorem</Text>
            </View>
            <View style={styles.subTexto}>
                <Image source={Cliente2} />
                <Text style={styles.txtSub}>Lorem ipsum dolorem</Text>
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
        color: '#B9C941',
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
