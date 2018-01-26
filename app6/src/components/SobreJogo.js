import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class SobreJogo extends Component {
    render() {
        return (
        <Text style={styles.txt}>
            Aqui podem ser apresentadas informações sobre o jogo.
        </Text>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        backgroundColor: '#61BD8C',
        fontSize: 18,
        padding: 10,
        color: '#FFF'
    }
});
