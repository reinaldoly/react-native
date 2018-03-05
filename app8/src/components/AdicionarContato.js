import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

const AdicionarContato = props => (
    <View style={styles.container}>
        <View style={styles.campo}>
            <TextInput
                placeholder='E-mail'
                style={styles.txtInput}
                onChange={texto => props.modificaAdicionaContatoEmail(texto)}
                value={props.adiciona_contato_email}
            />
        </View>

        <View style={styles.btn}>
            <Button
                title='Adicionar'
                color='#115E54'
                onPress={() => props.adicionaContato(props.adiciona_contato_email)}
            />
            <Text style={styles.txtOut}>{props.cadastro_resultado_txt_erro}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    campo: {
        flex: 1,
        justifyContent: 'center',
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    btn: {
        flex: 1
    },
    txtOut: {
        color: '#F00',
        fontSize: 20,
    }
});

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adicionar_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
    }
);

export default connect(mapStateToProps, 
    { modificaAdicionaContatoEmail, adicionaContato }
)(AdicionarContato);
