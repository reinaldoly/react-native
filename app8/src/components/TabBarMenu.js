import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StatusBar, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';

const adicionarContato = require('../imgs/adicionar-contato.png');

export default props => (
    <View style={styles.container}>
        <StatusBar backgroundColor='#114D44' />
        <View style={styles.group}>
            <View style={styles.txtBar}>
                <Text style={styles.title}>WhatsApp Clone</Text>
            </View>

            <View style={styles.adicionarSair}>
                <View style={styles.img}>
                    <TouchableHighlight
                    onPress={() => Actions.adicionarContato()}
                    underlayColor='#114D44'
                    >
                        <Image source={adicionarContato} />
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.txtOut}>Sair</Text>
                </View>
            </View>
        </View>

        <TabBar {...props} style={styles.tabBar} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#115E54',
        elevation: 4,
        marginBottom: 6
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtBar: {
        height: 50,
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        marginLeft: 20
    },
    tabBar: {
        backgroundColor: '#115E54',
        elevation: 0
    },
    adicionarSair: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    img: {
        width: 80,
        alignItems: 'center',
    },
    txtOut: {
        color: '#FFF',
        fontSize: 20,
    }
});
