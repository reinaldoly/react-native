import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const bg = require('../imgs/bg.png');

export default props => (
    <Image style={styles.bg} source={bg}>
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.title}>Seja Bem-Vindo</Text>
                <Image source={logo} />
            </View>
            <View style={styles.btn}>
                <Button title='Fazer Login' onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null
    },
    container: {
        flex: 1,
        padding: 15
    },
    topo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 15
    },
    btn: {
        flex: 1
    }
});
