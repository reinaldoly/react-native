import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View>
            <StatusBar 
                //hidden
                backgroundColor="#CCC"
            />
            <BarraNavegacao />
            <View style={styles.logo}>
                <Image source={logo} />
            </View>
            <View style={styles.menu}>
                <View style={styles.menuGroup}>
                    <Image style={styles.imgMenu} source={menuCliente} />
                    <Image style={styles.imgMenu} source={menuContato} />
                </View>
                <View style={styles.menuGroup}>    
                    <Image style={styles.imgMenu} source={menuEmpresa} />
                    <Image style={styles.imgMenu} source={menuServico} />
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGroup: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});
