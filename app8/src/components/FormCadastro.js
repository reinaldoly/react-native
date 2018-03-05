import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaNome, 
    modificaEmail, 
    modificaSenha, 
    cadastraUsuario
} from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

class formCadastro extends Component {
    _cadastraUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            <Button color='#115E54' title='Cadastrar' onPress={() => this._cadastraUsuario()} />
        );
    }

    render() {
        return (
            <Image style={styles.bg} source={bg}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput value={this.props.nome} style={styles.txtInput} placeholder='Nome' placeholderTextColor='#FFF' onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput value={this.props.email} style={styles.txtInput} placeholder='E-mail' placeholderTextColor='#FFF' onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry value={this.props.senha} style={styles.txtInput} placeholder='Senha' placeholderTextColor='#FFF' onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style={styles.txtErro}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={styles.btn}>
                        {this.renderBtnCadastro()}
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
    form: {
        flex: 4,
        justifyContent: 'center'
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    txtErro: {
        color: '#FF0000',
        fontSize: 18
    },
    btn: {
        flex: 1
    }
});

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
);

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(formCadastro);
