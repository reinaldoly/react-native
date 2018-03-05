import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

class formLogin extends Component {
    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            <Button color='#115E54' title='Acessar' onPress={() => this._autenticarUsuario()} />
        );
    }

    render() {
        return (
            <Image style={styles.bg} source={bg}>
                <View style={styles.container}>
                    <View style={styles.topo}>
                        <Text style={styles.topoTitle}>WahtsApp Clone</Text>
                    </View>
                    <View style={styles.form}>
                        <TextInput value={this.props.email} style={styles.formTetxtInput} placeholder='E-mail' placeholderTextColor='#FFF' onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry value={this.props.senha} style={styles.formTetxtInput} placeholder='Senha' placeholderTextColor='#FFF' onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style={styles.txtErro}>{this.props.erroLogin}</Text>
                        <TouchableHighlight
                            onPress={() => Actions.formCadastro()}
                        >
                            <Text style={styles.formText}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.btn}>
                        <View>
                            {this.renderBtnAcessar()}
                        </View>
                    </View>
                </View>
            </Image>
        );
    }
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null
    },
    container: {
        flex: 1,
        padding: 10
    },
    topo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topoTitle: {
        fontSize: 25,
        color: '#FFF'
    },
    form: {
        flex: 2
    },
    formTetxtInput: {
        fontSize: 20,
        height: 45
    },
    formText: {
        fontSize: 20,
        color: '#FFF'
    },
    txtErro: {
        color: '#FF0000',
        fontSize: 18
    },
    btn: {
        flex: 2
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);
